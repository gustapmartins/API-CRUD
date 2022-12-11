import express from 'express'
import product from './productRoute.js'

const routes = (app) => {
    app.use(
        express.json(),
        product
    )
}

export default routes