import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
@Injectable({providedIn: 'root'})
export class DataComponent implements OnInit {
  url = 'https://oblako-by-destrkast.herokuapp.com/projects';

  load() {
    fetch(this.url)
    .then((response) => {
      return response.json();
    }).then(data => console.log(data)
    ).catch(err => console.log(err)
    );    
      }
  
  

  ngOnInit(): void {}
}
