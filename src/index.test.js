var expect = require('chai').expect;
var middleEarth = require('./index');

describe('middleearth-names', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(middleEarth.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain Gandalf', function() {
            expect(middleEarth.all).to.include('Gandalf');
        });
    });

    describe('random', function() {
        it('should return random name', function() {
            var randomItem = middleEarth.random();
            expect(middleEarth.all).to.include(randomItem);
        });
    });
});