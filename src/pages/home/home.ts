import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//lets add the viewchild to help us scroll using Content
@ViewChild(Content) content:any;

  constructor(public navCtrl: NavController) {

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

}
