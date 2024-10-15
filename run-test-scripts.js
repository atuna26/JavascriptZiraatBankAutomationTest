const { exec } = require('child_process');

const date = new Date();
const timestamp = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

const command = `npx mocha test.js --reporter mochawesome --reporter-options reportDir=testReports/report_${timestamp},reportFilename=report_${timestamp}.html`;

const mochaProcess = exec(command);

mochaProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

mochaProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

mochaProcess.on('exit', (code) => {
  console.log(`Test süreci ${code} kodu ile sonlandı.`);
});
