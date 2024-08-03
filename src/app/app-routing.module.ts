import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonPageComponent } from "./coming-soon-page/coming-soon-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

export const routes: Routes = [
    {
        path: 'ComingSoon',
        component: ComingSoonPageComponent
    },
    {
        path: '',
        component: LandingPageComponent
    },
    // {
    //     path: '**',
    //     redirectTo: 'ComingSoon'
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }