const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD pipeline automation! The app is running perfectly.' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK', version: '1.0.0' });
});

// Start the server only if we aren't running tests
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
