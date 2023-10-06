// Import the framework and instantiate it
import Fastify from 'fastify'
import './db/db.js'

const fastify = Fastify({
  logger: true
})

const host = 'localhost' //127.0.0.1
const port = 5000

// Declare a route
fastify.get('/', function handler (request, reply) {
  return { hello: 'Servidor Rodando' }
})

fastify.get('/produtos', function handler (request, reply) {
  return { hello: 'Produtos Rodando' }
})
fastify.get('/produto/:id', function handler (request, reply) {
  return { hello: 'Produtos Rodando' }
})

// Run the server!
fastify.listen({
  port,
  host
}).then(() => console.log(`Servidor rodando em http://${host}:${port}`))
.catch(err => console.log(`Erro ao subir servidor ${err}`))