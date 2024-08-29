// XPath ifadesi ile eşleşen öğeleri seç
var xpath = "//*[@jsname='UWckNb']"; // XPath ifadesini buraya yazın
var result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Liste öğelerini tutacak bir dizi oluştur
var listItems = [];

// Seçilen öğelerin href özelliklerini listeye ekle
for (var i = 0; i < result.snapshotLength; i++) {
    var node = result.snapshotItem(i);
    if (node.nodeName === 'A' && node.href) {
        listItems.push(node.href);
    }
}

// Syhmhz dizisini oluştur ve 'jsname' özelliğine göre href değerlerini ekle
var syhmhz = [];
for (var i = 0; i < document.evaluate("//*[@jsname='UWckNb']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength; i++) {
    var element = document.evaluate("//*[@jsname='UWckNb']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(i);
    if (element.getAttribute('href')) {
        syhmhz.push(element.getAttribute('href'));
    }
}

// HTML olarak listeyi ekrana yazdır
for (var j = 0; j < syhmhz.length; j++) {
    document.write(syhmhz[j] + "<br>");
}
