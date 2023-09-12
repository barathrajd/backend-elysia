import { Elysia } from 'elysia';

const plugin = ({ prefix = '/v1' }) =>
  new Elysia({ prefix }).get(`/${prefix}/hi`, () => 'hi');

const app = new Elysia().use(plugin({ prefix: '/v2' }));

app.get('/', () => 'Hello world From Elysia');

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

app.get(
  '/response',
  () =>
    new Response(JSON.stringify({ id: 1 }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
);

/**
 * State and Decorater
 * state is assign a value to Context store
 * decorater is assign a value to Context
 */

app
  .state('version', 1)
  .decorate('getData', () => Date.now())
  .get(
    '/versions',
    (context) => `${context.store.version} - ${context.getData()}`
  );
/**
 * dervie to transform the context to have the custom context
 * headers
 */
app
  .state('version', 2)
  .decorate('getDay', () => {
    const data = new Date();
    return data.getDay().toLocaleString();
  })
  .derive(({ request: { headers } }) => {
    return {
      test: headers.get('test'),
    };
  })
  .get('/derivetest', ({ test }) => test);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
