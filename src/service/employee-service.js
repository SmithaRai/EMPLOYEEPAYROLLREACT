import config from '../config/config';
import axios from 'axios';

class EmployeeService {
    baseURL = config.baseURL;
    addEmployee = (data) => {
            console.log(data);
            return axios.post(`${this.baseURL}/create` ,data);
        }

    getAllEmployees = () => {
        return axios.get(`${this.baseURL}/get`);
    } 
    
}

export default new EmployeeService();