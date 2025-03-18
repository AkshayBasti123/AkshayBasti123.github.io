function checkInput() {
    const userInput = document.getElementById("userInput").value;
    const messageBox = document.getElementById("message");

    // List of malicious patterns (basic examples)
    const maliciousPatterns = [
        "<script>", "alert(", "onerror=", "javascript:",
        "' OR 1=1 --", "DROP TABLE", "SELECT * FROM"
    ];

    // Check if input contains malicious text
    let isMalicious = maliciousPatterns.some(pattern => userInput.toLowerCase().includes(pattern.toLowerCase()));

    if (isMalicious) {
        messageBox.innerHTML = "⚠️ Malicious input detected!";
        messageBox.className = "malicious";
    } else {
        messageBox.innerHTML = "✅ Input is safe.";
        messageBox.className = "safe";
    }
}
