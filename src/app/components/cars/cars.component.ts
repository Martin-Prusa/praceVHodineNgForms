import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  filter = ''

  constructor(private service: CarsService) { }

  ngOnInit(): void {
  }

  get cars() {
    return this.service.getCarsArr(this.filter)
  }

}
