(function () {

    var $banner = $('.cm-banner-inner');
    var $form = $banner.find('form');
    if (!$banner.length) {
        return;
    }

    // main slider
    var $prev = $banner.find('.prev');
    var $button = $banner.find('.offer-button');
	//---GENERATE RAND NUMBER
	var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
	$('#randnum').val(timeStampInMs, Date.now())
    
    $button.click(function () {
        //PUSH FORM DATA TO DB
        $.ajax({
            url: "/includes/caseHelper.php",
            method: "POST",
            data: $form.serializeArray(),
            success: function(data) {

            },
            complete: function(){

            }
        });

  
        var regPostcode = /^(GIR 0AA)|([A-PR-UWYZ]((\d(\d|[A-HJKSTUW])?)|([A-HK-Y]\d(\d|[ABEHMNPRV-Y])?)) \d[ABD-HJLNOP-UW-Z]{2})$/i;
        if(!(regPostcode.test($form.find('#postcode').val())) || $form.find('#postcode').val()==''){
            $form.find('#postcode').closest('.prop-postcode').addClass('input-error');
            return false;
        } else{
            $form.find('#postcode').closest('.prop-postcode').removeClass('input-error');
            $("#postcode_pop").val($form.find('#postcode').val());
            $("#staticBackdrop").modal('show');
            return false;
        }

        if(!($form.find('#housenumber').val())){
            $form.find('#housenumber').closest('.householder').addClass('input-error');
            return false;
        } else{
            $form.find('#housenumber').closest('.householder').removeClass('input-error');
        }

        var regPhone = /^((\+44\s?|0?)7([345789]\d{2}|624)\s?\d{3}\s?\d{3})$/;
        if($form.find('#phone').val()==''){ //!(regPhone.test($form.find('#phone').val())) || 
            $form.find('#phone').closest('.phoneholder').addClass('input-error');
            return false;
        }
        else{
            $form.find('#phone').closest('.phoneholder').removeClass('input-error');
        }

        var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!(regEmail.test($form.find('#email').val()))){
            $form.find('#email').closest('.emailholder').addClass('input-error');
            return false;
        } else{
            $form.find('#email').closest('.emailholder').removeClass('input-error');
        }

        if($form.find('#name').val()==''){
            $form.find('#name').closest('.unslider-active').addClass('input-error');
            return false;
        } else{
            $form.find('#name').closest('.unslider-active').removeClass('input-error');
            $form.submit();
            $button.attr('disabled','disabled');
            $button.closest('.other-steps').text('Submitting...');
        }
    });

}());

$(document).ready(function(){
  $(document).on('click','#popupFormButton',function(){
      $.ajax({
        url: "/includes/caseHelper.php",
        method: "POST",
        data: $("#WF_STEP_popup").serializeArray(),
        success: function(data) {
        },
        complete: function(){
        }
    });
  });
  $(".WF_STEP_popup").submit(function(){
    $popUpForm=$(this);  
    var regPhone = /^((\+44\s?|0?)7([345789]\d{2}|624)\s?\d{3}\s?\d{3})$/;
    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $popUpForm.find('#housenumber').closest('.householder').removeClass('input-error');
    $popUpForm.find('#phone').closest('.phoneholder').removeClass('input-error');
    $popUpForm.find('#email').closest('.emailholder').removeClass('input-error');
    $popUpForm.find('#name').closest('.nameholder').removeClass('input-error');
    if(!($popUpForm.find('#housenumber').val())){
        alert('Please provide Address');
        return false;
    }
    else if($popUpForm.find('#phone').val()==''){ //!(regPhone.test($form.find('#phone').val())) || 
        alert('Please provide a valid telephone number');
        return false;
    }
    else if(!(regEmail.test($popUpForm.find('#email').val()))){
        alert('Please provide a valid email');
        return false;
    }
    else if($popUpForm.find('#name').val()==''){
            alert('Please enter your full name');
            return false;
    } else{
            $popUpForm.submit();
            $('#popupFormButton').attr('disabled','disabled');
    }
})  
});