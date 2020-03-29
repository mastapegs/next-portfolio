export default (req, res) => {
  
  console.log(req.method);
  console.table(req.body);

  


  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: "Success" }))
}