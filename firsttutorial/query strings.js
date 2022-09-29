let peoples = require('./data')
let express = require('express')
let app = express()

app.get('/app/query',(req,res)=>{

    let {search} = req.query

    let personsdata = peoples.peoples.filter(person=>{
        return person.name.toLowerCase().startsWith(search.toLowerCase())
    })

    res.send(personsdata)
    res.end()
})

app.listen(4000)

