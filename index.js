// Code your solution in this file!
//distance
function distanceFromHqInBlocks(someValue){
    const blocks = Math.abs(someValue-42);
    return blocks;
}

//distance from HQ in feet
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    const feet = (distanceFromHqInBlocks(someValue) *264);
    return feet;
}

//distance travelled in feet
function distanceTravelledInFeet(start, destination){
    const distanceInFeet = Math.abs(start - destination) * 264;
    return distanceInFeet;
}

//calculate the fare
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination) <400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far"
    }
    else if (distanceTravelledInFeet(start,destination) >2000){
        return 25;
    }
    else if (distanceTravelledInFeet(start,destination) >400){
        return .02*(distanceTravelledInFeet(start,destination) - 400);
    }
}