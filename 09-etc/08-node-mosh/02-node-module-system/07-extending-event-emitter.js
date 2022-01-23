import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// const url = 'http://mylogger.io/log';

export class Logger extends EventEmitter {
  log(message) {
    // send and http request
    console.log(message);

    // Raise and event
    this.emit('messageLogged', { id: 1, url: 'https://' });
  }
}
