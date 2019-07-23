import { Component, OnInit } from '@angular/core';
import { ServicioProductoService } from 'src/app/services/servicio-producto.service';
import { ServicioPedidosService } from 'src/app/services/servicio-pedidos.service';

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styles: [`
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
  }
  
  #regForm {
    background-color: #ffffff;
    margin: 100px auto;
    font-family: Raleway;
    padding: 40px;
    width: 70%;
    min-width: 300px;
  }
  
  h1 {
    text-align: center;  
  }
  
  input {
    padding: 10px;
    width: 100%;
    font-size: 17px;
    font-family: Raleway;
    border: 1px solid #aaaaaa;
  }
  
  /* Mark input boxes that gets an error on validation: */
  input.invalid {
    background-color: #ffdddd;
  }
  
  /* Hide all steps by default: */
  .tab {
    display: none;
  }
  
  button {
    background-color: #4CAF50;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 17px;
    font-family: Raleway;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  #prevBtn {
    background-color: #bbbbbb;
  }
  
  /* Make circles that indicate the steps of the form: */
  .step {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbbbbb;
    border: none;  
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;
  }
  
  .step.active {
    opacity: 1;
  }
  
  /* Mark the steps that are finished and valid: */
  .step.finish {
    background-color: #4CAF50;
  }
  `]
})
export class ProcesoCompraComponent implements OnInit {
  currentTab = 0; // Current tab is set to be the first tab (0)
  confirmacion = {}
  compra: any = [];
  constructor(private srvProducto: ServicioProductoService, private srvAux: ServicioPedidosService) {
    this.confirmacion = JSON.parse(sessionStorage.getItem('confirmShop'));
    this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
  }

  ngOnInit() {
    this.showTab(this.currentTab); // Display the crurrent tab
  }

  showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n]['style'].display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Comprar";
    } else {
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    this.fixStepIndicator(n)
  }

  nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !this.validateForm()) return false;
    // Hide the current tab:
    x[this.currentTab]['style'].display = "none";
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form...
    if (this.currentTab >= x.length) {
      // ... the form gets submitted:
      this.compraVerificada();
      this.currentTab = 0;
      this.showTab(this.currentTab);
      return false;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  }

  validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[this.currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[this.currentTab].className += " finish";
    }
    return valid; // return the valid status
  }

  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    this.actualizarConfirmacion();
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }

  actualizarConfirmacion() {
    sessionStorage.setItem('confirmShop', JSON.stringify(this.confirmacion));
  }
  consulta() {
    console.log(this.confirmacion);
  }
  compraVerificada() {
    let pedido = {
      pedidoNumero: null,
      fecha: new Date(),
      estado: 1,
      monto: 150,
      confirmacionPago: this.confirmacion,
      detalle: this.compra,
      uidCompra: 1,
      id: null,
      estadoDes: '',
    }
    this.srvAux.addpedidos(pedido).then(pedidoNuevo => {
      pedidoNuevo.update({ pedidoNumero: pedidoNuevo.id }).then(actualizado => {
        this.confirmacion = {};
        sessionStorage.setItem('confirmShop', JSON.stringify(this.confirmacion));
      })

    })
  }

}
