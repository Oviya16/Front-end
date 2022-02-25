import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackQuestions } from '../Types/FeedbackQuestions';
import { FeedbackWithQns } from '../Types/FeedbackWithQns';
import { Review } from '../Types/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  
    root_url = "http://localhost:9090/";
    constructor(private http: HttpClient) { }
  
    postReview(review: Review) {
      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(review);
      return this.http.post<Review>(this.root_url + "UserFeedback", body, { 'headers': headers, 'observe': 'response' });
    }
  
    getAllReviews() {
      return this.http.get<Review[]>(this.root_url + "getFeedback");
    }
  
    getFeedbackQuestions() {
      return this.http.get<FeedbackQuestions>(this.root_url + "feedbackQns");
    }
  
    editFeedbackQuestions(feedback: FeedbackQuestions) {
      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(feedback);
      return this.http.post<any>(this.root_url + "feedbackQns", body, { 'headers': headers, 'observe': 'response' });
    }
  
    getFeedbackWithQuestions() {
      return this.http.get<FeedbackWithQns[]>(this.root_url + "getFeedbackWithQns")
    }
  }