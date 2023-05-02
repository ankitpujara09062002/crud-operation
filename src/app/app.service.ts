import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get('http://localhost:3000/data');
  }

  update(data:any){
    return this.http.put(`http://localhost:3000/data/${data.id}`,data);
  }

  deleteDate(id:any){
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
}
