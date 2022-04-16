const db = require('../database/models');
const {Op} = require('sequelize')
module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
        .then(genres => {
            res.render('genresList',{
                genres
            })
        })
        
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
        })
        /* db.User.findOne({
            where: {
                email: req.body.email
            }
        }) */
    }
}