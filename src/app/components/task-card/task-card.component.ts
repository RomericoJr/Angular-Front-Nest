import { Component } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TaskReceived } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  idUser = localStorage.getItem('idUser')  || null;
  tasks : TaskReceived[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {
    console.log(this.idUser);
    this.taskService.getTaskByUserId(this.idUser).subscribe((data: any) => {
      // console.log('estos datos se traen',data);
      this.tasks = data;
      console.log('tareas de id', this.idUser,this.tasks);
    });
    }


    modify( task :TaskReceived){
      console.log('se va a modificar',task);
      this.router.navigateByUrl(`home/edit-add-task/${task.id}`);
    }

}
