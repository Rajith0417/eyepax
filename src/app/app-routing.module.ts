import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)},
  {path: 'todo', loadChildren: ()=>import('./todo/todo.module').then(mod=>mod.TodoModule)},
  {path: 'login', loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)},
  // {path: 'logout', loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
