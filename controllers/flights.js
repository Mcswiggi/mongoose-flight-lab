import { Flight } from '../models/flight.js'

export{
    newFlight as new,
    index,
    create
}

function create(req, res) {
    //accept a flightNo between 10 and 9999
    
    //airline cant accept n/a

    // date agrees with the typeof data we are looking for?
    console.log(typeof req.date) //string... why am i not displaying the string?
    // Create a flight using mongoose
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    // Redirect back to movie create page (/movies/new)
    res.redirect('/flights')
    })
}

function newFlight(req, res) {
    res.render('flights/new')
    // res.redirect('/flights/index')
}

function index(req, res) {
    Flight.find({}, function(error, flights) {  //this is where we call flights from db or model?
        res.render('flights/index', {
            flights: flights,
            time: req.time,
            date: req.date
        })
    })
}