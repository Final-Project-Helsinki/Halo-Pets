function errorHandler(err, req, res, next){
  console.log('masuk error handler')
  console.log(err.name)
  console.log(err)
  switch (err.name) {
    case 'SequelizeValidationError':
      let response = []
      err.errors.forEach(el => {
        response.push(el.message)
      })
      res.status(400).json(response)
      break;
    case 'SequelizeUniqueConstraintError':
      let responseUnique = []
      err.errors.forEach(el => {
        responseUnique.push(el.message)
      })
      res.status(400).json(responseUnique)
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