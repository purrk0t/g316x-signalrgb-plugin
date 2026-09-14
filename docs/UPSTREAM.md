# Preparing an upstream SignalRGB submission

The long-term goal is to have native support included in SignalRGB so users do not need to sideload the plugin.

## Current public upstream

SignalRGB's public third-party HID plugin repository:

https://gitlab.com/signalrgb/signal-plugins

Development branch:

https://gitlab.com/signalrgb/signal-plugins/-/tree/Development

At the time this repository was prepared, that tree contains a `Plugins/Logitech` area and active device-specific development branches.

## Recommended submission process

1. Keep this GitHub repository as the public community/testing home.
2. Collect independent hardware confirmations from additional G316 X owners.
3. Fork `signalrgb/signal-plugins` on GitLab.
4. Read the current upstream README, contribution rules, CI/lint configuration, licensing terms, and any CLA/DCO requirements before submitting.
5. Create a focused branch for the G316 X 98 support.
6. Adapt the plugin to upstream naming/style requirements without changing verified protocol behavior unnecessarily.
7. Put the device plugin in the location requested by the current upstream tree (likely the Logitech plugin area, subject to maintainer guidance).
8. Run upstream lint/tests if available.
9. Open a merge request against the branch requested by the maintainers, currently expected to be `Development`.
10. In the merge request description include:
    - model name;
    - VID/PID;
    - tested layout/firmware;
    - per-key RGB status;
    - 30-zone light-bar status;
    - HID++ feature indices;
    - link to this repository's protocol notes;
    - links to independent hardware test reports.

## Keep the upstream submission clean

Do not put cryptocurrency addresses, donation requests, referral links, or promotional content in the plugin file submitted upstream unless SignalRGB explicitly asks/allows it.

Keep optional funding information in this community repository instead.

## Suggested merge-request summary

```text
Add Logitech G316 X 98 (VID 046D / PID C36B) RGB support.

Tested features:
- per-key RGB
- 30-zone light bar
- numpad
- ISO/TR layout
- SignalRGB canvas effects

Protocol:
- HID++ 0x8071 RGB_EFFECTS -> runtime index 0x07
- HID++ 0x8081 PER_KEY_LIGHTING_V2 -> runtime index 0x08

The implementation has been validated on physical hardware. Additional
layout/firmware confirmations are linked in the community repository.
```
