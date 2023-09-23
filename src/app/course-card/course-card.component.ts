import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
//import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
   // changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit,OnChanges,OnDestroy,AfterContentChecked,AfterViewInit,AfterContentInit,DoCheck{

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor( private courses:CoursesService) {
        console.log("constructor");
    }
    ngDoCheck() {
        console.log("ngDoCheck");
    }
    ngAfterContentInit(){
        console.log("ngAfterContentInit");
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
        this.course.description ="ngAfterContentChecked";
       // this.course.iconUrl=""; cannot call this as iconUrl is a part of content.
    }
    
    ngOnChanges(){
        console.log("ngOnChange");
    }

    ngOnInit() {
        console.log("ngOnInit called");
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    onChange(newTitle:string){
       

        this.course.description = newTitle;
    }

    ngOnDestroy(){
        console.log("ngOnDestroy called");
    }

   


}
