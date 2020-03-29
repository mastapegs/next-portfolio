import mongoose from 'mongoose'
import ContactSubmitSchema from '../../models/ContactSubmit'
const ContactSubmit = mongoose.model("contactSubmits", ContactSubmitSchema);

export default (req, res) => {
  
  console.log(req.method);
  console.table(req.body);
  const { name, email, message } = req.body;

  console.log(process.env.ATLASURI);
  mongoose.connect(process.env.ATLASURI, {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected to Atlas");

    const newSubmit = new ContactSubmit({
      name,
      email,
      message
    });
    console.log(newSubmit)

    newSubmit.save((err)=>{
      if (err) return err;
      console.log("New Submission");
    });

  });

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: "Success" }))
}