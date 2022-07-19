function produceReport(){

    event.preventDefault();

    let data= [];

    data[0] = data["shed_a"] = parseInt(document.getElementById("shed_a").value);
    data[1] = data["shed_b"] = parseInt(document.getElementById("shed_b").value);
    data[2] = data["shed_c"] = parseInt(document.getElementById("shed_c").value);
    data[3] = data["shed_d"] = parseInt(document.getElementById("shed_d").value);

    let sumData = data.shed_a + data.shed_b + data.shed_c + data.shed_d;

    document.getElementById("dataoutput").innerHTML += "<Br>"







}