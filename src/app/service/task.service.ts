import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createTask, updateTask } from '../interface/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) { }

  createTask( createTask : createTask):Observable<Request>{
    return this.http.post<Request>(`${this.api}task`, createTask);
  }

  getTaskByUserId(id:any):Observable<Request>{
    return this.http.get<Request>(`${this.api}task/findTaskByUser/${id}`);
  }

  updateTask(id:number, updateTask: updateTask){
    return this.http.put(`${this.api}task/${id}`, updateTask);
  }

  deleteTask(id:number){
    return this.http.delete(`${this.api}task/${id}`);
  }

}
