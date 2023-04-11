const pool = require('../pool')

// Get all airports
const airports = (req, res) => {
  pool().query('SELECT * FROM airport', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// Get airport by id
const airport = (req, res) => {
  pool().query('SELECT * FROM airport WHERE airportcod = $1', [parseInt(req.params.airportcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).json(results.rows)
  })
}


// Get all flights
const flights = (req, res) => {
  pool().query('SELECT * FROM flight', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// Get flight by id
const flight = (req, res) => {
  pool().query('SELECT * FROM flight WHERE flightcod = $1', [parseInt(req.params.flightcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).json(results.rows)
  })
}
// Get all models
const models = (req, res) => {
  pool().query('SELECT * FROM model', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}
// Get model by id
const model = (req, res) => {
  pool().query('SELECT * FROM model WHERE modelcod = $1', [parseInt(req.params.modelcod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).json(results.rows)
  })
}
// Get all planes
const planes = (req, res) => {
  pool().query('SELECT * FROM plane', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}
// Get plane by id
const plane = (req, res) => {
  pool().query('SELECT * FROM plane WHERE planecod = $1', [parseInt(req.params.planecod)], (error, results) => {
    if (error) {
      res.status(500)
      throw error
    }
    res.status(200).json(results.rows)
  })
}

 
module.exports = {
  airports,
  airport,
  flights,
  flight,
  models,
  model,
  planes,
  plane
}
