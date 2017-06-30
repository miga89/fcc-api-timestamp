## API Timestamp Microservice
_A Freecodecamp.com Backend Challenge._

This API timestamp microservice does the following:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage
https://api-timestamp-fcc-mg.herokuapp.com/December%2015,%202015

https://api-timestamp-fcc-mg.herokuapp.com/1450137600

### Example output
{ "unix": 1450137600, "natural": "December 15, 2015" }

### Preview

![Preview](https://raw.githubusercontent.com/miga89/fcc-api-timestamp/master/images/screencapture.gif)




---
* The app is deployed on Heroku. Test it here: https://api-timestamp-fcc-mg.herokuapp.com/
* The freecodecamp challenge can be found here: https://www.freecodecamp.com/challenges/timestamp-microservice
