import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseModel } from '../../models/common/response.model';
import { CharacterModel } from '../../models/characters/character.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public openSidenav: boolean = false;
  public charactersList?: Array<CharacterModel>;

  constructor(
    private characterService: CharacterService,
  ) { }

  public toggleSidenavEvent(event: boolean): void {
    this.openSidenav = event;
  }

  private getCharacters(pageNumber?: number, characterid?: number): void {
    this.characterService.getCharacter(pageNumber, characterid).subscribe({
      next: (response: ResponseModel<CharacterModel> | CharacterModel) => {
        console.log(response);
        this.charactersList = (response as ResponseModel<CharacterModel>).results;
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.getCharacters(1);
  }

}
