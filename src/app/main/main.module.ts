import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from '../guards/auth.guard';
import { MainComponentModule } from '../components/main-component.module';
import { GalleryDataResolver } from './gallery/gallery-data.resolver';
import { MatIconModule } from '@angular/material/icon';

const pageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [AuthGuard],
    resolve: { characterData: GalleryDataResolver },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, GalleryComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes),
    MainComponentModule,
    MatIconModule,
  ],
})
export class MainModule {}
