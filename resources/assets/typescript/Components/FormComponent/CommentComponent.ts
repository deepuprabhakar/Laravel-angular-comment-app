import { Component, OnInit, Inject } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { Comment } from '../comment';
import { CommentService } from '../../Services/FormService/CommentService';
//import * as io from 'socket.io-client';

@Component({
    'selector': 'state-template',
    'templateUrl': '/templates/FormComponent.comment',
    'directives': [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    'providers': [CommentService]
})
export class CommentComponent implements OnInit {

    loading = true;
    commentForm: FormGroup;
    comments = [];
    comment = new Comment();
    socket = null;

    constructor( 
        private formBuilder: FormBuilder, 
        private _commentService: CommentService
        ){
        
        var io = require('socket.io-client');

        this.commentForm = this.formBuilder.group({
            username: ['', Validators.required],
            comment: ['', Validators.required]
        });

        this.socket = io.connect('http://localhost:3000');

        this.socket.on('comment-channel:App\\Events\\CommentEvent', function(data){
            this.comments.unshift(data.comment);
        }.bind(this)); 

    }

    ngOnInit(){
        this._commentService.getComments()
        .subscribe(res => {
            this.comments = res;
            this.loading = false; 
        });
    }

    save(newComment){
        var result;

        this.loading = true;

        result = this._commentService.addComment(newComment);

        result.subscribe(res => {
            this.comment = new Comment();
            this.loading = false;
        });
    }
}