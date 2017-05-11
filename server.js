const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bp = require('body-parser');
const PORT = process.env.PORT || 3333;


app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
  db.sequelize.sync({force: true});
});