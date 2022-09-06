import mongo from 'mongodb'

let connection_string =
    'mongodb+srv://Matej:Admin12aa@cluster0.7fgyzss.mongodb.net/?retryWrites=true&w=majority'

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null

export default () => {
    return new Promise((resolve, reject) => {
        if (db && client.isConnected()) {
            resolve(db)
        }

        client.connect(err => {
            if (err) {
                reject('Doslo je do greske ' + err)
            } else {
                // console.log("Uspijesno spajanje na bazu")
                db = client.db('Skale')
                resolve(db)
            }
        })
    })
}