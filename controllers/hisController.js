const fs = require('fs');
const History = require('../models/history');

module.exports = {
    addhis: async (req, res, next)=> {
    try {
      const { filePath } = req.body;

      const photoData = fs.readFileSync(filePath);
      const base64Data = photoData.toString('base64');
      const bufferData = Buffer.from(base64Data, 'base64');

      await History.create({ photo: bufferData });
      return res.json({ status: '200', message: '成功' });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error inserting photo');
      return next();
    }
  }
}
