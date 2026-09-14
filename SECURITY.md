# Security Policy

## Reporting a security issue

If you discover a vulnerability in this plugin that could cause unintended device access, arbitrary file access, credential exposure, or another security-relevant problem, please do not post exploit details in a public issue before the maintainer has had a reasonable chance to review them.

Preferred channel: GitHub **private vulnerability reporting** on this repository (Security tab → Report a vulnerability). If that is unavailable, open a public issue that describes the impact only, without a working exploit, and say that details are available privately.

For ordinary lighting or detection bugs, use the public issue tracker normally.

## Never include secrets in issues

Do not post:

- wallet seed phrases / secret recovery phrases;
- private keys;
- exchange or API keys;
- passwords;
- session tokens;
- personally identifying logs that are not needed for debugging.

A public cryptocurrency receiving address is intentionally public; a private key or seed phrase is not, and no one from this project will ever ask you for one.

## Scope

This repository contains a single JavaScript device plugin executed by SignalRGB. It sends HID++ packets to one USB device and does not perform network access, file access, or telemetry. Reports about SignalRGB itself or about Logitech firmware should go to those vendors.
