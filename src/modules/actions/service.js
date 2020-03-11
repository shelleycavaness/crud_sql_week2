import { queryGetAll, queryGetById, queryCreateOne, queryUpdate } from "./query";
import db from "../../setup/database";


// export const getAllActions = (req, callback) => {
//   queryGetAll(req, response => {
//     return callback({success: true, message: response})  
//   },
//   error => {
//     return callback( { success: false, message: err})  
//   })
// }
export const getAllActions = () => {
  return new Promise((resolve, reject) => {
    let sqlQuery = "SELECT * FROM `eco_actions`";

    db.query(sqlQuery, (err, rows) => {
      if(err) { 
        console.log("ERROR", err);
        reject(err)
    }
    console.log("ROWS", rows);
      if(rows.length > 0){
        resolve(rows)  
      } else {
       resolve([])   
      } 
    })
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

return new Promise ((resolve, reject) => {
  let sqlQuery = `INSERT INTO eco_actions 
  (id, action_title, action_description, action_impact) VALUES (NULL, "${body.action_title}", "${body.action_description}", "${body.action_impact}");`;

  db.query(sqlQuery, (err, res) => {
      if(err) {
          console.log('****************', err)
          reject(err) 
      }
      else {
          console.log('fffffffffffffff', res)
          resolve(res);
      }
    }) 
  })  


}

export const UpdateAction = (body, id) => {
    return new Promise ((resolve, reject) => {
      let sqlQuery = `UPDATE  eco_actions 
      SET action_title="${body.action_title}", action_description="${body.action_description}", action_impact="${body.action_impact}" 
      WHERE id=${id};`
      db.query(sqlQuery, (err, result) =>{
        if(err){
          console.log('***********************************')
          reject(err);
        }
        if(result.affectedRows > 0) {
          resolve(`${result.affectedRows} have been changed`)
        }
      })
    })
}
