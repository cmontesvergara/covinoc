import { Component, OnInit , AfterViewChecked} from '@angular/core';
import { ApiService } from './api.service';


export class IconOverviewExample {}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked{
  data:any[] = [];

  constructor(private api:ApiService){

  }
  ngAfterViewChecked(){
    this.alignStylesChecks();
  }
  setCheckStyle( id:any){
      console.log(id)
  }
  alignStylesChecks(){
    for (let i = 0; i < this.data.length; i++) {

      if(this.data[i].state == true){
        const aux:any = document.getElementById(`descrip-item-task-${i}`)
        aux.classList.add("task-completed");

      }
    }
  }
  ngOnInit(){
    this.api.getTasks().subscribe(data => {
      this.data = data;
      console.log(this.data)

    })


  }
  title = 'covinoc';
}
