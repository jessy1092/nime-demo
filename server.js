'use strict';

let nime = require('nime');

let service = require('./index');
let config  = require('./ime.json');

config['textService'] = service;

let server = nime.createServer(undefined, [config]);

server.listen();
