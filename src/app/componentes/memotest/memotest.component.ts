import { Component } from '@angular/core';
import { Pieza } from '../../Clases/Pieza.1';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memotest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memotest.component.html',
  styleUrl: './memotest.component.css'
})
export class MemotestComponent {
  public piezas: Array<Pieza> = new Array<Pieza>
  public dorso: String = "https://i.pinimg.com/564x/8a/47/e4/8a47e4f3099c751be9d4ae3af4e5d818.jpg";

  constructor() {
    let numeros: Number[] = new Array<Number>();

    let cantPiezas = 16;

    while (numeros.length < cantPiezas) {
      let valor = Math.floor(Math.random() * (cantPiezas / 2));
      if (valor < (cantPiezas / 2) && numeros.filter(x => x == valor).length < 2) {
        numeros.push(valor);
      }
    }

    numeros.forEach(element => {
      let imagen = "";
      switch (element) {
        case 0:
          imagen = 'https://i.pinimg.com/564x/d9/0d/46/d90d46f6ea80f47642e1a19feeef6915.jpg';
          break;
        case 1:
          imagen = 'https://i.pinimg.com/564x/8b/85/35/8b85351ba5d517154255c2a00c8e86bc.jpg';
          break;
        case 2:
          imagen = 'https://i.pinimg.com/564x/10/8a/84/108a846a2e414c9c012050268f0ece31.jpg';
          break;
        case 3:
          imagen = 'https://i.pinimg.com/564x/09/e0/cb/09e0cb9135c9a91193a3f9e3ddc2e268.jpg';
          break;
        case 4:
          imagen = 'https://i.pinimg.com/564x/c1/50/92/c150924573214e446add591891a91b71.jpg';
          break;
        case 5:
          imagen = 'https://i.pinimg.com/564x/c1/b1/6b/c1b16b342e2bbe1293ed3b9dbcfe5d8b.jpg';
          break;
        case 6:
          imagen = 'https://i.pinimg.com/564x/81/89/65/81896594bccfb0a37eb4f8ae99e4c841.jpg';
          break;
        case 7:
          imagen = 'https://i.pinimg.com/564x/be/35/9a/be359ade88ee33b6a8de695d6f1f80e7.jpg';
          break;
        default:
      }

      this.piezas.push({ imagen: imagen, descubierta: false, seleccionada: false })

    });
  }

  validar() {
    let sel = this.piezas.filter(x => x.seleccionada && !x.descubierta);
    if (sel.length == 2) {
      sel[0].seleccionada = false;
      sel[1].seleccionada = false;
      sel[0].descubierta = sel[1].imagen == sel[0].imagen;
      sel[1].descubierta = sel[1].imagen == sel[0].imagen;
    }
  }

}
