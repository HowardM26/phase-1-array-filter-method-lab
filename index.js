// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(names, string) {
    const listofDrivers = [];
    for (const names of drivers) {
        if (string === drivers)
        {
            return listofDrivers.push(drivers)
        }
    }
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, letter)
{
    return drivers.filter(drivers => 
        drivers.startsWith(letter))
}

function matchName(drivers,name) {
    return drivers.filter(driver => driver.name === name)
}