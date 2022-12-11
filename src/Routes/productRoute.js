import express from 'express'
import {getProduct, addProduct, updateProduct, deleteProduct} from '../Controllers/productController.js'

const product = express.Router()

product
    .get('/', getProduct)
    .post('/', addProduct)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct)

export default product