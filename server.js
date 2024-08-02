const express = require('express');
const port = 5000;

const app = express();

app.get('/', (request, response) => {
  response.send('Welcome to the Random Ideas API');
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
