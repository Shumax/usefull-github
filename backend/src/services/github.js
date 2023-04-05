const octo = require('octokit')

const octokit = new octo.Octokit({
  auth: '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'
})

async function listAllUsers(number, offset) {
  return await octokit.request(`GET /users?since=${number}&per_page=${offset}`, {
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

async function getPublicRepos(name, page, offset) {
  return await octokit.request(`GET /users/${name}/repos?page=${page}&per_page=${offset}`, {
    username: name,
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

