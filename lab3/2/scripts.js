function checkForm() {
    let check = true,
        txt;
    let num_id = document.forms["info"]["id_num"].value;
    let fname_length = document.forms["info"]["fname"].value.length;
    let lname_length = document.forms["info"]["lname"].value.length;
    let zip_code = document.forms["info"]["zipcode"].value;
    let number = document.forms["info"]["phone"].value;
    if (Number.isNaN(parseInt(num_id)) || num_id.length != 13) {
        txt = "Please input your ID correctly";
        check = false;
    } else if (document.forms["info"]["prefix"].value == "0") {
        txt = "Please choose your prefix";
        check = false;
    } else
    if (fname_length < 2 || fname_length > 20) {
        txt = "Please input your first name correctly";
        check = false;
    } else if (lname_length < 2 || lname_length > 30) {
        txt = "Please input your last name correctly";
        check = false;
    } else if (document.forms["info"]["address1"].value.length < 5) {
        txt = "Please input your address1 correctly";
        check = false;
    } else if (document.forms["info"]["address2"].value.length < 5) {
        txt = "Please input your address2 correctly";
        check = false;
    } else if (document.forms["info"]["subdistrict"].value.length < 2) {
        txt = "Please input your subdistrict correctly";
        check = false;
    } else if (document.forms["info"]["district"].value.length < 2) {
        txt = "Please input your district correctly";
        check = false;
    } else if (document.forms["info"]["province"].value == "") {
        txt = "Please choose your province";
        check = false;
    } else if (Number.isNaN(parseInt(zip_code)) || zip_code.length != 5) {
        txt = "Please input your zipcode correctly";
        check = false;
    } else if (Number.isNaN(parseInt(number)) || (number.length != 10 && number.length != 9)) {
        txt = "Please input your number correctly";
        check = false;
    }
    if (check) {
        swal("Success!", "", "success");
    } else {
        swal("Error!", txt, "error");
    }
    return check;
}