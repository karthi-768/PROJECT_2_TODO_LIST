addEl = document.getElementById("ADD");
addEl.addEventListener("click", getAndupdate);
function getAndupdate() {
  titEl = document.getElementById("title").value;
  descEl = document.getElementById("desc").value;
  if (localStorage.getItem("cart") == null) {
    arr1 = [];
    arr1.push([titEl, descEl]);
    localStorage.setItem("cart", JSON.stringify(arr1));
    // console.log(arr1);
  } else {
    // console.log("clicked");
    arr2 = localStorage.getItem("cart");
    arr3 = JSON.parse(arr2);
    arr3.push([titEl, descEl]);
    localStorage.setItem("cart", JSON.stringify(arr3));
  }
  leads();
}
tableEl = document.getElementById("tBody");
function leads() {
  local = localStorage.getItem("cart");
  if (local) {
    arr4 = JSON.parse(local);
    str = "";
    for (i = 0; i < arr4.length; i++) {
      str += `
            <tr>
                <th scope='row'>${i + 1}</th>
                <td>${arr4[i][0]}</td>
                <td>${arr4[i][1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${i})">Completed</button> 
                <button style="margin-left:50px"class="btn btn-sm btn-primary" onclick="pending()">Pending</button></td>
            </tr>
            `;
    }
  }
  tableEl.innerHTML = str;
}
leads();

function pending() {
  alert("Team Ezhal pls complete acitivity");
}
function deleted(a) {
  local = localStorage.getItem("cart");
  arr = JSON.parse(local);
  arr.splice(a, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  leads();
}
