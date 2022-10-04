'use sctrict';

const items = document.querySelectorAll('.cards-container__item');

for(let item of items){
      item.addEventListener('click', function(){
            item.classList.toggle('cards-container__item_changed');
      })      
}

