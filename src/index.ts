import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => 'Hello world From Elysia');

// create a new method using app
// route - barath
// callback - returs string barath test

app.get('/barath', () => 'barth test');

// NEED to clarify in the docs
app.route('M-SEARCH', 'get', () => 'test route');

app.get('/barath/:id', ({ params: { id } }) => ({ id }));

app.get('*', () => 'Not Found Ha Ha Ha Ha');

/**
 * Handlers
 * app.get(path,handlers, hook?)
 * path - router path
 * handlers - callback function
 *  - handler have context
 *  - one of the ex is params id
 *  - Request data
 *  - body
 *  - query params
 *  - store elysia global store
 *  - set response
 *    - status, header, redirect
 */

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
