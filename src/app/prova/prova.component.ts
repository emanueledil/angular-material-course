import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Course} from '../model/course';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../services/courses.service';
import {Lesson} from '../model/lesson';
import {catchError, tap} from 'rxjs/operators';
import {merge, throwError} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit, AfterViewInit {

  course: Course;
  lesson: Lesson;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;


  @ViewChild(MatSort)
  sort: MatSort;


  lessons = [];


  displayedColumns = ['id', 'duration', 'seqNo'];

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.course = this.route.snapshot.data['course'];
    console.table(this.course)

  }

  loadLessonPage() {

    this.coursesService.findLessons(this.course.id,
      this.sort?.direction?? 'asc',
      this.paginator?.pageIndex?? 0,
      this.paginator?.pageSize?? 3,
      this.sort?.active ?? "seqNo").pipe(tap(lessons => this.lessons = lessons),
      catchError(err => {
          console.log('errore ', err);
          return throwError(err);
        }
      ))
      .subscribe();

  }

  ngAfterViewInit() {
    this.loadLessonPage();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex=0)
  merge(  this.sort.sortChange, this.paginator.page)
    .pipe(tap(()=>this.loadLessonPage()))
    .subscribe()


  }

  openDialog() {
    alert("prova")
  }
}
