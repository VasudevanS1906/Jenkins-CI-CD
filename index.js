const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This project is about setting up a CI/CD pipeline for a Node.js project using Jenkins ');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});