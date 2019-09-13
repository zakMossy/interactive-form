$("#other-title").hide();
$('#title').val('full-stack js developer');
$('#title option[value="other"]').on('click', ()=>{
  $("#other-title").show();
});
$("#color option[value='select']").prop("disabled","disabled");
while($("#design option").val() == 'select'){
  $("#color option[value='cornflowerblue']").prop("disabled","disabled");
  $("#color option[value='darkslategrey']").prop("disabled","disabled");
  $("#color option[value='gold']").prop("disabled","disabled");
  $("#color option[value='tomato']").prop("disabled","disabled");
  $("#color option[value='steelblue']").prop("disabled","disabled");
  $("#color option[value='dimgrey']").prop("disabled","disabled");
  $("#color option[value='select']").removeAttr("disabled");
}
if($("#design option").val() == 'js puns'){
  $("#color option[value='tomato']").prop("disabled","disabled");
  $("#color option[value='steelblue']").prop("disabled","disabled");
  $("#color option[value='dimgrey']").prop("disabled","disabled");
  $("#color option[value='cornflowerblue']").removeAttr("disabled");
  $("#color option[value='darkslategrey']").removeAttr("disabled");
  $("#color option[value='gold']").removeAttr("disabled");
}else if($("#design option").val() == 'heart js'){
  $("#color option[value='cornflowerblue']").prop("disabled","disabled");
  $("#color option[value='darkslategrey']").prop("disabled","disabled");
  $("#color option[value='gold']").prop("disabled","disabled");
  $("#color option[value='tomato']").removeAttr("disabled");
  $("#color option[value='steelblue']").removeAttr("disabled");
  $("#color option[value='dimgrey']").removeAttr("disabled");
}
