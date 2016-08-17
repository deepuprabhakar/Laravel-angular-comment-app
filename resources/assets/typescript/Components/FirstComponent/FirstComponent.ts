import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../../Services/FileUploadService/FileUploadService';
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    'selector': 'state-template',
    'templateUrl': '/templates/FirstComponent.main',
    'directives': [ProgressBar, ROUTER_DIRECTIVES],
    'providers': [FileUploadService]
})
export class FirstComponent {
    /**
     * @type {Router}
     */
    private router: Router;

    constructor (
        @Inject(Router) router: Router
    ) {
        this.router = router;
    }
}