
const task = require('./task')

const EventEmitter = require('events')
const evEmitter = new EventEmitter();

evEmitter.on('taskDeleted', function(taskid, success){
    console.log('Operatie de stergere task: ', taskid, success);
});

evEmitter.emit('taskDeleted', 101, true);

evEmitter.on('taskSaved', (ev) => {
    console.log('Task-ul a fost salvat: ', ev);
});


//2 --------------------
// daca ascultam evenimentele pe aceeasi instanta este ok
task.emitter.on('taskSaved', (ev) => {
    console.log('TaskEmitter::Task-ul a fost salvat: ', ev);
});
//2 ----------------------


// salvarea unui task genereaza si evenimentul
// dar nu functioneaza pentru ca sunt doua instante diferite de EventEmitter
task.saveTask();

