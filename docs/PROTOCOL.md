# Logitech G316 X 98 RGB protocol notes

These notes document behavior observed through interoperability testing on a physical G316 X 98 keyboard. They are intended to make the implementation reviewable and reproducible.

No Logitech firmware, proprietary binaries, confidential documentation, or decompiled proprietary source are included.

## Tested device

```text
Model: Logitech G316 X 98
VID:   0x046D
PID:   0xC36B
Layout tested: Turkish / ISO
```

## HID endpoints

### HID++ short reports

```text
Interface:   2
Usage:       0x0001
Usage Page:  0xFF00
Collection:  0x0001
Report size: 7 bytes
Report ID:   0x10
```

### HID++ long reports

```text
Interface:   2
Usage:       0x0002
Usage Page:  0xFF00
Collection:  0x0002
Report size: 20 bytes
Report ID:   0x11
```

## HID++ features observed

```text
0x8071 RGB_EFFECTS
runtime feature index: 0x07
observed version: 5

0x8081 PER_KEY_LIGHTING_V2
runtime feature index: 0x08
observed version: 0

0x8040 BRIGHTNESS_CONTROL
runtime feature index: 0x0F
observed version: 1
```

`0x8090 MODE_STATUS` was not supported on the tested unit.

## Software-control initialization

The tested keyboard enters working software RGB control with this sequence:

```text
1. short: 10 FF 07 3D 00 00 20
2. short: 10 FF 07 5D 00 00 00
3. short: 10 FF 07 5D 01 03 07
4. long feature 07 / function 7 payload:
   01 00 00 00 3C 01 2C 00
5. long feature 07 / function 7 payload:
   01 00 00 00 00 00 5A 00
6. short: 10 FF 07 5D 01 03 05
7. short: 10 FF 07 3D 00 00 01
8. wait ~100 ms
```

Some short handshake commands may produce no response while RGB control still works correctly on the tested hardware.

## Per-key RGB packets

The plugin uses PER_KEY_LIGHTING_V2 runtime feature index `0x08`, function 1 (`0x1D`).

Each LED record is:

```text
[LED_ID] [R] [G] [B]
```

The stable sender on the tested device uses up to three LED records per 20-byte HID++ long packet and then an explicit `0xFF` terminator.

A frame is committed with:

```text
11 FF 08 7D 00 00 00 00 ...
```

## Important packet-grouping quirk

The original LED array is processed in fixed groups of three.

The group containing:

```text
0x61
0x65
0x68
```

must be sent as individual one-LED packets while preserving the original group boundary for following LEDs.

During hardware testing, rebuilding/filtering the array before grouping caused regressions where Left Shift and Left Alt stopped updating. Sending this original group individually while leaving the later grouping unchanged produced stable behavior.

## Selected confirmed key IDs

```text
A               0x01
Z               0x1A
1               0x1B
0               0x24
Enter           0x25
Escape          0x26
Backspace       0x27
Tab             0x28
Space           0x29
Caps Lock       0x36
F1              0x37
F12             0x42
Delete          0x49
Arrow Right     0x4C
Arrow Left      0x4D
Arrow Down      0x4E
Arrow Up        0x4F
Numpad 9        0x5E
Numpad 0        0x5F
Numpad Decimal  0x60
ISO key         0x61
TR key above Right Shift 0x65
Left Ctrl       0x68
Left Shift      0x69
Left Alt        0x6A
```

The complete mapping is in `Logitech_G316_X_98.js`.

## 30-zone light bar

All 30 zones were experimentally confirmed as independently addressable through the same PER_KEY_LIGHTING_V2 mechanism.

Physical order from left to right:

```text
Zones 01-20: 0xA0 - 0xB3
Zones 21-30: 0xD4 - 0xDD
```

Orientation test confirmed:

```text
0xA0 = far-left zone
0xDD = far-right zone
```

An additional ID `0x9A` was observed during exploration but produced no visible output in the isolation test, so it is not used by the current plugin.

## SignalRGB canvas mapping

The keyboard canvas is currently:

```text
Size: [21, 6]
```

The 30 light-bar zones sample the top edge (`y = 0`) and are distributed across `x = 0...20` using:

```javascript
Math.round(zone * 20 / 29)
```

This allows horizontal effects to move across the light bar in the same left-to-right direction as the keyboard canvas.

## Known limitations

- Only one physical G316 X 98 unit has been fully validated so far.
- Only Turkish/ISO layout has been verified end-to-end.
- `0x9A` remains unidentified.
- Firmware-specific differences may exist.
