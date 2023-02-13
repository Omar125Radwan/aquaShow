import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  //! Factory function for Errors
  showErrors(Name: string, min?: number): string | undefined {
    const nameControl = this.registerForm.get(Name);
    if(nameControl?.touched && !nameControl.valid) {
      if(nameControl.errors?.['required']) {
        return `${Name} is required`;
      }
      if(nameControl.errors?.['minlength']) {
        return `${Name} Should be of minimum ${min} chars length`;
      }
      if(nameControl.errors?.['email']) {
        return `Invalid Mail`;
      }
    }
    return undefined;
  }

  onSubmit() {
    if(!this.registerForm.valid) {
      return;
    }
    const {email, password} = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['']);
    });
  }

}
