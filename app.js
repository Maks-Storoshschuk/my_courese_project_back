const express = require('express');
const mongoose = require('mongoose');

const {MONGO_CONNECT_URL,PORT} = require('./configs/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(MONGO_CONNECT_URL);

const {usersRouter,commentsRouter,drinkerRouter,placesRouter,newsRouter}= require ('./routes');

app.use('/places',placesRouter);
app.use('/users',usersRouter);
app.use('/drinker',drinkerRouter);
app.use('/news',newsRouter);
app.use('/comments',commentsRouter);

app.listen(PORT, () => {
    console.log(`app listen ${PORT}`);
});

