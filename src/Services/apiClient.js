import axios from "axios";
import React from 'react'

const apiClient = axios.create ({}) ;
apiClient.interceptors.request.use(
    (config)=>{
        console.log(config);
        if(!config.url.endsWith("/login")){
            let token =JSON.parse(localStorage.getItem("token"))
        config.headers["Autorization"]=`Bearar${token}`;
        }
        return config;
    },
    function (error){
        console.log(error);
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
    (error)=>{
        console.log(error);
        if(error.response.status===400){
            console.log("hdsfsdg");
        }
        return Promise.reject(error);
    }
);

export default apiClient;