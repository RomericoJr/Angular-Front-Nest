import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TaskCardComponent } from './task-card/task-card.component';
import { UserProfileComponent } from '../auth/user-profile/user-profile.component';
import { EditAddTaskComponent } from './edit-add-task/edit-add-task.component';
import { LogoutComponent } from '../auth/logout/logout.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskCardComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'user-logout',
    component: LogoutComponent
  },
  {
    path: 'create-task',
    component: EditAddTaskComponent
  },
  {
    path: 'edit-task/:id',
    component: EditAddTaskComponent
  },
  {path: '**', redirectTo: 'tasks'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
