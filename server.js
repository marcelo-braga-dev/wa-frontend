const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
});