import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  private studentService = inject(StudentService);
  private snackBar = inject(MatSnackBar);

  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'email',
    'actions'
  ];

  dataSource = new MatTableDataSource<Student>();

  loading = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {

    this.studentService.getStudents().subscribe({

      next: (students) => {

        this.dataSource.data = students;

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;

        this.loading = false;

      },

      error: () => {

        this.loading = false;

        this.snackBar.open(
          'Failed to load students.',
          'Close',
          {
            duration: 3000
          }
        );

      }

    });

  }

  search(event: Event) {

    const filter = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filter.trim().toLowerCase();

  }

  deleteStudent(id: number) {

    if (!confirm('Delete this student?')) {

      return;

    }

    this.studentService.deleteStudent(id).subscribe({

      next: () => {

        this.snackBar.open(
          'Student deleted successfully.',
          'Close',
          {
            duration: 3000
          }
        );

        this.loadStudents();

      }

    });

  }

}