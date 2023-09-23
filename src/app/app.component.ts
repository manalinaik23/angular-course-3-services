import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./services/courses.service";
import { Observable } from "rxjs";
/*start understanding  providers and Injection token  

//provider factory function
function courseServiceProvider(http:HttpClient):CoursesService{
  return new CoursesService(http);
}

//injection token : every dependency need unique indentifier
export const COURSES_SERVICES = new InjectionToken<CoursesService>('COURSES_SERVICES');

/*end understanding  providers and Injection token*/

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  /*providers:[{
            provide:COURSES_SERVICES,
            useFactory:courseServiceProvider,
            deps:[HttpClient]
     }]*/
  providers: [CoursesService], // Angular Identify the the classname as Injection token and invoke the constructor of the servcie
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  //courses$ = new Observable<Course[]>;
  courseData = COURSES;

  //constructor(@Inject(COURSES_SERVICES) private courses:CoursesService)
  constructor(private courses: CoursesService) {} // service injetced by the constructor

  ngOnInit() {
    console.log(this.courses);

    const params = new HttpParams().set("page", "1").set("pageSize", "3");

    /*  this.http.get("http://localhost:9000/api/courses",{params})
       .subscribe(
        courses=> this.course = courses
       );*/
    // this.courses$ = this.http.get<Course[]>("http://localhost:9000/api/courses",{params});
    //  this.courses$ = this.courses.loadCourses();
  }

  save(coursedata: Course) {
    this.courses
      .saveCourse(coursedata)
      .subscribe(() => console.log("course saved"));
  }

  onChangeDetection() {
    /* const courses = this.courseData[0];
    const newCourse = {...courses};

    newCourse.description ="new text";
    this.courseData[0] =newCourse;*/

    /*start : to set empty to course data */
    //this.courseData = [undefined];
    const course = this.courseData[0];
    const newCourse = { ...course };
    newCourse.description = "ngContent";

    this.courseData[0] = newCourse;

    /*end : to set empty to course data */
  }
}
