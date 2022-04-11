

- the react front end must be served from the backend, in response to requests to `/`
- django must be configured to serve static files from the build folder that react creates
- use DRF's `@api_view([])` decorator to limit which request types can be used in a route, and get better default settings for AJAX
- use `npm watch` to automatically rebuild the app when we make changes. 