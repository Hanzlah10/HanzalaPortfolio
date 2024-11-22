import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Ensure RouterModule is imported
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProjectCubeComponent } from './project-cube/project-cube.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        ComingSoonPageComponent,
        HeaderComponent,
        HeroComponent,
        FooterComponent,
        SingleProjectComponent,
        ProjectCubeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        SlickCarouselModule,
        BrowserAnimationsModule
    ],
    providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage())
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
