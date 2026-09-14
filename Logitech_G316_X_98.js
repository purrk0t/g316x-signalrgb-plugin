/*
 * Logitech G316 X 98 - SignalRGB Community Plugin
 * Version: 2.0.0
 *
 * Maintainer: purrk0t
 * Repository: https://github.com/purrk0t/g316x-signalrgb-plugin
 *
 * Copyright (c) 2026 purrk0t
 * SPDX-License-Identifier: MIT
 *
 * Unofficial community plugin.
 * Not affiliated with or endorsed by Logitech or SignalRGB.
 *
 * Device:
 * VID: 0x046D
 * PID: 0xC36B
 *
 * Features:
 * - Per-key RGB
 * - 30-zone RGB light bar
 * - SignalRGB canvas integration
 */

export function Name() {
    return "Logitech G316 X 98";
}

export function VendorId() {
    return 0x046D;
}

export function ProductId() {
    return 0xC36B;
}

export function Publisher() {
    return "purrk0t - github.com/purrk0t/g316x-signalrgb-plugin";
}

export function Type() {
    return "HID";
}

export function DeviceType() {
    return "keyboard";
}

export function Documentation() {
    return "";
}

export function Size() {
    return [21, 6];
}

export function DefaultPosition() {
    return [0, 0];
}

export function DefaultScale() {
    return 8.0;
}

export function ControllableParameters() {
    return [];
}


/*
 * =========================================================
 * LED NAMES
 * =========================================================
 */

const vLedNames = [

    // A-Z
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    // Number row
    "1","2","3","4","5","6","7","8","9","0",

    // Main block
    "Enter",
    "Escape",
    "Backspace",
    "Tab",
    "Space",
    "Minus",
    "Equal",
    "Left Bracket",
    "Right Bracket",
    "Backslash",
    "Semicolon",
    "Quote",
    "Grave",
    "Comma",
    "Period",
    "Slash",
    "Caps Lock",

    // F row
    "F1","F2","F3","F4","F5","F6",
    "F7","F8","F9","F10","F11","F12",

    // Navigation
    "Delete",
    "Arrow Right",
    "Arrow Left",
    "Arrow Down",
    "Arrow Up",

    // Numpad
    "Num Lock",
    "Numpad Divide",
    "Numpad Multiply",
    "Numpad Minus",
    "Numpad Plus",
    "Numpad Enter",
    "Numpad 1",
    "Numpad 2",
    "Numpad 3",
    "Numpad 4",
    "Numpad 5",
    "Numpad 6",
    "Numpad 7",
    "Numpad 8",
    "Numpad 9",
    "Numpad 0",
    "Numpad Decimal",

    // ISO / Turkish special keys
    "ISO Key Left Of Z",
    "Turkish Key Above Right Shift",

    // Modifiers
    "Left Ctrl",
    "Left Shift",
    "Left Alt",
    "Left Win",
    "Right Ctrl",
    "Right Shift",
    "Right Alt",
    "Fn"
];


/*
 * =========================================================
 * LED POSITIONS
 *
 * SignalRGB canvas coordinates
 * Size = 21 x 6
 * =========================================================
 */

const vLedPositions = [

    // A-Z
    [2,3],   // A
    [7,4],   // B
    [5,4],   // C
    [4,3],   // D
    [4,2],   // E
    [5,3],   // F
    [6,3],   // G
    [7,3],   // H
    [9,2],   // I
    [8,3],   // J
    [9,3],   // K
    [10,3],  // L
    [8,4],   // M
    [7,4],   // N
    [10,2],  // O
    [11,2],  // P
    [2,2],   // Q
    [5,2],   // R
    [3,3],   // S
    [6,2],   // T
    [8,2],   // U
    [6,4],   // V
    [3,2],   // W
    [4,4],   // X
    [7,2],   // Y
    [3,4],   // Z

    // Number row 1-0
    [2,1],
    [3,1],
    [4,1],
    [5,1],
    [6,1],
    [7,1],
    [8,1],
    [9,1],
    [10,1],
    [11,1],

    // Main block
    [14,3],  // Enter
    [0,0],   // Escape
    [14,1],  // Backspace
    [1,2],   // Tab
    [7,5],   // Space
    [12,1],  // Minus
    [13,1],  // Equal
    [12,2],  // Left bracket
    [13,2],  // Right bracket
    [13,3],  // Backslash
    [11,3],  // Semicolon
    [12,3],  // Quote
    [1,1],   // Grave
    [10,4],  // Comma
    [11,4],  // Period
    [12,4],  // Slash
    [1,3],   // Caps Lock

    // F1-F12
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0],
    [7,0],
    [8,0],
    [9,0],
    [10,0],
    [11,0],
    [12,0],
    [13,0],

    // Navigation
    [15,0],  // Delete
    [16,5],  // Right
    [14,5],  // Left
    [15,5],  // Down
    [15,4],  // Up

    // Numpad
    [17,1],  // Num Lock
    [18,1],  // /
    [19,1],  // *
    [20,1],  // -
    [20,2],  // +
    [20,4],  // Enter
    [17,4],  // 1
    [18,4],  // 2
    [19,4],  // 3
    [17,3],  // 4
    [18,3],  // 5
    [19,3],  // 6
    [17,2],  // 7
    [18,2],  // 8
    [19,2],  // 9
    [17,5],  // 0
    [19,5],  // Decimal

    // ISO / Turkish special
    [1,4],   // ISO key left of Z
    [13,4],  // Turkish key above Right Shift, confirmed ID 0x65

    // Modifiers
    [0,5],   // Left Ctrl
    [0,4],   // Left Shift
    [2,5],   // Left Alt
    [1,5],   // Left Win
    [13,5],  // Right Ctrl
    [14,4],  // Right Shift
    [11,5],  // Right Alt / AltGr
    [12,5]   // Fn
];


/*
 * =========================================================
 * LOGITECH KEY LED IDs
 *
 * PER_KEY_LIGHTING_V2
 * runtime feature index = 0x08
 * =========================================================
 */

const vLedIds = [

    // A-Z
    0x01,0x02,0x03,0x04,0x05,0x06,0x07,
    0x08,0x09,0x0A,0x0B,0x0C,0x0D,
    0x0E,0x0F,0x10,0x11,0x12,0x13,0x14,
    0x15,0x16,0x17,0x18,0x19,0x1A,

    // 1-0
    0x1B,0x1C,0x1D,0x1E,0x1F,
    0x20,0x21,0x22,0x23,0x24,

    // Main block
    0x25,  // Enter
    0x26,  // Escape
    0x27,  // Backspace
    0x28,  // Tab
    0x29,  // Space
    0x2A,
    0x2B,
    0x2C,
    0x2D,
    0x2E,

    // 0x2F intentionally not used.
    0x30,
    0x31,
    0x32,
    0x33,
    0x34,
    0x35,
    0x36,  // Caps Lock

    // F1-F12
    0x37,
    0x38,
    0x39,
    0x3A,
    0x3B,
    0x3C,
    0x3D,
    0x3E,
    0x3F,
    0x40,
    0x41,
    0x42,

    // Navigation
    0x49,  // Delete
    0x4C,  // Right
    0x4D,  // Left
    0x4E,  // Down
    0x4F,  // Up

    // Numpad
    0x50,
    0x51,
    0x52,
    0x53,
    0x54,
    0x55,
    0x56,
    0x57,
    0x58,
    0x59,
    0x5A,
    0x5B,
    0x5C,
    0x5D,
    0x5E,  // Numpad 9
    0x5F,  // Numpad 0
    0x60,  // Numpad Decimal

    // ISO / Turkish
    0x61,
    0x65,  // Turkish key above Right Shift - experimentally confirmed

    // Modifiers
    0x68,  // Left Ctrl
    0x69,  // Left Shift
    0x6A,  // Left Alt
    0x6B,  // Left Win
    0x6C,  // Right Ctrl
    0x6D,  // Right Shift
    0x6E,  // Right Alt / AltGr
    0x6F   // Fn
];


/*
 * =========================================================
 * RGB LIGHT BAR IDS
 *
 * 30 independently addressable zones.
 * Physical order confirmed experimentally:
 * LEFT -> RIGHT
 *
 * 0xA0 = far left
 * 0xDD = far right
 * =========================================================
 */

const vLightBarIds = [

    // Zones 1-20
    0xA0, 0xA1, 0xA2, 0xA3, 0xA4,
    0xA5, 0xA6, 0xA7, 0xA8, 0xA9,
    0xAA, 0xAB, 0xAC, 0xAD, 0xAE,
    0xAF, 0xB0, 0xB1, 0xB2, 0xB3,

    // Zones 21-30
    0xD4, 0xD5, 0xD6, 0xD7, 0xD8,
    0xD9, 0xDA, 0xDB, 0xDC, 0xDD
];


export function LedNames() {
    return vLedNames;
}

export function LedPositions() {
    return vLedPositions;
}


/*
 * =========================================================
 * INITIALIZATION
 * =========================================================
 */

export function Initialize() {

    device.log("=== G316 X V2 STABLE: KEYBOARD + LIGHT BAR ===");

    /*
     * RGB_EFFECTS
     * HID++ feature 0x8071
     * runtime index = 0x07
     *
     * PER_KEY_LIGHTING_V2
     * HID++ feature 0x8081
     * runtime index = 0x08
     */

    // Handshake 1
    sendShort(
        [
            0x10,
            0xFF,
            0x07,
            0x3D,
            0x00,
            0x00,
            0x20
        ],
        "RGB HANDSHAKE 1"
    );

    // Handshake 2
    sendShort(
        [
            0x10,
            0xFF,
            0x07,
            0x5D,
            0x00,
            0x00,
            0x00
        ],
        "RGB HANDSHAKE 2"
    );

    // Handshake 3
    sendShort(
        [
            0x10,
            0xFF,
            0x07,
            0x5D,
            0x01,
            0x03,
            0x07
        ],
        "RGB HANDSHAKE 3"
    );

    // Handshake 4
    var h4 = new Array(20).fill(0x00);

    h4[0] = 0x11;
    h4[1] = 0xFF;
    h4[2] = 0x07;
    h4[3] = 0x7D;

    h4[4]  = 0x01;
    h4[5]  = 0x00;
    h4[6]  = 0x00;
    h4[7]  = 0x00;
    h4[8]  = 0x3C;
    h4[9]  = 0x01;
    h4[10] = 0x2C;
    h4[11] = 0x00;

    sendLong(
        h4,
        "RGB HANDSHAKE 4"
    );

    // Handshake 5
    var h5 = new Array(20).fill(0x00);

    h5[0] = 0x11;
    h5[1] = 0xFF;
    h5[2] = 0x07;
    h5[3] = 0x7D;

    h5[4]  = 0x01;
    h5[5]  = 0x00;
    h5[6]  = 0x00;
    h5[7]  = 0x00;
    h5[8]  = 0x00;
    h5[9]  = 0x00;
    h5[10] = 0x5A;
    h5[11] = 0x00;

    sendLong(
        h5,
        "RGB HANDSHAKE 5"
    );

    // Handshake 6
    sendShort(
        [
            0x10,
            0xFF,
            0x07,
            0x5D,
            0x01,
            0x03,
            0x05
        ],
        "RGB HANDSHAKE 6"
    );

    // Handshake 7
    sendShort(
        [
            0x10,
            0xFF,
            0x07,
            0x3D,
            0x00,
            0x00,
            0x01
        ],
        "RGB HANDSHAKE 7"
    );

    // Allow keyboard to enter software RGB mode.
    device.pause(100);
}


/*
 * =========================================================
 * RENDER
 * =========================================================
 */

export function Render() {

    /*
     * -----------------------------------------------------
     * KEYBOARD
     * -----------------------------------------------------
     */

    var keyboardUpdates = [];

    for (var i = 0; i < vLedIds.length; i++) {

        var x = vLedPositions[i][0];
        var y = vLedPositions[i][1];

        var c = device.color(x, y);

        keyboardUpdates.push({
            id: vLedIds[i],
            r: c[0],
            g: c[1],
            b: c[2]
        });
    }

    /*
     * Keep the already tested keyboard sender unchanged.
     */
    sendPerKeyFrame(keyboardUpdates);


    /*
     * -----------------------------------------------------
     * 30-ZONE LIGHT BAR
     * -----------------------------------------------------
     *
     * Physical order:
     * LEFT -> RIGHT
     *
     * SignalRGB canvas width is x = 0 ... 20.
     * The 30 light-bar zones are distributed across that width.
     */

    var lightBarUpdates = [];

    for (var zone = 0; zone < vLightBarIds.length; zone++) {

        var lightX = Math.round(
            zone * 20 / 29
        );

        // Light bar follows the top edge of the SignalRGB canvas.
        var lightColor = device.color(
            lightX,
            0
        );

        lightBarUpdates.push({
            id: vLightBarIds[zone],
            r: lightColor[0],
            g: lightColor[1],
            b: lightColor[2]
        });
    }

    sendLightBarFrame(lightBarUpdates);
}


/*
 * =========================================================
 * SEND PER-KEY FRAME
 *
 * PER_KEY_LIGHTING_V2
 * function 1
 *
 * IMPORTANT:
 * The original groups of three must be preserved.
 * The group containing 0x61 / 0x65 / 0x68 is sent
 * as three individual packets. This is required for
 * the Turkish key above Right Shift and Left Ctrl to work,
 * while keeping Left Shift / Left Alt working as well.
 * =========================================================
 */

function sendPerKeyFrame(updates) {

    device.set_endpoint(
        2,
        0x0002,
        0xFF00,
        0x0002
    );

    // Always walk the original array in fixed groups of three.
    for (
        var offset = 0;
        offset < updates.length;
        offset += 3
    ) {

        var count = Math.min(
            3,
            updates.length - offset
        );

        /*
         * Detect the special original group.
         * Do not rebuild or filter the updates array because
         * that shifts all following group boundaries.
         */
        var specialGroup = false;

        for (
            var check = 0;
            check < count;
            check++
        ) {

            var checkId = updates[offset + check].id;

            if (
                checkId === 0x65 ||
                checkId === 0x68
            ) {
                specialGroup = true;
            }
        }

        /*
         * -------------------------------------------------
         * SPECIAL GROUP
         * -------------------------------------------------
         */
        if (specialGroup) {

            for (
                var s = 0;
                s < count;
                s++
            ) {

                var special = updates[offset + s];

                var specialPacket =
                    new Array(20).fill(0x00);

                specialPacket[0] = 0x11;
                specialPacket[1] = 0xFF;
                specialPacket[2] = 0x08;
                specialPacket[3] = 0x1D;

                // One LED per packet.
                specialPacket[4] = special.id;
                specialPacket[5] = special.r;
                specialPacket[6] = special.g;
                specialPacket[7] = special.b;

                // Explicit terminator.
                specialPacket[8]  = 0xFF;
                specialPacket[9]  = 0x00;
                specialPacket[10] = 0x00;
                specialPacket[11] = 0x00;

                device.write(
                    specialPacket,
                    20
                );

                device.pause(1);
            }

            // Keep the original grouping intact.
            continue;
        }

        /*
         * -------------------------------------------------
         * NORMAL GROUP
         * -------------------------------------------------
         */
        var packet =
            new Array(20).fill(0x00);

        packet[0] = 0x11;
        packet[1] = 0xFF;
        packet[2] = 0x08;
        packet[3] = 0x1D;

        for (
            var j = 0;
            j < count;
            j++
        ) {

            var u = updates[offset + j];
            var base = 4 + j * 4;

            packet[base]     = u.id;
            packet[base + 1] = u.r;
            packet[base + 2] = u.g;
            packet[base + 3] = u.b;
        }

        // Explicit end marker.
        var endBase = 4 + count * 4;

        packet[endBase]     = 0xFF;
        packet[endBase + 1] = 0x00;
        packet[endBase + 2] = 0x00;
        packet[endBase + 3] = 0x00;

        device.write(
            packet,
            20
        );

        device.pause(1);
    }

    /*
     * Commit complete keyboard frame.
     */
    var commit =
        new Array(20).fill(0x00);

    commit[0] = 0x11;
    commit[1] = 0xFF;
    commit[2] = 0x08;
    commit[3] = 0x7D;

    device.write(
        commit,
        20
    );
}


/*
 * =========================================================
 * SEND LIGHT BAR FRAME
 *
 * 30 zones
 * PER_KEY_LIGHTING_V2
 * function 1
 *
 * 3 zones per packet = exactly 10 HID++ packets.
 * =========================================================
 */

function sendLightBarFrame(updates) {

    device.set_endpoint(
        2,
        0x0002,
        0xFF00,
        0x0002
    );

    for (
        var offset = 0;
        offset < updates.length;
        offset += 3
    ) {

        var packet =
            new Array(20).fill(0x00);

        packet[0] = 0x11;
        packet[1] = 0xFF;
        packet[2] = 0x08;
        packet[3] = 0x1D;

        var count = Math.min(
            3,
            updates.length - offset
        );

        for (
            var i = 0;
            i < count;
            i++
        ) {

            var u = updates[offset + i];
            var base = 4 + i * 4;

            packet[base]     = u.id;
            packet[base + 1] = u.r;
            packet[base + 2] = u.g;
            packet[base + 3] = u.b;
        }

        // Explicit terminator.
        var endBase = 4 + count * 4;

        packet[endBase]     = 0xFF;
        packet[endBase + 1] = 0x00;
        packet[endBase + 2] = 0x00;
        packet[endBase + 3] = 0x00;

        device.write(
            packet,
            20
        );

        device.pause(1);
    }

    /*
     * Commit complete Light Bar frame.
     */
    var commit =
        new Array(20).fill(0x00);

    commit[0] = 0x11;
    commit[1] = 0xFF;
    commit[2] = 0x08;
    commit[3] = 0x7D;

    device.write(
        commit,
        20
    );
}


/*
 * =========================================================
 * SHORT HID++ COMMAND
 *
 * interface 2
 * usage 1
 * usage page FF00
 * collection 1
 * =========================================================
 */

function sendShort(packet, label) {

    device.set_endpoint(
        2,
        0x0001,
        0xFF00,
        0x0001
    );

    device.clearReadBuffer();

    device.log(
        "TX " + label + ": " +
        packet.map(
            function(x) {
                return x
                    .toString(16)
                    .padStart(2, "0");
            }
        ).join(" ")
    );

    device.write(
        packet,
        7
    );

    device.pause(25);

    var response =
        device.read(
            [0x10],
            7
        );

    if (
        device.getLastReadSize() > 0
    ) {

        device.log(
            "RX " + label + ": " +
            response.map(
                function(x) {
                    return x
                        .toString(16)
                        .padStart(2, "0");
                }
            ).join(" ")
        );

    } else {

        // Expected on this keyboard for some handshake packets.
        device.log(
            "RX " + label + ": NO RESPONSE"
        );
    }
}


/*
 * =========================================================
 * LONG HID++ COMMAND
 *
 * interface 2
 * usage 2
 * usage page FF00
 * collection 2
 * =========================================================
 */

function sendLong(packet, label) {

    device.set_endpoint(
        2,
        0x0002,
        0xFF00,
        0x0002
    );

    device.clearReadBuffer();

    device.log(
        "TX " + label + ": " +
        packet.map(
            function(x) {
                return x
                    .toString(16)
                    .padStart(2, "0");
            }
        ).join(" ")
    );

    device.write(
        packet,
        20
    );

    device.pause(25);

    var response =
        device.read(
            [0x11],
            20
        );

    if (
        device.getLastReadSize() > 0
    ) {

        device.log(
            "RX " + label + ": " +
            response.map(
                function(x) {
                    return x
                        .toString(16)
                        .padStart(2, "0");
                }
            ).join(" ")
        );

        // HID++ error packet.
        if (
            response[2] === 0xFF
        ) {

            device.log(
                "!!! HID++ ERROR PACKET: " +
                response.map(
                    function(x) {
                        return x
                            .toString(16)
                            .padStart(2, "0");
                    }
                ).join(" ")
            );
        }

    } else {

        device.log(
            "RX " + label + ": NO RESPONSE"
        );
    }
}


/*
 * =========================================================
 * SHUTDOWN
 * =========================================================
 */

export function Shutdown() {
}


/*
 * =========================================================
 * HID ENDPOINT SELECTION
 *
 * G316 X:
 * VID 046D
 * PID C36B
 *
 * Interface 2:
 * Usage 1 / Page FF00 / Collection 1
 * Usage 2 / Page FF00 / Collection 2
 * =========================================================
 */

export function Validate(endpoint) {

    return (
        endpoint.interface === 2 &&
        endpoint.usage_page === 0xFF00 &&
        (
            (
                endpoint.usage === 0x0001 &&
                endpoint.collection === 0x0001
            )
            ||
            (
                endpoint.usage === 0x0002 &&
                endpoint.collection === 0x0002
            )
        )
    );
}


/*
 * =========================================================
 * DEVICE IMAGE
 * =========================================================
 */

export function ImageUrl() {
    return "";
}
