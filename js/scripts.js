function rysujChoinke(rows) {
  var star;
  for (var i = 1; i <= rows; i++) {
    star = '';
    
    for (var j = 0; j < i * 2 - 1; j++) {
      star += '*'
    }
    
    console.log(star);
  }
}

rysujChoinke(10);