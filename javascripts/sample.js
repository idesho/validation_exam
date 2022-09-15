function getElement() {
    const element = document.getElementsByTagName("h1");
    element[0].innerText = "変更しました"
  };
  
  window.onload = getElement;
