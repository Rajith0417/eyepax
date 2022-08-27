import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypecodeService {

  constructor(private http: HttpClient) { }

  getToDo(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
    .pipe(map((res: any)=>{
      return res;
    }));
  }

  selectToDo(id: number){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos/"+id).pipe(map((res: any)=>{
      return res;
    }));
  }

}
