import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  changeInputValue(e:any){
    let inputHeader:any = e.target.parentElement.children[0].children[0];
    
    if (e.target.value.length > 0) {
      inputHeader.classList.add('up')
    }
    else {
      inputHeader.classList.remove('up')
    }
  }
}
