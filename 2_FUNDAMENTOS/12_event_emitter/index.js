const EventEmiiter = require('events')
const eventEmiiter = new EventEmiiter()

eventEmiiter.on('start', () => {
    console.log("durante")

})

console.log("antes")

eventEmiiter.emit('start')

console.log("depois")