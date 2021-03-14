import {Component, OnInit} from '@angular/core';
import {CardViewModel} from '../../models/request-data.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  keyMembers: CardViewModel[] = [{
    title: 'STAN LEE',
    description: 'Stan Lee was an American comic book writer, editor, publisher, and producer. He rose through the ranks of a family-run business to become Marvel Comics\' primary creative leader for two decades, leading its expansion from a small division of a publishing house to a multimedia corporation that dominated the comics and movie industries.',
    id: 1,
    index: 0,
    imgURL: '../../../assets/images/about-us/key-people-1.jpg'
  }, {
    title: 'C. B. CEBULSKI',
    description: 'Chester B. Cebulski is an American writer and editor for Marvel Comics, known for his work on titles such as Marvel Fairy Tales. As of November 2017, he holds the position of editor-in-chief',
    id: 2,
    index: 1,
    imgURL: '../../../assets/images/about-us/key-people-2.jpg'
  }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
