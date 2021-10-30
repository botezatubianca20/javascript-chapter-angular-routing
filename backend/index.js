const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser')

const satellites = require("./routes/satellites");
const equipments = require("./routes/equipments");
const login = require("./routes/login");

const server = http.createServer(app);
const port = 3000;

app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:4201'],
  credentials: true,
}));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept, Authorization');
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

app.use("/api/satellites", satellites);
app.use("/api/equipments", equipments);
app.use("/api/login", login);