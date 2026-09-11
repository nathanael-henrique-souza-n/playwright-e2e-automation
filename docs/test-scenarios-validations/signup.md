# Feature: User Registration

## Negative Scenarios

### ST-002 - Register a user with an invalid email address

**Given** the user is on the home page
**When** they enter an invalid email address (for example "invalid-email")
**And** click the "Sign Up" button
**Then** the browser should display a validation message indicating that the email address is invalid

### ST-003 - Register a user with an invalid password

**Given** the user is on the home page
**When** they fill in all required fields with valid data except the password (use a too-short or weak password)
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the password does not meet the requirements

### ST-004 - Register a user with a required field empty

**Given** the user is on the registration page
**When** they fill the registration form leaving the "<field>" field empty
**And** click the "Create Account" button
**Then** the browser should display a message indicating that the "<field>" field is required

Examples:
| field |
| email |
| name |
| password |
| first name |
| last name |
| address |
| state |
| city |
| zipcode |
| mobile number |
