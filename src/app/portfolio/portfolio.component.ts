import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  boxes = ['./assets/port1.png','./assets/port2.png','./assets/port3.png','./assets/port1.png','./assets/port2.png','./assets/port3.png']
  clickImg(e:any){
   let imgSrc:any = e.target.closest('.imgBox').children[0].src;
   let layer:any = document.querySelector('.clickedLayer');
   let imgLayerSrc:any = document.querySelector('.clickedLayer img');
   layer.classList.remove('d-none')
   imgLayerSrc.setAttribute('src',imgSrc)
  }
  closeLayer(e:any){
    let layer:any = document.querySelector('.clickedLayer')
    let imgShow:any = document.querySelector('.clickedLayer img')
    if (e.target !== imgShow) {
      layer.classList.add('d-none')
    }    
    if (e == 'esc') {
      layer.classList.add('d-none')
    }
  }
}
