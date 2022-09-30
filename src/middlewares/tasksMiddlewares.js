const valideteFildTitle = (request,response, next) => {
  const { body } = request;

  if(body.title === undefined){
    return response.status(400).json({message: 'The field "Title" is required'});
  }

  if(body.title === ''){
    return response.status(400).json({message: 'Title cannot be empty'});
  }

  next();
};

const valideteFildStatus = (request,response, next) => {
  const { body } = request;

  if(body.status === undefined){
    return response.status(400).json({message: 'The field "Status" is required'});
  }

  if(body.status === ''){
    return response.status(400).json({message: 'Status cannot be empty'});
  }

  next();
};

module.exports = { 
  valideteFildTitle,
  valideteFildStatus

};