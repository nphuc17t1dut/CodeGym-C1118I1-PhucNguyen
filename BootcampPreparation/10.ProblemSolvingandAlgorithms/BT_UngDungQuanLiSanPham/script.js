var products = ['Dell', 'HP', 'Acer', 'Macbook'];

function displayProducts() {
    var display = '';
    display += '<table border = "0" cellspacing = "0">';
    display += '<tr>';
    display += '<th>Product Name</th>';
    display += '</tr>';
    for (var i = 0; i < products.length; i++) {
        display += '<tr>';
        display += '<td>' + (i + 1) + '</td>';
        display += '<td>' + products[i] + '</td>';
        display += '<td><input type="button" value="Delete" onclick="deleteProducts(' + i + ')"/></td>';
        display += '<td><input type="button" value="Edit"  onclick="edit.editProducts(' + i + ')"/></td>';
        display += '</tr>';
    }
    display += '</table>';
    document.getElementById('display').innerHTML = display;
}

function addProducts() {
    products.push(document.getElementById('add').value);
    alert('Added !');
    document.getElementById('add').value = '';
    displayProducts();
}

var edit = function () {

    this.editProducts = function (num) {
        document.getElementById('edit').value = products[num];
        displayProducts();
        this.num = num;
    };

    this.changeValue = function () {
        products[this.num] = document.getElementById('edit').value;
        displayProducts();
        document.getElementById('edit').value = '';
    };

}
var edit = new edit;
function deleteProducts(index) {
    products.splice(index, 1);
    displayProducts();
}
displayProducts();


