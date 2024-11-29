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
    // Create a new jsPDF instance
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // Use the local date
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    // Title of the PDF
    doc.setFontSize(18);
    doc.addFont('Helvetica', 'Helvetica', 'normal');
    doc.text('Reporte del Formulario', 10, 10);

    // Form data
    doc.setFontSize(12);
    doc.text(`Nombre: ${this.formData.nombre || 'No especificado'}`, 10, 30);
    doc.text(`Edad: ${this.formData.edad || 'No especificada'}`, 10, 40);
    doc.text(`Género: ${this.formData.genero || 'No especificado'}`, 10, 50);
    doc.text(`Fecha: ${formattedDate}`, 10, 60);

    // Save the PDF
    doc.save('reporte.pdf');
  }
}
