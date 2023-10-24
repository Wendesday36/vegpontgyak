import AdatModel from "../Model/AdatModel.js"
import AdatView from "../View/AdatView.js"
import DataService from "../Model/DataService.js"
import HibaView from "../View/HibaView.js"
class AdatController{
    constructor(){
        console.log("constr")
        this.dataService = new DataService()
        this.dataService.getData("../adat.json",this.adatokMegj,this.hibaMegj)
    }
    adatokMegj(lista){
        console.log(lista)
        new AdatView(lista,$(".lista"))
    }
    hibaMegj(error){
        console.log(error)
        new HibaView(error,$(".lista"))
    }
    }
    export default AdatController