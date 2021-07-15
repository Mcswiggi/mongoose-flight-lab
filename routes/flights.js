import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })

//Get localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

export {
  router
}
