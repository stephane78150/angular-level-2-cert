# Soccer Tracker

## Context
I came from a React background, and I have used a lot typescript & Rx.JS before.

## Routing & Lazy loading
I implemented code splitting as an exercise, of course for a such a small application it does not bring much benefit.
The typings provided for sports API are shared and therefore I used the `import type` feature of typescript so that they do not have any effects on the code splitting (those imports will disappear during compilation).

Routing is implemened by using nested children routes, between different lazy loaded module. The current selection state is stored in URL.

## League top screen

* I only expose observables in my component, and then use async pipe to access them, so that I do not have to manage the subscription cleanup
* I used a set of Rx.JS helpers to extract the status of the component loading from the observable between : 
    - display a spinner during load
    - displays an error message if the HTTP query failed
    - display a message if nothing is selected yet, and the http query have not been sent (unlikely edge case)
      
To manage those statuses, I used a set of custom operators defined in `src/app/api/api.utils.ts`, while this make the code quite complex, it also provides some resiliency in case the API becomes very slow or randomly returns errors.

For example, you can play with the browser block url feature, to check that when an http query fails, an error banner is displayed and this does noy prevent subsequent queries from working (this is a danger from observable as they tend to complete on first error when not catched).

## Last matches

For the last soccer matches screen, I choose a simpler approach that the RX.JS helpers described above, and just used a _RESOLVER_ so that when the screen is displayed we are sure that data has been loaded. 

The tradeoff, is that if we have to deal with random errors on the back end which can cause an API to be unexpectedly slow or fails, then the screen will simply do not load.



