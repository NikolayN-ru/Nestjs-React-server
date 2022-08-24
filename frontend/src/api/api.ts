import axios from "axios";

 export const api = axios.create({
 	// baseURL: 'https://jsonplaceholder.typicode.com',
 	baseURL: 'http://localhost:5000',
	headers: {
		'Content-Type': 'application/json',
	}
 })
