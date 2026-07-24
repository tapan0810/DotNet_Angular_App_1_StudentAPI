import { Routes } from '@angular/router';
import  { StudentListComponent } from './components/student-list/student-list.component';
import  { StudentAddComponent } from './components/student-add/student-add.component';
import  { StudentDetailsComponent } from './components/student-details/student-details.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'students',
        pathMatch:'full'
    },
    {
        path:'students',
        component:StudentListComponent
    },
    {
        path:'students/add',
        component:StudentAddComponent
    },
    {
        path:'students/:id',
        component:StudentDetailsComponent
    }
];
