# Changelog

All notable changes to this project will be documented here.

## [2.0.0] - 2026-09-14

First public stable release candidate.

### Added

- Logitech G316 X 98 detection (`VID 0x046D`, `PID 0xC36B`).
- HID++ software RGB control initialization.
- Per-key RGB control.
- SignalRGB canvas integration.
- 30-zone RGB light-bar control.
- Confirmed left-to-right light-bar mapping.
- Turkish / ISO layout mapping tested on physical hardware.

### Fixed during hardware testing

- Numpad `9`, `0`, and decimal/comma lighting.
- Left Ctrl lighting.
- Left Shift lighting.
- Left Alt lighting.
- Turkish key above Right Shift (`LED ID 0x65`).
- Packet grouping required by the tested device.
