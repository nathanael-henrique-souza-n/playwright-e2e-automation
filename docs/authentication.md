# authentication

## Positive scenarios

### BR-001 - Comlete login with valid data sucessfully

**GIVE** the user is on the login page
**WHEN** they fill in the email and password with valid data
**AND** click the "Login" button
**THEN** the user should be logged in successfully
**AND** the message "log out" should be displayed

# ==============================================

## Positive negatives

### BR-002 - User cannot log in with unregistered credentials

**GIVE** the user is on the login page
**WHEN** Given the user fills in the email and password fields with credentials that are not registered in the system
**AND** they click "login" button
**THEN** the system should display an error message indicating that the credentials are invalid
