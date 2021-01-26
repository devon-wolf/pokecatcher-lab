import {
    makePropertyArray
} from '../results/munge-utils.js';

const test = QUnit.test;

test('It should take in an array of objects and return an array of the indicated object property values', (expect) => {
    const dataSet = [
        { id: '5cef3501ef6005a77cd4fd1c', name: 'charizard', seen: 2, caught: 0 },
        { id: '5cef3501ef6005a77cd4fd1a', name: 'charmander', seen: 4, caught: 2 },
        { id: '5cef3501ef6005a77cd4fd23', name: 'caterpie', seen: 4, caught: 1 },
        { id: '5cef3501ef6005a77cd4fd20', name: 'wartortle', seen: 2, caught: 2 },
        { id: '5cef3501ef6005a77cd4fd24', name: 'metapod', seen: 3, caught: 2 },
        { id: '5cef3501ef6005a77cd4fd17', name: 'bulbasaur', seen: 3, caught: 0 },
        { id: '5cef3501ef6005a77cd4fd21', name: 'blastoise', seen: 4, caught: 2 },
        { id: '5cef3501ef6005a77cd4fd26', name: 'weedle', seen: 1, caught: 0 },
        { id: '5cef3501ef6005a77cd4fd25', name: 'beedrill', seen: 3, caught: 0 },
        { id: '5cef3501ef6005a77cd4fd1b', name: 'charmeleon', seen: 1, caught: 0 },
        { id: '5cef3501ef6005a77cd4fd29', name: 'pidgey', seen: 2, caught: 0 }
    ];
	
	// check with 'seen' property
    const expected1 = [2, 4, 4, 2, 3, 3, 4, 1, 3, 1, 2];
    const actual1 = makePropertyArray(dataSet, 'seen');

	// check with 'caught' property
    const expected2 = [0, 2, 1, 2, 2, 0, 2, 0, 0, 0, 0];
    const actual2 = makePropertyArray(dataSet, 'caught');
	
	// check with 'name' property
    const expected3 = [
        'charizard',
        'charmander',
        'caterpie',
        'wartortle',
        'metapod',
        'bulbasaur',
        'blastoise',
        'weedle',
        'beedrill',
        'charmeleon',
        'pidgey'
    ];
    const actual3 = makePropertyArray(dataSet, 'name');
	
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);

});