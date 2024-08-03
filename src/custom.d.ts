declare module 'jspdf-autotable' {
    import jsPDF from 'jspdf';
    type AutoTableOptions = {
      startY?: number;
      head?: Array<Array<string>>;
      body?: Array<Array<string | number>>;
    };
    export function autoTable(doc: jsPDF, options: AutoTableOptions): void;
    export default autoTable;
  }
  