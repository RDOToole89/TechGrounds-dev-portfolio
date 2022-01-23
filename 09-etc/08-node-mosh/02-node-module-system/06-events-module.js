import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// Register a listener
// The event arg is can catch the data sent from the emitter
emitter.on('messageLogged', (eventArg) => {
  console.log('Listener called', eventArg);
});

// Raising an event => emiting a signal
// it is possible to pass an optional second argument with additonal data
emitter.emit('messageLogged', { id: 1, url: 'https://' });

emitter.on('score', (eventArg) => {
  console.log('EVENT', eventArg);
  console.log(
    `${eventArg.team} scored ${eventArg.homeGoals} times and received ${eventArg.awayGoals} goals.`
  );
});

emitter.emit('score', { team: 'ajax', homeGoals: 3, awayGoals: 2 });
