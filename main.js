//onsubmit بدنا نستدعي الفنكشن 
document.querySelector('.toDoForm').onsubmit = addItems;
function addItems(e) {
    e.preventDefault();
    let item = document.querySelector('.toDoForm input[type=text]').value;
    let items = '';
    items += `
    <li>
    <input type="checkbox">
    <span>${item}</span>
    </li>
    `;
    document.querySelector('.addedItems ul').innerHTML += items;
    
    let list = document.querySelectorAll('.addedItems input[type=checkbox]');
    for(let i=0;i<list.length;i++){
        list[i].onclick= function(){
            list[i].nextElementSibling.classList.toggle('done');
            console.log(list[i].nextElementSibling);
        };
    }
}





