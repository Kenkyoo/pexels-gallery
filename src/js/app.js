import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm';
import 'photoswipe/dist/photoswipe.css';


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://server-pexels.onrender.com/')
      .then(response => response.json())
      .then(data => {
        createImgs(data.photos)
        // Aquí puedes actualizar el DOM o manejar los datos como necesites.
      })
      .catch(error => console.error('Error:', error));
});

function createImgs(data) {
  let htmlContent = ''; // Inicializar una variable para acumular el HTML

  data.forEach(image => {
      htmlContent += `
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">${image.photographer}</dt>
            <a href="${image.src.original}" 
              data-pswp-width="1669" 
              data-pswp-height="2500" 
              target="_blank">
              <img src="${image.src.original}" alt="${image.alt}" />
            </a> 
            <dd class="mt-2 text-base leading-7 text-gray-600">${image.alt}</dd>
          </div>
      `;
  });

  // Solo actualizar el DOM una vez
  document.getElementById('my-gallery').innerHTML = htmlContent;
}


const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();
