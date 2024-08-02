const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different colour, as the milk gets older',
    tag: 'Inventions',
    username: 'SadieRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest atm is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
  {
    id: 4,
    text: 'Travel app that gives you a starter pack to hit the ground running, when you arrive in a new location',
    tag: 'Technology',
    username: 'RuthAtlas',
    date: '2022-01-02',
  },
];

app.get('/', (request, response) => {
  response.send('Welcome to the Random Ideas API');
});

// get all ideas
app.get('/api/ideas', (request, response) => {
  response.json({ success: true, data: ideas });
});

// get a single idea
app.get('/api/ideas/:id', (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    response.status(404).json({ success: false, error: 'Resource not found' });
  }

  response.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
