import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentService = inject(StudentService);
  private snackBar = inject(MatSnackBar);

  student?: Student;

  loading = true;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {

      this.router.navigate(['/students']);

      return;

    }

    this.studentService.getStudent(id).subscribe({

      next: (response) => {

        this.student = response;

        this.loading = false;

      },

      error: () => {

        this.loading = false;

        this.snackBar.open(
          'Student not found.',
          'Close',
          {
            duration: 3000
          }
        );

        this.router.navigate(['/students']);

      }

    });

  }

  goBack() {

    this.router.navigate(['/students']);

  }

}