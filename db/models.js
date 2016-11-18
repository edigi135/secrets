const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/secrets');

const SecretModel = db.define('secret', {
	text: sequelize.TEXT,
	allowNull: false
});

const CommentModel = db.define('comment', {
	text: sequelize.TEXT,
	allowNull: false
});


module.exports = {
    Secret: SecretModel,
    Comment: CommentModel
};