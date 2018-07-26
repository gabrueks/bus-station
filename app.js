const busOperation = require('./Bus');
// The challenge expected integer numbers separated, so I interpreted as an array

async function getValues(expectedArray, expectedGroup) {
    if (typeof expectedArray === 'string') {
        expectedArray = expectedArray.split(',');
        expectedArray = await expectedArray.map((auxNumber) => {
            return Number(auxNumber);
        });
        const bus = new busOperation();
        const values = bus.populateBus(expectedArray);
        console.log(values);
    } else {
        const bus = new busOperation();
        const values = bus.populateBus(expectedArray);
        console.log(values);
    }
}

// If you rather pass it on process env (example: $ numberGroups=2 numberPeople=3,2,3 node app.js)
if (process.env.numberPeople && process.env.numberGroups) {
    (async function settingVariables () {

        const numberGroups = process.env.numberGroups;
        let numberPeople = process.env.numberPeople;
        numberPeople = numberPeople.split(',');
        numberPeople = await numberPeople.map((auxNumber) => {
            return Number(auxNumber);
        });
        const bus = new busOperation();
        const values = bus.populateBus(numberPeople);
        console.log(values);
    }());
} else {
    // If you rather pass it on a function, just changes these variables
    let mutableVariableNumbers = '1,2,1,1,1,2,1,3';
    let mutableVariableGroup = 8;
    //

    getValues(mutableVariableNumbers, mutableVariableGroup);
}