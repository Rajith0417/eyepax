import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypecodeService } from 'src/app/shared/typecode.service';
// import { TodoModule } from '../todo.module';
import { TodoListModel } from './todo-list.model';
import {LogInOutService} from 'src/app/shared/log-in-out.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  selectedToDo: TodoListModel = new TodoListModel();
  allToDos: TodoListModel[] = [];
  p: number = 1;
  // collection: any[] = someArrayOfThings;

  constructor(private api: TypecodeService, private userCheck: LogInOutService, private router: Router) { }

  ngOnInit(): void {
    if(!this.userCheck.checkUser()){
      alert("Please login first");
      this.router.navigate(['/login']);
    }
    this.getAllToDo();
  }

  getAllToDo(){
    this.api.getToDo().subscribe(res=>{
      this.allToDos = res;
    }, err=>{
      console.log(err);
    });
  }

  selectToDo(item: TodoListModel){
    this.api.selectToDo(item.id).subscribe(res=>{
      this.selectedToDo = res;
    }, err=>{
      console.log(err);
    });
  }

  trackByBookCode(index: number, book: any): string {
    return book.code;
    }

  ngOnDestroy(): void {

  }

}
