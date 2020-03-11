import  { getAllActions, createOneAction, getActionById, UpdateAction, DeleteAction } from "./service"


export const actionsGetAll = (req, res) => {
  console.log("GETALLACTIONS");
  getAllActions().then((results) => {
    results ? res.status(200).send(results) : res.status(404).send(results) // should be an error code (no return from database)
  }).catch((err) => {
    console.log(err);
  });
 } 

export const getActionsById = (req, res) => {
  getActionById(req.params.id) 
    .then((results) => res.status(200).send(results))
    .catch( (err) => res.status(404).send(err) )
}

export const postNewAction = (req, res ) => {
  createOneAction(req.body)
  .then(results => res.status(201).send(results))
  .catch((err) => {
    res.status(500).send(err);
  })
}

export const postUpdatedAction = (req, res) =>{
    UpdateAction(req.body, req.params.id)
    .then( results => res.status(200).send(results))
    .catch((err) => {
      res.status(500).send("post updated action unsucessful")
      console.log(err)
    })
}

export const deleteAnAction = (req, res) => {
  DeleteAction(req.params.id)
  .then(results => res.status(204).send({}))
  .catch((err) =>{
    res.status(500).send("delete unsucessful")
    console.log(err)
  })
}