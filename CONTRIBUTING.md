# Contributing

Contributions, hardware test reports, and bug reports are welcome.

## Most useful contribution right now

The plugin has been validated on one physical Turkish/ISO G316 X 98. Reports from owners of other regional layouts and firmware revisions are particularly useful.

Please include:

- exact keyboard model;
- regional layout (US ANSI, UK ISO, TR ISO, etc.);
- USB VID/PID;
- SignalRGB version;
- firmware version, if known;
- whether Logitech G HUB was running;
- which keys/zones fail;
- relevant SignalRGB console output;
- whether the 30-zone light bar works left-to-right.

## Code changes

1. Create a branch for one focused change.
2. Preserve the working HID++ initialization unless your change specifically addresses it.
3. Do not renumber the LED map without documenting hardware evidence.
4. Test static color and at least one moving horizontal effect.
5. If you change the packet sender, explicitly test:
   - Numpad `9`, `0`, decimal/comma;
   - Left Ctrl;
   - Left Shift;
   - Left Alt;
   - the key above Right Shift on ISO/TR layout;
   - all 30 light-bar zones.
6. Update `CHANGELOG.md` and `docs/PROTOCOL.md` when protocol behavior changes.

## Licensing of contributions

By submitting a contribution, you agree that your contribution may be distributed under the MIT License used by this repository.

Do not submit proprietary Logitech/SignalRGB binaries, firmware dumps, decompiled proprietary source, confidential documentation, private keys, wallet seed phrases, or credentials.
