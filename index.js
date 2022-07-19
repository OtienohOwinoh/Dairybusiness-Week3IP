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


    document.getElementById("dataOutput").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("dataOutput").innerHTML += "<hr>"

    document.getElementById("dataOutput").innerHTML += "<Br>"


    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;


    document.getElementById("dataOutput").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"



    document.getElementById("dataOutput").innerHTML += "<Br>"

    document.getElementById("dataOutput").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("dataOutput").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("dataOutput").innerHTML += "<hr>"

    document.getElementById("dataOutput").innerHTML += "<Br>"

    newDailyIncome = sumData * 49.60;



    newIncomeJanuary = newDailyIncome * 31;
    newIncomeFebruary = newDailyIncome * 29;
    newIncomeMarch = newDailyIncome * 31;
    newIncomeApril = newDailyIncome * 30;
    newIncomeMay = newDailyIncome * 31;
    newIncomeJune = newDailyIncome * 30;
    newIncomeJuly = newDailyIncome * 31;
    newIncomeAugust = newDailyIncome * 31;
    newIncomeSeptember = newDailyIncome * 30;
    newIncomeOctober = newDailyIncome * 31;
    newIncomeNovember = newDailyIncome * 30;
    newIncomeDecember = newDailyIncome * 31;

    newIncomeInLeapYear = 366 * 49.60;


    incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
    incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
    incomeMarchDifference = newIncomeMarch - incomeMarch;
    incomeAprilDifference = newIncomeApril - incomeApril;
    incomeMayDifference = newIncomeMay - incomeMay;
    incomeJuneDifference = newIncomeJune - incomeJune;
    incomeJulyDifference = newIncomeJuly - incomeJuly;
    incomeAugustDifference = newIncomeAugust - incomeAugust;
    incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
    incomeOctoberDifference = newIncomeOctober - incomeOctober;
    incomeNovemberDifference = newIncomeNovember - incomeNovember;
    incomeDecemberDifference = newIncomeDecember - incomeDecember;

    function resetPage(){

        document.getElementById("dataOutput").remove("innerHTML");
        location.reload();
    }


}    
