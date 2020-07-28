import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:any='http://localhost/ci/index.php/api/';
  constructor(private http: HttpClient) { }
  status()
  {
  	return this.http.get(this.apiUrl+'status');
  }
  baca()
  {
  	return this.http.get(this.apiUrl+'data');
  }
  simpan(data)
  {
  	return this.http.post(this.apiUrl+'data',data);
  }
  ubah(data)
  {
  	return this.http.put(this.apiUrl+'data/' + data.id ,data);
  }
  hapus(id)
  {
  	return this.http.delete(this.apiUrl+'data/' + id);
  }
}