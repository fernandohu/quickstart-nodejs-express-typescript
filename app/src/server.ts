import express from 'express';

import messageRoutes from './domains/message/routes';
import userRoutes from './domains/user/routes';

const server = express();

server.use('/messages', messageRoutes);
server.use('/users', userRoutes);

server.use('/healthcheck', (_req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

export default server;
