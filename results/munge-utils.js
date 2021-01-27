export function makePropertyArray(arrayOfObjects, propertyString) {
    const propertyArray = [];
    for (let item of arrayOfObjects) {
        propertyArray.push(item[propertyString]);
    }
    return propertyArray;
}

export function getFrequencyAsPercent(eventCount, totalCount) {
    return (eventCount / totalCount) * 100;
}