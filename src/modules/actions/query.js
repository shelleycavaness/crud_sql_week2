import db from "../../setup/database";

//ES6 query for get all in database eco_actions
export const queryGetAll = (param, successCallback, failCallback) => {
  let sqlQuery = "SELECT * FROM `eco_actions`";

    db.query(sqlQuery, (err, rows) => {
      if(err) { 
        return failCallback(err)
    }
      if(rows.length > 0){
        return successCallback(rows)  
      } else {
       return successCallback(" no actions ")   
      } 
    })
}

export const queryGetById = (id, successCallback, failCallback) => {
  let sqlQuery = `SELECT * FROM eco_actions WHERE ID=${id}`;

  db.query(sqlQuery, (err, rows) => {
   if(err) { 
       return failCallback(err);
      }
   if(rows.length > 0) { 
       return successCallback(rows[0])
      }
   else{ 
      return successCallback('no matching id')
  
  }   
  })  
}

export const queryCreateOne =  (action) => {
  
return new Promise ((resolve, reject) => {
  let sqlQuery = `INSERT INTO eco_actions 
  (id, action_title, action_description, action_impact) VALUES (NULL, "${action.action_title}", "${action.action_description}", "${action.action_impact}");`;

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
};

export const queryUpdate = (id, successCallback, failCallback) => {
  let sqlQuery = `UPDATE  eco_actions 
  SET action_title="${action_title}", action_description="${action_description}", action_impact="${action_impact}" 
  WHERE id=${id};`
  db.query(sqlQuery, (err, result) =>{
    if(err){
      console.log('***********************************')
      return failCallback(err);
    }
    if(result.affectedRows > 0) {
      return successCallback(`${result.affectedRows} have been changed`)
    }
  })
};


// //Test Input for String
// if( typeof action_title !== "string" || typeof action_description !== "string" || action_impact !== "string" || action_points !== "number" ){
//     return { status : 400, payload: { success: false, message : 'All fields require a sting type except action_points'}}  
// }

// ls
