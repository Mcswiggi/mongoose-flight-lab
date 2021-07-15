import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}

//show all /flights
router.get('/', flightsCtrl.index)

//Get localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

//POST /flights
router.post('/', flightsCtrl.create)