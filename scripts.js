function loadXMLFile() {
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            parseXML(this);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function parseXML (xml) {
    var xmlData = xml.responseXML;
    var table = "<table>";
    var x = xmlData.getElementsByTagName("Title");
    for (i=0; i < 10; i++){
        table += "<tr><td>" + x[i].childNodes[0].nodeValue + "</tr></td>"
    }
    table += "</table>";
    document.getElementById("results").innerHTML = table;
}

