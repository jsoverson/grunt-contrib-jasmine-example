grunt-jasmine-runner-example
============================

[![Build Status](https://secure.travis-ci.org/jsoverson/grunt-jasmine-runner-example.png)](http://travis-ci.org/jsoverson/grunt-jasmine-runner-example)

Example setup for grunt-jasmine-runner.

Browse the source for an example of how to set up your tests to be run via grunt-jasmine-runner.

The application here is the Jasmine example application. The only changes made were jshint comments to allow the linter to pass.

Clone this repo and then run `npm install` to install grunt-jasmine-runner

## Running tests headlessly

`grunt jasmine`

Or to run the default tasks (lint + jasmine) :

`grunt`

## Running tests in a browser

`grunt jasmine-server`

### PhantomJS

This plugin requires phantomjs to run tests headlessly. Get it at [phantomjs.org](http://phantomjs.org/)

### License

The example application source is copyright Pivotal Labs and licensed under the MIT license.

All other configuration code is public domain

### Author
 
All code not coming from Pivotal Labs was written by Jarrod Overson
