import { Flight } from '../models/flight.js'

export{
    newFlight as new,
}

function newFlight(res, req) {
    res.render('flights/new')
}