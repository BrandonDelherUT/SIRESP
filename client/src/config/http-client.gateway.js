import { decrypt, encrypt } from "../config/aes";
import instance from "./axios";
const token = localStorage.getItem("token");
instance.interceptors.request.use(
    //cambiar el objeto del data por la cadena encryptada

     
    (config) => {
        const data = config.data;
        const url = config.url;
        const method=config.method
      
        config.headers = {
            
            Authorization : `Bearer ${token}`,
            'Content-Type': 'application/json',
        };  
      
       
        if (data != null && url!="/user/upload"&&url!="/host/upload"&&method!="GET"&&method!="DELETE") {
            console.log("Entro Aqui?")
            const dataString = {data:encrypt(data)}
            const jsonData = JSON.stringify(dataString);
            config.data = jsonData
      
        }
     
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (response) => {
        if (response.config.method==="get") {
            const data = response.data;
            if (data) {
                response.data = decrypt(data);
            } 
        } 
        
       
        
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default {

    async doPost(url, data) {
        return await instance.post(url, data);
    },
    async deDelete(url) {
        return await instance.delete(url);
    },
    
    async doGet(url) {
        return await instance.get(url);
    },
    
    


 
};

