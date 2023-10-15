const { getDb } = require('../Data/db')

class Poll {

    constructor(poll) {
        this.title = poll.title
        this.options = poll.options // array [{string ,number}]
        this.total = poll.total
        this.by = poll.by
    }

    static async getPolls() {
        try {
            const cursor = await getDb().collection('polls').find();
            const polls = await cursor.toArray();
            return polls;
        } catch (error) {
            console.error('Error retrieving polls:', error);
            throw error;
        }
    }

    async createPoll() {
        try {
            await getDb().collection('polls').insertOne({ title: this.title, options: this.options, total: this.total, by: this.by })
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = { Poll };