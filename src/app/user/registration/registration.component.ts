import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserrService } from '../../shared/userr.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserrService, private toastr: ToastrService) { 
    /*this.form = new FormGroup({
      UserName: new FormControl(this.data.UserName, [Validators.required]),
      Email: new FormControl(this.data.Email, [Validators.required, Validators.email]),
      FullName: new FormControl(this.data.FullName, [Validators.required]),
      Password: new FormControl(this.data.Password, [Validators.required, Validators.minLength(4)]),
      ConfirmPassword: new FormControl(this.data.ConfirmPassword, [Validators.required])
    });*/
  }

  /*
  public data: any = {
    UserName: '',
    Email: '',
    FullName:'',
    Password:'',
    ConfirmPassword:''
  };*/

  /*
  submitForm(){
    var body = {
      UserName: this.form.value.UserName,
      Email: this.form.value.Email,
      FullName: this.form.value.FullName,
      Password: this.form.value.Password
    }; 
    this.service.register(body).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.clearForm();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;
              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  */

  /*
  public clearForm(): void {
    this.form.reset();
  }
  */

  ngOnInit(): void {
    this.service.formModel.reset();
    //this.clearForm();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
