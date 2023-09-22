
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+8:00',
    dialectOptions: {
        useUTC: false
    }
});

const History = sequelize.define('History', {
    photo: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
    result: {
        type: DataTypes.STRING
    }
});

module.exports = History;

