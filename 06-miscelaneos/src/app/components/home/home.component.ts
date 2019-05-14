import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p [appResaltado]="'black'">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ut
      ipsam in iusto impedit iste fuga consectetur dicta sapiente mollitia
      velit, architecto voluptatibus minus cum quidem. Ipsam et ullam
      accusantium.
    </p>
    <app-clases></app-clases>
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {}

  ngOnInit() {
    console.log('Home Component -> ngOnInit');
  }

  ngOnChanges() {
    console.log('Home Component -> ngOnChanges');
  }
  ngDoCheck() {
    console.log('Home Component -> ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Home Component -> ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Home Component -> ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Home Component -> ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Home Component -> ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Home Component -> ngOnDestro');
  }
}
