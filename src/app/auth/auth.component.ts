import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  
  loginForm!: FormGroup;  

  constructor(private fb: FormBuilder) { }

  

  ngOnInit(): void {

this.loginForm = this.fb.group({
prenom: ["Ibrah"] ,
nom: ["Niangngng"],
}


);
   

   
  }
  login() {
    console.log('Donnée du formulaire', this.loginForm.value);
  }
}
