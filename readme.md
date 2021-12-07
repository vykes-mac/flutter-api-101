###

Setup

```
npm init
npm install -D typescript
npm install -S express
npm install -D @types/express
tsc --init
```

###

Setup Package.json

```
npm install -D ts-node-dev
"dev": "node_modules/.bin/ts-node-dev --respawn --notify false --prefer-ts --ignore-watch node_modules -- src/app.ts "
```

###

Setup TypeOrm

```
npm install -S typeorm
npm install -S reflect-metadata
npm install -S pg
npm install -D @types/node
```
