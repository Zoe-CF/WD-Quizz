const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a', 'b', 'c', 'b', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎', '🍪'];
const titreResultat = document.querySelector('.resultats .info')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);
    for (i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 5; a++) {

        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    // console.log(verifTableau)
    afficherResultats(verifTableau);
    couleursFonction(verifTableau)
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length
    // console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! Voila un cookie : 🍪 !"
            aideResultat.innerText = '';
            noteResultat.style.display = "block";
            noteResultat.innerText = '5/5, noice !';
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.style.display = "block";
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.style.display = "block";
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            noteResultat.style.display = "block";
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Niarf, une seule bonne réponse 😭`
            noteResultat.style.display = "block";
            aideResultat.style.display = "block";
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Même pas une bonne réponse, i'm so sad 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '0/5'
            break;

        default:
            'Wops, cas innatendu. Tu as tout cassé 😨';

    }
}

function couleursFonction(tabValBool) {

    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'darkgreen';
        } else {
            toutesLesQuestions[j].style.background = 'darkred';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "linear-gradient(90deg, #121213, #0e0e0e)";
    })
})