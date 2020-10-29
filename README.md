# Tricog_Api
- This is basic API of creating customer and get the required customer details.



### Required Tools
- Postman
- Postman link for reference 'https://www.postman.com/collections/3d93216e74ad7ce123db'

### Steps to Create Customer
1. Hit a POST request on url 'http://tricog-api.herokuapp.com/create_customer'
- Schema:-
- 
   "first_name"
   "dob"
   "pan_number"
   "email"
   "profile_image"
   "gender"

### Validations:
● All fields are mandatory.
● PAN Number validation.
● DOB in yy/mm/dd format.
● Profile Image: hosted URL 

### Response
2. You will get a Access token on successful creation of customer.

### Get Customer Details
3. To get the customer details  put the access token in the authorization header and hit a get request on url http://tricog-api.herokuapp.com/get_customer.

