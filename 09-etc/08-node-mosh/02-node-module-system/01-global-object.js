// import { EventEmitter } from 'events';
import { Logger } from './07-extending-event-emitter.js';

// const emitter = new EventEmitter();

// console.log(); // global
// console.log(globalThis);

// const message = '';

// console.log(global.message);

const logger = new Logger();

logger.on('messageLogged', (eventArg) => {
  console.log('Listener called', eventArg);
});

logger.log('message');
