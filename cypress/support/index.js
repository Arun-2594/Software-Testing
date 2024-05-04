import 'cypress-axe';
const { startVideoRecording, stopVideoRecording } = require('cypress-video-recorder');
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    startVideoRecording(browser, launchOptions);
    return launchOptions;
  });
  on('after:browser:close', (browser, result) => {
    stopVideoRecording(browser, result);
  });
};