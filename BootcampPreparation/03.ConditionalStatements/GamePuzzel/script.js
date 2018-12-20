

function change(part) {
    var img = document.getElementById('img' + part[3]);
    console.log(img.src);
    switch (img.src) {
        case 'file:///D:/WorkSpace/CodeGym/BootcampPreparation/03.ConditionalStatements/GamePuzzel/cat_part' + part[3] + '.jpg':
            img.src = 'monkey_part' + part[3] + '.jpg';
            console.log(img.src);
            break;
        case 'file:///D:/WorkSpace/CodeGym/BootcampPreparation/03.ConditionalStatements/GamePuzzel/monkey_part' + part[3] + '.jpg':
            img.src = 'panda_part' + part[3] + '.jpg';
            console.log(img.src);
            break;
        case 'file:///D:/WorkSpace/CodeGym/BootcampPreparation/03.ConditionalStatements/GamePuzzel/panda_part' + part[3] + '.jpg':
            img.src = 'cat_part' + part[3] + '.jpg';
            console.log(img.src);
            break;
    }
}

function check() {
    img1 = document.getElementById('img1');
    img2 = document.getElementById('img2');
    img3 = document.getElementById('img3');
    img4 = document.getElementById('img4');
    img5 = document.getElementById('img5');
    var checkStr = img1.src.substring(0, img1.src.length - 5);
    if ((checkStr == img2.src.substring(0, img2.src.length - 5)) && (checkStr == img3.src.substring(0, img3.src.length - 5))
        && (checkStr == img4.src.substring(0, img4.src.length - 5)) && (checkStr == img5.src.substring(0, img5.src.length - 5))) {
        alert('You won!');
    }
}


