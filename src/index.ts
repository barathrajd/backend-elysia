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

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
