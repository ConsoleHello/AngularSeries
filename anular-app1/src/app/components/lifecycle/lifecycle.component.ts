import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor() {

  }

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
