var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");

const publicRouter = require("./routes/public/index");
//const dashboardRouter = require("./routes/dashboard");
//const loginRouter = require("./routes/login");
//const usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.deleteAllCookies = function () {
    for (let cookie of Object.keys(req.cookies)) {
      res.clearCookie(cookie);
    }
    //return this;
  }
  next();
});

app.use(express.static('css'));

app.use('/', publicRouter);
//app.use('/dashboard', dashboardRouter);
//app.use('/login', loginRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post(function (req, res, next) {
  next();
});

module.exports = app;
