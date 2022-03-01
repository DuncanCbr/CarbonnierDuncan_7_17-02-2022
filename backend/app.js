const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


app.use(express.json());
app.use(cors());
const db = require('./models');

// routers
const postRouter = require('./routes/Posts')

app.use("/images", express.static(path.join(__dirname, "images")))
app.use("/posts", postRouter);



db.sequelize.sync().then(() => {
    app.listen(3002, () =>{ 
        console.log("server running on port 3002");
    });
});