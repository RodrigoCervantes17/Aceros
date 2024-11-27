import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formData = {
    nombre: '',
    edad: null,
    genero: ''
  };

  constructor() {}

  generarPDF() {
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text('Reporte del Formulario', 10, 10);

    // Datos del formulario
    doc.setFontSize(12);
    doc.text(`Nombre: ${this.formData.nombre}`, 10, 30);
    doc.text(`Edad: ${this.formData.edad}`, 10, 40);
    doc.text(`Género: ${this.formData.genero}`, 10, 50);

    // Guardar el archivo
    doc.save('reporte.pdf');
  }
}
