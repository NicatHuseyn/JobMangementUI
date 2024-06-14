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
export async function deleteData(endpoint, id) {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


export const endpoints = {
    industries: "industries",
    categories: "categories",
    companies: "companies",
    blogs: "blogs",
    jobs: "jobs"
}