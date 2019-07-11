import express from 'express';

const messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

export default {
  index: (_req: express.Request, res: express.Response) => {
    res.send(Object.values(messages));
  },
  show: (_req: express.Request, res: express.Response) => {
    res.send(Object.values(messages)[_req.params.messageId - 1]);
  },
};
