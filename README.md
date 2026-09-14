[English](README.md) | [Türkçe](README_TR.md)

# G316 X 98 community plugin for SignalRGB

Unofficial community plugin adding SignalRGB control for the Logitech G316 X 98 keyboard.

> **Project support:** this plugin is free and open source. The author explicitly welcomes optional tips from users who found it useful. See [SUPPORT.md](SUPPORT.md) for the canonical support options. Payment is never required to use the plugin.

> **Status:** tested on one physical G316 X 98 unit with Turkish/ISO layout, USB VID `0x046D`, PID `0xC36B`.

## Features

- Per-key RGB control
- 30-zone RGB light bar
- SignalRGB canvas effects
- Numpad RGB support
- Turkish / ISO layout mapping tested
- HID++ software-control initialization
- Confirmed left-to-right light-bar mapping

## Compatibility

| Item | Tested value |
|---|---|
| Device | Logitech G316 X 98 |
| USB VID | `0x046D` |
| USB PID | `0xC36B` |
| OS | Windows 11 |
| SignalRGB | 2.5.x |
| Layout | Turkish / ISO |

Other firmware revisions and regional layouts may require additional testing. If your device has the same VID/PID but behaves differently, please open an issue and include the requested hardware information.

## Installation

1. Download `Logitech_G316_X_98.js` from the latest release.
2. In SignalRGB, open the device information page and use the **Plugins** button to open the custom plugins folder. SignalRGB documents this as the supported way to sideload/override a plugin.
3. Place `Logitech_G316_X_98.js` in that folder.
4. Make sure another G316 X plugin is not present at the same time.
5. Close Logitech G HUB while testing if it is trying to control the same device lighting.
6. Restart SignalRGB.
7. Confirm that `Logitech G316 X 98` appears and test a simple static color first.

See [docs/INSTALLATION.md](docs/INSTALLATION.md) for troubleshooting.

## What is confirmed

The current plugin controls both the keyboard matrix and the 30-zone light bar. The light bar is addressed left-to-right as:

```text
0xA0 ... 0xB3, 0xD4 ... 0xDD
```

`0xA0` is the far-left zone and `0xDD` is the far-right zone.

A device-specific packet-grouping quirk is also handled for the group containing LED IDs `0x61`, `0x65`, and `0x68`. See [docs/PROTOCOL.md](docs/PROTOCOL.md).

## Testing and bug reports

Before reporting a problem, please test:

- a solid static color;
- a horizontal rainbow/wave;
- the full numpad, especially `9`, `0`, and decimal/comma;
- Left Ctrl, Left Shift, Left Alt;
- the ISO/Turkish key above Right Shift;
- the full RGB light bar from left to right.

Use the GitHub issue templates and include your keyboard layout, VID/PID, SignalRGB version, firmware version if known, and relevant console output.

## Protocol research

The protocol notes in this repository were derived through interoperability testing on hardware owned by the project author. No Logitech firmware, proprietary binaries, or confidential documentation are included.

See [docs/PROTOCOL.md](docs/PROTOCOL.md) for the currently known HID++ details.

## Contributing

Hardware test reports from other G316 X owners are especially valuable because the current release has been validated on one physical Turkish/ISO unit.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Upstreaming to SignalRGB

The goal of this repository is not only to provide a sideloadable community plugin, but also to make the implementation easy for SignalRGB maintainers to review and integrate.

SignalRGB maintains its public third-party HID plugin repository on GitLab:

- https://gitlab.com/signalrgb/signal-plugins
- Development branch: https://gitlab.com/signalrgb/signal-plugins/-/tree/Development

The upstream submission checklist is in [docs/UPSTREAM.md](docs/UPSTREAM.md).

## Support the project

The plugin is free and open source. **If it helped you, the author explicitly welcomes optional tips** to support further testing and development.

Canonical funding/tip information: [SUPPORT.md](SUPPORT.md). The currently documented options are **USDC on Base (recommended)** and **ETH on Ethereum Mainnet (alternative)**.

Donations are optional and do not purchase the software, warranty, support entitlement, or additional functionality. Always verify the selected network before sending.

## License

MIT License. See [LICENSE](LICENSE).

## Disclaimer

This is an independent community project. It is not affiliated with, sponsored by, or endorsed by Logitech or SignalRGB. Use at your own risk. RGB/HID behavior may vary by firmware revision and regional layout.

## Trademarks

Logitech, Logi, and their logos are trademarks or registered trademarks of Logitech Europe S.A. and/or its affiliates in the United States and/or other countries.

SignalRGB and related marks are the property of their respective owners. Product and company names are used only to describe compatibility.

---

Maintainer: [@purrk0t](https://github.com/purrk0t)
