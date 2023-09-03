const Buffer = require('safe-buffer').Buffer
const schnorr = require('bip-schnorr')
const key = require('./key.json')

const privateKey = key.secretKey;
const message = Buffer.from(process.env.NOSTR_EVENT_ID, 'hex');
const signature = schnorr.sign(privateKey, message);
console.log('Signature:\n' + signature.toString('hex'));