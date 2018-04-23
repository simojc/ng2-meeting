import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, PersService } from '../../_services/index';
import { IPers, TypePers } from '../../Models/index';

@Component({
  selector: 'pers-edit',
  templateUrl: './edit-pers.component.html',
  styleUrls: ['./edit-pers.component.css']
})
export class EditPersComponent implements OnInit {

  personne: any;
  typePers = TypePers;
  angForm: FormGroup;
  title = 'Modifier personne';
  constructor(private route: ActivatedRoute, private router: Router, private persService: PersService, private fb: FormBuilder) {
    this.createForm();
   }

  //createForm() {
  //  this.angForm = this.fb.group({
  //    name: ['', Validators.required ],
  //    price: ['', Validators.required ]
  // });
  //}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.persService.editPersonne(params['id']).subscribe(res => {
        this.personne = res;
      });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
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

  //updatePersonne(formValues) {
  //  this.route.params.subscribe(params => {
  //    this.persService.updatePersonne(name, price, params['id']);
  //  this.router.navigate(['index']);
  //});
  //}

  updatePersonne(formValues) {
    this.route.params.subscribe(params => {
    let personne: IPers = {
      id: params['id'],
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
    };
    this.persService.updatePersonne(personne, params['id']);
    // this.saveNewPersonne.emit();
    // Exécuter l'un ou l'autre de ces 2 instructions, pas les 2
     this.router.navigate(['membres']);
    })
 
  }


}
