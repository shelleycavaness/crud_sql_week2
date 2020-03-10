import { queryGetAll, queryGetById, queryCreateOne, queryUpdate } from "./query";


export const getAllActions = (req, callback) =>{
  queryGetAll(req, response => {
    return callback({success: true, message: response})  
  },
  error => {
    return callback( { success: false, message: err})  
  })
}

export const getActionById = (id, callback) => {
  queryGetById(id, response => {
    return callback( {success: true, message: response})  
  },
  error => {
    return callback({ success: false, message: error})  
  })  
}

export const createOneAction = (body) => {  
  return queryCreateOne(body);
}

export const UpdateAction = (id, callback ) => {
      queryUpdate(id, response => {
        console.log('SERVICEEEEEEEEEEEEEEEEEEEEEEEEEE')
        return callback( {success: true, message: response})  
      },
      error => {
        return callback({ success: false, message: error})  
      })  
}
