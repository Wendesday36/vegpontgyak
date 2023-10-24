class TablazatSorView {
  #adat = {};
  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.tablaElem = szuloElem;

    this.#sor();
    this.index = index;
    this.sorElem = this.tablaElem.children("tr:last-child");
  }
  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      const element = this.#adat[key];
      txt += `<td>${element}</td>`;
    }

    txt += `</tr>`;

    this.tablaElem.append(txt);
  }
  /*  #esemenyTrigger(esemenynev){
      const esemenyem = new CustomEvent(esemenynev,{detail:this.index})
      window.dispatchEvent(esemenyem)
    } */
}
export default TablazatSorView;
