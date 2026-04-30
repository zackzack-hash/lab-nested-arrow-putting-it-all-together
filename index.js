function createLoginTracker(userInfo) {
    let attemptCount = 0;

    return (passwordAttempt) => {

        // If already locked (after 3 failed attempts)
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Correct password
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Wrong password → increase attempts
        attemptCount++;

        // IMPORTANT FIX:
        // Return failure message FIRST, even for attempt 3
        const message = `Attempt ${attemptCount}: Login failed`;

        return message;
    };
}

const user = {
    username: "zack",
    password: "hello1"
};

const login = createLoginTracker(user);

// Test cases (optional)
console.log(login("wrong"));
console.log(login("1234"));
console.log(login("hello1"));
console.log(login("wrong"));
console.log(login("hello1"));

module.exports = {
  createLoginTracker
};