const fs = require("fs")
const express = require("express")
const app = express()

const currentdate = new Date();
const date = currentdate.getDate() + "-" + currentdate.getMonth() + "-" + currentdate.getFullYear() + "_" + currentdate.getHours() + ":" + currentdate.getMinutes()

app.post('/create', (req, res) => {
    fs.writeFile(`./file-system/${date}.txt`, `${currentdate.toLocaleString()}`, (err, data) => {
        if (err) {
            return res.send({ message: "File not created", err })
        }
        res.send({ message: "File created successfully" })
    })
})

app.get('/retrive', (req, res) => {
    fs.readdir("./file-system", (err, data) => {
        if (err) {
            return res.send({ message: "Failed to retrive the file", err })
        }
        res.send({
            message: "File retrived successfully",
            File: data
        })
        console.log("Data: ", data)
    })
})

app.listen(4848)