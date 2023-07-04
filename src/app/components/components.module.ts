import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditAddTaskComponent } from './edit-add-task/edit-add-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    TaskCardComponent,
    EditAddTaskComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,

  ]
})
export class ComponentsModule { }
