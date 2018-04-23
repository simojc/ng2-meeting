import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertService, PersService } from '../../_services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPers, TypePers } from '../../Models/index';

@Component({
  selector: 'pers-create',
  templateUrl: './create-pers.component.html',
  styleUrls: ['./create-pers.component.css']
})
export class CreatePersComponent implements OnInit {

  title = 'Ajouter personne';
  @Output() saveNewPersonne = new EventEmitter()
  @Output() cancelAddPersonne = new EventEmitter()

  typePers = TypePers

  angForm: FormGroup;
  constructor(private persService: PersService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      id: '',
      user_id: ['', Validators.required],
      type: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      email: ['', Validators.required],
      telcel: '',
      telres: '',
      emploi: '',
      dom_activ: '',
      titre_adh: ''
    });
  }

  addPersonne(formValues) {
    let personne: IPers = {
      id: undefined,
      user_id: formValues.user_id,
      type: formValues.type,
      nom: formValues.nom,
      prenom: formValues.prenom,
      sexe: formValues.sexe,
      email: formValues.email,
      telcel: formValues.telcel,
      telres: formValues.telres,
      emploi: formValues.emploi,
      dom_activ: formValues.dom_activ,
      titre_adh: formValues.titre_adh
    }
    this.persService.addPersonne(personne);
    this.saveNewPersonne.emit();
     // Exécuter l'un ou l'autre de ces 2 instructions, pas les 2
    this.router.navigate(['membres']);
  }


  cancel() {
    this.cancelAddPersonne.emit()
    // Exécuter l'un ou l'autre de ces 2 instructions, pas les 2
    this.router.navigate(['membres']);
  }

}
