const octoService = require('../../services/github')

module.exports = async function paginator(req, res) {
  const { since, limit } = req.query

  try {

    const data = await octoService.listAllUsers(since, limit)

    return res.status(202).send(data)

  } catch (err) {
    return res.status(400).json({ message: err })
  }

}