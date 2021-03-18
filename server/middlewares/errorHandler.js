function errorHandler(err, req, res, next){
  console.log('masuk error handler')
  console.log(err.name)
  console.log(err)
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json(err.errors[0].message)
      break;
    case 'SequelizeUniqueConstraintError':
      res.status(400).json(err.errors[0].message)
      break;
    case 'BadRequest':
      res.status(err.status).json(err.msg)
      break;
    default: 
      res.status(500).json({msg: 'Internal Server Error'})
      break;
  }
}

module.exports = { errorHandler }