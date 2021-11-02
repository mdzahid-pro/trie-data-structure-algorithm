//let words = "China,India,United States,Indonesia,Pakistan,Brazil,Nigeria,Bangladesh,Mexico,Japan,Ethiopia,Philippines,Egypt,Vietnam	,DR Congo,Turkey,Iran,Germany,Thailand,United Kingdom,France,Italy,Tanzania,South Africa,Myanmar,Kenya,South Korea,Colombia,Spain,Uganda,Argentina,Algeria,Sudan,Ukraine,Iraq,Afghanistan,Poland,Canada,Morocco,Saudi Arabia,Uzbekistan,Peru,Angola,Malaysia,Mozambique,Ghana,Yemen,Nepal,Venezuela,Madagascar,Cameroon,Côte d\'Ivoire,North Korea,Australia,Niger,Sri Lanka,Burkina Faso,Mali,Romania,Malawi,Chile,Kazakhstan,Zambia,Guatemala,Ecuador,Syria,Netherlands,Senegal,Cambodia,Chad,Somalia,Zimbabwe,Guinea,Rwanda,Benin,Burundi,Tunisia,Bolivia,Belgium,Haiti,Cuba,South,Dominican Republic,Czech Republic,Greece,Jordan,Portugal,Azerbaijan,Sweden,Honduras,United Arab Emirates,Hungary,Tajikistan,Belarus,Austria,Papua New Guinea,Serbia,Israel,Switzerland,Togo,Sierra Leone,Laos,Paraguay,Bulgaria,Libya,Lebanon,Nicaragua,Kyrgyzstan,El Salvador,Turkmenistan,Singapore,Denmark,Finland,Congo,Slovakia,Norway,Oman,State of Palestine,Costa Rica,Liberia,Ireland,Central African Republic,New Zealand,Mauritania,Panama,Kuwait,Croatia,Moldova,Georgia,Eritrea,Uruguay,Bosnia and Herzegovina,Mongolia,Armenia,Jamaica,Qatar,Albania	,Lithuania,Namibia,Gambia,Botswana,Gabon,Lesotho,North Macedonia,Slovenia,Guinea-Bissau,Latvia,Bahrain,Equatorial Guinea,Trinidad and Tobago,Estonia,Timor-Leste,Mauritius,Cyprus,Eswatini,Djibouti,Fiji,Comoros,Guyana,Bhutan,Solomon Islands,Montenegro,Luxembourg,Suriname,Cabo Verde,Micronesia,Maldives,Malta,Brunei,Belize,Bahamas,Iceland,Vanuatu,Barbados,Sao Tome & Principe,Samoa,Saint Lucia,Kiribati,Grenada,St. Vincent & Grenadines,Tonga,Seychelles,Antigua and Barbuda,Andorra,Dominica,Marshall Islands,Saint Kitts & Nevis,Monaco,Liechtenstein,San Marino,Palau,Tuvalu,Nauru,Holy See,"; 

const items =  ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

console.log(items)
const root = new makeNode('\O');
for(const item of items)
	add(item.toLowerCase(),0,root)

const text_box = document.getElementById('text-box')
const list = document.getElementById('list')

function handler(e) {
    const str = e.target.value;
    const predictions = search(str, 0, root);

    console.log(predictions);

    list.innerHTML = "";
    for (const prediction of predictions)
        list.innerHTML += `<li class="list-group-item clickable" style="background:#009688;text-transform:capitalize;" onclick="handleClick(this)"><mark style='background:red;'>${str}</mark>${prediction.substring(str.length)}</li>`;

}

function handleClick(e){
	text_box.value = e.innerText
}

//handler({target:{value:""}})

text_box.addEventListener("keyup",handler)









// const items = [
    // "apple",
    // "apricot",
    // "banana",
    // "pear",
    // "guava",
    // "cherry",
    // "orange",
    // "pineapple",
    // "mango",
    // "grapes",
    // "blueberry",
    // "raspberry",
    // "melon",
    // "blackberry",
    // "plum",
    // "kiwi",
    // "peach",
    // "strawberry",
    // "avocado"
// ];

// const root = new makeNode('\0');
// for (const item of items)
    // add(item, 0, root);

// const text_box = document.getElementById("text-box");
// const list = document.getElementById("list");

// function handler(e) {
    // const str = e.target.value;
    // const predictions = search(str, 0, root);

    // console.log(predictions);

    // list.innerHTML = "";
    // for (const prediction of predictions)
        // list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;

// }

// function handleClick(e) {
    // text_box.value = e.innerText;
// }

// handler({ target: { value: "" } });


// text_box.addEventListener("keyup", handler);