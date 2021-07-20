import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	myImage_1 = "../../../assets/Images/Img_1.jpg";
	myImage_2 = "../../../assets/Images/Img_2.jpg";
	myImage_3 = "../../../assets/Images/Img_3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
