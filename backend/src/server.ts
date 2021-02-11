import express from 'express';
import path from 'path'
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHanlder from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHanlder);



// app.listen(3333);

app.listen(3333, () => {
    console.log("🚀 server start on 3333!")
  })