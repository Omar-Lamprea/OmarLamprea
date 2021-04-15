const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');

document.getElementById('nav-'+ card).style.display = 'flex'
document.getElementById('card-' + card).style.display = 'block'

if(card === 'developer'){
  window.addEventListener('load', e=>{
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
        title:'Responsive Design',
        img: '../imgs/dev-content/4responsive.png',
        id:'img-'
      },
      {
        title:'Css Grid',
        img:'../imgs/dev-content/5css-grid.png',
        id:'img-'
      },
      {
        title:'HTML y CSS',
        img:'../imgs/dev-content/6html-css.png',
        id:'img-'
      },
      {
        title:'Básico de JS',
        img:'../imgs/dev-content/7basic-js.png',
        id:'img-'
      },
      {
        title:'Fundamentos de JS',
        img:'../imgs/dev-content/8fund-js.png',
        id:'img-'
      },
      {
        title:'De Jquery a JS',
        img:'../imgs/dev-content/9jquery.png',
        id:'img-'
      },
      {
        title:'Ecma 6+',
        img:'../imgs/dev-content/10ecma6.png',
        id:'img-'
      },
      {
        title:'Bootstrap',
        img:'../imgs/dev-content/11bootstrap.png',
        id:'img-'
      }
    ]
  //console.log(imgsCertificates)
  
  let contador = 1
  
  contentCertificates.forEach(el => {
    $templateCertificate.querySelector('img').setAttribute('src', el.img)
    $templateCertificate.querySelector('img').setAttribute('alt', el.title)
    $templateCertificate.querySelector('section').setAttribute('id', el.id + contador)
    contador++
  
    let $clone = document.importNode($templateCertificate, true)
    $fragment.appendChild($clone)
  })
  $certificates.appendChild($fragment)
  
  const boxes = document.querySelectorAll('.box-certs')
  
  boxes.forEach(box =>{
    box.addEventListener('mouseover', showOverlayImages)
    box.addEventListener('mouseout', hideOverlayImages)
    box.addEventListener('click', showModal)
  })
  
  
      //overlays and modal- page developer
      const imgContent = document.getElementById('img-1')
      console.log(imgContent)
      
        function showOverlayImages(){
          this.querySelector('.overlay-imgs').style.display = 'flex'
        }
      
        function hideOverlayImages(){
          this.querySelector('.overlay-imgs').style.display = 'none'
  
        }
      
        //show modal
      const overlayPage = document.getElementById('overlay-page')
      const modal = document.getElementById('modal')
      
      function showModal(){
        const im = this.querySelector('img').getAttribute('src')
        document.getElementById('modal-certs-imgs').setAttribute('src', im)
  
        overlayPage.style.display = 'flex'
        modal.style.display = 'flex'
      
        const closeModal = document.getElementById('hide-modal')
        closeModal.addEventListener('click',hideModal)
      
        function hideModal(){
          overlayPage.style.display = 'none'
          modal.style.display = 'none'
        }
      }
  })
}
