'use strict';

beforeEach(function() {
  jasmine.addMatchers({
     toBePlaying: function(util, customEqualityTesters){
      return {
          compare: function(actual, expected){
              var passed = actual.currentlyPlayingSong == expected && actual.isPlaying;
              
              return {
                pass: passed,
                message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + expected
              };
          }
      }
    }
      
  });
});

