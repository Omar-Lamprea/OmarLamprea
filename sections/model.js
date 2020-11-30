const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');

document.getElementById('nav-'+ card).style.display = 'flex'
document.getElementById('card-' + card).style.display = 'block'


function developerPage(){
  //overlays and modal- page developer
  const imgContent = document.getElementById('img')
  imgContent.addEventListener('mouseover', showOverlayImages)
  imgContent.addEventListener('mouseout', hideOverlayImages)
  imgContent.addEventListener('click', showModal)
  
  const overlayImages = document.getElementById('overlayImages')
  
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

if(card === 'developer'){
  window.addEventListener('load', developerPage)
}