import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatSelectModule, MatExpansionModule  } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatInputModule, MatSelectModule, MatExpansionModule ],
  exports: [ MatButtonModule, MatInputModule, MatSelectModule, MatExpansionModule ],
})
export class MaterialModule { }