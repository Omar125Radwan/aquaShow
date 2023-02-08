import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aquashow';
  navbg = {};
  @HostListener('document:scroll') scrollover() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background': '#000000'
      }
    } else {
      this.navbg = {}
    }
  }
  categories = [
    {
      name: 'action',
      genr: '28',
    },
    {
      name: 'advaenture',
      genr: '12',
    },
    {
      name: 'animation',
      genr: '16',
    },
    {
      name: 'comedy',
      genr: '35',
    },
    {
      name: 'documantary',
      genr: '99',
    },
    {
      name: 'ScienceFiction',
      genr: '878',
    },
    {
      name: 'thriller',
      genr: '53',
    },
  ]
}
