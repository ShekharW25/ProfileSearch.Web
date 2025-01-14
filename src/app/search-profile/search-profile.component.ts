import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
 
@Component({
  selector: 'search-profile',
  imports: [CommonModule, ReactiveFormsModule,MatCardModule,MatButtonModule, MatSelectModule],
  templateUrl: './search-profile.component.html',
  styleUrl: './search-profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SearchProfileComponent {
   
  searchForm: FormGroup;
  skillList: string[] = ['C#', 'JavaScript', 'Angular', 'React', 'Node.js', 'Python'];
  
constructor() {
    this.searchForm = new FormGroup({ 
      skills: new FormControl('', Validators.required)    
    });
  }


    onSubmit(): void {
      if (this.searchForm.valid) {
        console.log('Form Submitted', this.searchForm.value);
      } else {
        console.log('Form is invalid');
      }
    }
}
