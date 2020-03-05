import db from "../../setup/database";

export const createOne = (action_title, action_description, action_impact, action_points) => {
    console.log('--------------------------------------')
    console.log('action title', action_title)
    console.log('action desc', action_description)
    console.log('action impact', action_impact)
    console.log('action points', action_points)
    console.log('--------------------------------------')

    return new Promise ((resolve, reject) => {
        console.log('blablablabla')
      let sqlQuery = "INSERT INTO eco_actions (id, action_title, action_description, action_impact, action_points) VALUES (NULL, '"+action_title+"','"+action_description+"', '"+action_impact+"', "+action_points+");";
        console.log('SQL REQUEST', sqlQuery)
      db.query(sqlQuery, (err, res) => {
        if(err) {
            console.log('****************', err)
            reject(err) 
        }
        else {
            console.log('fffffffffffffff')
            resolve(res);
        }
        }) 
    })  };

//calling the database and sending to the service

const Queries = {
  getAll: (param, successCallback, failCallback) => {

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
  },
  getById: (id, successCallback, failCallback) => {
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
  },

//uses a promise to insert a new action into the database
  createOne: (action_title, action_description, action_impact, action_points) => {
    console.log('--------------------------------------')
    console.log('action title', action_title)
    console.log('action desc', action_description)
    console.log('action impact', action_impact)
    console.log('action points', action_points)
    console.log('--------------------------------------')

    return new Promise ((resolve, reject) => {
        console.log('blablablabla')
      let sqlQuery = "INSERT INTO eco_actions (id, action_title, action_description, action_impact, action_points) VALUES (NULL, '"+action_title+"','"+action_description+"', '"+action_impact+"', "+action_points+");";
        console.log('SQL REQUEST', sqlQuery)
      db.query(sqlQuery, (err, res) => {
        if(err) {
            console.log('****************', err)
            reject(err) 
        }
        else {
            console.log('fffffffffffffff')
            resolve(res);
        }
        }) 
    })  
  }  



}

export default Queries;

// //Test Input for String
// if( typeof action_title !== "string" || typeof action_description !== "string" || action_impact !== "string" || action_points !== "number" ){
//     return { status : 400, payload: { success: false, message : 'All fields require a sting type except action_points'}}  
// }