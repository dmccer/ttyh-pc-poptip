import EventEmitter from 'eventemitter3';

export const EE = new EventEmitter();

function addTo(type, args) {
  EE.emit('add/tip', type, ...args);
}

export const Tipr = {
  success(...args) { addTo('ok', args); },
  error(...args) { addTo('error', args); },
  info(...args) { addTo('info', args); },
  warn(...args) { addTo('warn', args); }
}
