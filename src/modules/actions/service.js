import db from "../../setup/database";

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
       resolve([]) // empty array for front
      } 
    })
  })
}



export const getActionById = (id) => {
 return new Promise((resolve, reject) => {
  let sqlQuery = `SELECT * FROM eco_actions WHERE ID=${id}`;

  db.query(sqlQuery, (err, rows) => {
    if(err) { 
        console.log( "ERROR", err);
        reject(err)
        }
    if(rows.length > 0) { 
        resolve(rows[0])
        }
    else{ 
        resolve('no matching id') 
    }   
  })  
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
          reject(err);
        }
        if(result.affectedRows > 0) {
          resolve(`${result.affectedRows} have been changed`)
        }
      })
    })
}
export const DeleteAction = (id) => {
  return new Promise((resolve, reject) => {
    let sqlQuery = `DELETE from eco_actions 
    WHERE id=${id};`
    db.query(sqlQuery, (err, result) => {
      if(err){
        console.log("error")
        reject(err)
      }
      if(result){
        resolve({}) //send an empty object
      }
    })
  })

}