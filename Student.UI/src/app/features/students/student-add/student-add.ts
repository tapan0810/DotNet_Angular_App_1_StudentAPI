import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { StudentService } from '../../../core/services/student.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css'
})
export class StudentAdd {

  private fb = inject(FormBuilder);
  private service = inject(StudentService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  studentForm = this.fb.group({

    name: ['', Validators.required],

    age: [
      null,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ]

  });

  saveStudent() {

    if (this.studentForm.invalid) {

      this.studentForm.markAllAsTouched();

      return;

    }

    this.service.createStudent(this.studentForm.value as any).subscribe({

      next: () => {

        this.snackBar.open(
          'Student added successfully.',
          'Close',
          {
            duration: 3000
          }
        );

        this.router.navigate(['/students']);

      },

      error: () => {

        this.snackBar.open(
          'Unable to save student.',
          'Close',
          {
            duration: 3000
          }
        );

      }

    });

  }

  resetForm() {

    this.studentForm.reset();

  }

}