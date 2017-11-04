# Knock Knock solution

## Installing

To install prerequisites on a machine with node:

```
npm install -g serverless
npm install
```

## Running tests

This uses the local installation of `mocha`:

```
npm test
```

## Deploying

Assuming your AWS profile is configured correctly:

```
sls deploy
```

## Invoking locally

```
sls invoke local -f <function> -d <event-as-json>
```

Examples:

```
sls invoke local -f fibonacci -d '{ "queryStringParameters": { "n": 10 } }'
sls invoke local -f reverseWords -d '{ "queryStringParameters": { "sentence": "this is a test" } }'
sls invoke local -f triangleType -d '{ "queryStringParameters": { "a": 3, "b": 4, "c": 5 } }'
```
