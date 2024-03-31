// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location <= 42){
       return Math.abs(location - 42);
    } else 
        return location - 42;
}

// second function
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

// // third function
 function distanceTravelledInFeet(start,destination){
   let distanceInFeet = Math.abs (destination-start) * 264;
   return distanceInFeet;
 }
 
// // fourth function.
function calculatesFarePrice(start, destination){
    const distance = Math.abs (destination - start) * 264;
        if (distance <= 400) {
            return 0;
        } else if (distance> 400 && distance <= 2000) {
            return 2.56;
        }else if (distance > 2000 && distance <= 2500) {
            return 25;
        } else 
            return 'cannot travel that far'
    }
