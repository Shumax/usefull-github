const octoService = require('../../services/github')

module.exports = async function repos(req, res) {
  const { username } = req.params
  let { pg, limit } = req.query

  try {
    
    pg == 0 ? pg = 1 : pg++

    const data = await octoService.getPublicRepos(username,pg,limit)

    return res.status(202).send(data)

  } catch (err) {
    return res.status(400).json({ message: err })
  }
}