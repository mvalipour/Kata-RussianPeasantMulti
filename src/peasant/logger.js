var verbose = process.argv.indexOf('--verbose') > -1;

module.exports = {
  verbose: function(m){ if(verbose) console.log(m); }
};
