function produceReport(){

    event.preventDefault();

    let data= [];

    data[0] = data["shed_a"] = parseInt(document.getElementById("shed_a").value);
    data[1] = data["shed_b"] = parseInt(document.getElementById("shed_b").value);
    data[2] = data["shed_c"] = parseInt(document.getElementById("shed_c").value);
    data[3] = data["shed_d"] = parseInt(document.getElementById("shed_d").value);

    let sumData = data.shed_a + data.shed_b + data.shed_c + data.shed_d;

    document.getElementById("dataOutput").innerHTML += "<Br>"

    document.getElementById("dataOutput").innerHTML += "<p>Your production in shed A is " + data.shed_a + " litres per day</p>";
    document.getElementById("dataOutput").innerHTML += "<p>Your production in shed B is " + data.shed_b + " litres per day</p>";
    document.getElementById("dataOutput").innerHTML += "<p>Your production in shed C is " + data.shed_c + " litres per day</p>";
    document.getElementById("dataOutput").innerHTML += "<p>Your production in shed D is " + data.shed_d + " litres per day</p>";

    document.getElementById("dataOutput").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";


    dailyIncome = sumData * 45;

    document.getElementById("dataOutput").innerHTML += "<Br>"

    document.getElementById("dataOutput").innerHTML += "<hr>"

    document.getElementById("dataOutput").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("dataOutput").innerHTML += "<hr>"




}