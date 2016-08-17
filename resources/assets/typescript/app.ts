import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ROUTER_PROVIDERS } from './app.routes';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

//enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
.catch(err => console.error(err));