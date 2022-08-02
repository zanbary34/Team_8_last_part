//-------js.js

// /* -------------active nav bar*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });

  function check_pic(brand)
  {
    if (brand == "lime")
      return brands_pics[0]
    else if (brand == "bird")
        return brands_pics[1]
    else
      return brands_pics[2]
  }

  function init_parking_Map(z,t,response){
    console.log(response[0])
    if (document.URL.includes("find_my"))
      var a=  document.getElementById('map')
    else
      var a=  document.getElementById('parking_map')
    var map = new google.maps.Map(a, {
    zoom: 15,
    center: new google.maps.LatLng(z, t),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  //parking locations
  for (const location of response){
    console.log(location[0])
    if (document.URL.includes("find_my"))
       var url_s = check_pic(location[2])
    else
      var url_s = "../static/media/parking icon.png"
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(location[1], location[0]),
      icon: {
        url: url_s,
        labelOrigin: new google.maps.Point(55, 12)
      },
      map: map
    });
    // my location marker
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(z, t),
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][3]*100);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  }
  //----- parking map /

  function showPicture() {
    if (document.URL.includes("find_my")) {
      var input = document.getElementById('brands').value;
    } else
      var input = document.getElementById('city').value;
    console.log(input)
    cordinate = check_city(input);
    let element = document.createElement('a');
    element.href = window.location.pathname;
    element.pathname = element.pathname + '/' + input;
    fetch(element.href).then(
        // response => init_parking_Map(31.2612,34.7684,response)
        (response) => response.json())
        .then(response => init_parking_Map(cordinate[0], cordinate[1], response))
        .catch(
            err => console.log(err)
        )
    if (navigator.geolocation) {
      console.log("in get location");
      // navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("location_p").innerHTML = "Geolocation is not supported by this browser.";
    }
    if (document.URL.includes("find_my")) {
      document.getElementById("map").style.visibility = "visible";
      document.getElementById("afterNearby").style.visibility = "visible";
    }
    else
      document.getElementById("parking_map").style.visibility = "visible";
  }
function check_city(city)
{
  cordinate = [];
  if (city == "Tel Aviv")
    cordinate = [32.073316, 34.782051];
  else if (city == "Beer Sheva")
    cordinate = [31.2518, 34.7913];
  else if (city == "Jerusalem")
    cordinate = [31.771959,35.217018];
  else
    cordinate = [34.052235,-118.243683]
  return cordinate
}
/* build a comparison table*/
function calculate(){
      console.log("ffff")
    var dist= document.getElementById('distInput').value;

  let prices  = [
      { brand: "../static/media/Lime.jpg", name: "Lime", price: calculate_dist("Lime",dist) },
      { brand: "../static/media/Bird.png", name: "Bird", price: calculate_dist("Bird",dist) },
      { brand: "../static/media/Wind.png", name: "Wind", price: calculate_dist("Wind",dist) },
    ];
    var table = document.querySelector("table");
    let data = Object.keys(prices[0]);
    generateTableHead(table, data);
    generateTable(table, prices);
    replace();
  }
 let brands_pics = ["../static/media/Lime copy.jpg","../static/media/Bird copy.png","../static/media/Wind copy.png"]

  // /calculates estimated price/
  function calculate_dist(name,dist)
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
    /generate the table heade/
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
    /generate table content/
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

    /replace the content after pressing calculate/
    function replace()
    {
      var aftercompare =  document.getElementById("aftercompare");
      var compare =  document.getElementById("afterNearby");
      aftercompare.style.visibility="visible"
      compare.parentNode.replaceChild(aftercompare, compare);
    }

    var style = document.createElement('style');
style.setAttribute("id","multiselect_dropdown_styles");
style.innerHTML = `
.multiselect-dropdown{
  display: inline-block;
  padding: 2px 5px 0px 5px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  background-color:  #e3fef3;
  color: black;
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
}
.multiselect-dropdown span.optext, .multiselect-dropdown span.placeholder{
  margin-right:0.5em; 
  margin-bottom:2px;
  padding:1px 0; 
  border-radius: 4px; 
  display:inline-block;
}
.multiselect-dropdown span.optext{
  background-color:lightgray;
  padding:1px 0.75em; 
}
.multiselect-dropdown span.optext .optdel {
  float: right;
  margin: 0 -6px 1px 5px;
  font-size: 0.7em;
  margin-top: 2px;
  cursor: pointer;
  color: #666;
}
.multiselect-dropdown span.optext .optdel:hover { color: #c66;}
.multiselect-dropdown span.placeholder{
  color:#ced4da;
}
.multiselect-dropdown-list-wrapper{
  box-shadow: gray 0 3px 8px;
  z-index: 100;
  padding:2px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  display: none;
  margin: -1px;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  background: white;
}
.multiselect-dropdown-list-wrapper .multiselect-dropdown-search{
  margin-bottom:5px;
}
.multiselect-dropdown-list{
  padding:2px;
  overflow-y:auto;
  overflow-x: hidden;
  background-color:  #e3fef3;
}
.multiselect-dropdown-list::-webkit-scrollbar {
  width: 6px;
}
.multiselect-dropdown-list::-webkit-scrollbar-thumb {
  background-color: #bec4ca;
  border-radius:3px;
}

.multiselect-dropdown-list div{
  padding: 5px;
}
.multiselect-dropdown-list input{
  height: 1.15em;
  width: 1.15em;
  margin-right: 0.35em;  
}
.multiselect-dropdown-list div.checked{
}
.multiselect-dropdown-list div:hover{
  background-color: #ced4da;
}
.multiselect-dropdown span.maxselected {width:100%;}
.multiselect-dropdown-all-selector {border-bottom:solid 1px #999;}
`;
document.head.appendChild(style);

function MultiselectDropdown(options){
  var config={
    search:true,
    // height:'15rem',
    placeholder:'select',
    txtSelected:'selected',
    txtAll:'All',
    txtRemove: 'Remove',
    txtSearch:'search',
    ...options
  };
  function newEl(tag,attrs){
    var e=document.createElement(tag);
    if(attrs!==undefined) Object.keys(attrs).forEach(k=>{
      if(k==='class') { Array.isArray(attrs[k]) ? attrs[k].forEach(o=>o!==''?e.classList.add(o):0) : (attrs[k]!==''?e.classList.add(attrs[k]):0)}
      else if(k==='style'){
        Object.keys(attrs[k]).forEach(ks=>{
          e.style[ks]=attrs[k][ks];
        });
       }
      else if(k==='text'){attrs[k]===''?e.innerHTML='&nbsp;':e.innerText=attrs[k]}
      else e[k]=attrs[k];
    });
    return e;
  }


  document.querySelectorAll("select[multiple]").forEach((el,k)=>{

    var div=newEl('div',{class:'multiselect-dropdown',style:{width:config.style?.width??el.clientWidth+'px',padding:config.style?.padding??''}});
    el.style.display='none';
    el.parentNode.insertBefore(div,el.nextSibling);
    var listWrap=newEl('div',{class:'multiselect-dropdown-list-wrapper'});
    var list=newEl('div',{class:'multiselect-dropdown-list',style:{height:config.height}});
    var search=newEl('input',{class:['multiselect-dropdown-search'].concat([config.searchInput?.class??'form-control']),style:{width:'100%',display:el.attributes['multiselect-search']?.value==='true'?'block':'none'},placeholder:config.txtSearch});
    listWrap.appendChild(search);
    div.appendChild(listWrap);
    listWrap.appendChild(list);

    el.loadOptions=()=>{
      list.innerHTML='';

      if(el.attributes['multiselect-select-all']?.value=='true'){
        var op=newEl('div',{class:'multiselect-dropdown-all-selector'})
        var ic=newEl('input',{type:'checkbox'});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:config.txtAll}));

        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;

          var ch=op.querySelector("input").checked;
          list.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")
            .forEach(i=>{if(i.style.display!=='none'){i.querySelector("input").checked=ch; i.optEl.selected=ch}});

          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });

        list.appendChild(op);
      }

      Array.from(el.options).map(o=>{
        var op=newEl('div',{class:o.selected?'checked':'',optEl:o})
        var ic=newEl('input',{type:'checkbox',checked:o.selected});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:o.text}));

        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;
          op.optEl.selected=!!!op.optEl.selected;
          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });
        o.listitemEl=op;
        list.appendChild(op);
      });
      div.listEl=listWrap;

      div.refresh=()=>{
        div.querySelectorAll('span.optext, span.placeholder').forEach(t=>div.removeChild(t));
        var sels=Array.from(el.selectedOptions);
        if(sels.length>(el.attributes['multiselect-max-items']?.value??5)){
          div.appendChild(newEl('span',{class:['optext','maxselected'],text:sels.length+' '+config.txtSelected}));
        }
        else{
          sels.map(x=>{
            var c=newEl('span',{class:'optext',text:x.text, srcOption: x});
            if((el.attributes['multiselect-hide-x']?.value !== 'true'))
              c.appendChild(newEl('span',{class:'optdel',text:'🗙',title:config.txtRemove, onclick:(ev)=>{c.srcOption.listitemEl.dispatchEvent(new Event('click'));div.refresh();ev.stopPropagation();}}));

            div.appendChild(c);
          });
        }
        if(0==el.selectedOptions.length) div.appendChild(newEl('span',{class:'placeholder',text:el.attributes['placeholder']?.value??config.placeholder}));
      };
      div.refresh();
    }
    el.loadOptions();

    search.addEventListener('input',()=>{
      list.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(d=>{
        var txt=d.querySelector("label").innerText.toUpperCase();
        d.style.display=txt.includes(search.value.toUpperCase())?'block':'none';
      });
    });

    div.addEventListener('click',()=>{
      div.listEl.style.display='block';
      search.focus();
      search.select();
    });

    document.addEventListener('click', function(event) {
      if (!div.contains(event.target)) {
        listWrap.style.display='none';
        div.refresh();
      }
    });
  });
}

window.addEventListener('load',()=>{
  MultiselectDropdown(window.MultiselectDropdownOptions);
});

// //---------------- map------------/
// var scooter_locations = [
//   ["../static/media/Lime copy.jpg",    31.2599,34.797, '0.8'],
//   ["../static/media/Lime copy.jpg",   31.2612,34.8012, '0.9'],
//   ["../static/media/Wind copy.png",  31.2619,34.7968, '0.2'],
//   ["../static/media/Bird copy.png",  31.2565,34.795, '0.5']
// ];
// function initMap(z,t){
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 15,
//   center: new google.maps.LatLng(z, t),
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// });
//
// var infowindow = new google.maps.InfoWindow();
//
// var marker, i;
//
// for (i = 0; i < locations.length; i++) {
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng(scooter_locations[i][1], scooter_locations[i][2]),
//     icon: {
//       url: scooter_locations[i][0],
//       labelOrigin: new google.maps.Point(55, 12)
//     },
//     label: {
//       text: (scooter_locations[i][3]*100 + '%'),
//       color: getcolor(scooter_locations[i][3]),
//       fontWeight: 'bold'
//       // fontsize: "40px"
//     },
//     map: map
//   });
// // my location
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng(z,t),
//     map: map
//   });
//   google.maps.event.addListener(marker, 'click', (function(marker, i) {
//     return function() {
//       infowindow.setContent(scooter_locations[i][3]*100);
//       infowindow.open(map, marker);
//     }
//   })(marker, i));
// }
// }
// function getcolor(battery_level){
//  if (battery_level<0.3)
//     return "red"
// else if (battery_level<0.6)
//     return "black"
// else
//   return "green"
// }
//
//
// ///gets location from the user/
// function GetLocation() {
//   if (navigator.geolocation) {
//   console.log("in get location");
//   navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//   document.getElementById("location_p").innerHTML="Geolocation is not supported by this browser.";
//   }
//   document.getElementById("map").style.visibility = "visible";
//   document.getElementById("afterNearby").style.visibility = "visible";
// }
// /initial the map with the current user location/
//   function showPosition(position) {
//       var z = position.coords.latitude;
//       var t = position.coords.longitude;
//       initMap(z,t);
//   }