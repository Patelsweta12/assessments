let saveButton = document.getElementById("submit");
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  let nameValue = document.getElementById("name").value;
  let descriptionvalue = document.getElementById("description").value;
  let statusValue = document.getElementById("selectStatus").value;
  let rateValue = document.getElementById("rate").value;
  let balancevalue = document.getElementById("balance").value;
  let depositeValue = document.getElementById("deposite").value;

  // for Name
  let alphNumericRegex = /^([a-zA-Z0-9_-]){3,25}$/;
  if (nameValue.trim() == "") {
    document.getElementById("nameerror").innerHTML = "Enter your name";
  } else if (!nameValue.match(alphNumericRegex)) {
    document.getElementById("nameerror").innerHTML =
      "Enter your name in alphanumeric form and no with  minimum 3 and maximum 25 character";
    let inputColor = document.getElementById("name");
    inputColor.style.border = "1px solid red";
  } else {
    document.getElementById("nameerror").innerHTML = "";

    let inputColor = document.getElementById("name");
    inputColor.style.border = "1px solid green";
  }

  // for Description
  let regexforDescription = /^[ A-Za-z0-9_@./#&+-]{3,150}$/;
  if (descriptionvalue.trim() == "") {
    document.getElementById("descriptionError").innerHTML =
      "Description is required ";
  } else if (!descriptionvalue.match(regexforDescription)) {
    document.getElementById("descriptionError").innerHTML =
      "Description must be of more than 3 character upto 150 character";
    let inputColor = document.getElementById("description");
    inputColor.style.border = "1px solid red";
  } else {
    document.getElementById("descriptionError").innerHTML = "";

    let inputColor = document.getElementById("description");
    inputColor.style.border = "1px solid green";
  }

  //for Status

  if (statusValue.trim() == "status") {
    document.getElementById("statusError").innerHTML = "status Required ";
  } else {
    document.getElementById("statusError").innerHTML = "";
  }

  //for Rate
  let regexforRate = /\d/;
  if (rateValue.trim() == "") {
    document.getElementById("rateEerror").innerHTML = "This field is required ";
  } else if (!rateValue.match(regexforRate)) {
    document.getElementById("rateEerror").innerHTML =
      "Accepts only numeric value";
    let inputColor = document.getElementById("rate");
    inputColor.style.border = "1px solid red";
  } else {
    document.getElementById("rateEerror").innerHTML = "";

    let inputColor = document.getElementById("rate");
    inputColor.style.border = "1px solid green";
  }

  // for Balance
  let regexforbalance = /\d/;
  if (balancevalue.trim() == "") {
    document.getElementById("balanceError").innerHTML =
      "This  field is required ";
  } else if (!balancevalue.match(regexforbalance)) {
    document.getElementById("balanceError").innerHTML =
      "Accepts only numeric value";
    let inputColor = document.getElementById("balance");
    inputColor.style.border = "1px solid red";
  } else {
    document.getElementById("balanceError").innerHTML = "";

    let inputColor = document.getElementById("balance");
    inputColor.style.border = "1px solid green";
  }

  // for deposite
  let regexfordeposite = /\d/;
  if (depositeValue.trim() == "") {
    document.getElementById("depositeError").innerHTML =
      "This field is required ";
  } else if (!depositeValue.match(regexfordeposite)) {
    document.getElementById("depositeError").innerHTML =
      "Accepts only numeric value";
    let inputColor = document.getElementById("deposite");
    inputColor.style.border = "1px solid red";
  } else {
    document.getElementById("depositeError").innerHTML = "";

    let inputColor = document.getElementById("deposite");
    inputColor.style.border = "1px solid green";
  }

  // to post data
  if (
    nameerror.innerHTML == "" &&
    descriptionError.innerHTML == "" &&
    statusError.innerHTML == "" &&
    rateEerror.innerHTML == "" &&
    balanceError.innerHTML == "" &&
    depositeError.innerHTML == ""
  )
    fetch("http://localhost:3000/table", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionvalue,
        selectStatus: statusValue,
        rate: rateValue,
        balance: balancevalue,
        deposite: depositeValue,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
});

let table = document.createElement("table");
console.log(table);
table.classList.add("table-width"); // for style

let headers = [
  { header: "#", key: "id" },
  { header: "NAME", key: "name" },
  { header: "DESCRIPTION", key: "description" },
  { header: "STATUS", key: "selectStatus" },
  { header: "RATE", key: "rate" },
  { header: "BALANCE ", key: "balance" },
  { header: "DEPOSITE ", key: "deposite" },
];

//table head starts
function thead(table) {
  let tHead = table.createTHead();
  let row = tHead.insertRow();
  row.classList.add("tableHeaderColor");
  for (const iterator of headers) {
    let th = document.createElement("th");
    row.appendChild(th);
    let text = document.createTextNode(iterator.header);
    th.appendChild(text);
  }
  let th = document.createElement("th"); //for action column
  let text = document.createTextNode("ACTION");
  th.appendChild(text);
  row.appendChild(th);
}
thead(table, thead);
//table head ends

//table body  starts
window.addEventListener(
  "load",
  fetch("http://localhost:3000/table")
    .then((response) => response.json())
    .then((data) => {
      let tBody = table.createTBody("tbody");
      table.appendChild(tBody);
      for (const element of data) {
        let row = document.createElement("tr");
        tBody.appendChild(row);
        for (const iterator of headers) {
          let td = document.createElement("td");
          row.appendChild(td);
          if (iterator["key"] == "selectStatus") {
            console.log(element[iterator["key"]]);
            if (element[iterator["key"]] == "error") {
              td.className = "error-color";
            }
            if (element[iterator["key"]] == "success") {
              td.className = "success-color";
            }
            if (element[iterator["key"]] == "open") {
              td.className = "open-color";
            }
          }
          let text = document.createTextNode(element[iterator["key"]]);
          td.appendChild(text);
        }

        let td = document.createElement("td");
        let deletBtn = document.createElement("button");
        let deleteBtnText = document.createTextNode("Delete");
        deletBtn.appendChild(deleteBtnText);
        td.appendChild(deletBtn);
        deletBtn.addEventListener("click", () => {
          fetch(`http://localhost:3000/table/${element.id}`, {
            method: "DELETE",
          });
        });
        deletBtn.classList.add(
          "delete-color-space",
          "border-radius",
          "cursor-pointer"
        ); //TO DELET THE DATA

        let editBtn = document.createElement("button");
        let editBtnText = document.createTextNode("Edit");
        editBtn.appendChild(editBtnText);
        td.appendChild(editBtn);
        row.appendChild(td);

        editBtn.addEventListener("click", () => {
          document.getElementById("name").value = element.name;
          document.getElementById("description").value = element.description;
          document.getElementById("selectStatus").value = element.selectStatus;
          document.getElementById("rate").value = element.rate;
          document.getElementById("balance").value = element.balance;
          document.getElementById("deposite").value = element.deposite;
          //TO UPDATE THE DATA
          let updateBTn = document.getElementById("update");
          updateBTn.addEventListener("click", () => {
            fetch(`http://localhost:3000/table/${element.id}`, {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                selectStatus: document.getElementById("selectStatus").value,
                rate: document.getElementById("rate").value,
                balance: document.getElementById("balance").value,
                deposite: document.getElementById("deposite").value,
              }),
            })
              .then((response) => response.json())
              .then((data) => data);
          });
        });
        editBtn.classList.add(
          "edit-color",
          "edit-color-onclick",
          "border-radius",
          "cursor-pointer"
        );
      }
    })
);

let body = document.querySelector("body");
body.appendChild(table);
