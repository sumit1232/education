import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StaffDataService {
  
  registerurl = "http://localhost:3000/register";
  
  loginUsers = "http://localhost:3000/logindata";
  
  url = "http://localhost:3000/users";
  saveenquiry = "http://localhost:3000/saveEnquiry"; 
  eventurl = "http://localhost:3000/eventbook";
  paymenturl = "http://localhost:3000/payment";
  contacturl = "http://localhost:3000/contact";
  venuesurl = "http://localhost:3000/venus";
  addtrainerurl = "http://localhost:3000/trainer";
  addbatchurl = "http://localhost:3000/addbatch";
  constructor(private http: HttpClient) { }
  
  registerUsers(data: any) {
    return this.http.post(this.registerurl, data);
  }

  loginusers(data: any) {
    return this.http.post(this.loginUsers, data);
  }

  users() {
    return this.http.get(this.url);
  }
  saveUsers(data: any) {
    return this.http.post(this.saveenquiry, data);
  }

  contactus(data: any) {
    return this.http.post(this.contacturl, data);
  }

  // For Send User Enquiry Data  
  saveEnquiry(data: any) {
    return this.http.post(this.saveenquiry, data);
  }
  // For Display USer Enquiry Data 
  saveUserEnquiry() {
    return this.http.get(this.saveenquiry);
  }

  eventbook(data: any) {
    return this.http.post(this.eventurl, data);
  }

  PaymentData(data: any) {
    return this.http.post(this.paymenturl, data);
  }
  addtrainer(data: any) {
    return this.http.post(this.addtrainerurl, data);
  }

  // For Display Trainer  Data 
  Trainerdata() {
    return this.http.get(this.addtrainerurl);
  }

// Add batchdata
  addbatchdata(data: any) {
    return this.http.post(this.addbatchurl, data);
  }
  // Displaybatch Data
  displaybatchdata() {
    return this.http.get(this.addbatchurl);
  }

  getenquirydata(){
    return this.http.get(this.saveenquiry);
  }
}
