const octo = require('octokit')

const octokit = new octo.Octokit({
  auth: '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'
});

module.exports = octokit

