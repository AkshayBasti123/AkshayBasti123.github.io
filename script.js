function checkInput() {
    let userInput = document.getElementById("userInput").value;
    let result = document.getElementById("result");

    // Simple attack patterns (basic SQL injection & XSS detection)
    let attackPatterns = [
        /<script.*?>.*?<\/script>/i, // Detects <script> tags
        /javascript:/i, // Detects javascript: URLs
        /onload=/i, /onerror=/i, // Detects event-based XSS
        /(union.*select|select.*from|insert.*into|drop.*table|delete.*from|update.*set)/i // SQL Injection
    ];

    let isMalicious = attackPatterns.some(pattern => pattern.test(userInput));

    if (isMalicious) {
        result.innerHTML = "🚨 Blocked: Malicious input detected!";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Safe input.";
        result.style.color = "green";
    }
}
