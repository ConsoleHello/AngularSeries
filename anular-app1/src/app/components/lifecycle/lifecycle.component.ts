import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TabsComponent } from '../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-lifecycle',
  imports: [TabsComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor() {

  }

  transport:string[] =["Car","Air Line","Bus","Train"]

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", performance.now())

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")

  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")

  }

}
