# Installation and troubleshooting

**English** | [Türkçe](INSTALLATION_TR.md)

## Recommended installation

SignalRGB supports sideloading/overriding device plugins through its custom plugins folder. The easiest route is:

1. Open SignalRGB.
2. Open the G316 X device information page.
3. Click the **Plugins** button to open the custom plugin directory.
4. Copy `Logitech_G316_X_98.js` into that directory.
5. Remove/rename any older experimental G316 X plugin that matches the same VID/PID.
6. Restart SignalRGB.

SignalRGB's current documentation for replacing/sideloading plugin files is:

https://docs.signalrgb.com/troubleshooting/advanced-troubleshooting/replacing-plugin/

## First test

Use a solid static color first.

Confirm that all of these illuminate:

- all letter keys;
- number row;
- F1-F12;
- navigation/arrows;
- entire numpad;
- Left Ctrl / Left Shift / Left Alt;
- ISO/Turkish special keys if present;
- the entire RGB light bar.

Then test a moving horizontal effect to verify the light bar runs left-to-right.

## If the device does not appear

Check:

- USB VID is `0x046D`;
- USB PID is `0xC36B`;
- the file extension is really `.js` and not `.js.txt`;
- only one plugin claiming this VID/PID is active;
- SignalRGB was restarted after changing the plugin;
- the keyboard is connected by the mode used during testing.

## If lighting is partially wrong

Do not immediately change LED IDs. Capture:

- keyboard layout;
- firmware version;
- failing key names;
- SignalRGB console logs;
- a clear photo showing the failure.

Then open an issue.
