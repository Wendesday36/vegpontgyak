import AdatModel from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import DataService from "../Model/DataService.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
class AdatController {
  constructor() {
    // console.log("constr")
    this.dataService = new DataService();
    this.adatleiro = new AdatModel();
    console.log(this.adatleiro.leiro);
    this.dataService.getData(
      "../adat.json",
      this.adatokMegj,
      this.hibaMegj,
      this.adatleiro.leiro
    );
    this.UrlapView = new UrlapView($(".urlap"), this.adatleiro.leiro);
    $(window).on("katt", (event) => {
      console.log(event.detail);
    });
    $(window).on("torles", (event) => {
        console.log(event.detail);
      });
      $(window).on("megse", (event) => {
        console.log(event.detail);
      });
      $(window).on("kesz", (event) => {
        console.log(event.detail);
      });
  }
  adatokMegj(lista, leiro) {
    // console.log(lista)
    console.log(leiro);
    new AdatView(lista, $(".lista"), leiro);
  }
  hibaMegj(error) {
    console.log(error);
    new HibaView(error, $(".lista"));
  }
}
export default AdatController;
