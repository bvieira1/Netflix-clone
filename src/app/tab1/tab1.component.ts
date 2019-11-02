import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  btn = "Assista gratuitamente por 30 dias";

  constructor() { }

  ngOnInit() {
  }

}
