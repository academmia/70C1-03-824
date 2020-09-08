
const EventEmitter = require('events')
const evEmitter = new EventEmitter();

evEmitter.on('taskDeleted', function(taskid, success){
    console.log('Operatie de stergere task: ', taskid, success);
});

evEmitter.emit('taskDeleted', 101, true);

evEmitter.on('taskSaved', (ev) => {
    console.log('Task-ul a fost salvat: ', ev);
});

setTimeout( () => {
    evEmitter.emit('taskSaved', { id: 102, subject: 'Create new design', closed: false });
}, 2000)

