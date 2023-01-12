// Code your solution in this file!
function distanceFromHqInBlocks (a) {
    return Math.abs(a - 42);
}

function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b) * 264;
}
function distanceTravelledInFeet (start,end) {
    return (Math.abs(start-end))*264;
}
function calculatesFarePrice (start,end) {
    const c = distanceTravelledInFeet(start,end) ;
    if (400> c) {
        return 0
    }
    else if (400<c && c < 2000) {
        return (c-400) * .02
    }
    else if (2000 < c && c <2500) {
        return 25
    }
    else if (c >2500) {
        return 'cannot travel that far'
    }
}