const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://_:privy-wzlaa@stitch.mongodb.com:27020/home_content', {
//     useNewUrlParser: true
// });
// mongoose.connect('mongodb+srv://9pyr:dwda190bd7XlI@privy-2iz6a.mongodb.net/home_content', {
//     useNewUrlParser: true
// });
app.use(express.json());
//* สร้าง database schema
// const Content = mongoose.model('contents', { forums: String });

//* สร้าง instance จาก model
// const kitty = new Content({ forums: 'Forums 2' });

//* save ลง database (return เป็น Promise)
// kitty.save().then(() => console.log('\n meow \n'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});
// app.use('/contents', (req, res) => res.send("test"))

app.get('/contents', async (req, res) => {
    console.log("in content");
    
    // const cons = await Content.find({});
    res.status(200).json({word : "hello world"});
    // console.log(res.json(cons));
})
//* Server static assets
app.use(express.static(path.resolve(__dirname, './', 'build')));

app.get('/', (req, res) => {
    console.log("in *");
    res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
