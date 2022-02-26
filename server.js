// Dependencies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Schemas
const schema = buildSchema(`


type Pet {
  name: String!
  species: String!
}

type Bike {
  year: String!
  build: String!
  model: String!
  cc: Float!
  hp: Float!
}

type Query {
  getPet(id: Int!): Pet
  allPets: [Pet!]!
  getBike(id: Int!): Bike
  allBikes: [Bike!]!
}

type Mutation {
  addPet(name: String!, species: String!): Pet!
  updatePet(id: Int!, name: String, species: String): Pet
}

`)

// Resolvers
const root = {
  getPet: ({ id }) => {
    return petList[id]
  },
  allPets: () => {
    return petList
  },
  addPet: ({ name, species }) => {
    const pet = { name, species }
    petList.push(pet)
    return pet
  },
  updatePet: ({ id, name, species }) => {
    const pet = petList[id]  // is there anything at this id? 
    if (pet === undefined) { // Id not return null
      return null
    }
    // if name or species was not included use the original
    pet.name = name || pet.name
    pet.species = species || pet.species
    return pet
  },
  getBike: ({ id }) => {
    return bikesList[id]
  },
  allBikes: () => {
    return BikesList
  },
}

const petList = [
  { name: 'Fluffy', species: 'Dog' },
  { name: 'Sassy', species: 'Cat' },
  { name: 'Goldberg', species: 'Frog' },
]

const bikesList = [
  { year: '2019', build: 'Aprilia', model: 'RSV4RF-LE', cc: '999.6', hp: '201' },
  { year: '2019', build: 'Honda', model: 'CRF250L', cc: '249.6', hp: '22.8' },
  { year: '2008', build: 'Yamaha', model: 'R6', cc: '599', hp: '118' },
  { year: '2007', build: 'Ducati', model: 'SportClassic LE', cc: '992', hp: '96' },
  { year: '1998', build: 'Suzuki', model: 'RM250', cc: '249', hp: '40' },
  { year: '1979', build: 'Honda', model: 'CB750K', cc: '748', hp: '76' },
  { year: '1972', build: 'Yamaha', model: 'GT80', cc: '72', hp: '3.9' },
]

// Create Express App
const app = express()

// Define GraphQL Route
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

// Start App
const port = 4000
app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})