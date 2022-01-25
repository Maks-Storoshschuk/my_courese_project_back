const express = require('express');

const app = express();

const {usersRouter,commentsRouter,drinkerRouter,placesRouter,newsRouter} = require ('/routes/index');

app.use('/places',placesRouter);
app.use('/users',usersRouter);
app.use('/drinker',drinkerRouter);
app.use('news',newsRouter);
app.use('comments',commentsRouter);

app.listen(5000, () => {
    console.log(`app listen 5000`)
});

