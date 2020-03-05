import express from "express";
const router = express.Router();

import ActionController from "./controller";
//Private routes
router.post('/save', ActionController.postNewAction)

//Public routes

// router.get('/', (request, response) => { console.log( "i'm the defi router" )});
router.get('/all', ActionController.getAllActions)
router.get('/:id', ActionController.getActionsById)



export default router