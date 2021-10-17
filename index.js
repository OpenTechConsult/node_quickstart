const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://eagboka:mBdgg88ygtpEzMmW@node-quickstart-cluster.fspo2.mongodb.net?retryWrites=true&w=majority"

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        const database = client.db('sample_airbnb')
        const condos = database.collection('listingsAndReviews')

        // query for a condo that has a name Ribeira Charming Duplex"
        const query = { name: 'Ribeira Charming Duplex'}
        const condo = await condos.findOne(query)
        console.log(condo)
    } catch (error) {
        console.log(error)
    } finally { 
        await client.close()
    }
}

run()
