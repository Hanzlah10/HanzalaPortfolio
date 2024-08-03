import { Component } from '@angular/core';
import { Storage, ref } from "@angular/fire/storage";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private storage: Storage) { }



  openPdf() {
    console.log("pdf");


    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/hanzalas-portfolio.appspot.com/o/Resume%2FMr.HanzalaSarguroh.pdf?alt=media&token=083bbdb5-cb2c-4900-8c56-442f6677b46f';
    window.open(pdfUrl, '_blank');
  }



}
// openPdf() {
//   const filePath = 'https://firebasestorage.googleapis.com/v0/b/hanzalas-portfolio.appspot.com/o/Resume%2FMr.HanzalaSarguroh.pdf?alt=media&token=083bbdb5-cb2c-4900-8c56-442f6677b46f';
//   const storageRef = this.storage.ref(filePath);

//   storageRef.getDownloadURL().subscribe((url: string) => {
//     window.open(url, '_blank');
//   }, (error) => {
//     console.error('Error getting download URL:', error);
//   });
// }
// }
