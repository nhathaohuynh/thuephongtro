import * as priceController from '../controllers/price'
import express from 'express'

const Router = express.Router() ;

Router.route('/').get(priceController.getPriceController);
export default Router