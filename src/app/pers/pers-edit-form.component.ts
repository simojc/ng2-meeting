import {Component, OnInit, Input } from '@angular/core';

import { IUser, IPers } from '../Models/index'
import { AlertService, PersService } from '../_services/index';

import { FormsModule }   from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms'

//import  { FORM_DIRECTIVES, ControlGroup, Control, Validators, FormBuilder,Validator, } from '@angular/forms';
    // and directives: [FORM_DIRECTIVES]

//import {Manufacturer} from './manufacturer';

import {LookupService} from '../common/Lookup.service';
//import {ManufacturerService} from './Manufacturer.service';

@Component({
  moduleId: module.id,
  selector: 'simple-edit-form',
  templateUrl: 'simple-edit-form.component.html'
})
export class SimpleEditFormComponent implements OnInit{
  
  pageMode : string;
  statesList: string[];
  personne: IPers;
  personnePrior: IPers;
  @Input() persId: number;
//   manufacturer: Manufacturer = new Manufacturer();
//   manufacturerPrior: Manufacturer;
  
  constructor(private persService: PersService, 
              private lookupService: LookupService,
              private alertService: AlertService){}
  
  ngOnInit() : void {
    this.pageMode = "viewMode";
    this.statesList = this.lookupService.getStates();

    this.persService.getById(this.persId).subscribe(
        person => {
          this.personne = person;
        },
        error => { this.alertService.error(error); }
      );

    //this.manufacturerService.getManufacturerAsync().then(manufacturer =>  this.manufacturer  =manufacturer);
    //this.personne = this.persService.getById(persId).subscribe;
    
   // this.manufacturerPrior = new Manufacturer();
  
  }
  
  editManufacturer() : void {
    
    //note this is not a replacement for angular.copy().
    //.assign() creates a *shallow* copy, meaning that any properties containing
    //references and not simple types will simply have the reference copied to the new
    //object, instead of copying the values within that reference (i.e. a deep copy)
    //discussion: http://stackoverflow.com/questions/34688517/how-can-i-use-angular-copy-in-angular-2
    //           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Object.assign(this.personnePrior, this.personne);
  
    this.pageMode = "editMode";
  }
  
  newPersonne() : void {
    
   // Object.assign(this.manufacturerPrior, this.manufacturer);
    Object.assign(this.personnePrior, this.personne);
    
    //this works without having assign empty property values
   // this.manufacturer = new Manufacturer();
    
    this.pageMode = "editMode";
    
  }
  
  savePersonne() : void {
    
    // for some reason, manufacturerForm.valid is not available here
    // It works here: http://plnkr.co/edit/IElMhx2Kcos7VLrI2QfC?p=preview 
    // if we add: import { FORM_DIRECTIVES, ControlGroup, Control, Validators, FormBuilder, Validator, } from '@angular/common';
    // and directives: [FORM_DIRECTIVES]
    // but this doesn't work on the page (maybe need to add to app.module??)
    if (personneForm.checkValidity()) {
     // this.personnePrior = new Personne();
      this.pageMode = "viewMode";
    }
  }
  
  cancelEdit() : void {
    Object.assign(this.personne, this.personnePrior);
    //this.personnePrior = [new Manufacturer()];
    this.pageMode = "viewMode";
    
  }
}