import fastify from 'fastify';
import { env } from './env';
import { knex } from './database';

const app = fastify();

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*');

  return tables;
});

const port = env.PORT;

app
  .listen({ port })
  .then(() => {
    console.log(`Server running at http://localhost:${port}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
