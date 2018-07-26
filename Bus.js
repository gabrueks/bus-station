class Bus {

    populateBus (arrayWithPeople) {
        let minimumSpace = this.minSpaceInBus(arrayWithPeople);
        let maximumSpace = this.maxSpaceInBus(arrayWithPeople);
        let mountArray = [];
        for(let insideForLet = minimumSpace; insideForLet <= maximumSpace; insideForLet++) {
            if (maximumSpace % insideForLet == 0) {
                mountArray.push(insideForLet);
            }
        }
        return mountArray;
    }

    maxSpaceInBus (arrayWithPeople) {
        let add = (arr) => {
            return arr.reduce((firstVal, secondVal) => firstVal + secondVal);
        }
        return add(arrayWithPeople);
    }

    minSpaceInBus (arrayWithPeople) {
        return Math.max(...arrayWithPeople);
    }
}

module.exports = Bus;