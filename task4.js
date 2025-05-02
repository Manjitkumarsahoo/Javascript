let form = document.getElementById('form');
let list = document.getElementById('list');
let input = document.getElementById('input');  
let price = document.getElementById('price');
let category = document.getElementById('category'); 
let date = document.getElementById('date');
let totalExpenses = document.getElementById('total-expenses')
let showBtn = document.getElementById('show-total');
let filterBtn = document.getElementById('filter-btn');
let filterCategory = document.getElementById('filter-category');

let items = [];

filterBtn.addEventListener('click', function() {
    filterCategory.style.display = filterCategory.style.display === 'none' ? 'block' : 'none';
});

filterCategory.addEventListener('change', function() {
    let selectedCategory = filterCategory.value;
    let filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);
    display(filteredItems);
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    let item = {
        name: input.value,
        price: parseFloat(price.value),
        category: category.value,
        date: date.value
    };
    items.push(item);
    display(items);
    form.reset();
});

function display(items) {
    let totalItems = '';
    items.forEach((item) => {
        totalItems += ` 
        <tr>
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td>${item.date}</td>
        </tr>`;
    });
    document.getElementById('list').innerHTML = totalItems;
}


showBtn.addEventListener('click',function(){
    let total = items.reduce((sum,item)=>sum + parseFloat(item.price),0);
    totalExpenses.textContent = `₹${total.toFixed(2)}`;
    
})

