import { Router } from "express";
import employeeController from "../controller/employee-controller";

export const router = Router();

router.get('/employee', employeeController.getAll);
router.get('/employee/:id', employeeController.getOneEmployee);
router.post('/employee', employeeController.addEmployee);
router.put('/employee/:id', employeeController.updateEmployee);
router.delete('/employee/:id', employeeController.deleteEmployee);


