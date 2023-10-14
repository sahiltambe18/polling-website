const {getDb} = require('../Data/db')
const {Poll} = require("../model/Poll.model")

const getPolls = async(req,res)=>{
    const polls = await Poll.getPolls();
    console.log(polls,"ending")
    res.json(polls)
}

const createPoll = async(req,res)=>{
    console.log(req.body)
    const pollObj = req.body;
    const poll = new Poll(pollObj)
    await poll.createPoll()
    await getDb().collection('polls').insertOne({...pollObj})
    res.json({message:"success"})
}


module.exports = {
    getPolls,
    createPoll
}