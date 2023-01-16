const Team = require('../Models/Team')

const team = {}

team.getTeam = async (req, res, next) => {
    try {
        const team = await Team.find()
        res.status(200).json({
            success: true,
            data: team,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = team
