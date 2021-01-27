const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');

document.getElementById('nav-'+ card).style.display = 'flex'
document.getElementById('card-' + card).style.display = 'block'

if(card === 'developer'){
  window.addEventListener('load', developerPage)
}

function developerPage(){
  // dynamic certificates
  const $certificates = document.getElementById('certificates')
  console.log($certificates)
  const $templateCertificate = document.getElementById('template-certificate').content
  console.log($templateCertificate)
  const $fragment = document.createDocumentFragment()

  const contentCertificates = [
    {
      title: 'programación básica',
      img: '../imgs/dev-content/1prog-basica.png',
      id: 'img-'
    },
    {
      title:'Pensamiento Lógico',
      img: '../imgs/dev-content/2pens-logico.jpeg',
      id: 'img-'
    },
    {
      title:'HTML5-CSS',
      img: '../imgs/dev-content/3html5-css.png',
      id: 'img-'
    },
    {
      title:'',
      img: '../imgs/dev-content/4responsive.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/5css-grid.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/6html-css.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/7basic-js.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/8fund-js.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/9jquery.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/10ecma6.png',
      id:'img-'
    },
    {
      title:'',
      img:'../imgs/dev-content/11bootstrap.png',
      id:'img-'
    }
  ]
//console.log(imgsCertificates)

contentCertificates.forEach(el => {
  $templateCertificate.querySelector('img').setAttribute('src', el.img)
  $templateCertificate.querySelector('img').setAttribute('alt', el.title)
  $templateCertificate.querySelector('section').setAttribute('id', el.id + 1)

  let $clone = document.importNode($templateCertificate, true)
  $fragment.appendChild($clone)
})
$certificates.appendChild($fragment)




    //overlays and modal- page developer
    const imgContent = document.getElementById('img-1')
    console.log(imgContent)
    imgContent.addEventListener('mouseover', showOverlayImages)
    imgContent.addEventListener('mouseout', hideOverlayImages)
    imgContent.addEventListener('click', showModal)
    
      const overlayImages = document.getElementById('overlayImages1')
      function showOverlayImages(){
        overlayImages.style.display = 'flex'
      }
    
      function hideOverlayImages(){
        overlayImages.style.display = 'none'
      }
    
      //show modal
    const overlayPage = document.getElementById('overlay-page')
    const modal = document.getElementById('modal')
    
    function showModal(){
      overlayPage.style.display = 'flex'
      modal.style.display = 'flex'
    
      const closeModal = document.getElementById('hide-modal')
      closeModal.addEventListener('click',hideModal)
    
      function hideModal(){
        overlayPage.style.display = 'none'
        modal.style.display = 'none'
      }
    }
}

