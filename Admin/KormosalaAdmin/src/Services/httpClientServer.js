import { BASE_URL } from "./const";
import axios from "axios";






// Get All Data
export const getAllData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getAllAuthData = async (endpoint,token) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {headers:{
            'Authorization':`Bearer ${token}`
        }});
        return response;
    } catch (error) {
        console.log(error);
    }
}


// Get Data By Id
export const getDataById = async (endpoint, id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


// Create Data
export const createData = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
            'Content-Type': 'application/json',
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}


// Update Data
export const updateData = async (endpoint, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}`, payload);
        return response
    } catch (error) {
        console.log(error);
    }
}


// Delete Data
export async function deleteData(endpoints, id) {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoints}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Upload File
// export const uploadFile = async (endpoint, file) => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//         const response = await axios.post(`${BASE_URL}/${endpoint}`, formData{
//             headers: {
//                 'Content-Type': 'multipart/form-data';
//             },
//         });
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// }


// Create user
export async function authenticationData(endpoint, payload) {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

// ?  Autherization

export async function authorizationData(endpoint, payload) {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

// ?  Autherization


// ! Code For Google Login
export const googleLoginData = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}
// ! Code For Google Login

// ? Auhth with jwt token configuration

// export const setAuthToken = token => {
//     if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
//     } else
//         delete axios.defaults.headers.common["Authorization"];
// }

// ? Auhth with jwt token configuration


export const endpoints = {
    industries: "industries",
    categories: "categories",
    companies: "companies",
    blogs: "blogs",
    jobs: "jobs",
    uploadfile: "uploadfile",
    locations: "locations",
    GetCategoryWithJobs: "getcategorywithjobs",
    users: "users",
    auth: "auth",
    login: "login"
}