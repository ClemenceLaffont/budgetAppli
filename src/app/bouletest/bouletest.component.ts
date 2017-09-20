import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouletest',
  templateUrl: './bouletest.component.html',
  styleUrls: ['./bouletest.component.css']
})
export class BouletestComponent implements OnInit {
  variable = false;
  table = ['ga', 'bu', 'zo', 'meu'];

  constructor() { }

  ngOnInit() {
  }

}
