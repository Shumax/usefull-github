const octo = require('octokit')

const octokit = new octo.Octokit({
  auth: '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'
})

async function listAllUsers(number) {
  return await octokit.request(`GET /users?since=${number}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

async function getOneUser(name) {
  return await octokit.request(`GET /users/${name}`, {
    username: name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

async function getPublicRepos(name) {
  return await octokit.request(`GET /users/${name}/repos`, {
    username: 'USERNAME',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}


module.exports = {
  listAllUsers,
  getOneUser,
  getPublicRepos
}

