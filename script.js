
function mudaHora() {
    var agora = new Date()
    var hora = agora.getHours()
    var qh = window.document.querySelector('div#qhoras')
    var fundo = window.document.querySelector('body')
    var cx = window.document.querySelector('div#caixa')
    var noi = window.document.querySelector('img#manha')
    var tar = window.document.querySelector('img#tarde')
    var man = window.document.querySelector('img#noite')

    qh.innerHTML = `Agora são ${hora} horas...`

    if (hora>=0 && hora<12) {
        fundo.style.background = 'yellow'
        man.style.display = 'block'

    } else if (hora>=12 && hora<18) {
        fundo.style.background = 'orange'
        tar.style.display = 'block'

    } else {
        fundo.style.background = 'gray'
        noi.style.display = 'block'
    }   
} 

/* Ou... caso eu queira que as imagens mudem pelo próprio script -- tendo em vista que o meu html e css não possuem nenhuma imagem, é claro --
basta eu criar uma variável pras imagens e fazer o seguinte procedimento para todos os ifs:

----> img.src = "nomedaimagemlegal.jpg"

*/