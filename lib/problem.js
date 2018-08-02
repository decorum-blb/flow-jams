const path = require('path');
const verify = require('./verify');

module.exports = function createProblem(dirname) {
  let exports = {};

  let problemName = dirname.split(path.sep);
  let i18n;

  problemName = problemName[problemName.length - 1];

  exports.init = function (workshopper) {
    i18n = workshopper.i18n;
    const postfix = workshopper.i18n.lang() === 'en' ? '' : '_' + workshopper.i18n.lang();
    this.problem = {file: path.join(dirname, 'problem' + postfix + '.md')};
    this.solution = {file: path.join(dirname, 'solution' + postfix + '.md')};
    this.solutionPath = path.resolve(__dirname, '..', 'solutions', problemName, "index.js");
    this.troubleshootingPath = path.join(__dirname, '..', 'i18n', 'troubleshooting' + postfix + '.md');
  };

  exports.verify = verify(args, cb);

  exports.run = function (args) {
    require(path.resolve(process.cwd(), args[0]));
  };

  return exports;
};
