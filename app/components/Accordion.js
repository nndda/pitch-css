
var d = document;
const accrd_items = d.getElementById("accrd_0"
    ).getElementsByClassName("accrd_custom_item")[0
    ].parentElement;

var accrd_titles = ["Heading here..."];
var accrd_contents = ["Content here..."];

function accrd_update() {
    accrd_titles = [];
    accrd_contents = [];
    for (var i = 0; i < accrd_items.childElementCount; i++) {
        accrd_items.children[i].getElementsByTagName("h3")[0].textContent = "Item " + ( i + 1).toString();
        accrd_items.children[i].getElementsByClassName("icon_del")[0].disabled = false;
        accrd_items.children[0].getElementsByClassName("icon_del")[0].disabled = accrd_items.childElementCount == 1;
        accrd_titles.push(accrd_items.getElementsByClassName("accrd_title")[i].value);
        accrd_contents.push(accrd_items.getElementsByClassName("accrd_content")[i].textContent);
        accrd_prev_update(accrd_items.children[i].getElementsByClassName("accrd_title")[0]);
    }
}

function accrd_del_itm(target) {
    var idx = Array.from(accrd_items.children).indexOf(target.parentElement.parentElement);
    target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement)
    d.getElementById("prev_accordion").getElementsByClassName("custom-accrd")[0].removeChild(
        d.getElementById("prev_accordion").getElementsByClassName("custom-accrd")[0].children[idx]
    );
}


function add_accrd_item() {
    var new_accrd = d.getElementById("accrd_item_template").cloneNode(true);
    new_accrd.removeAttribute("id");
    new_accrd.classList.remove("hidden");

    accrd_items.appendChild(new_accrd);
    add_accrd_prev();
    accrd_update();
    // console.log(d.getElementById("accrd_item_template"))
}

function add_accrd_prev() {
    var elem = d.getElementById("accrd_template").cloneNode(true);
    elem.removeAttribute("id");
    elem.removeAttribute("class");

    d.getElementById("prev_accordion").getElementsByClassName("custom-accrd")[0].appendChild(elem);
    console.log("dawdawd");
}

function accrd_prev_update(target) {
    var idx = Array.from(accrd_items.children).indexOf(target.parentElement);
    var el = d.getElementById("prev_accordion").getElementsByClassName("custom-accrd")[0].children[idx];

    // console.log(idx);
    // console.log(target.parentElement);
    // console.log(Array.from(accrd_items.children));
    // console.log(d.getElementById("prev_accordion").getElementsByClassName("custom-accrd")[0]);

    accrd_titles[idx] = target.parentElement.getElementsByClassName("accrd_title")[0].value;
    // accrd_titles[idx] = (target.parentElement.getElementsByClassName("accrd_title")[0].innerHTML).toString();
    accrd_contents[idx] = target.parentElement.getElementsByClassName("accrd_content")[0].value;

    // console.log(el.childNodes[2]);

    // el.getElementsByTagName("summary")[0].innerHTML = (accrd_titles[idx]).toString();
    el.getElementsByTagName("summary")[0].innerHTML = accrd_titles[idx];
    // el.childNodes[2].innerHTML = (accrd_contents[idx]).toString();
    el.getElementsByTagName("div")[0].innerHTML = accrd_contents[idx];

}