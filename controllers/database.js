/* global app, database */

// Try it out at /database
app.get(  '/database', function( request, response ) {
  response.render( 'database', { messages: database.messages } )
})

app.post( '/database', function( request, response ) {
  var form = request.body
  database.messages.push( form.message )
  response.redirect( '/database' )
})