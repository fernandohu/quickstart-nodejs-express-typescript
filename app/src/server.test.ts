import req from 'supertest';

import server from './server';

test('[GET] /healthcheck', async () => {
  const res = await req(server).get('/healthcheck');
  expect(typeof res.body.uptime).toBe('number');
});
