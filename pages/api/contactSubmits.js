export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const MongoClient = require('mongodb').MongoClient;
    await (async () => {
      const dbName = 'next-portfolio';
      const client = new MongoClient(process.env.ATLASURI, { useNewUrlParser: true });
      try {
        await client.connect();
        const db = client.db(dbName);
        let response = await db.collection('contactSubmits').insertOne({
          name,
          email,
          message
        });
      } catch (err) {
        console.log(err.stack);
      }
      client.close();
    })();

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.body))
  }
}