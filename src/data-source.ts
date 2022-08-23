import mongoose from "mongoose";

class DataSource{
    constructor(){
    }
    connect() {
        const DB_URL = 'mongodb://localhost:27017/baithi1';
        mongoose.connect(DB_URL)
        .then(() => {
            console.log('Connect success');
        })
        .catch(() => {
            console.log('Connect Error');
        });
    }
}

export default new DataSource();