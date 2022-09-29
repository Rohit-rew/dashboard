const Events = require('events')

let eventsinstance = new Events()

eventsinstance.on('response' , ()=>{
    console.log('data received')
})

eventsinstance.emit("response")