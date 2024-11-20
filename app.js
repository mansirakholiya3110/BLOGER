const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
const port = process.env.PORT;
const dbURL = process.env.MONGO_URL;

// Use blog routes
app.use('/', blogRoutes);

app.listen(port, () => {
  mongoose.connect(dbURL)
      .then(() => console.log(`DB connecter...!!`))
      .catch((err) => console.log(err));
  console.log(`server start..http://localhost:${port}`);
})
