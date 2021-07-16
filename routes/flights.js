import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export { router }

//show all /flights
router.get('/', flightsCtrl.index)

//Get localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

//POST /flights
router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTicket)
