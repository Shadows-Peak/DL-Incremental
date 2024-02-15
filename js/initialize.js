const express = require('express');
const { spawn } = require('child_process');
const app = express();

var clicks = 0

app.get('/runPythonTest1', (req, res) => {
  const python = spawn('python', ['../py/test1.py',1,2]);
  let result = '';

  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  python.on('close', (code) => {
    res.send(result);
  });
});

app.listen(3000, () => console.log('Server started'));