const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "containers-us-west-13.railway.app",
  password: "StGYj0nP586wbdghj8dD",
  database: "airplanes",
  port: 6684
})       

module.exports = () => pool