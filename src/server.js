/* eslint-disable no-console */
import express from 'express'
import cors from 'cors'
import {corsOptions} from '~/config/cors'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'


const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  // Enable req.body json.data
  app.use(express.json())

  app.use('/v1', APIs_V1)

  // Centralized error handling middleware
  app.use(errorHandlingMiddleware)

  app.get('/', (req, res) => {
    res.end('<h1>Hello World! Cause you are my world</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hi ${env.AUTHOR}, the server is currently running at: http://${env.APP_HOST}:${env.APP_PORT}/`)
  })

  // before stopping server, clean up first
  exitHook(() => {
    console.log('4. Server is shutting down...')
    CLOSE_DB
    console.log('5. Disconnected to MongoDB Cloud Atlas!')
  })
}

// only start server backend when the connection to database is successful
// anonymous async function (IIFE)
(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas!')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// only start server backend when the connection to database is successful
// console.log('1. Connecting to MongoDB Cloud Atlas...')
// CONNECT_DB()
//   .then(() => console.log('2. Connected to MongoDB Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })
