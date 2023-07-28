const navOpen = document.querySelector('#nav-open');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const navLinkClose = document.querySelectorAll('.nav-link-close');

navOpen.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

const closeMobileNav = () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'auto';
};

closeMenu.addEventListener('click', closeMobileNav);

navLinkClose.forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

const portfolioItemsDetail = [
  {
    id: '0',
    name: 'Tonic',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the y.Lorem Ipsum has, a galley of type and scrambled it 1960s.  is text of the printing and typesetting .',
    title: 'CANOPY',
    stack: 'Back End Dev',
    workStack: ['HTML', 'CSS', 'JavaScript'],
    images: 'images/desktop-switch/(1)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '1',
    name: 'Multi-Post Stories',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the printing and  Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'FACEBOOK',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(2)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '2',
    name: 'Facebook 360',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of and scrambled it 1960s. Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'Facebook',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(3)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '3',
    name: 'Uber Navigation',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of a galley of type and scrambled it 1960s . Ipsum  text of the printing and typesetting industry.',
    title: 'Uber',
    stack: 'Lead Developer',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(4)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },
];
if (portfolio) {
  for (let i = 0; i < portfolioItemsDetail.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('id', `${i}`);
    div.innerHTML = `
   <div class="card-left-mobile">
   <img src="${portfolioItemsDetail[i].images}" alt="snap-card">
   </div>
   <div class="card-right">
     <h2>${portfolioItemsDetail[i].name}</h2>
     <ul class="cano">
       <li>${portfolioItemsDetail[i].title}<i class="fa fa-circle"></i></li>
       <li>${portfolioItemsDetail[i].stack}<i class="fa fa-circle"></i></li>
       <li>2015</li>
     </ul>
     <p>${portfolioItemsDetail[i].text}</p>
     <ul class="lang">
       ${portfolioItemsDetail[i].workStack
    .map((stack) => `<li>${stack}</li>`)
    .join('')}
     </ul>
     <button class="btn-default portfolio-items-detail">See project</button>
   </div>
   <div class="card-left-desk">
     <img src="${portfolioItemsDetail[i].images}" alt="snap-card">
   </div>
   `;
    portfolio.appendChild(div);
  }
}
const portfolioItems = document.querySelectorAll('.portfolio-items-detail');
if (portfolioItems) {
  portfolioItems.forEach((cards) => {
    cards.addEventListener('click', (e) => {
      const idValue = e.target.closest('.card').id;
      for (let i = 0; i < portfolioItemsDetail.length; i += 1) {
        if (portfolioItemsDetail[i].id === idValue) {
          const popupPage = document.createElement('page');
          popupPage.classList.add('popup-page');
          // console.log(porfolioItemsDetail[i].name);
          popupPage.innerHTML = `
          <div class="background"></div>
          <div class="card flex-main">
            <button class="close-btn" type="submit">
              <i class="fas fa-times"></i>
            </button>
            <div class="card-right">
              <h2>${portfolioItemsDetail[i].name}</h2>
              <ul class="cano">
                <li>${portfolioItemsDetail[i].title}<i class="fa fa-circle"></i></li>
                <li>${portfolioItemsDetail[i].stack}<i class="fa fa-circle"></i></li>
                <li>${portfolioItemsDetail[i].year}</li>
              </ul>
              <div class="snap-image">
                <img src="${portfolioItemsDetail[i].images}" alt="${portfolioItemsDetail[i].name}">
              </div>
              <div class="flex-nl">
                <p>${portfolioItemsDetail[i].text}</p>  
                <ul class="lang">
                ${portfolioItemsDetail[i].workStack.map((stack) => `<li>${stack}</li>`).join('')}
                </ul>
                  <div class="link-button">
                    <button class="btn-default"><a href="${portfolioItemsDetail[i].live} class="see-btn">See live<img
                    src="images/see-images/live.png" alt="live-link" /></a></button>
                    <button class="btn-default"><a href="${portfolioItemsDetail[i].source} class="see-btn">See source<img
                    src="images/see-images/Vector.png" alt="live-link" /></a></button>
                  </div>
              </div>
            </div>
          </div>
          `;
          wrapper.appendChild(popupPage);
          const closeButton = popupPage.querySelector('.close-btn');
          closeButton.addEventListener('click', () => {
            wrapper.removeChild(popupPage);
          });
        }
      }
    });
  });
}

