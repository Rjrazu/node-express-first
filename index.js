const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())

const port = 5000;

const users = [
    { id: 0, name: "Ashadul Islam", email: "Sincere@april.biz" },
    { id: 1, name: "Raju Ahmed", email: "Sincere@april.biz" },
    { id: 2, name: "Shuvo Ahmed", email: "Sincere@april.biz" },
    { id: 3, name: "Rashel Ahmed", email: "Sincere@april.biz" },
    { id: 4, name: "Ashraful Islam", email: "Sincere@april.biz" },
    { id: 5, name: "Juyel Rana", email: "Sincere@april.biz" },
]

//
app.get('/', (req, res) => {
    res.send('Hello World I am Using BackEnd Firs Time!')
})

//
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query params
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)

    }
})

//app Method

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)


    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})




//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})


app.listen(port, () => {
    console.log(`Example app listening wow at http://localhost:${port}`)
})