//hide or  unhide the radiobutton
function ShowHideDiv() {
    var chkYes = document.getElementById("hir");
    var new_field = document.getElementById("rate");
    new_field.style.display = chkYes.checked ? "block" : "none";
}