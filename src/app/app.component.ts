import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private dataComponent: DataComponent) {}

  title = 'oblako-front';

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  typesOfLists: string[] = ['Caren', 'Dilan'];

  typesOfTodos: string[] = ['wash', 'fishing', 'going'];

  loadData() {
    this.dataComponent.load();
  }

  ngOnInit(): void {}
}
