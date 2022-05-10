import { Injectable } from '@angular/core';
import {cars} from "../data/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  carsList = cars

  constructor() { }

  getCarsArr(filter: string) {
    const list =  cars.filter(i => i.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()))
    return list.splice(0, Math.min(20, list.length))
  }
}
