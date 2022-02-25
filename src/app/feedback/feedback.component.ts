import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { FeedbackQuestions } from '../Types/FeedbackQuestions';
import { Review } from '../Types/Review';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  reviewQns: FeedbackQuestions = {
    qId: 0,
    ques1: '',
    ques2: '',
    ques3: ''
  }

  review: Review = {
    feedbackId: "",
    userId: "",
    ans1: "",
    ans2: "",
    ans3: "",
    rating: "",
    qId: 0
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getFeedbackQuestions().subscribe(data => {
      this.reviewQns = data;
    })
  }

  onFormReviewSubmit() {
    console.log(this.review)
    const userId = localStorage.getItem('shipUser') as string;
    this.review.userId = userId
    this.review.qId = this.reviewQns.qId
    this.reviewService.postReview(this.review).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("Review added successfully")
      }
      window.location.href="/"
    });
  }
}
