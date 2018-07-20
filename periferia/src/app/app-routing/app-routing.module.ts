import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from '../register/register.component';
import { CharactersComponent } from '../characters/characters.component';

const routes: Routes = [
		{
            path: '',
            component: RegisterComponent,
        },
        {
            path: 'register',
            component: RegisterComponent,
        },
        {
            path: 'characters',
            component: CharactersComponent,
        }
    ];


    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }

