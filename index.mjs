import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accRomulus, accRemus ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Romulus and Remus!');

console.log('Launching...');
const ctcRomulus = accRomulus.contract(backend);
const ctcRemus = accRemus.contract(backend, ctcRomulus.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Romulus(ctcRomulus, {
    ...stdlib.hasRandom,
    // implement Romulus's interact object here
  }),
  backend.Remus(ctcRemus, {
    ...stdlib.hasRandom,
    // implement Remus's interact object here
  }),
]);

console.log('Goodbye, Romulus and Remus!');
