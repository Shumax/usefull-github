const octoService = require('../../services/github')

module.exports = async function paginator(req, res) {
  const { since } = req.query

  try {
    
    console.log(since)

    const data = await octoService.listAllUsers(since)

    return res.status(202).send(data)

  } catch (err) {
    return res.status(400).json({ message: err })
  }

}