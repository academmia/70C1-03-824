
const EventEmitter = require('events')
const evEmitter = new EventEmitter();  // instanta diferita de cea din app

const saveTask = () => {
    console.log('task module::Salvez task-ul 102...');
    evEmitter.emit('taskSaved', { id: 102, subject: 'Create new design', closed: false });
}

module.exports.saveTask = saveTask;

//--------------------
//2 o solutie ar fi sa trimitem si instanta de event emitter
module.exports.emitter = evEmitter;