import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Совершить покупки', done: true },
    { description: 'Почитать книгу', done: false },
    { description: 'Позаниматься гимнастикой', done: false },
    { description: 'Погулять в парке', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  

}

