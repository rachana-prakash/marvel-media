import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() cardData: any;
  imageLoadedFlag = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
