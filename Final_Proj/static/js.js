// /* -------------active nav bar*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });

  // document.querySelector('#contact-form').addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   e.target.elements.name.value = '';
  //   e.target.elements.email.value = '';
  //   e.target.elements.message.value = '';
  // });

  /*picture parking*/
  function showPicture() {
    var sourceOfPicture = "../static/Parking Pictures.png";
    var img = document.getElementById('parking_pic')
    img.src = sourceOfPicture.replace('10x10', '10x10');
    img.height = 350;
    img.widht = 450;
    img.style.display = "block";
  }
/* build a comparison table*/
function calculate(name){
    var dist= document.getElementById('distInput').value;
  let prices  = [
      { brand: "../static/Lime.jpg", name: "Lime", price: calculate("Lime",dist) },
      { brand: "../static/Bird.png", name: "Bird", price: calculate("Bird",dist) },
      { brand: "../static/Wind.png", name: "Wind", price: calculate("Wind",dist) },
    ];
  /*calculates estimated price*/
  function calculate(name,dist)
    {
      if (name == "Lime")
      {
          return (5+dist*1.8*0.45);
      }
      if (name == "Bird")
      {
        return 4.5+dist*1.8*0.5;
      }
      else{
        return 1.8*0.85*dist
      }
  
    }
    /*generate the table heade*/
    function generateTableHead(table, data) {
      let thead = table.createTHead();
      let row = thead.insertRow(0);
      for (let key of data) {
        let th = document.createElement("th");
        th.id='hd';
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    /*generate table content*/
    function generateTable(table, data) {
      for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
          if(key == "brand")
          {
            let cell = row.insertCell();
            var img = document.createElement('img');
            img.src = element[key];
            img.id="pic";
            cell.appendChild(img);
          }
          else{
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
          }
        }
      }
    }
    var table = document.querySelector("table");
    let data = Object.keys(prices[0]);
    generateTableHead(table, data);
    generateTable(table, prices);
    replace();
    /*replace the content after pressing calculate*/
    function replace()
    {
      var aftercompare =  document.getElementById("aftercompare");
      var compare =  document.getElementById("afterNearby");
      aftercompare.style.visibility="visible"
      compare.parentNode.replaceChild(aftercompare, compare);
    }
  
  }
