'use strict';

const Q = require('@nmq/q/client');

const Q1 = new Q('files');
const db = new Q('database');

Q1.subscribe('save', (payload) => {
  console.log('saved some stuff bruh', payload);
})
Q1.subscribe('error', (payload) => {
  console.log('The thing did a the mess up', payload);
})

db.subscribe('create', (payload) => {
  console.log('made a thing', payload);
})
db.subscribe('read', (payload) => {
  console.log('read stuff', payload);
})
db.subscribe('update', (payload) => {
  console.log('updated stuff', payload);
})
db.subscribe('delete', (payload) => {
  console.log('deleted stuff', payload);
})
db.subscribe('error', (payload) => {
  console.log('stuff didnt work', payload);
})

console.log('current Q1 subscriptions:', Q1.subscriptions());

console.log('current db subscriptions:', db.subscriptions());
