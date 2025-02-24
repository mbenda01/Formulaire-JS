const professeurs = [
    { 
        id: 1, 
        nom: "Wane", 
        prenom: "Baila", 

    },
    { 
        id: 2, 
        nom: "LO", 
        prenom: "Mahmadane", 
    },
    { 
        id: 3, 
        nom: "Sabaly", 
        prenom: "Adama", 

    },
];

/* Recuperation du formulaire par son id*/
const form = document.getElementById("createForm");
/* Recuperation des champs par leurs Ids*/
const nomElem = document.getElementById("nom");
const prenomElem = document.getElementById("prenom");

/* Application d'un ecouteur d'evenement sur le formulaire*/
form.addEventListener("submit", (e)=>{
    /* Ajout d'une event (e) 
    et application de e.preventDefault(); pour pour stopper
    l'actualisation de la page au moment de la soumission*/
    e.preventDefault();
    /* Verifier si la value des champs sont vide à l'aide de .value
    */

    // Recuperation du message d'erreur en concatenant l'id du champ et 'Error'
    const nomError = document.getElementById(`${nomElem.id}Error`);
    const prenomError = document.getElementById(`${prenomElem.id}Error`);

    if(nomElem.value == ''){
        
        nomElem.classList.add('is-invalid');
        nomError.classList.add('invalid-feedback');
        nomError.textContent = "Ce champ est obligatoire";
        return; // pour la validation champ par champ
    }
    nomElem.classList.remove('is-invalid'); // suppression des classes précédentes pour eviter les erreurs
    nomError.classList.remove('invalid-feedback');
    // Ajout des champs de succés et réinitialisation des champs d'erreurs à vide
    nomElem.classList.add('is-valid');
    nomError.classList.add('valid-feedback');
    nomError.textContent = '';


    if(prenomElem.value == ''){
        
        prenomElem.classList.add('is-invalid');// suppression des classes précédentes pour eviter les erreurs
        prenomError.classList.add('invalid-feedback');
        prenomError.textContent = "Ce champ est obligatoire";
        return; // pour la validation champ par champ
    }
    prenomElem.classList.remove('is-invalid');
    prenomError.classList.remove('invalid-feedback');
    // Ajout des champs de succés et réinitialisation des champs d'erreurs à vide
    prenomElem.classList.add('is-valid');
    prenomError.classList.add('valid-feedback');
    prenomError.textContent = '';
})

nomElem.addEventListener('focus', () => {
    if(nomElem.classList.contains('is-invalid')){
        nomElem.classList.remove('is-invalid'); 
        nomError.classList.remove('invalid-feedback');
        nomError.textContent = '';
    }
    if(nomElem.classList.contains('is-valid')){
        nomElem.classList.remove('is-valid'); 
        nomError.classList.remove('valid-feedback');
        nomError.textContent = '';
    }

})


prenomElem.addEventListener('focus', () => {
    if(prenomElem.classList.contains('is-invalid')){
        prenomElem.classList.remove('is-invalid'); 
        prenomError.classList.remove('invalid-feedback');
        prenomError.textContent = '';
    }
    if(prenomElem.classList.contains('is-valid')){
        prenomElem.classList.remove('is-valid'); 
        prenomError.classList.remove('valid-feedback');
        prenomError.textContent = '';
    }

})


document.addEventListener("DOMContentLoaded", () => {
    genererDataProfesseur();
});




const tbody = document.getElementById("tbodyProfs");

document.getElementById("btnOpenForm").addEventListener("click", openForm);
document.getElementById("closeForm").addEventListener("click", closeForm);

function genererDataProfesseur() {
    tbody.innerHTML = "";
    professeurs.forEach((professeur) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${professeur.nom}</td>
            <td>${professeur.prenom}</td>
            <td>${professeur.specialite}</td>
            <td>
                <button class="btn btn-sm btn-warning">Modifier</button>
                <button class="btn btn-sm btn-danger">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}


function openForm() {
    form.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
}