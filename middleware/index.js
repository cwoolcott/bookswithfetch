const logging = (req, res, next) => {
  console.log(`${req.method} ${req.path} LOGGED.`);
  next();
};

exports.logging = logging;
