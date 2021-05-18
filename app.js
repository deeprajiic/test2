const express = require(express);
const app = express();
app.get("/", (req, res) => {
    res.send("hellow from test 2")
})
app.listen(3001, () => {
    console.log("listening on 3001")
});