const cron = require('node-cron');
const { spawn } = require('child_process');

// This will run the script every 15 minutes
cron.schedule('*/15 * * * *', () => {
  const scriptPath = './scrape.py';
  const child = spawn('python', [scriptPath]);

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
