async () => {
  const { spawn } = await import('child_process');
}

var clicks = 0

// Run a Python script and return output
export async function runPythonScript(scriptPath, args) {

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