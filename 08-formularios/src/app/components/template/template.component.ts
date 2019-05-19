import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  nombre: string;
  constructor() {}

  ngOnInit() {}

  guardar() {
    console.log('TCL: TemplateComponent -> guardar -> guardar');
  }
}
