import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

export { 
  newFlight as new,
  index, 
  create,
  show,
  createTicket,
  deleteFlight as delete,
  addToDestinations
  }

  function addToDestinations (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body.destinationId) ///from the inport form
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

  function deleteFlight (req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
      res.redirect('/flights')
      console.log(req.params.id)
    })
  }

  function createTicket (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  // function show(req, res) {
  //   //finding flight
  //   Flight.findById(req.params.id, function(err,flight) {
  //     res.render('flights/show', {
  //       title: 'Flight Details',
  //       flight: flight,
  //     })
  //   })
  // }

  function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations').exec(function(err, flight) {
      Destination.find({_id: {$nin: flight.destination}}, function(err, destinations) {
        res.render('flights/show', {
          title: 'Flight Details', 
          flight: flight,
          destinations: destinations
        })
      })
    })
  }

function create(req, res) {
  console.log(req.body)
  //accept a flightNo between 10 and 9999

  //airline cant accept n/a

  // date agrees with the typeof data we are looking for?
  // req.body.departs = new Date().toLocaleDateString()
  req.body.departs = new Date().toISOString().slice(0, 16)

  // Create a flight using mongoose
  const flight = new Flight(req.body)
  flight.save(function (err) {
    if (err) return res.redirect('/flights/new')
    // Redirect back to flights create page (/flights/new)
    res.redirect('/flights')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add New Flight',
  })
  // res.redirect('/flights/index')
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    //this is where we call flights from db or model?
    res.render('flights/index', {
      title: 'Flights',
      flights: flights,
      time: req.time,
      date: req.date,
    })
  })
}
