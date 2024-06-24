var submitbtn = document.getElementById("sb");
var sitename = document.getElementById("sitename");
var siteurl = document.getElementById("siteurl");
var tablebody = document.getElementById("tablebody");
var elements;
if (localStorage.getItem("elements") != null) {
    elements = JSON.parse(localStorage.getItem("elements"));
    display()
} else {
    elements = []
}
function addelement() {
    if(validationname()&&validationurl()){
    var element = {
        name: sitename.value,
        url: siteurl.value
    }
    elements.push(element);
    console.log(elements);
    localStorage.setItem("elements", JSON.stringify(elements));
    display()
    deletevalues()
}
}

function display() {
    var cartoona = "";
    for (var i = 0; i < elements.length; i++) {
        cartoona += `<tr>
                        <td>${i + 1}</td>
                        <td>${elements[i].name}</td>
                        <td><a href="https://www.${elements[i].url}"><button class="tablebtn visit">
                                    <div class="d-flex"><i class="fa-solid fa-eye "></i>visit</div>
                                </button></a></td>
                        <td><button onclick="deleteElement(${i})" class="tablebtn delete"><i class="fa-solid fa-trash-can"></i>delete</button></td>
                    </tr>`
    }
    tablebody.innerHTML = cartoona;
}
function deleteElement(index) {
    elements.splice(index, 1);
    localStorage.setItem("elements", JSON.stringify(elements));
    display()
}
function validationname() {
    var regex = /^[a-zA-Z1-9]{3,}/gm
    var h =regex.test(sitename.value);
    return h;
}
function validationurl() {
    var regex = /^[a-zA-Z1-9]{1,}.[a-zA-Z1-9]{2,}/gm
    var h =regex.test(siteurl.value);
    return h;
}
function deletevalues(){
    sitename.value=""
    siteurl.value=""
}