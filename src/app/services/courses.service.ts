import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CoursesService {

  constructor(private http:HttpClient) {
    console.log("course service instance created");
   } // this servcie instance created once and injected multiple times wherever use.
    //this is called singleton application.

  
    loadCourses():Observable<Course[]>{
      const params = new HttpParams()
      .set("page","1")
      .set("pageSize","10");

    return this.http.get<Course[]>("http://localhost:9000/api/courses",{params});
    }

    //insert data in to the api
    saveCourse(course:Course){
      const headers = new HttpHeaders()
                      .set('x-auth',"userid");

      return this.http.put(`http://localhost:9000/api/courses/${course.id}`,course,{headers});
    }
}
