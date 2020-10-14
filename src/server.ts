import express, { request, response } from 'express';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orphanages', (request, response) => {

    return response.json({ message: request.body });
});

app.listen(3333);
