import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, RpnpersService, AutresService, PersService} from '../../_services/index';
import { IRpnpers, IPers, ILocation } from '../../Models/index';

@Component({
  selector: 'pers-edit',
  templateUrl: './edit-rpn.component.html',
  styleUrls: ['./edit-rpn.component.css']
})
export class EditRpnComponent implements OnInit {
  rpnpers: any;
  personnes: IPers [];
  angForm: FormGroup;
  title = 'Modifier adhésion RPN';
  constructor(private route: ActivatedRoute, private router: Router,
    private rpnpersService: RpnpersService, private fb: FormBuilder,
    private autresService: AutresService,
    private alertService: AlertService,
    private persService: PersService) {
    this.createForm();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params['id'] = "+ params['id']);
      this.rpnpersService.editRpnpers(params['id']).subscribe(res => {
        console.log("res = "+  JSON.stringify(res)) 
        this.rpnpers = res;
        this.loadPersonnes;
      });
    });
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

  updateRpnpers(formValues) {
    this.route.params.subscribe(params => {
      let rpnpers = {
      pers_id: formValues.pers_id,
      repdt1_id: formValues.repdt1_id,
      repdt2_id: formValues.repdt2_id,
      dtadh: formValues.dtadh,
      mtrle: formValues.mtrle,
      depot: formValues.depot,
      dtmajdpt: formValues.dtmajdpt         
    };
    this.rpnpersService.updateRpnpers(rpnpers, params['id']);
    this.router.navigate(['rpn']);
    })
 
  }

  private loadPersonnes() {
    this.persService.getAll().subscribe(
      res => { this.personnes = res; },
      error => { this.alertService.error(error); }
    );
  }

  cancel() {
    this.router.navigate(['rpn']);
  }

}
