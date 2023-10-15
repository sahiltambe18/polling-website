
const {Poll} = require("../model/Poll.model")

const getPolls = async(req,res)=>{
    const polls = await Poll.getPolls();
    res.json(polls)
}

const createPoll = async(req,res)=>{
    console.log(req.body)
    const pollObj = req.body;
    const poll = new Poll(pollObj)
    await poll.createPoll()
    res.json({message:"success"})
}


module.exports = {
    getPolls,
    createPoll
}