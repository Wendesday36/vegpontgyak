class DataService {
  constructor() {}
  getData(apivegpont,callback,hibaCallback) {
    axios
      .get(apivegpont)
      .then(function (response) {
        // handle success
        /* console.log("Valasz objektum", response);
        console.log("adatok", response.data.nevek);
        console.log("statusz", response.status);
        console.log("Statusz szoveg", response.statusText);
        console.log("Valasz fejlec", response.headers);
        console.log("Valasz config", response.config); */
        callback(response.data.nevek)
      })
      .catch(function (error) {
        // handle error
       //console.log(error);
       hibaCallback(error)
      })
      .finally(function () {
        // always executed
      });
  }
}

export default DataService;
