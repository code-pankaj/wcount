#!/usr/bin/env node

const fs = require('fs');

const filepath = process.argv[2];

if (!filepath) {
    console.error("Usage: wcount <filepath>");
    process.exit(1);
}

try {
    const fileText = fs.readFileSync(filepath, "utf8");
    const words = fileText.match(/\b\w+\b/g); // Matches words properly
    console.log("Total words:", words ? words.length : 0);
} catch (error) {
    console.error("Error reading file:", error.message);
    process.exit(1);
}
