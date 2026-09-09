# Feature: User Login

## Negative Scenarios

### ST-001 - Login with invalid email and password

**Given** the user is on the login page
**When** they enter an invalid email and password combination
**And** click the "Login" button
**Then** the browser should display a message indicating that the credentials are incorrect

### ST-002 - Login with an empty email field

**Given** the user is on the login page
**When** they leave the email field empty
**And** click the "Login" button
**Then** the browser should display a message indicating that the email field is required

### ST-003 - Login with an empty password field

**Given** the user is on the login page
**When** they leave the password field empty
**And** click the "Login" button
**Then** the browser should display a message indicating that the password field is required
