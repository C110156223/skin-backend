const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 引入 Models
const User = require('./models/user');
const History = require('./models/history');

// 引入 Controllers
const userController = require('./controllers/userController');
const historyController = require('./controllers/hisController');

app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/pic', historyController.addhis);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
