fetch('https://fakestoreapi.com/products') 
  .then(res => res.json())
  .then(data => {
    let display = document.querySelector('.api');

    data.forEach(item => {
      let card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 10px;">
        <P>${item.title}</P>
        <p>Price: $${item.price}</p>
        <button onclick="location.href='nextpage.html?id=${item.id}'">View Details</button>
      `;    

      display.appendChild(card);
    });
  })
  .catch(console.log);
