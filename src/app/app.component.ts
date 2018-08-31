import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isExpand = true;
  isLogin: boolean;
  routeName: string;
  isSpinner: boolean;
  user: any;
  isAdmin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService) {}

  ngOnInit() {
    const vm = this;
    vm.router.events.forEach((event) => {
      // if (event instanceof NavigationEnd) {
      //   vm.isLogin = false;
      //   vm.user = vm.appService.userObj;
      //   vm.isAdmin = vm.appService.userObj && vm.appService.userObj.admin;
      //   let currentRoute = this.route.root;
      //   if (currentRoute.children[0] !== undefined) {
      //     currentRoute = currentRoute.children[0];
      //   }
      //   if (currentRoute.snapshot.data) {
      //     vm.isLogin = currentRoute.snapshot.data.name === 'login' || currentRoute.snapshot.data.name === 'forgot' ? true : false;
      //     vm.routeName = currentRoute.snapshot.data.name;
      //   }
      // }
    });
    vm.appService.isSpinnerUpdated$.subscribe(value => {
      vm.isSpinner = value;
    });
  }

  onLogout() {
    const vm = this;
    vm.isSpinner = false;
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
