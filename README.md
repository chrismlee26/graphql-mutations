# GraphQL + Express

- FEW2.9 Assignment #6: Mutations
- Build on top of Assignment #2: Collections
- GraphQL, Express, Nodemon

## How to Run Project:

#### Add Dependencies:

```
npm i
```

#### Run Application:

```
npm start
```

#### View GraphQL Interface:

```
http://localhost:4000/graphql
```

## GraphQL CRUD Operations

- To access GraphQL Interface:

```
https://localhost:4000/graphql
```

### 1. Create:

- To Add a new pet to the list:

```
mutation {
  addPet(name:"Name", species:"Species") {
    name
  }
}
```

### 2. Read:

- To Read one pet by ID:

```
query {
  getPet(id: 1) {
    name
    species
  }
}
```

- To Read all pets:

```
query {
  allPets {
    name
    species
  }
}
```

### 3. Update:

- To Update a pet already on the list:

```
mutation {
  updatePet(id:#) {
    name
    species
  }
}
```

### 4. Delete:

- To delete a pet already on the list (by ID):

```
mutation {
  deletePet(id:#) {
  }
}
```
