**This is not the stretch goal `TODO.md`, but a general recap of what has been done so far**

Main Goal:

- ~~Main task~~

Stretch goals:
- ~~Validate input~~ * Theoretically we should .trim() the input value so inserting "  " results as valid
- ~~Validate api calls~~
- ~~Link to winners page~~
- ~~No duplicate per day~~
  - Persist change though refreshing the page  
  _Should be straightforward to implement using [vuex-persist](https://github.com/championswimmer/vuex-persist)_
- Limit 10 names per day 
  - Change day
  - Each subsequent day should not repeat a name  
  _This could be implemented using a 2d array for the winners, where `winners[i][j]` corresponds to the j<sup>th</sup> winner on the i<sup>th</sup> day_
- Press enter to submit the name  
  _We could add a `@keydown` event on the input which calls `checkName` **additional validation should be done by checking event.type**_
- Add linting and quality control  
  _could be implemented using eslint or prettier_
- todo preparation
  * Assuming the list of names are fetched from an actual api, how would you implement authentication, rate limiting handling, error handling, api unavailability? - What kind of retry strategies you’d imagine implementing?  
  _auth could be implemented by JWT, rate limiting could be implemented somewhat on the client side using debouncing, but it's best implemented at the api level. As far as retires go the approach of waiting 2n seconds, with a maximum of 3 retires should do it_
  * How can we protect the app from being abused?  
  _as the previous point said using jwt, and CORS_
  * How can we deploy the app into a cloud environment?
  * How can we be sure the app is running with the latest version of code?
  * What techniques you can employ to ensure users are not disrupted when you make significant changes to code?
  * What kind of accessibility best practices should we keep in mind?
  * How would you structure the css so that we have the most reusability but also the least leakage between components?
  * Any other improvements that you feel like could be added.