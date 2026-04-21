module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}; 
const createLoginTacker = (correctPassward) => {
    let attempts = 0;
    const maxAttemps =3;
    // this arrow function is return
    return (inputPassward) => {
        if (attempts >= maxAttemps) {
            return " Account is locked";
        }
        else if (inputPassward === correctPassward) {
            attempts = 0;
             // reset attemps on successfull login
            return "login successfull!";
        } else {attempts++;
            return `incorrect passward. Attempts left: ${maxAttemps - attempts}`;
        }
    };
}; 
// usage;
const login = createLoginTacker("mySecretPassward");
console.log(login("wrongpassward")); // incorrect passward. Attempts left: 2
console.log(login("wrongpassward")); // incorrect passward. Attempts left: 1
console.log(login("wrongpassward")); // Account is locked