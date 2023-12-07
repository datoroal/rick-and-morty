import { Component, Input } from '@angular/core';
import { CharacterModel } from '../../../../models/characters/character.model';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  @Input() charactersList?: Array<CharacterModel>;

}
