import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, RpnpersService, AutresService, PersService} from '../../_services/index';
import { IRpnpers, IPers, IUser } from '../../Models/index';
import { UserService } from '../user.service';



@Component({
  selector: 'change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  user: any;
 
  personnes: IPers [];
  currentUser: IUser;
  angForm: FormGroup;
  title = 'Modifier le mot de passe';

  @Output() updateUser = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService) {
    this.createForm();
   }


   ngOnInit() {

    this.route.params.subscribe(params => {
      //  console.log("params['id'] = " + params['id']);
     this.userService.getById(params['id']).subscribe(res => {
       // console.log( ' ds ngOnInit ; res.data = ' +  JSON.stringify(res)) ;
       this.user = res[0];
        console.log(' ds ngOnInit ; this.user = ' +  JSON.stringify(this.user)) ;
     });
   });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(' currentUser = ' + JSON.stringify(this.currentUser));
  }

  createForm() {
    this.angForm = this.fb.group({
     // user_id: ['', Validators.required], Pas besoin du user_id, car le lien entre la personne et le user se fait par le courriel
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkIfMatchingPasswords('password', 'confirmPassword')});
  }

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  update(formValues) {
    this.route.params.subscribe(params => {
      const user = {
        email: this.currentUser.email,
        password: formValues.password,
    };
    this.userService.update(user, params['id']);
    this.updateUser.emit();
    this.router.navigate(['user/profile']);
    });
  }

  cancel() {
    this.router.navigate(['/user/profile']);
  }
}
