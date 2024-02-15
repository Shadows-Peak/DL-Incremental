var clicks = 0

const { spawn } = require('child_process');

// Run a Python script and return output
global.runPythonScript = function(scriptPath, args) {

  // Use child_process.spawn method from 
  // child_process module and assign it to variable
  const pyProg = spawn('python', [scriptPath].concat(args));

  // Collect data from script and return it
  let data = '';
  pyProg.stdout.on('data', (stdout) => {
    data += stdout.toString();
  });

  // Print errors to console, if any
  pyProg.stderr.on('data', (stderr) => {
    console.log(`stderr: ${stderr}`);
  });

  // When script is finished, return collected data
  return new Promise((resolve, reject) => {
    pyProg.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      resolve(data);
    });
  });
}

