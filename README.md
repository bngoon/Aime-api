
# Naruto Character API

This API is for managing and serving character data from the Naruto series. It's designed to fetch data from an external API, store it in a MongoDB database, and provide CRUD (Create, Read, Update, Delete) operations via HTTP endpoints using an Express.js server.


## Technologies Used


JavaScript
Node.js
Express.js
MongoDB
Mongoose



## Installation
```bash
Fork and clone this repository.
Change into the new directory.
Install dependencies.
 
```
    
## API Reference

#### Get all characters

```http
  GET localhost4002/api/characters
```


#### Get characters by  Id

```http
  GET localhost4002/api/characters/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of character to fetch |

#### Get characters by  Name

```http
  GET localhost4002/api/characters/name/Zero-Tails
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Search Value: Zero-Tails |








## Documentation

This API was sourced from [narutodb](https://narutodb.xyz/).


## Authors

- [@Bngoon](https://github.com/bngoon)

