document.addEventListener('DOMContentLoaded', () => {
    createBoard(16);
})

function createBoard(size) {
    const board = document.querySelector('#board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDiv = size * size;

    for(let i = 0;i < numDiv;i++){
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);
        div.classList.add('hoverr');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        })
    }

}

function ubahUkuranPiksel() {
    let prom = prompt('Masukan Angka 1 Hingga 100',"");
    if(prom <= 1 || prom > 100 || isNaN(prom)) {
        alert("Masukan Angka Tidak Kurang dari 1 dan Tidak Lebih Dari 100 !!!");
    } else {
        resetBoard();
        createBoard(prom);
    }
    
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', ubahUkuranPiksel);

function resetBoard(){
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = "white");
}







