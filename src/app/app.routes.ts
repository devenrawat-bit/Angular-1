import { Routes } from '@angular/router';
import { ControlFlow } from './component/control-flow/control-flow';
import { DataBinding } from './component/data-binding/data-binding';
import { Signal } from './component/signal/signal';
import { Attribute } from './component/attribute/attribute';
import { User } from './component/user/user';
import { NotFound } from './component/not-found/not-found';
import { Photos } from './component/photos/photos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    },
    {
        path: 'controlflow',
        component: ControlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'attribute',
        component: Attribute
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        path: "**",
        component: NotFound
    }
];
