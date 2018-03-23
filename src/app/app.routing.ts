import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }
