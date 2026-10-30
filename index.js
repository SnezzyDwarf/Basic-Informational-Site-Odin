const express = require("express");
const path = require("node:path");

const index = express();

const port = process.env.PORT || 8080;

index.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

index.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

index.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

index.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

index.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running at http://localhost:${port}`);
});
