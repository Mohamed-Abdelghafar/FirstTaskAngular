import { HostListener, Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.scrollY;
    let nav:any = document.querySelector('nav')

    if (offset > 100) {
      nav.classList.remove('py-4')
      
    } else {
      nav.classList.add('py-4')
    }
  }
}
