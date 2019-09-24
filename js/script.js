function validate (target) {                                          //validates if each input box is working correctly
  if (target.id == "name"){                                          //if name box is empty put an error, if not dont put an error
    if ($(target).val() == "") {
      handleError(target, "(empty)");
    } else {
        handleError(target,"");
      }
    }else if (target.id == "mail"){                                   //if email box is empty or not in the correct format put an error, if not dont put an error
    const criteria = /\S+@\S+\.\S+/;
    if ($(target).val() == "") {
      handleError(target,"(empty)");
    } else if (criteria.test($(target).val())) {
        handleError(target,"");
      } else {
          handleError(target,"(not valid)");
        }
  }else if (target.id == "cc-num") {                                    //if credit card number box is empty or length is not correct put an error, if not dont put an error
    if ($(target).val() == "") {
      handleError(target,"(empty)");
    } else if ($.isNumeric($(target).val()) &&
        $(theTarget).val().length >= 13 &&
        $(theTarget).val().length <= 16) {
          handleError(target,"");
        } else {
            handleError(target,"(13-16 digits)");
          }
  }else if (target.id == "zip") {                                     //if zip code is empty or is not 5 numbers put an error, if not dont put an error
    if ($(target).val() == "") {
      handleError(target,"(empty)");
    } else if ($.isNumeric($(target).val()) &&
        $(target).val().length == 5) {
          handleError(target,"");
        } else {
            handleError(target,"(5 digits)");
          }
  }else if(target.id == "cvv"){                                      //if cvv is empty or not 3 numbers put an error, if not dont put an error
    if($(target).val() == ""){
      handleError(target,"(empty)");
    } else if ($.isNumeric($(target).val()) &&
        $(target).val().length == 3) {
          handleError(target,"",false);
        } else {
            handleError(target,"(3 digits)");
          }
  }else if($(target).hasClass("activities")){                       //if there is not 1 activity selected put an error, if not dont put an error
    if($(".activities input[type=checkbox]:checked").length > 0){
      handleError(target,"");
    }else{
      handleError(target,"(no selected activites)");
      }
  }
}
function handleError (errorTarget, errorMessage){                   //creates the error message
  if($(errorTarget).hasClass("activities")){
    text = $("#activities-legend");
  }else{
         text = $("label[for='" + errorTarget.id + "']");
    }
  $(text).find("span").remove();
  if(errorMessage != "") {
    text.html(text.html() +
      "<span class='message'>\u2718 " + errorMessage + "</span>");
    $(errorTarget).addClass("error");
  }else{
      text.html(text.html() +
        "<span class='message'>\u2714 " + "</span>");
      $(errorTarget).removeClass("error");
    }
}
$("#name").focus();                                                  //puts you in the name input box when you first get on the page
$("#other-title").hide();                                            //hides the other job role input box
  $("#title").change( () => {                                      //this function shows the other job role input box if other is chosen
  if($("#title").val() == "other"){
    $("#other-title").show();
    $("#other-title").focus();
  }else{
      $("#other-title").hide();
    }
});
$("#colors-js-puns").hide();                                      //hides the color select div
$("#design").change(()=>{                                         //this function checks what the user chose as their design and then inserts the correct color needed for that design
  $("#color option").hide();
  if($("#design").val() == "js puns"){
    $("#colors-js-puns").show();
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
    $("#color").val("cornflowerblue");
  } else if($("#design").val() == "heart js"){
      $("#colors-js-puns").show();
      $("#color option[value='tomato']").show();
      $("#color option[value='steelblue']").show();
      $("#color option[value='dimgrey']").show();
      $("#color").val("tomato");
    } else{
        $("#colors-js-puns").hide();
    }
});
$(".activities").change (()=>{                                 //this function checks if the times line up on the form
  validate($(".activities")[0]);                              // checks for error of if no events are selected
  let totalSum = 0;
  $(".activities input").attr("disabled", false);
  if($("input[name='all']").prop("checked")){
    totalSum += 200;
  }
  if($("input[name='js-frameworks']").prop("checked")){
    totalSum += 100;
    $("input[name='express']").attr("disabled", true);
  }else if($("input[name='express']").prop("checked")){
      totalSum += 100;
      $("input[name='js-frameworks']").attr("disabled", true);
    }
  if($("input[name='js-libs']").prop("checked")){
    totalSum += 100;
    $("input[name='node']").attr("disabled", true);
  }else if($("input[name='node']").prop("checked")){
      totalSum += 100;
      $("input[name='js-libs']").attr("disabled", true);
    }
  if($("input[name='build-tools']").prop("checked")){
    totalSum += 100;
  }
  if($("input[name='npm']").prop("checked")){
    totalSum += 100;
  }
  $("#total").text('$' + totalSum);
});
$("#credit-card").hide();                                   //hides credit card option
$("#paypal").hide();                                        //hides paypal payment option
$("#bitcoin").hide();                                       //hides bitcoin payment option
$('#payment').val('Credit Card');
$("#payment option[value='select method']").prop('disabled',true);
$("#payment").change( ()=>{
  if($("#payment").val() == "Credit Card") {                //if they select credit card as an option credit card menu pops up and others disappear
    $("#credit-card").show();
    $("#paypal").hide();
    $("#bitcoin").hide();
  }else if($("#payment").val() == "PayPal") {               //if they select paypal as an option credit card menu pops up and others disappear
      $("#paypal").show();
      $("#credit-card").hide();
      $("#bitcoin").hide();
    }else if($("#payment").val() == "Bitcoin") {            //if they select bitcoin as an option credit card menu pops up and others disappear
        $("#bitcoin").show();
        $("#paypal").hide();
        $("#credit-card").hide();
      }
});
$("#register").click((e)=>{                                 //makes the register button work (added id of register to register button in order to select it)
  e.preventDefault();
  $(".error").removeClass("error");
  validate($("#name")[0]);
  validate($("#mail")[0]);
  validate($(".activities")[0]);
  if($("#payment").val() == "Credit Card"){
    validate($("#cc-num")[0]);
    validate($("#zip")[0]);
    validate($("#cvv")[0]);
  }
  if($(".error").length == 0){
    $("form").submit();
  }
});
