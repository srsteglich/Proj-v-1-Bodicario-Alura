const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mens = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nome Completo: ${fullName.value}<br> E-mail: ${email.value}<br> 
                Assunto: ${subject.value}<br> Sua Mensagem: ${mens.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "srsteglich@gmail.com",
        Password : "1327F543758E8480AB3A429896628BD2F482",
        To : 'srsteglich@gmail.com',
        From : "srsteglich@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title:"Sucesso!",
                    text: "A mensagem enviada com sucesso!",
                    icon: "success", // Corrigido de "sucess" para "success"
                    confirmButtonText: 'Voltar'
                }).then(() => {
                    window.history.back(); // Navega para a página anterior
                });
            } else {
                console.error("Falha ao enviar email:", message);
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");            
        }

       if (items[1].value !="") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });  

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error"); 
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error"); 
            }
        })
    }
}

function checkEmail() {
    const emailRegex =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Digite um endereço de e-mail válido";
        } else {
            errorTxtEmail.innerText = "A mensagem não pode ficar em branco";
        }

    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()

    if (!fullName.classList.contains("error") && 
        !email.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !mens.classList.contains("error")) {
            //console.log("OK");
            sendEmail();
            form.reset();            
            return false;
        }       
})