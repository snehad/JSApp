import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { RegisterComponent } from './register/register.component';
import { UserTypeComponent } from './user-type/user-type.component';

const routes: Routes = [
  {path:"", component: UserTypeComponent },
  {path:"register", component: RegisterComponent},
  {path:"contactDetails", component: ContactDetailsComponent},
  {path:"qrCode", component: QrCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})          
export class AppRoutingModule { }
