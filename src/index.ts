import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => 'Hello world From Elysia');

app.get('/barath', () => 'barth test');

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
