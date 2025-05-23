import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mf-template-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mf-template-angular';

  constructor() {}

  public ngOnInit(): void {}
}
