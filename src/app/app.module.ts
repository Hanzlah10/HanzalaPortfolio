import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComingSoonPageComponent } from "./coming-soon-page/coming-soon-page.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        RouterOutlet,
        AppRoutingModule,
        CommonModule,
        BrowserModule
    ],
    declarations: [AppComponent, ComingSoonPageComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


