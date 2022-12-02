const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/counting-sheep', {
    useNewUrlParse: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose.connection;