import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'prova-corsi',
  templateUrl: './prova-corsi.component.html',
  styleUrls: ['./prova-corsi.component.scss']
})
export class ProvaCorsiComponent implements OnInit {
  // manca paginator  e sort
  //********************************//
  //********************************//
  courses: Course[] = [];
  displayedColumns = ['id', 'description', 'iconUrl', 'courseListIcon', 'longDescription', 'category', 'lessonCount'];


  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {


    this.coursesService.findAllCourses()
      .pipe(tap(courses => {this.courses = courses;console.table(this.courses)}),
      catchError(err => {
          console.log('errore ', err);
          alert("courses not found");
          return throwError(err);
        }
      ))
      .subscribe();
  }

}
