import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { FeedbackQuestions } from '../Types/FeedbackQuestions';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  reviewQns: FeedbackQuestions = {
    qId: 0,
    ques1: '',
    ques2: '',
    ques3: ''
  }
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getFeedbackQuestions().subscribe(data => {
      this.reviewQns = data;
    })
  }


  onFormSubmit() {
    this.reviewService.editFeedbackQuestions(this.reviewQns).subscribe(data => {
      alert("Changed Successfully!")
    }, error => {
      alert("Something went wrong")
    })

  }
}
