import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl}from '@angular/forms';
import {FormGroupDirective}from '@angular/forms';
import {NgForm}from '@angular/forms';
import {Validators}from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormGroup } from '@angular/forms'
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-homapage',
  templateUrl: './homapage.component.html',
  styleUrls: ['./homapage.component.css'],  
  
})
export class HomapageComponent {
  value : any;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
