import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServices } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(
        private activateRoute: ActivatedRoute,
        private courseService: CourseServices
    ){}

    ngOnInit(): void {
        this.courseService.retriveById(+this.activateRoute.snapshot.paramMap.get("id")).subscribe({
            next: curse => {
                this.course = curse;
            },
            error: err => console.log(err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }

}