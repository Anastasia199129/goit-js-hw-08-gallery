 const gallery = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  const galleryUl = document.querySelector('.js-gallery')
  // const galleryImg = document.querySelector('.gallery__image')
  const modal = document.querySelector('.js-lightbox')
  const modalImg = document.querySelector('.lightbox__image')
  const buttonClose = document.querySelector('[data-action="close-lightbox"]')
  const overlay = document.querySelector('.lightbox__overlay')


  const ArrayOriginalImgSrc = gallery.map(e => e.original)
  


  const galerryMarkup = creategalery(gallery);
  galleryUl.insertAdjacentHTML('beforeend', galerryMarkup);

  function creategalery(gallery) { 
    return gallery.map(({preview, original, description}) => { 
  return `
 <li class="gallery__item">
    <a class="gallery__link"
     href="${original}">
     <img class="gallery__image"
     src="${preview}" alt="${description}"
     data-source ="${original}">
    </a>
  </li>`;
  })
  .join('');
}

 
galleryUl.addEventListener('click', onImgClick)
buttonClose.addEventListener('click', onModalCloseClick)
overlay.addEventListener('click', onOverlayClick)



function onImgClick(evt){
  evt.preventDefault()
if(!evt.target.classList.contains('gallery__image')) {
       return 
    }
    modal.classList.add('is-open')
    window.addEventListener('keydown', onEscapeClick)

    const originalPisture = evt.target.dataset.source
    modalImg.src = originalPisture
}

function onModalCloseClick(evt){
  modal.classList.remove('is-open')
  window.removeEventListener('keydown', onEscapeClick)
}

function onOverlayClick(){
  onModalCloseClick()
}

function onEscapeClick(e) {
  if(e.code === 'Escape'){
    onModalCloseClick()
  }
}


document.addEventListener('keydown', onArrowLeftArrowRightClick)

function onArrowLeftArrowRightClick(e){
  let newIndex;
  const curentTd = ArrayOriginalImgSrc.indexOf(modalImg.src)
  if(e.key === 'ArrowLeft') {
      newIndex = curentTd -1;
      if(newIndex === -1){
        newIndex = ArrayOriginalImgSrc.length -1
      }
    }
    else if (e.key === 'ArrowRight'){
      newIndex = curentTd +1;
      if(newIndex === ArrayOriginalImgSrc.length) 
        newIndex = 0 
    }
    modalImg.src = ArrayOriginalImgSrc[newIndex]
}