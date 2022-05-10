import { Component, OnInit } from '@angular/core';
import {GradesService} from "../../services/grades.service";
import {Grade} from "../../models/grade.model";

@Component({
  selector: 'app-failing',
  templateUrl: './failing.component.html',
  styleUrls: ['./failing.component.scss']
})
export class FailingComponent implements OnInit {

  grade: Grade = new Grade()

  constructor(private service: GradesService) { }

  ngOnInit(): void {
  }

  addGrade() {
    this.service.addGrade(this.grade)
    this.grade = new Grade()
  }

  deleteGrade(index: number) {
    this.service.deleteGrade(index)
  }

  get grades() {
    return this.service.grades
  }

  get averageGrade() {
    return this.service.averageGrade
  }

}
