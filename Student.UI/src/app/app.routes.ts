import { Routes } from '@angular/router';

import { StudentList } from './features/students/student-list/student-list';
import { StudentAdd } from './features/students/student-add/student-add';
import { StudentDetails } from './features/students/student-details/student-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentList
  },
  {
    path: 'students/add',
    component: StudentAdd
  },
  {
    path: 'students/:id',
    component: StudentDetails
  }
];