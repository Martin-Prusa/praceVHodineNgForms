import { Injectable } from '@angular/core';
import {Grade} from "../models/grade.model";

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  gradesList: Grade[] = []

  constructor() { }

  addGrade(grade: Grade) {
    this.gradesList.push(grade)
  }

  deleteGrade(index: number) {
    this.gradesList.splice(index, 1)
  }

  get grades() {
    return this.gradesList
  }

  get averageGrade() {
    return Math.round((this.gradesList.reduce((prev, current) => prev + (current.grade * current.weight), 0)) / this.gradesList.reduce((prev, current) => prev + current.weight, 0) * 1000) / 1000
  }
}
