const octoService = require('../../services/github')

module.exports = async function detail(req, res) {
  const { username } = req.params

  try {
    
    const data = await octoService.getOneUser(username)

    return res.status(202).send(data)

  } catch (err) {
    return res.status(400).json({ message: err })
  }
}

