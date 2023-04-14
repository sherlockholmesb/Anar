alert("welcome!")

 

function ededinReqemleriCemi(eded) {
    var cem = 0;
    while (eded > 0) {
      cem += eded % 10;
      eded = Math.floor(eded / 10);
    }
    return cem;
  }

  var eded = 1234;
var cem = ededinReqemleriCemi(eded);
console.log(cem);

function sadeVeyaMurekkeb(eded) {
    if (eded < 2) {
      return "Ədəd sadə deyil və ya mürəkkəb deyil.";
    }
    for (var i = 2; i <= Math.sqrt(eded); i++) {
      if (eded % i == 0) {
        return "Mürəkkəb ədəd.";
      }
    }
    return "Sadə ədəd.";
  }

  var eded = 37;
var netice = sadeVeyaMurekkeb(eded);
console.log(netice);var eded = 37;
var netice = sadeVeyaMurekkeb(eded);
console.log(netice);