import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructurealDirComponent } from './components/directive/structureal-dir/structureal-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { FoorloopSwitchComponent } from './components/foorloop-switch/foorloop-switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PostalCardsComponent } from './postal-cards/postal-cards.component';
import { TempleteComponent } from './components/forms/templete/templete.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { FormElementComponent } from './components/forms/form-element/form-element.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';

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
    {   
        path: 'pipe',
        component: PipeComponent
    },
    {   
        path: 'postal-api',
        component: PostalCardsComponent
    },
    {   
        path: 'templete-forms',
        component: TempleteComponent
    },
    {   
        path: 'reactive-forms',
        component: ReactiveComponent
    },
    {   
        path: 'form-element',
        component: FormElementComponent
    },
    {   
        path: 'get-api',
        component: GetApiComponent
    },
    {   
        path: 'post-api',
        component: PostApiComponent
    },
];
