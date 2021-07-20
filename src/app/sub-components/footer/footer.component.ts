import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	myImage_1 = "../../../assets/Images/Img_4.jpg";
	myImage_2 = "../../../assets/Images/Img_5.jpg";
	myImage_3 = "../../../assets/Images/Img_6.jpg";
	myImage_4 = "../../../assets/Images/Img_7.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
