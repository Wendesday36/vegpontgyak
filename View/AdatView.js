import TablazatSorView from "./TablazatSorView.js";
class AdatView{
    #lista = [];

    constructor(lista, szuloElem) {
      this.#lista = lista;
  
      szuloElem.append(`<table class= table >`);
      this.tablaElem = szuloElem.children("table");
  
      this.megjelenit();
    }
    megjelenit() {
      this.#lista.forEach((elem,index) => {
        new TablazatSorView(elem, this.tablaElem,index);
      });
    }
    }
    export default AdatView