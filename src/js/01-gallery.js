import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const listImg = galleryItems
  .map(
    img => `<li class="gallery__item">
     <a class="gallery__link" href=${img.original}> 
      <img class="gallery__image" src=${img.preview} data-source=${img.original}  alt="${img.description}"/>
     </a>
  </li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', listImg);
let basicLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener('click', handelClick);

function handelClick(event) {
  if (event.target.nodeName === 'IMG') {
    event.preventDefault();
    basicLightbox.on('show.simplelightbox');
  }
}
