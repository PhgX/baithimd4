import { Request, Response, NextFunction } from "express";
import {Employee} from '../model/employee';

class EmployeeController {
    getAll = async (req: Request, res: Response) => {
        let employees = await Employee.find();
        res.status(200).json(employees);
    }

    addEmployee = async (req: Request, res: Response, next: NextFunction) => {
       try {
           let employee = req.body;
           console.log(employee);
           let employeeNew = await Employee.create(employee);
           res.status(201).json(employeeNew);
       }catch (error){
           next(error);
       }
    }

    deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let employee = await Employee.findById(id);
            if (!employee) {
                res.status(404).json();
            } else {
                employee.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getEmployee = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let employee = await Employee.findById(id);
            if (!employee) {
                res.status(404).json();
            } else {
                res.status(200).json(employee);
            }
        } catch (error) {
            next(error)
        }
    }

    updateEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;
        let employee = await Employee.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Employee.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            employee = await Employee.findById(id);
            res.status(200).json(employee);
        }
    }
    getOneEmployee =async (req: any, res: Response, next: NextFunction) => {
        let id = req.params.id;
        let employee = await Employee.findById(id);
        try{
            if(!employee){
                res.status(404).json();
            }else{
                res.status(200).json(employee);
            }
        }catch(err){
            next(err);
        }
    }
}

export default new EmployeeController();