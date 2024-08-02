const express = require('express');

const router = express.Router();

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

// get all ideas
router.get('/', (request, response) => {
  response.json({ success: true, data: ideas });
});

// get a single idea
router.get('/:id', (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    response.status(404).json({ success: false, error: 'Resource not found' });
  }

  response.json({ success: true, data: idea });
});

//Add and idea

router.post('/', (request, response) => {
  const idea = {
    id: ideas.length + 1,
    text: request.body.text,
    tag: request.body.tag,
    username: request.body.username,
    date: new Date().toISOString().slice(0, 10),
  };
  console.log(idea);
  ideas.push(idea);
  response.json({ success: true, data: idea });
});

module.exports = router;
