import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/common/response.model';
import { CharacterModel } from '../../models/characters/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrlApi: string;
  private moduleName: string = 'character';

  constructor(
    @Inject('API_URL') apiUrl: string,
    private httpClient: HttpClient,
  ) {
    this.baseUrlApi = `${apiUrl}/${this.moduleName}`;
  }

  public getCharacter(pageNumber?: number, characterid?: number):
    Observable<ResponseModel<CharacterModel> | CharacterModel> {
    if (pageNumber) {
      return this.httpClient.get<ResponseModel<CharacterModel>>(`${this.baseUrlApi}/?page=${pageNumber}`);
    }

    if (characterid) {
      return this.httpClient.get<CharacterModel>(`${this.baseUrlApi}/${characterid}`);
    }

    return this.httpClient.get<ResponseModel<CharacterModel>>(`${this.baseUrlApi}`);
  }
}
