import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course.resolver';
import {CreateCourseComponent} from './create-course/create-course.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {VirtualScrollingComponent} from './virtual-scrolling/virtual-scrolling.component';
import {ProvaComponent} from './prova/prova.component';
import {ProvaCorsiComponent} from './prova-corsi/prova-corsi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'prova_corsi',
    component: ProvaCorsiComponent
  },
  {
    path: 'courses/:id',
    component: ProvaComponent, //CourseComponent,
    resolve: {
      course: CourseResolver
    }
  },
  {
    path: 'add-new-course',
    component: CreateCourseComponent
  },
  {
    path: 'drag-drop-example',
    component: DragDropComponent
  },
  {
    path: 'tree-demo',
    component: TreeDemoComponent
  },
  {
    path: 'virtual-scrolling',
    component: VirtualScrollingComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
