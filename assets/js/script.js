let a = 1;
let b = 0;
function arrow(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}
function starClick(c){
    if(b == 0){
        document.querySelectorAll(".star")[c].style.color = "#F4DC00";
        b = 1;
    }else{
        document.querySelectorAll(".star")[c].style.color = "white";
        b = 0;
    }
}
function showList(){
    if(a == 0){
        document.querySelectorAll(".triangle")[0].style.transform = "rotate(0deg)";
        document.querySelectorAll(".list")[0].style.height = "0";
        a = 1;
    }else{
        if(window.innerWidth <= 644){
            document.querySelectorAll(".triangle")[0].style.transform = "rotate(180deg)";
            document.querySelectorAll(".list")[0].style.height = "241px";
        }else{
            document.querySelectorAll(".triangle")[0].style.transform = "rotate(180deg)";
            document.querySelectorAll(".list")[0].style.height = "297px";
        }
        a = 0;
    }
}


const jsonFile = '{"blocks": [{"src": "assets/img/image 5.png","buildTitle": "Незвідана Бакота","buildText": "У Хмельницькій області розташований загублений край - Бакота. Мальовничий каньйон з давньою історією захоплює своїми просторами та незвичною атмосферою. Бджільництво, свіжий мед із польових трав, дотик до природи."},{"src": "assets/img/image 4.png","buildTitle": "Полонини Карпат","buildText": "Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас."},{"src": "assets/img/image 6.png","buildTitle": "Автентична Київщина","buildText": "Неподалік центра Києва розташувалось автентичне українське село на території однойменного села Пирогово. Дерев’яні млини, запашний хліб, приготовлений своїми руками, українські пісні та багато іншого чекає на вас уже зараз."},{"src": "assets/img/image 7.png","buildTitle": "Нетипова Одещина","buildText": "В Одеській області знаходиться мальовниче містечко Вилкове. Його ще називають «українською Венецією». Вилкове - це містечко на воді, весь в каналах. Розташоване в місці, де зустрічаються річка Дунай і Чорне море. Люди пересуваються переважно човнами. Нетипове українське село не залишить Вас без вражень."}]}';
// let ab = [
//     {
//         "src": "assets/img/image 5.png"
//     },
//     {
//         "src": "assets/img/image 4.png"
//     },
//     {
//         "src": "assets/img/image 6.png"
//     },
//     {
//         "src": "assets/img/image 7.png"
//     }
// ]
function createBlocks(obj, c){
    return (
        '<div class="build">' +
            '<img src="'+ (obj["blocks"][c]["src"]) +'" alt="#" class="buildImg">' +
            '<div class="buildTextContent">' +
               '<div class="buildTitle">' + (obj["blocks"][c]["buildTitle"]) + '</div>' +
               '<div class="lineHorizontal"></div>' +
               '<div class="buildText">' + (obj["blocks"][c]["buildText"]) + '</div>' +
            '</div>' +
            '<div class="icon star button" onclick="starClick(' + c + ')">&#xf005</div>' +
            // '<img src="assets/img/emojione_star.png" class="star button" onclick="starClick1(' + (c * 2) + ')">' +
            '<a class="details button" href="#">Детальніше</a>' +
        '</div>'
    );
}
let aboba = JSON.parse(jsonFile);
let insert = document.getElementsByClassName('bodyCapital')[0];//.insertAdjacentHTML('beforeEnd', getCoordHTML(json) );
for(let i = 0; i < aboba["blocks"].length; i++){
    insert.insertAdjacentHTML('beforeEnd', createBlocks(aboba, i));
}
insert.insertAdjacentHTML('beforeEnd', '<img src="assets/img/Component 10.png" alt="arrow" class="arrow button" onclick="arrow()">');
