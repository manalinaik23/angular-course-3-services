import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';



@NgModule({
  declarations: [CourseImageComponent],
  imports: [
    CommonModule
  ],
  exports:[CourseImageComponent]
})
export class CoursesModule { }
