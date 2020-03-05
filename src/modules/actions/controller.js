import ActionServices from "./service"


const ActionController = {
 getAllActions : (req, res) => {
    ActionServices.getAll(req, results => {
    //will be executed once the service is finished 
    results.success ? res.status(200).send(results) : res.status(404).send(results)
   })  
 },
 getActionsById : (req, res) => {
   ActionServices.getById(req.params.id, results =>{
     //console.log('coucou')  
     results.success ? res.status(200).send(results) : res.status(404).send(results)  
   })  
 },
 postNewAction : (req, res ) => {
     console.log(req.body)
   ActionServices.createOne(req.body)
    .then(results => res.status(results.status).send(results.payload) )
 }

}

export default ActionController