// import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './../redux/index';
import axios from "axios";

// const dispatch = useAppDispatch();
// const useSelector = useAppSelector(({user}) => user);
// console.log(useSelector);


 export const api = axios.create({
 	// baseURL: 'https://jsonplaceholder.typicode.com',
 	baseURL: 'http://localhost:5000',
	 "headers": {
		// 'Content-Type': 'application/json',
		"Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJQZXR5YTIiLCJlbWFpbCI6Im5hcGFkYXlsbzJAZ21haWwuY29tIiwiaWF0IjoxNjYxMzM2OTI3fQ.aThUXR0_aVoeAVQbnCEfN6T5s5eoDrEIBIfNxcidqzg"
	}
 })
