var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const mongoose = require('mongoose');
require('./components/admin/model');

var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var newspaperRouter = require('./routes/newspapers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mykey',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))
//Đưa đường link vào thay đổi 'Password' với tên 'Database ' {user: VoThanhNam; password: 18092001: tên database: Spring202216301}
mongoose.connect('mongodb+srv://VoThanhNam:18092001@cluster0.5fgdb.mongodb.net/Newspaper?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

app.use('/admin', adminRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/newspaper', newspaperRouter);

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

module.exports = app;
