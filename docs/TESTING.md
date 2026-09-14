# Hardware test plan

Use this checklist before marking a release stable on a new layout/firmware.

## Environment

Record:

```text
Keyboard model:
Layout:
VID/PID:
Firmware:
SignalRGB version:
Windows version:
Connection mode:
G HUB running: yes/no
```

## Static-color test

Set a solid green effect and verify:

- [ ] A-Z
- [ ] number row 1-0
- [ ] punctuation/main block
- [ ] F1-F12
- [ ] Delete
- [ ] arrow keys
- [ ] full numpad
- [ ] Numpad 9
- [ ] Numpad 0
- [ ] Numpad decimal/comma
- [ ] Left Ctrl
- [ ] Left Shift
- [ ] Left Alt
- [ ] Left Win
- [ ] right-side modifiers
- [ ] ISO key left of Z, if present
- [ ] key above Right Shift, if present
- [ ] all 30 light-bar zones

## Dynamic test

Run a horizontal moving rainbow/wave:

- [ ] key colors update smoothly
- [ ] light bar updates smoothly
- [ ] light bar direction is left-to-right
- [ ] no zones freeze after several minutes
- [ ] no key stops updating after effect changes

## Regression test

Pay special attention to the historical regressions:

- [ ] Numpad 9 / 0 / decimal remain lit
- [ ] Left Ctrl remains lit
- [ ] Left Shift remains lit
- [ ] Left Alt remains lit
- [ ] Turkish/ISO key above Right Shift remains lit

Attach results to a Hardware Test issue.
