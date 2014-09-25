#!/usr/bin/env node
'use strict';
var cli = require('../lib/cli'),
    nodemon = require('../lib/');

var options = cli.parse(process.argv);

nodemon(options);
