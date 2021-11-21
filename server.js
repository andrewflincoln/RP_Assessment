const express = require('express')

const app = express()

app.get('/', (req, res) => res.send({msg: 'Welcome to RadPoker Assessment'}))

app.use('/api/customers', require('./routes/customers'))
app.use('/api/accounts', require('./routes/accounts'))
app.use('/api/contests', require('./routes/contests'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))