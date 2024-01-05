// ==UserScript==
// @name        Chard Snyder Dependent Care Form Filler (Something Special Learning Center)
// @namespace   Violentmonkey Scripts
// @match       https://memberumr.lh1ondemand.com/AccountsActivity/ReimburseMyselfNonHsaOnly*
// @grant       none
// @version     1.0
// @author      -
// @description 1/4/2024, 9:01:54 PM
// ==/UserScript==


// document.addEventListener('keydown', event => {
//     console.log(`User pressed: ${event.key}`);
//     event.preventDefault();
//     return false;
// });

const fillFormButton = document.createElement('button');
fillFormButton.textContent = 'Fill In Form';
fillFormButton.setAttribute("style", "font-size:24px;padding: 15px;font-weight: 1000;background-color: #16F;color: white;");

let buttonDiv = document.getElementById('PageWholeContentPanel');
buttonDiv.prepend(fillFormButton);
//document.body.appendChild(fillFormButton);

fillFormButton.addEventListener('click', (event) => {
  let startDate = document.getElementById('dtServiceStartDate_textBox');
  let monday = getMonday();
  startDate.value = monday;
  startDate.setAttribute("value", "monday");
  //startDate.setAttribute("data-keeper-edited", "yes");

  let endDate = document.getElementById('dtServiceEndDate_textBox');
  let friday = getFriday();
  endDate.value =friday;
  endDate.setAttribute("value", friday);
  //endDate.setAttribute("data-keeper-edited", "yes");

  let amount = document.getElementById('txtAmount_textBox');
  amount.value = "210.00";
  amount.setAttribute("value", "210.00");
//   amount.addEventListener('keydown', event => {
//     console.log(`User pressed: ${event.key}`);
//     console.log('hi');
//     event.preventDefault();
//     return false;
//   });
  //amount.dispatchEvent(new KeyboardEvent('keydown', {'key': '8'}));
  //amount.dispatchEvent(new KeyboardEvent('keyup', {'key': '8'}));
  //amount.setAttribute("data-keeper-edited", "yes");

  let providerName = document.getElementById('txtProvider_textBox');
  providerName.value = "Something Special Learning Center";
  providerName.setAttribute("value", "Something Special Learning Center");
  //providerName.setAttribute("data-keeper-edited", "yes");

  let providerTaxId = document.getElementById('txtProviderSsnTaxId_textBox');
  providerTaxId.value = "34-1513894";
  providerTaxId.setAttribute("value", "34-1513894");
  //providerTaxId.setAttribute("data-keeper-edited", "yes");

  //let typeSpan = document.getElementById("ddlType");
  //let typeSelect = typeSpan.querySelector("select");
  let typeSelectListBoxDependentCareDiv = document.getElementById("ddlType_item5");
  //typeSelect.value = "59431"; // dependent care
  typeSelectListBoxDependentCareDiv.click();

  let dependentCheckboxes = document.getElementsByName("selectedRecipients");
  for (var i = 0; i < dependentCheckboxes.length; i++) {
    dependentCheckboxes[i].checked = true;
    dependentCheckboxes[i].setAttribute("checked", "checked");
    //dependentCheckboxes[i].setAttribute("data-keeper-edited", "yes");
  }

  let inputs = document.getElementsByClassName('LH1TextBoxHelpText');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("style", "display: none;");
  }

  event.preventDefault();
});

function getMonday() {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let diff = currentDate.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  let monday = new Date(currentDate.setDate(diff));
  return monday.toLocaleDateString();
}

function getFriday() {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let diff = currentDate.getDate() - day + (day == 0 ? -6 : 5); // adjust when day is sunday
  let monday = new Date(currentDate.setDate(diff));
  return monday.toLocaleDateString();
}
