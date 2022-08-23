import {model, Schema} from 'mongoose';

interface IEmployee {
    code?: string;
    name?: string;
    age?: number;
    salary?: number;
    branch?: string;
}

const employeeSchema = new Schema<IEmployee>({
    code: String,
    name: String,
    age: Number,
    salary: Number,
    branch: String
})

const Employee = model<IEmployee>('Employee', employeeSchema);
export {Employee};
