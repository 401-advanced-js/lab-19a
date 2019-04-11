'use strict';

const Q = require('@nmq/q/server');
Q.start();

const Q1 = new Q('files');

Q1.monitorEvent('save');
Q1.monitorEvent('error');

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('error');

