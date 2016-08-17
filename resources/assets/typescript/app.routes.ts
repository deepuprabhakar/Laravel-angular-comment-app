import { provideRouter, RouterConfig } from '@angular/router';
import { FirstComponent } from "./Components/FirstComponent/FirstComponent";
import { SecondComponent } from "./Components/SecondComponent/SecondComponent";
import { CommentComponent } from "./Components/FormComponent/CommentComponent";

export const routes: RouterConfig = [
    {
        path: '',
        component: FirstComponent
    },
    {
        path: 'edit',
        component: SecondComponent
    },
    {
        path: 'comment',
        component: CommentComponent
    }
];

export const ROUTER_PROVIDERS = [
    provideRouter(routes)
];