import mongodb from 'mongodb';

/**
 * @returns {mongodb.Db}
 */
const MongoDataSourceFactory = async ()=> {
    try {
        const MongoClient = mongodb.MongoClient;
        const options = {
            useNewUrlParser: true,
            poolSize: 10,
            ssl: "S" === process.env.SSL
        };

        const client = await MongoClient.connect(process.env.DATASOURCE, options);
        console.log('DB CONECTED');
        return client.db();
    } catch (error) {
        console.log('CONNECTION ERROR...',error);
    }
}

export const MongoDataSource = MongoDataSourceFactory();
