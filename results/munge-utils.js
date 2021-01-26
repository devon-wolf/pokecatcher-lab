// export function makeSeenArray(arrayOfObjects) {
//     const seenArray = [];
//     for (let item of arrayOfObjects) {
//         seenArray.push(item.seen);
//     }
//     return seenArray;
// }

export function makePropertyArray(arrayOfObjects, propertyString) {
    const propertyArray = [];
    for (let item of arrayOfObjects) {
        propertyArray.push(item[propertyString]);
    }
    return propertyArray;
}

export function makeLabelArray(arrayOfObjects) {
    const labelArray = [];
    for (let item of arrayOfObjects) {
        labelArray.push(item.pokemon); // or whatever the name property is called in that array
    }
    return labelArray;
}