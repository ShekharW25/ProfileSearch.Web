import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule, FormGroup, FormControl, MinValidator } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { min } from 'rxjs';
import {ProfileService} from '../services/profile.service';
import { Skill } from '../model/skill';

@Component({
    selector: 'add-profile',
    templateUrl: './add-profile.component.html',
    styleUrls: ['./add-profile.component.css'],
    standalone: false
})
export class AddProfileComponent implements OnInit {
  candidateForm: FormGroup;
   
  skillList:Skill[] = [];

  constructor(private profileService: ProfileService) { 
    this.candidateForm = new FormGroup({
      candidateName: new FormControl('', Validators.required),
      candidatePhotoPath: new FormControl('', Validators.required), 
      location: new FormControl('', Validators.required), 
      skills: new FormControl('', Validators.required), 
      experience: new FormControl('', Validators.required), 
      summary: new FormControl('', Validators.required)

    });


  }
   
  getSkills(){
    this.profileService.getSkills().subscribe({
      next: (data:Skill[])=>{
        this.skillList = data;
      }
    });
  }
  ngOnInit(): void {
    
    this.getSkills();
  }
 
  onSubmit(): void {
    if (this.candidateForm.valid) {
      this.profileService.saveProfile(this.candidateForm.value)
        .subscribe({
          next: (response) => alert(response),
          error: (error) => console.error('Error saving profile:', error)
        });
      
      console.log('Form Submitted', this.candidateForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
