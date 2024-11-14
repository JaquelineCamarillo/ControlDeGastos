import { Component } from '@angular/core';
import { FinanzasService } from '../../services/finanzas.service';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent {
  simboloBusqueda: string = ''; // Variable para el símbolo de búsqueda
  stockData: any=null;
  error: string | null = null;

  constructor(private finanzasService: FinanzasService) {}

  buscar() {
    if (this.simboloBusqueda) {
      this.finanzasService.getStockQuote(this.simboloBusqueda).subscribe(
        data => {
          this.stockData = data;
          this.error = null; // Resetea el mensaje de error si la búsqueda es exitosa
        },
        error => {
          this.error = 'Error al obtener datos de la acción. Intente con otro símbolo.';
          this.stockData = null;
        }
      );
    }
  }
}
