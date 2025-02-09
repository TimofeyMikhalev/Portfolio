function serializeForm(formNode) {
    const { elements } = formNode

    const data = new FormData()

    Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
        const { name, value } = element 

        data.append(name, value)

    })       
    console.log(Array.from(data.entries()))
    return console.log(data)  
}

function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
}

async function sendData(data) {
    return await fetch('/api/apply', {
        method: 'POST',
        body: data,
    })
}

function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const data = serializeForm(event.target)

    toggleLoader()
    const { status, error } = await sendData(data)
    toggleLoader()

    if(status === 200) {
        onSuccess(event.target)
    } else {
        onError(error)
    }
}
function onError(error) {
    alert(error.message)
}

function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
}



const applicantForm = document.getElementById('register')
applicantForm.addEventListener('submit', handleFormSubmit)
applicantForm.addEventListener('input', checkValidity)

applicantForm.querySelector('button').disabled = true
 