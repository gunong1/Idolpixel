const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server");

    const pixelData = {
        x: 100,
        y: 100,
        color: '#ff0000',
        idol_group_name: 'TEST_GROUP',
        owner_nickname: 'TEST_USER'
    };

    console.log("Emitting new_pixel...");
    socket.emit("new_pixel", pixelData);
});

socket.on("pixel_update", (data) => {
    console.log("Success! Received pixel_update:", data);
    process.exit(0);
});

socket.on("connect_error", (err) => {
    console.error("Connection error:", err);
    process.exit(1);
});

// Timeout
setTimeout(() => {
    console.log("Timeout waiting for response.");
    process.exit(1);
}, 5000);
