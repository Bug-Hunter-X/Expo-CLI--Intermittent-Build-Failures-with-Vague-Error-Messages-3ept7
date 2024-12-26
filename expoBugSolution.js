The intermittent build failures were traced to a temporary network issue impacting the resolution of package dependencies during the build process.  The solution involves improving the error reporting of Expo CLI to be more explicit about network problems during dependency resolution.  Furthermore, adding retry mechanisms with exponential backoff is necessary to enhance the resilience of the build process in the face of transient network disruptions.

```javascript
// expoBugSolution.js (Illustrative - No actual code change in this example)
// improved error handling in Expo CLI
// retry mechanism with exponential backoff
```