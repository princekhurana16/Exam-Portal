import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient
  ) { }

  public getQuestionsofQuiz(qid)
  {
    return this._http.get(`http://localhost:8080/question/quiz/all/${qid}`);
  }

  public getQuestionsofQuizForTest(qid)
  {
    return this._http.get(`http://localhost:8080/question/quiz/${qid}`);
  }

  //add question
  public addQuestion(question){
    return this._http.post(`http://localhost:8080/question/`, question);
  }

  //delete question
  public deleteQuestion(questionId){
    return this._http.delete(`http://localhost:8080/question/${questionId}`);
  }

  //evaluate quiz
  //public evalQuiz(questions)
 // {
 //   return this._http.post(`http://localhost:8080/question/eval-quiz`, questions);
 // }
}
