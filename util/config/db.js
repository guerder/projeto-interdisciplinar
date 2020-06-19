var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/catalogo', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

