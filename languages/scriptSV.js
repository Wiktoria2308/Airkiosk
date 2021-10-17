let row1 = document.createElement('div');
row1.className = 'row';
let row2 = document.createElement('div');
row2.className = 'row';
let row3 = document.createElement('div');
row3.className = 'row';

let carousel1 = document.getElementById('row1');
let carousel2 = document.getElementById('row2');
let carousel3 = document.getElementById('row3');

fetch('../db.json')
  .then((response) => response.json())
  .then((data) => {
    let array = data.cards;

    for (let i = 0; i < 4; i++) {
      let col = document.createElement('div');
      col.className = 'col-md-3';

      let card = document.createElement('div');
      card.className = 'card mb-2 card-content';

      let imageContainer = document.createElement('div');
      imageContainer.className = 'text-center';
      imageContainer.id = 'image-container';

      let image = document.createElement('img');
      image.className = 'card-img-top carousel2-image';
      image.alt = 'Card image cap';

      let cardBody = document.createElement('div');
      cardBody.className = 'card-body card-product-body';

      let cardTitle = document.createElement('h6');
      cardTitle.className = 'card-title card-product-title text-uppercase';

      let cardText = document.createElement('p');
      cardText.className = 'card-text card-product-description';

      let cardFooter = document.createElement('div');
      cardFooter.className = 'cards-footer';

      let cardFooterText = document.createElement('h4');
      cardFooterText.className = 'text-uppercase';

      image.src = '../' + array[i].url + '.jpg';
      cardTitle.innerHTML = array[i].svName;
      cardText.innerHTML = array[i].svDescription;
      cardFooterText.innerHTML = array[i].price;

      cardFooter.appendChild(cardFooterText);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardFooter);
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      card.appendChild(cardBody);
      col.appendChild(card);

      row1.appendChild(col);
    }

    carousel1.appendChild(row1);
  });

fetch('../db.json')
  .then((response) => response.json())
  .then((data) => {
    let array = data.cards;

    for (let i = 4; i < 8; i++) {
      let col = document.createElement('div');
      col.className = 'col-md-3';

      let card = document.createElement('div');
      card.className = 'card mb-2 card-content';

      let imageContainer = document.createElement('div');
      imageContainer.className = 'text-center';
      imageContainer.id = 'image-container';

      let image = document.createElement('img');
      image.className = 'card-img-top carousel2-image';
      image.alt = 'Card image cap';

      let cardBody = document.createElement('div');
      cardBody.className = 'card-body card-product-body';

      let cardTitle = document.createElement('h6');
      cardTitle.className = 'card-title card-product-title text-uppercase';

      let cardText = document.createElement('p');
      cardText.className = 'card-text card-product-description';

      let cardFooter = document.createElement('div');
      cardFooter.className = 'cards-footer';

      let cardFooterText = document.createElement('h4');
      cardFooterText.className = 'text-uppercase';

      image.src = '../' + array[i].url + '.jpg';
      cardTitle.innerHTML = array[i].svName;
      cardText.innerHTML = array[i].svDescription;
      cardFooterText.innerHTML = array[i].price;

      cardFooter.appendChild(cardFooterText);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardFooter);
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      card.appendChild(cardBody);
      col.appendChild(card);

      row2.appendChild(col);
    }

    carousel2.appendChild(row2);
  });

fetch('../db.json')
  .then((response) => response.json())
  .then((data) => {
    let array = data.cards;

    for (let i = 8; i < 12; i++) {
      let col = document.createElement('div');
      col.className = 'col-md-3';

      let card = document.createElement('div');
      card.className = 'card mb-2 card-content';

      let imageContainer = document.createElement('div');
      imageContainer.className = 'text-center';
      imageContainer.id = 'image-container';

      let image = document.createElement('img');
      image.className = 'card-img-top carousel2-image';
      image.alt = 'Card image cap';

      let cardBody = document.createElement('div');
      cardBody.className = 'card-body card-product-body';

      let cardTitle = document.createElement('h6');
      cardTitle.className = 'card-title card-product-title text-uppercase';

      let cardText = document.createElement('p');
      cardText.className = 'card-text card-product-description';

      let cardFooter = document.createElement('div');
      cardFooter.className = 'cards-footer';

      let cardFooterText = document.createElement('h4');
      cardFooterText.className = 'text-uppercase';

      image.src = '../' + array[i].url + '.jpg';
      cardTitle.innerHTML = array[i].svName;
      cardText.innerHTML = array[i].svDescription;
      cardFooterText.innerHTML = array[i].price;

      cardFooter.appendChild(cardFooterText);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardFooter);
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      card.appendChild(cardBody);
      col.appendChild(card);

      row3.appendChild(col);
    }

    carousel3.appendChild(row3);
  });
