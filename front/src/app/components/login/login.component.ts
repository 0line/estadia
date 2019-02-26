import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AlertService } from 'src/app/services/alert/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
  '../../../assets/admin/css/font-face.css',
  '../../../assets/admin/vendor/bootstrap-4.1/bootstrap.min.css',
  '../../../assets/admin/css/theme.css']
})
export class LoginComponent implements OnInit {

  dataUser: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router,private authenticationService: AuthenticationService, private alertService: AlertService
    ) 
  { 
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.dataUser=this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  // obtener los datos del formulario para validarlos
  get f() { return this.dataUser.controls; }

  sendData(){

    this.submitted = true;
     //Si el formulario es invalido retorna una respuesta a la vista
    if (this.dataUser.invalid) {
            return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
