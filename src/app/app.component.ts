import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>main! !!!</h3>
    <ul class="nav nav-tabs " id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link "
           routerLinkActive="active"
           aria-current="page"
           routerLink="edit/create">create</a>
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
