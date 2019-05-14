import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [
    `
      p {
        font-size: 40px;
      }
    `
  ]
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
