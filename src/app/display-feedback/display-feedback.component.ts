import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { ReviewService } from '../Services/review.service';
import { FeedbackWithQns } from '../Types/FeedbackWithQns';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent implements OnInit {

 

  feedback: FeedbackWithQns[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {

    this.reviewService.getFeedbackWithQuestions().subscribe(data => {
      this.feedback = data
    })
  }
onAddClick(){
  window.location.href="/addFeedback"
}
@ViewChild('content')
  content!: ElementRef;
  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a3');
    let _elementHandlers =
    {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    doc.html(this.content.nativeElement, {
      callback: (doc) => {
        doc.save('Employees.pdf');
      }

    });

  }
}
