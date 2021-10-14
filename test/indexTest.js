import { assert } from 'chai';
import { fourOfAKind , straightFlush , fullHouse , flush , straight , threeOfAKind , twoPair , onePair} from '../hand.js'


describe('straightFlush', function(){
    it('Function should return true, validating that all values are counting and suits are equal', function(){
        let result = straightFlush(['10','11','12','13','1'],['♥','♥','♥','♥','♥'])
        assert.equal(result,true)
    })
})
describe('fourOfAKind', function(){
    it('Function should return true, validating four of the cards have the same value', function(){
        let result = fourOfAKind(['1','1','1','4','1'])
        assert.equal(result,true)
    })
})
describe('fullHouse', function(){
    it('Function should return true, validating that one set of 3 cards have the same value, aswell as an additional pair with a different value', function(){
        let result = fullHouse(['1','1','1','2','2'])
        assert.equal(result,true)
    })
})
describe('flush', function(){
    it('Function should return true, validating that all suits of the cards are queal', function(){
        let result = flush(['♥','♥','♥','♥','♥'])
        assert.equal(result,true)
    })
})
describe('straight', function(){
    it('Function should return true, validating that all values are counting', function(){
        let result = straight(['10','11','12','13','1'])
        assert.equal(result,true)
    })
})
describe('threeOfAKind', function(){
    it('Function should return true, validating that one set of 3 cards have the same value', function(){
        let result = threeOfAKind(['1','2','1','4','1'])
        assert.equal(result,true)
    })
})
describe('twoPair', function(){
    it('Function should return true, validating that there are two seperate pairs of values', function(){
        let result = twoPair(['1','2','1','4','2'])
        assert.equal(result,true)
    })
})
describe('onePair', function(){
    it('Function should return true, validating that there is one pair of values', function(){
        let result = onePair(['1','2','1','4','5'])
        assert.equal(result,true)
    })
})