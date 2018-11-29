import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCoreComponent } from './profile-core.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileCoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProfileCoreRoutingModule { }
