`<div class="item">
<p [userId]="1">Nome
    <span>Editar</span>
    <span>Excluir</span>
</p>

</div>`
const listArea = document.getElementById('lista')
const inputNome = document.getElementById('inputNome')
var currentId = null
const sendButton = document.getElementById('enviar')
const newButton = document.getElementById('new')
const  alert = document.getElementById('alerta')

async function renderList() {
    const res = await axios('http://localhost:2006/getUsers')
    const users = res.data
    
    var finalElement = ''
    users.forEach(user => {
        finalElement += `
        <div class="item">
            <p "><div class="nome">${user.nome}</div>
                <span class="edit" data-nome="${user.nome}" user-id="${user.id}">Editar</span>
                <span class="del" user-id="${user.id}">Excluir</span>
            </p>
        </div>`
    })

    listArea.innerHTML = finalElement
}

function edit(e) {
    inputNome.value = e.target.getAttribute('data-nome')
    currentId = e.target.getAttribute('user-id')
}

function defineEvents() {
    const editBtns = document.querySelectorAll('.edit')
    for(let item of editBtns) {
        item.addEventListener('click', edit)
    }

    const delBtns = document.querySelectorAll('.del')
    for(let item of delBtns) {
        item.addEventListener('click', del)
    }

}

async function del(e) {
    currentId = e.target.getAttribute('user-id')

    const res = await axios.get(`http://localhost:2006/deluser?id=${currentId}`)


    alert.style.opacity = 1
    alert.innerHTML = res.data
    inputNome.value = ''
    currentId = null
    setTimeout( () => { alert.style.opacity = 0 }, 2000 )
    renderList()
}

async function send(e) {
    e.preventDefault()
    
    alert.innerHTML = ''
    const query = `?nome=${inputNome.value}&id=${currentId}`
    const res = await axios.get(`http://localhost:2006/addUpdate${query}`, { nome: inputNome.value, id: currentId })
    // const res = await axios.post('http://localhost:2006/addUpdate', { nome: inputNome.value, id: currentId })
    console.log(res)
    alert.style.opacity = 1
    alert.innerHTML = res.data
    //resets
    setTimeout( () => { alert.style.opacity = 0 }, 2000 )
    inputNome.value = ''
    currentId = null
    renderList()
}
renderList()
setTimeout(defineEvents, 1000)


sendButton.onclick = send
newButton.onclick = (e) => {
    e.preventDefault()
    inputNome.value = ''
    currentId = null
}