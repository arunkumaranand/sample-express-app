const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Express Web APIs', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./app.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);
var swaggerUiOptions = {
    explorer: true
  };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
const users = ['arun', 'sreeja', 'jia']

app.get('/', (req,res) => res.send("Arun's first Express JS application"))

/**
* @swagger
* /users:
*   get:
*     description: Returns users
*     produces:
*      - application/json
*     responses:
*       200:
*         description: users
*         schema:
*           type: array
*           items:
*             type: string
*/
app.get('/users', function (req, res) {
    res.send(users)
  })
app.listen(port, () => console.log(`App listening on port ${port}`))
