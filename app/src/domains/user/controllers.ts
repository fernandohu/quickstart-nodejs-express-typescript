import express from 'express';

const users = {
  1: {
    id: '1',
    username: 'Donald Trump',
  },
  2: {
    id: '2',
    username: 'Barack Obama',
  },
};

export default {
  index: (_req: express.Request, res: express.Response) => {
    res.send(Object.values(users));
  },
  show: (_req: express.Request, res: express.Response) => {
    res.send(Object.values(users)[_req.params.userId - 1]);
  },
};
