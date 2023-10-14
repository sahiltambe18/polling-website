const router = require('express').Router();
const {getPolls , createPoll } = require('../controller/poll.controller')

router.get('/',getPolls);

router.post('/poll',createPoll);

module.exports = router;