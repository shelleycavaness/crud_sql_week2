import ActionQueries, { createOne } from "./query";

const ActionServices = {
  getAll: (req, callback) =>{
    ActionQueries.getAll(req, response => {
      return callback({success: true, message: response})  
    },
    error => {
      return callback( { success: false, message: err})  
    })
  },
  getById : (id, callback) => {
    ActionQueries.getById(id, response =>{
      return callback( {success: true, message: response})  
    },
    error => {
      return callback({ success: false, message: error})  
    })  
  },
  createOne : (body, callback) => {
    let { action_title, action_description, action_impact, action_points } = body; 
    
    console.log('mmmmmmmmmmmmmmmmmmmmmmm')
    console.log(action_title)
    console.log(action_description)
    console.log(action_impact)
    console.log(action_points)
    console.log('mmmmmmmmmmmmmmmmmmmmmmm')
    // After query comes back return a user and save it in the DataBase
    

    return createOne(action_title, action_description, action_impact, action_points);
  },
}





export default ActionServices;