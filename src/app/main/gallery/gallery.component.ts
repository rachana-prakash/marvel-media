import {Component, OnInit} from '@angular/core';
import {GalleryDataService} from './gallery-data.service';
import {Character, CardViewModel} from '../../models/request-data.model';
import {ActivatedRoute} from '@angular/router';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  characters: CardViewModel[] = [];
  charactersLength = 0;
  imageVariant = 'portrait_uncanny';
  selectedCharacter: CardViewModel = {
    title: '',
    description: '',
    id: 0,
    index: -1,
    imgURL: ''
  };
  displaySelectedImage = false;

  constructor(private _galleryDataService: GalleryDataService,
              private _route: ActivatedRoute, private _communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {

      if (data.characterData.characters) {
        this.characters = data.characterData.characters.map((item: Character, index: number) => {
          return {
            title: item.name,
            description: item.description,
            id: item.id,
            index,
            imgURL: `${item.thumbnail.path}/${this.imageVariant}.${item.thumbnail.extension}`
          };
        });
        this.charactersLength = this.characters.length;
      } else {
        this._communicationService.notificationShowSubject$.next(true);
        this._communicationService.notificationDataSubject$.next({
          message: `${data.characterData.error}`,
          type: 'error'
        });
      }
      this._communicationService.showLoaderSubject$.next(false);
    });

  }

  closeImageViewer(): void {
    this.displaySelectedImage = false;
    this.selectedCharacter = {
      title: '',
      description: '',
      id: 0,
      index: -1,
      imgURL: ''
    };
  }

  viewCharacter(character: CardViewModel): void {
    this.displaySelectedImage = true;
    this.selectedCharacter = character;
  }

  navigateImage(character: CardViewModel, type: string): void {
    let index = character.index;
    switch (type) {
      case 'prev':
        this.selectedCharacter = {...this.characters[--index]};
        break;
      case 'next':
        this.selectedCharacter = {...this.characters[++index]};
        break;
    }
  }
}
