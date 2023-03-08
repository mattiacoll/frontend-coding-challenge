**This is not the stretch goal `TODO.md`, but a general recap of what has been done so far**

Main Goal:

- ~~Main task~~

Stretch goals:
- ~~Validate input~~
- ~~Validate api calls~~
- ~~Link to winners page~~
- ~~No duplicate per day~~
  - ~~Persist change though refreshing the page~~
- ~~Limit 10 names per day~~
  - ~~Change day~~
  - ~~Each subsequent day should not repeat a name~~  
- ~~Press enter to submit the name~~  
- ~~Add linting and quality control~~  
- todo preparation
  * Assuming the list of names are fetched from an actual api, how would you implement authentication, rate limiting handling, error handling, api unavailability? - What kind of retry strategies you’d imagine implementing?  
    - _auth could be implemented by JWT, rate limiting could be implemented somewhat on the client side using debouncing, but it's best implemented at the api level. As far as unavailability/retires go the approach of waiting 2n seconds, with a maximum of 3 retires should do it._
  * How can we protect the app from being abused?  
    - _Ideally we would implement a login mechanism, with a spam filter (e.g. recaptcha), such that not everybody could access it, secondly all external api request should be routed through our servers and not made directly to the third party, so that we can implement some kind of per user rate limiting and we can get an overview of malicious or high usage user._
  * How can we deploy the app into a cloud environment?
    - _Ideally, we could create a config file (usually a .yml) with all the steps needed to build, test and serve the app then our cloud provider should build and deploy the app based on this config. Otherwise, we could create an rsync script that copied our working directory to the server but this approach is more error prone_
  * How can we be sure the app is running with the latest version of code?
    - _If we build and deploy our app though a CI/CD pipleine then each deployment should be versioned and should know its version so that from time to time we chould check if a new version is available and, possibily notify the user to refresh the page if necessary.  
    If we chose to go with the rsync script way we could run our script using the `--dry-mode` flag and see if any file should be uploaded or not to the server_
  * What techniques you can employ to ensure users are not disrupted when you make significant changes to code?
    - _Partly answered in the previous question, we should version each deployment and each api call should be versioned too, so that we know which versions of the app are still active and being used and which could be killed_
  * What kind of accessibility best practices should we keep in mind?
    - _First of all we should check that our h# titles are in ascending order, then we need to check if parts of our components could be implemented using a semantic tag instead of just divs. Then we would check if our tabulation is in a logical order (eg. we got three inputs, if we tab from the first input, the focus should be on the second an not the third one, and so on).
    After that we should check if our colors pass the AA (or even better the AAA) contrast test and our font sizes not go below 12px in size.
    Finally we should check that we applied all the correct aria-* attributes, ideally we would also check our app with a screenreader.
    Most of these actions could be implemented using automated tools which integrate into our CI/CD pipelines (eg. aXe, lighthouse, etc.)_
  * How would you structure the css so that we have the most reusability but also the least leakage between components?
    - _We could stucture our css based on a general semantic substet of colors, sizes and spacings. But better yet we could use a css framework (like tailwind) that divdes each spacing, color and size in a specific class_
  * Any other improvements that you feel like could be added.
    - _Change the state managment to Pinia, the Vuex documentation says to switch to it as it is "[the new default](https://vuex.vuejs.org/)".  
    The Vue documentation [suggestes using Vite istead of vue-cli](https://vuejs.org/guide/scaling-up/tooling.html#project-scaffolding)_