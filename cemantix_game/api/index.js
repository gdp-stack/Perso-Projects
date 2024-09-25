
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/guess', router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
