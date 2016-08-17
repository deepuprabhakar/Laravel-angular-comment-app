import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService{
    constructor( private _http: Http ){}

    addComment(comment){
        return this._http.post('/comment', comment)
        .map(res => res.json());
    }
    
    getComments(){
        return this._http.get('/getComments')
        .map(res => res.json());
    }
}