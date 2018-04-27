import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, RpnpersService, AutresService, PersService } from '../../_services/index';
import { IEngmt, IPers, IUser } from '../../Models/index';

@Component({
  selector: 'engmt-create',
  templateUrl: './create-engmt.component.html',
  styleUrls: ['./create-engmt.component.css']
})
export class CreateEngmtComponent implements OnInit {

  title = 'Nouvel engagement';
  rpnpers: any;
  personnes: IPers[];
  angForm: FormGroup;
  currentUser: IUser;

  constructor(private route: ActivatedRoute, private router: Router,
    private rpnpersService: RpnpersService, private fb: FormBuilder,
    private autresService: AutresService,
    private alertService: AlertService,
    private persService: PersService) {
    this.createForm();
  }

  ngOnInit() {
   // this.loadLocations();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadPersonnes;
  }

  createForm() {
    this.angForm = this.fb.group({
      pers_id: ['', Validators.required],
      repdt1_id: ['', Validators.required],
      repdt2_id: '',
      dtadh: ['', Validators.required],
      mtrle: ['', Validators.required],
      depot: '',
      dtmajdpt: '',
    });
  }

  addRpnpers(formValues) {
    let rpnpers = {
      id: undefined,
      groupe_id: this.currentUser.groupe_id,
      pers_id: formValues.pers_id,
      repdt1_id: formValues.repdt1_id,
      repdt2_id: formValues.repdt2_id,
      dtadh: formValues.dtadh,
      mtrle: formValues.mtrle,
      depot: formValues.depot,
      dtmajdpt: formValues.dtmajdpt
    }
    this.rpnpersService.addRpnpers(rpnpers);
    //this.saveNewPersonne.emit();
     // Exécuter l'un ou l'autre de ces 2 instructions, pas les 2
    this.router.navigate(['/']);
  }

  private loadPersonnes() {
    this.persService.getAll().subscribe(
      res => { this.personnes = res; },
      error => { this.alertService.error(error); }
    );
  }

  cancel() {   
    // Exécuter l'un ou l'autre de ces 2 instructions, pas les 2
    this.router.navigate(['/']);
  }

}
