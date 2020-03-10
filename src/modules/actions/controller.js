import  { getAllActions, createOneAction, getActionById, UpdateAction } from "./service"


export const actionsGetAll = (req, res) => {
  getAllActions(req, results => {
    //will be executed once the service is finished 
    results.success ? res.status(200).send(results) : res.status(404).send(results)
   })  
 }

 export const getActionsById = (req, res) => {
  getActionById(req.params.id, results => {
    //console.log('coucou')  
    results.success ? res.status(200).send(results) : res.status(404).send(results)  
  })  
}

export const postNewAction = (req, res ) => {
  createOneAction(req.body)
  .then(results => res.status(201).send(results))
  .catch((err) => {
    res.status(500).send(err);
  })
}

export const postUpdatedAction = (req, res) =>{
    UpdateAction(req.params.id, results => {
      console.log('222222222222222222222222222222222222222')  
      if(!results.success) {
        console.log('error update controler')  
        res.status(404).send(results) 
      } else {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')  
        res.status(200).send(results)
      }  
  })
}
