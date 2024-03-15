import { MongoClient, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

// declare an object is initial null
let trelloDatabaseInstance = null

// declare a mongoClientInstance object to connect to MongoDB
const mongoClientInstance = new MongoClient(process.env.MONGODB_URI, {
  // ServerApiVersion is available since MongoDB 5.0.0
  // more info: https://www.mongodb.com/docs/drivers/node/current/fundamentals/stable-api/
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  // call connection to MongoDB Atlas from URI has been already declared in mongoClientInstace
  await mongoClientInstance.connect()

  // if the connect is successful, get database name and assign it to trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(process.env.DATABASE_NAME)
}

// this function (not async function )is able to export the Trello Database Instance after
// connecting successfully to mongoDB, very convenient to re-use somewhere else in the code
// NOTE: must make sure that only call this GET_DB after successfully connecting to mongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to the Database first!')
  return trelloDatabaseInstance
}

// close connection to database if necessary
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
