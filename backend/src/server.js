/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style, no-unused-vars
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server running or port ${PORT}`));