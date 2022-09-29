const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = Date.now();
  console.log(method, url, time);
  next();
};

const authorize = (req, res, next) => {
  let data = req.query;
  let url = req.url
  console.log(url)

  if (Number(data.key) === 12345) {
    console.log("authorised");
    console.log(data);
    next();
  }else{
    res.status(401).send('unauthorised')
  }
  
};

module.exports = { logger, authorize };
