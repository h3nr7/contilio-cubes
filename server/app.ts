import express from 'express';
import { promises as fs } from 'fs';
import { json, urlencoded } from 'body-parser';
import path from 'path';

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));

// api serve json data
app.use('/api/data', async (req, res, next) => {
  const data = await fs.readFile(path.join(__dirname, '..', 'public', 'data.json'), 'utf-8');
  res.json(JSON.parse(data));
})

// serve static files
app.use(express.static(path.join(__dirname, '..', 'build')));

// catch all
app.use('*', express.static(path.join(__dirname, '..', 'build/index.html')))

app.listen(3000, () => {
  console.log(path.join(__dirname, '..', 'build'));
  console.log('server connected');
});