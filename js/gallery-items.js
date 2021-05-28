 

  const galleryUl = document.querySelector('.js-gallery')
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



function onEscapeKeyDown(e) {
  console.log(e.code)
  if(e.code === 'Escape'){
    onModalCloseClick()
  }
}

function onImgClick(evt){
  evt.preventDefault()
if(!evt.target.classList.contains('gallery__image')) {
       return 
    }
    modal.classList.add('is-open')
    window.addEventListener('keydown', onEscapeKeyDown)

    const originalPisture = evt.target.dataset.source
    modalImg.src = originalPisture
}

function onModalCloseClick(evt){
  modal.classList.remove('is-open')
  window.removeEventListener('keydown', onEscapeKeyDown)
}

function onOverlayClick(){
  onModalCloseClick()
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
    } else if (e.key === 'ArrowRight'){
      newIndex = curentTd +1;
      if(newIndex === ArrayOriginalImgSrc.length) {
        newIndex = 0 }
    }
    console.log(modalImg)
    modalImg.src = ArrayOriginalImgSrc[newIndex]
}