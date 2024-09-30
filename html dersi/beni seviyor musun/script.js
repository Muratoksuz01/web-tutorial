function yesClicked() {
    alert("Biliyordum zaten!");
  }
  
  function noClicked() {
    var buttons = document.querySelector('.buttons');
    var noButton = document.querySelector('.no');
    var yesButton = document.querySelector('.yes');
  
    // Butonun rastgele bir yere taşınması için x ve y koordinatlarını hesaplayın
    var x = Math.floor(Math.random() * (window.innerWidth - 100));
    var y = Math.floor(Math.random() * (window.innerHeight - 40));
  
    // Butonun stil özelliklerini güncelleyin
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
  }