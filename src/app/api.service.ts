import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addProduct = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

  fetchProduct = () => {
    return this.http.get("http://localhost:8080/view")
  }

  searchProduct = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }

  login = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/login", dataToSend)
  }

  verify = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/verify",dataToSend)
  }

  getProfile = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/userprofile",dataToSend)
  }
}
