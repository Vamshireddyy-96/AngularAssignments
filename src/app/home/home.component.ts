
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:number=35;
  isDisable:boolean=false;
  name:string="Vamshidhar Reddy";
  isDirective:boolean=false;

  constructor()
  {
    console.log('new data is' + this.data);
    setTimeout( ()=>{
      this.isDisable=true;
    },5000

    )
  }
  ngOnChanges()//angular sets or resets data bound input properties
  {
    console.log('ngonchanges data is' + this.data);
  }
  ngOnInit()//intialize the component or directive after displays the data bound properties
  {
    console.log('ngonInit data is' + this.data);
  }
  ngDoCheck()//Detect and act upon the changes
  {
    console.log('ngDocheck');
  }
  ngAfterContentInit()//respond external content into the components view
  {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked()//respond after angular checks the content projected into the directive/Conponent
  {
    console.log('ngAfterContentchecked');
  }
  ngAfterViewInit()//respond after angular initilazes the component view
  {
    console.log('ngAfterviewInit');
  }
  ngAfterViewChecked()//respond after angular checks the component views that contains the directive
  {
    console.log('ngAfterviewChecked');
  }
  ngOnDestroy()//to avoid memory leaks and it would destroys the directives or components
  {
      console.log('ngondestroy');
  }

    add()
    {
      this.data+=50;
      this.isDirective=true;

    }
    delete()
    {
      this.data-=30;
    }
    getColor()
    {
      return 'red';

    }

}



