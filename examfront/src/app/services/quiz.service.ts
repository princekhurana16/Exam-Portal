import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes()
  {
    return this._http.get('http://localhost:8080/quiz/');
  }


  //add quiz
  public addQuiz(quiz)
  {
   return this._http.post('http://localhost:8080/quiz/', quiz);
  }

  //delete quiz
  public deleteQuiz(qId)
   {
    return this._http.delete(`http://localhost:8080/quiz/${qId}`);
  }
  //get the single quiz
  public getQuiz(qId)
 {
  return this._http.get(`http://localhost:8080/quiz/${qId}`);
 }
 //update quiz
public updateQuiz(quiz)
{
  return this._http.put(`http://localhost:8080/quiz/`, quiz);
}
//get quizzes of category
public getQuizzesOfCategory(cid)
{
  return this._http.get(`http://localhost:8080/quiz/category/${cid}`);
}
//get active quizzes
public getActiveQuizzes()
{
  return this._http.get(`http://localhost:8080/quiz/active`);
}
//get active quizzes of category
public getActiveQuizzesOfCategory(cid)
{
  return this._http.get(`http://localhost:8080/quiz/category/active/${cid}`);
}
}
