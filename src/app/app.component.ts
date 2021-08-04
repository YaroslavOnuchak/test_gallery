import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--    <ul class="list-group list-group-flush">-->
    <!--      <li class="list-group-item nav-item"-->
    <!--          routerLinkActive="active">-->
    <!--        <a class="nav-link"-->
    <!--           routerLink="view/create">app create</a></li>-->

    <!--      <li class="list-group-item nav-item"-->
    <!--          routerLinkActive="active">-->
    <!--        <a class="nav-link"-->
    <!--           routerLink="view/dashboard">app dashboard</a></li>-->
    <!--    </ul>-->
    <h3>main  !!</h3>
    <ul class="nav nav-tabs " id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link "
           routerLinkActive="active"
           aria-current="page"
           routerLink="view/create">create</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"
           routerLinkActive="active"
           routerLink="view/dashboard">dashboard</a>
      </li>

    </ul>

    <router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gallery';
}
