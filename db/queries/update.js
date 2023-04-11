const pool = require('../pool')

// Update flight by id
const flight = (req, res) => {
  const { flightcod, departuretime, arrivaltime, departureairportcod, arrivalairportcod, planecod } = req.body
  const id = parseInt(req.params.id)

  pool().query(
    'UPDATE flight SET flightcod = $1, departuretime = $2, arrivaltime = $3, departureairportcod = $4, arrivalairportcod = $5, planecod = $6 WHERE id = $7',
    [flightcod, departuretime, arrivaltime, departureairportcod, arrivalairportcod, planecod, id],
    (error, results) => {
      if (error) {
        res.status(500)
        throw error
      }
      res.status(200).send(`Flight modified with ID: ${id}`)
    }
  )
}

// Update plane by id
const plane = (req, res) => {
  const { planecod, modelcod } = req.body
  const id = parseInt(req.params.id)

  pool().query(
    'UPDATE plane SET planecod = $1, modelcod = $2 WHERE id = $3',
    [planecod, modelcod, id],
    (error, results) => {
      if (error) {
        res.status(500)
        throw error
      }
      res.status(200).send(`Plane modified with ID: ${id}`)
    }
  )
}

module.exports = {
  flight,
  plane
}