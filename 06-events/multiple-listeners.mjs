import { EventEmitter } from 'node:events'

const myEmitter = new EventEmitter()

const event_myevent = 'myEvent'

const myEventFn = () => {
    console.log('My event do')
}

const seconsListener = () => {
    console.log('My event second do')
}

myEmitter.on(event_myevent, myEventFn)
myEmitter.on(event_myevent, seconsListener)
myEmitter.on('otherEvent', () => {
    console.log('other event')
})

myEmitter.setMaxListeners(25)

console.log(myEmitter.getMaxListeners())
console.log(myEmitter.eventNames())

setTimeout(() => {
    myEmitter.emit(event_myevent)
}, 1000)
