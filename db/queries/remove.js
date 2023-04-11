const Pool = require('../pool');

// Delete airport by id
const flight = (req, res) => {
Pool().query('DELETE FROM flight WHERE flightcod = $1', [parseInt(req.params.flightcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).send(`Flight deleted with flightcod: ${req.params.flightcod}`)
  })
}

// Delete plane by id
const plane = (req, res) => {
  const planecod = parseInt(req.params.planecod);
  pool().query('DELETE FROM plane WHERE planecod = $1', [planecod], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Plane ${planecod} deleted successfully.`)
  })
}



module.exports = {
  flight,
  plane,
}