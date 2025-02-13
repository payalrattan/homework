
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
let dogFutureAge;
if (shouldShowResultInDogYears) {
    dogFutureAge = (dogYearFuture - dogYearOfBirth) * 7;
    console.log("Your dog will be" + " " + dogFutureAge + " " + "dog years old in " + dogYearFuture);
}
else {
    dogFutureAge = dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be" + " " + dogFutureAge + " " + "human years old in" + " " + dogYearFuture)
}