let drivers = ['a', 'b', 'c', 'd', 'e', 'f']

function returnFirstTwoDrivers(nameOfDrivers) {
    return nameOfDrivers.slice(0, 2)
}

function returnLastTwoDrivers(nameOfDrivers) {
    return nameOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function yego(fare) { return fare * num }
}

function fareDoubler(num) {
    return 2 * num
}

function fareTripler(num) {
    return 3 * num
}

function selectDifferentDrivers(arrayOfDrivers, aFunction) {
    if (aFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (aFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}