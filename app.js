const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send({ message: "test1 version-9" }).status(200)
})
app.listen(3001, () => {
    console.log("listening on 3001")
});