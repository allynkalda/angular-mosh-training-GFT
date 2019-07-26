import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  getItems() {
    return ["item1", "item2", "item3"]
  }
  constructor() { }

}