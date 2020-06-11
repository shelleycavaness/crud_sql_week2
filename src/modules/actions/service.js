import db from "../../setup/database";

export const getAllActions = () => {
  return new Promise((resolve, reject) => {
    let sqlQuery = "SELECT * FROM `actions`";

    db.query(sqlQuery, (err, rows) => {
      if(err) { 
        console.log("ERROR", err);
        reject(err)
      }
    // console.log("ROWS", rows);
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
  let sqlQuery = `SELECT * FROM actions WHERE ID=${id}`;

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
    let sqlQuery = `INSERT INTO actions 
    (id, title, description, impact) VALUES (NULL, "${body.title}", 
    "${body.description}", "${body.impact}");`;
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
      let sqlQuery = `UPDATE  actions 
      SET title="${body.title}", description="${body.description}", impact="${body.impact}" 
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
    let sqlQuery = `DELETE from actions 
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