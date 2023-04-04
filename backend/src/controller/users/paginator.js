const octoConfig = require('../../services/config')

module.exports = async function paginator(req, res) {
  const data = await octoConfig.request('GET /users?per_page=1&since=0', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res.send(data.data)
}