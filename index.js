//create function createLoginTracker
function createLoginTracker(userInfo){

  const {userName, password} = userInfo;
  
  //initialize attemptCount
  let attemptCount = 0;

  //create and return an arrow function
  return (passwordAttempt) => {
    //Increment attemptcount by 1 everytime the user tries to login 
    attemptCount++;
    
    if (passwordAttempt === password && attemptCount < 3){
      return "Login successful"
    } else if (passwordAttempt !== password && attemptCount <= 3){
        return `Attempt ${attemptCount}: Incorrect password. Please try again.`
    } else{
        return "Account locked due to too many failed login attempts"
    }
  }

}
