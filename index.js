
function distanceFromHqInBlocks(someValue){
    let hq = 42
   return Math.abs(someValue - hq)
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    let hq = 42;
    let block = (someValue - hq);
    return Math.abs((block) * 264)
}
function distanceTravelledInFeet(starting, destination){
    return Math.abs((destination - starting) * 264)
}

function calculatesFarePrice(starting, destination){
    let distance = Math.abs((destination - starting) * 264)
    if (distance <= 400) {
    return 0
} else if (distance <= 2000){
    return ((distance - 400) * .02)
} else if (distance <= 2500){
    return 25
} else if (distance >= 2500) {
    return 'cannot travel that far'
}
}