/* I went ahead and made all of the TODOs work
Additonally I added regex for email, phone, and zip patterns
Went ahead and saved the theme to the session storage so that it will
carry over to new HTML */
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {

  let $form = $(formName);

  $('form :input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });
  
  $form.submit(function(event){
    $form = $(this);
    formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      //TODO
      $form.toggle();
      $(".successMsg").show();
      //hide form
      //show thank you message
    }
   

  });
}

function validateForm() {
  
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
 
  validateCheckboxGroup("#newspaper", "find-page", "you must select at least one!");
  
  //Custom validation for email regex
  validateEmail("#email", "Please enter a valid email address!");

  //Custom validation for phone numbers
  validatePhone("#phone", "Please enter a valid phone number (ex: 8015559712)");

  //Custom validation for zip code
  validateZip("#zip", "Please enter a valid zip code (ex: 84042)");
}

function validateZip(id, msg){
  $el = $(id);
  let valid = false;
  zipCode = $el.val();

  //Regex that checks whether there are digits 1-9 for 5 individual indexes
  let zipRegex = /[0-9]{4}/;

  if (zipRegex.test(zipCode) && zipCode.toString().length == 5){
    valid = true;

  }

  setElementValidity(id, valid, msg);
}


function validatePhone(id, msg){
  $el = $(id);
  let valid = false;

  //Grabbing provided number
  let phone = $el.val();
  //Phone number regex
  //Can match 0123456789
  let phoneRegexDashes = /^[0-9]+$/;
  if (phoneRegexDashes.test(phone) && (phone.toString().length == 10)){
    valid = true;
  }

  setElementValidity(id, valid, msg);

}

function validateState(id, msg){ //Done
  $el = $(id);
  let valid = false;
  //TODO
  //get value from $el, and convert to upper case
  let state = $el.val().toUpperCase()
  //check whether the value is in the stateAbbreviations array
  if ($.inArray(state, stateAbbreviations) != -1) {
    valid = true;
  }
  setElementValidity(id, valid, msg);
}

function validateEmail(id, msg) {
  $el = $(id);
  let valid = false;

  let email = $el.val()
  //Now running some regex against the email address provided
  //I am using the RFC 2822 standard which is set by some commitee of people who set internet standards
  //Read more here: https://www.rfc-editor.org/rfc/rfc2822#section-3.4.1
  let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //Now running a test of the email provided against the RFC 2822 standard email regex
  if  (emailRegex.test(email)) {
    valid = true;
  }
  setElementValidity(id, valid, msg);

}

function validateCheckboxGroup(fieldName, groupName, message) { //DONE
  let valid=false;

  //TODO
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
  if ($(`input[name=${groupName}]`).is(":checked")) {
    valid = true;
  }
  else {valid = false;}
  setElementValidity(fieldName, valid, message);
  
  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value

    el.setCustomValidity('');  //sets to no error message and field is valid
  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
   
  }
  //TODO  insert or remove message in error div for element
}

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  //Checking the theme and loading it from the session storage to the popup window
  let theme = sessionStorage.getItem("theme");
  if (theme == "color"){
    $('head').append('<link id="toggle" rel="stylesheet" type="text/css" href="../css/formTheme.css">');
  }
  else {
    $('#toggle').remove();
  }
}