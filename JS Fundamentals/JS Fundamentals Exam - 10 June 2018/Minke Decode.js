function minkeDecode(arr) {
    let text = arr[3];
    let country = text.match(/[A-Z][a-z]+[A-Z]/);
    let part = country[0].substring(Number(arr[0]), Number(arr[1])+1)
    country = country[0].replace(part, arr[2]);
    country = Array.from(country);
    country[country.length-1] = country[country.length-1].toLowerCase();
    country = country.join('');

    let city = text.match(/[0-9]{3}(\.[0-9]*)?/g).map(a => String.fromCharCode(Math.ceil(Number(a))));
    city = Array.from(city);
    city[0] = city[0].toUpperCase();
    city = city.join('');

    console.log(`${country} => ${city}`)
}

minkeDecode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);
minkeDecode(["5",
    "7",
    "riA",
    "BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he"]);