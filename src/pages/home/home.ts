import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//lets add the viewchild to help us scroll using Content
@ViewChild(Content) content:any;
@ViewChild('myslides') slides:Slides;

public myform:FormGroup;
public name:any;
public email:any;
public message:any;

  constructor(public navCtrl: NavController, public formBuilder:FormBuilder) {
this.myform=this.formBuilder.group({
	name:['',Validators.required],
	email:['',Validators.required],
	message:['',Validators.required]
});

  }

  scroll(element){
  	//scroll to the selected element
  	
if(element=='About'){
let yOffset=document.getElementById(element).offsetTop;
this.content.scrollTo(0,yOffset,4000);
  }
  else if(element =='Contact'){
let yOffset=document.getElementById(element).offsetTop;
this.content.scrollTo(0,yOffset,4000);
  }
  else if (element =='Prices'){
let yOffset=document.getElementById(element).offsetTop;
this.content.scrollTo(0,yOffset,4000);
  }
  else if (element =='Services'){
  	 let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 4000);
  }
  else if (element =='Top'){
this.content.ScrollToTop(4000);
  }
  else if (element =='Bottom'){
this.content.ScrollToTop(4000);
  }
}

gotoslide(service){
  //moving to the service for the clicked button
  if(service=="genprices"){
 this.slides.slideTo(0, 100);
  }
  else if(service=="service1"){
this.slides.slideTo(1, 10);
  }
  else if(service=="service2"){
this.slides.slideTo(2, 10);
  }
  else if(service=="service3"){
    this.slides.slideTo(3, 100);
  }
}
contactform(){
	console.log("Form submited ");
}

}
