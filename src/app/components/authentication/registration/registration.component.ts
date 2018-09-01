import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../../../services/auth.service';
import { User } from '../../../model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  constructor(private frmbuilder: FormBuilder, private authService: AppAuthService) {
    this.initializeForm();
  }

  ngOnInit() {
    this.user = new User();
  }

  initializeForm() {
    this.signupForm = this.frmbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confpass: ['', [Validators.required]]
    });
  }


  register() {
    this.user.email = this.signupForm.get('email').value;
    this.user.password = this.signupForm.get('password').value;
    this.authService.register(this.user).subscribe(user => {
      console.log('Registration Response :::::: ' + JSON.stringify(user));
    });
  }

}



// <div class="form-group">
//           <label for="name" class="cols-md-3 control-label">Name</label>
//           <div class="input-group mb-3">
//             <div class="input-group-prepend">
//               <span class="input-group-text" id="basic-addon1"><i class="fa fa-user fa" aria-hidden="true"></i></span>
//             </div>
//             <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
//           </div>
//         </div>
