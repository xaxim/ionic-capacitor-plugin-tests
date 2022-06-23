import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.page.html',
  styleUrls: ['./fontawesome.page.scss'],
})
export class FontawesomePage implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
