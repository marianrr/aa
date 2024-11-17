// stretch
function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 1000) {
      reject("you dont have enough time to stretch");
    } else {
      setTimeout(() => {
        console.log("done stretching");
        resolve(timeLeft - 1000);
      }, 1000);
    }
  });
}

// runOnTreadmill
function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 500) {
      reject("you dont have enough time to run on treadmill");
    } else {
      setTimeout(() => {
        console.log("done running on treadmill");
        resolve(timeLeft - 500);
      }, 500);
    }
  });
}

// liftWeights
function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 2000) {
      reject("you dont have enough time to lift weights");
    } else {
      setTimeout(() => {
        console.log("done lifting weights");
        resolve(timeLeft - 2000);
      }, 2000);
    }
  });
}

// workout
function workout(timeAvailable) {
  stretch(timeAvailable)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then((timeLeft) => console.log(`done working out with ${timeLeft}ms left`))
    .catch((error) => console.error(error));
}

// Test your code
workout(500); // should print an error
workout(1000); // should print an error
workout(4000); // should print the workout sequence