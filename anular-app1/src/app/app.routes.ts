import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructurealDirComponent } from './components/directive/structureal-dir/structureal-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { FoorloopSwitchComponent } from './components/foorloop-switch/foorloop-switch.component';

export const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'employee-list',
        component: EmployeeListComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'structureal-dir',
        component: StructurealDirComponent
    },
    {   
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {   
        path: 'if-else',
        component: IfElseComponent
    },
    {   
        path: 'foor-loop-switch',
        component: FoorloopSwitchComponent
    },
];
