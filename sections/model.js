const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');

document.getElementById('nav-'+ card).style.display = 'flex'

document.getElementById('card-' + card).style.display = 'block'