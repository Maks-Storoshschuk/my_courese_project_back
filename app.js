const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/drinker');

const {usersRouter,commentsRouter,drinkerRouter,placesRouter,newsRouter}= require ('./routes');

app.use('/places',placesRouter);
app.use('/users',usersRouter);
app.use('/drinker',drinkerRouter);
app.use('/news',newsRouter);
app.use('/comments',commentsRouter);

app.listen(5000, () => {
    console.log(`app listen 5000`);
});

