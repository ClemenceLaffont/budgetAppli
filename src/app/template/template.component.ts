import {Component} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {
  personne = {
      nom: "",
      prenom: "",
      age: 0,
      chat: {
          nom: "",
          couleur: ""
      }
  }
  show() {
    console.log(this.personne)
  }
}