#!/usr/bin/env node

var greet = require('greet')
var parseArgs = require('minimist')

var name = process.argv[2]
var argv = parseArgs(process.argv.slice(3))

console.log(greet(name, argv.drunk))

// console.log(process.argv[0])
