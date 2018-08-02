const compare = require('./compare-solution');
const getFile = require('./get-file');

module.exports = function (args, cb) {

  const attemptPath = path.resolve(process.cwd(), args[0]);
  compare(this.solutionPath, attemptPath, i18n, function (match, obj) {

    if (match) {
      return cb(true);
    }

    if (!obj) {
      // An error occured, we've already printed an error
      return;
    }

    let message = getFile(this.troubleshootingPath);

    message = message.replace(/%solution%/g, obj.solution);
    message = message.replace(/%attempt%/g, obj.attempt);
    message = message.replace(/%diff%/g, obj.diff);
    message = message.replace(/%filename%/g, args[0]);

    exports.fail = [
      {text: message, type: 'md'},
      require('./footer.js')
    ];

    cb(false);

  }.bind(this));
};