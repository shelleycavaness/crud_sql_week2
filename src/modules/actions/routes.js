import express from "express";
const router = express.Router();

import {  actionsGetAll, getActionsById, postNewAction, postUpdatedAction, deleteAnAction } from "./controller";
//Private routes
router.post('/save', postNewAction)  
router.put('/:id', postUpdatedAction )
router.delete('/:id', deleteAnAction)

//Public routes

// router.get('/', (request, response) => { console.log( "i'm the defi router" )});
router.get('/all', actionsGetAll)
router.get('/:id', getActionsById)




export default router