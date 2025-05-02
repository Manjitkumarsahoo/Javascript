let item1 = {id:101,
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3KIqJ0c33D0FZDclm5gv9KdI0FmO3q8c2g&s",
    iName:"Idli",
    price:39,
    qty:1
};
let item2 = {id:102,
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviz2fl9NHmlFmO8-NdMkSwoMMr9hypcK1Kw&s",
    iName:"Bada",
    price:59,
    qty:1
};
let item3 = {id:103,
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZf2tks_5xpHBOUZzbmqxWbXWXQkglQH5PQ&s",
    iName:"Puri",
    price:69,
    qty:1
};

let items=[item1,item2,item3]

function displayItems(fooditem)
{
    if(fooditem.length==0)return;

    let eachitem=``;
    fooditem.forEach((item)=>
    {
        eachitem +=`<tr>
                        <td>${item.id}</td>
                        <td>
                            <img src="${item.imgUrl}" alt="" width="30px" height="30px">
                        </td>
                        <td>${item.iName}</td>
                        <td>&#8377; ${item.price}</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" id="minus-btn"
                            onclick="decQty(${item.id})"></i>
                            <span id="display">${item.qty}</span>
                            <i class="bi bi-plus-circle-fill" id="plus-btn"
                            onclick="incQty(${item.id})"></i>
                        </td>
                        <td>
                            &#8377;
                            <span id="total-price">${item.price*item.qty}</span>
                            .00
                        </td>
                </tr>`;            
    })
    document.getElementById('item-data').innerHTML=eachitem;
}
displayItems(items);

function incQty(id)
{
    const retArr=items.map((items)=>   //map can return a array
    {
        if(items.id==id)
        {
            return {...items,qty:++items.qty};
            
        }
        else return items;
    })
    displayItems(retArr);
}

function decQty(id) {
    const retArr = items.map((item) => {
        if (item.id === id)
        {
            if (item.qty > 1) 
            {
                return { ...item, qty:--item.qty };
            } 
            else 
            {
                return item;
            }
        }
        return item;
    });
    displayItems(retArr);
}