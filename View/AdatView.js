import TablazatSorView from "./TablazatSorView.js";
class AdatView {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;

    szuloElem.append(`<table class= table >`);
    this.tablaElem = szuloElem.children("table");

    this.megjelenit();
  }
  megjelenit() {
    this.fejlec()
    this.#lista.forEach((elem, index) => {
      new TablazatSorView(elem, this.tablaElem, index);
    });
  }
  fejlec() {
    let txt = "<tr>";
    for (const key in this.#lista[0]) {
      txt += `<th>${key}</th>`;
    }
    txt += `</tr>`;

    this.tablaElem.append(txt);
  }
}
export default AdatView;
