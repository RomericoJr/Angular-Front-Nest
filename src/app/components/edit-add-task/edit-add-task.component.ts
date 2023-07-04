import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit-add-task',
  templateUrl: './edit-add-task.component.html',
  styleUrls: ['./edit-add-task.component.css']
})
export class EditAddTaskComponent {

  constructor(
    private fb: FormBuilder,
    private TaskService: TaskService,
    private route : Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(({id})=>{
      console.log(id);
    }
    )

   }

  formTask : FormGroup = this.fb.group({
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.minLength(6)]],
  });



  save(){

  }
}
