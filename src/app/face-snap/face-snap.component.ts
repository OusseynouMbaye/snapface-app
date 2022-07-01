import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Face Snap';
    this.description =
      'Face Snap is a web application that allows you to take a picture of your face and save it to your account. You can then share it with your friends and family.';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
