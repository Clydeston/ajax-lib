const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.post('/test', (req, res) => {
    /* If content type is not explicitly set / incorrectly set
    req.body will be empty */
    console.log(req.body);
    res.send('Post accepted!')
})

app.listen(port, () => {
console.log(`Server @ http://localhost:${port}`)
})