//ECHO is on.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js on AWS Elastic Beanstalk!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
