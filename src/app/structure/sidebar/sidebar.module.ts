import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {StructureModule} from "../structure.module";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        StructureModule,
        RouterModule
    ]
})
export class SidebarModule { }
