function showPreview() {

    var addBtn = document.getElementsByClassName("addBtn");
    var x = document.getElementsByClassName("fa fa-plus");
    var remove = document.getElementsByClassName("fa fa-remove");
    var addBtn = document.getElementById("newRquest");
    if (remove[0].style.display === "none") {
        addBtn.style.display = "block";
        for (let index = 0; index < x.length; index++) {
            const element = x[index];
            element.style.display = "block";
        }
        for (let index = 0; index < remove.length; index++) {
            const element = remove[index];
            element.style.display = "block";
        }
    } else {
        addBtn.style.display = "none";
        for (let index = 0; index < x.length; index++) {
            const element = x[index];
            element.style.display = 'none';
        }
        for (let index = 0; index < remove.length; index++) {
            const element = remove[index];
            element.style.display = "none";
        }
    }

}

function download() {
    debugger;
    var x = document.getElementById("mainDiv").querySelectorAll(".dummy");
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        element.contentEditable = "false";
    }
    var filename = $('#mainTitle').html().trim() + ".html";
    var text = document.querySelector("html").innerHTML;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        element.contentEditable = "true";
    }

}
function remove(e) {
    e.parentElement.parentElement.remove();
}
function addNewRquest() {
    var p = document.getElementById('accordion');
    var btn = document.createElement("DIV");
    var count = $('#accordion').children().length;
    btn.innerHTML = '<div class="card" id="parentId"><a class="collapsed card-link" data-toggle="collapse" href="#collapseOne"><div class="getCardBgcolor card-header " id="requestHeader"><span style="padding-left: 2%;" class="requestBox getBColor" id="requestType" contentEditable=true>Get</span><span style="margin-left: 2%;color: black;" id="uri" contentEditable=true><b>/login</b></span><span style="margin-left: 2%;color: black;" id="uriDesc" contentEditable=true>Enter little descriptionabouturi</span></div></a><div id="collapseOne" class="collapse" data-parent="#accordion"><div class="card-body"><div><div style=" padding: 1%;"> <b>Parameters</b></div><div class="getGroupStyle" id="group"><div><div style="width: 30%;  float: left;"><b>Name </b></div><div style="width: 50%;"><b>Description </b></div><div class="addBtnProperty"><i class="fa fa-plus" style="font-size:24px" onclick="addNewProperty()"></i></div><hr /><div id="paramGrp"><div><div style="width: 30%;  float: left;" id="code1" contentEditable=true>propertyName </div><div style="padding-left: 29%;margin-left: 2%;"><p id="response" contentEditable=true> Description about the property</p></div><div style=" float: right;margin-top: -3%;"><i class="fa fa-remove" style="font-size:24px" onclick="remove(this)"></i></div></div></div></div></div></div><div><div style=" padding: 1%;"><b>Response</b> <span style="float: right;"><b>Response content type :application/json</b></span></div><div class="getGroupStyle" id="responseGroup"><div><div style="width: 30%;  float: left;"><b>Code </b></div><div style="width: 50%;"><b>Description </b></div><div class="addBtnProperty"><i class="fa fa-plus" style="font-size:24px" onclick="addNewResponse()"></i></div><hr /><div id="reponseGrp"><div><div style="width: 30%;  float: left;" id="code1" contentEditable=true>default </div><div style="padding-left: 29%;"><p id="response" contentEditable=true>successful operation </p></div><div style=" float: right;margin-top: -3%;"><i class="fa fa-remove" style="font-size:24px" onclick="remove(this)"></i></div></div></div></div></div></div></div></div></div>';
    p.appendChild(btn);
}

function addNewProperty() {
    var p = document.getElementById('paramGrp');
    var btn = document.createElement("DIV");
    var count = $('#paramGrp').children().length;
    btn.innerHTML = '<div><div style="width: 30%;  float: left;" id="code1" contentEditable=true>propertyName </div><div style="padding-left: 29%;margin-left: 2%;"><p id="response" contentEditable=true> Description about the property</p></div><div style=" float: right;margin-top: -3%;"><i class="fa fa-remove" style="font-size:24px" onclick="remove(this)"></i></div></div>';
    p.appendChild(btn);
}

function addNewResponse() {
    var p = document.getElementById('reponseGrp');
    var btn = document.createElement("DIV");
    var count = $('#reponseGrp').children().length;
    btn.innerHTML = '<div><div style="width: 30%;  float: left;" id="code1" contentEditable=true>default </div><div style="padding-left: 29%;"><p id="response" contentEditable=true>successful operation </p></div><div style=" float: right;margin-top: -3%;"><i class="fa fa-remove" style="font-size:24px" onclick="remove(this)"></i></div></div>';
    p.appendChild(btn);
}



$(document).ready(function () {
    var editable = true;
    $('#mainTitle').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("Rest API Name");
        }
    });

    $('#module').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("Collection Module");
        }
    });
    $('#baseUrl').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("http://getpaid.com ");
        }
    });
    $('#description').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("Enter description about the API.");
        }
    });
    $('#requestType').focusout(function () {
        if ($(this).html().trim() === 'Post' || $(this).html().trim() === 'Put') {
            $('#requestType').removeClass('getBColor');
            $('#responseGroup').removeClass('getGroupStyle');
            $('#requestHeader').removeClass('getCardBgcolor');
            $('#group').removeClass('getGroupStyle');

            $('#requestType').addClass('postBColor');
            $('#responseGroup').addClass('postGroupStyle');
            $('#requestHeader').addClass('postCardBgcolor');
            $('#group').addClass('postGroupStyle');

        }
        if ($(this).html().trim().length === 0) {
            $(this).html("Get");
        }
    });
    $('#uri').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("/login");
        }
    });
    $('#uriDesc').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("Enter little description about uri");
            // $(this).val("5");
        }
    });
    $('#paramters').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("userName=parteek<br/>password = 12345");
        }
    });
    $('#code1').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("propertyName");
        }
    });
    $('#response').focusout(function () {

        if ($(this).html().trim().length === 0) {
            $(this).html("Description about the property");
        }
    });
});