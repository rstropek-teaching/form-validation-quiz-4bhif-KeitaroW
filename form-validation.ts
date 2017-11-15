/// <reference path="./node_modules/@types/jquery/index.d.ts" />

$("#firstName").on("input", function() {
    let val: string = "" + $(this).val();
    if($.trim(val).length > 0) {
        $("#firstNameMandatory").hide();
    } else {
        $("#firstNameMandatory").show();
    }
});

$("#lastName").on("input", function() {
    let val: string = "" + $(this).val();
    if($.trim(val).length > 0) {
        $("#lastNameMandatory").hide();
    } else {
        $("#lastNameMandatory").show();
    }
});

$("#email").on("input", function() {
    let val: string = "" + $(this).val();
    if ($("#newsletter").is(":checked") && $.trim(val).length == 0) {
        $("#emailMandatory").show();
    } else {
        $("#emailMandatory").hide();
    }
});

$("#newsletter").ready(function() {
    let val: string = "" + $("#email").val();
    if ($("#newsletter").is(":checked") && $.trim(val).length == 0) {
        $("#emailMandatory").show();
    } else {
        $("#emailMandatory").hide();
    }
});

$("#newsletter").change(function() {
    let val: string = "" + $("#email").val();
    if ($("#newsletter").is(":checked") && $.trim(val).length == 0) {
        $("#emailMandatory").show();
    } else {
        $("#emailMandatory").hide();
    }
});

$("#mediaChannelSelect").ready(function() {
    let val: string = "" + $("#mediaChannelSelect").val();
    if(val != "Other") {
        $("#otherMediaChannel").hide();
    } else {
        $("#otherMediaChannel").show();
    }
});

$("#mediaChannelSelect").change(function() {
    let val: string = "" + $(this).val();
    if(val != "Other") {
        $("#otherMediaChannel").hide();
    } else {
        $("#otherMediaChannel").show();
    }
});

$(document).ready(function(){
    if ($("#emailMandatory").is(":hidden") && $("#lastNameMandatory").is(":hidden") && $("#firstNameMandatory").is(":hidden")) {
        $("button.btn").prop("disabled",false);
    } else {
        $("button.btn").prop("disabled",true);
    }
});

$(document).change(function(){
    if ($("#emailMandatory").is(":hidden") && $("#lastNameMandatory").is(":hidden") && $("#firstNameMandatory").is(":hidden")) {
        $("button.btn").prop("disabled",false);
    } else {
        $("button.btn").prop("disabled",true);
    }
});

$(document).on("input", function(){
    if ($("#emailMandatory").is(":hidden") && $("#lastNameMandatory").is(":hidden") && $("#firstNameMandatory").is(":hidden")) {
        $("button.btn").prop("disabled",false);
    } else {
        $("button.btn").prop("disabled",true);
    }
});