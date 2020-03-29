import mongoose from 'mongoose'

export default (req, res) => {
  
  console.log(req.method);
  console.table(req.body);


  mongoose.connect(process.env.atlasURI, {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected to Atlas");
  });

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: "Success" }))
}