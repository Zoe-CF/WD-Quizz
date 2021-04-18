const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'a', 'b'];
const emojis = ['✔️', '✨', '👀', '😭', '👎', '🍪'];
const titreResultat = document.querySelector('.resultats .info')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.question-block');
const images = document.getElementById("image");
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (i = 1; i < 11; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 10; a++) {

        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    afficherResultats(verifTableau);
    couleursFonction(verifTableau)
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! Voila un cookie : 🍪 !"
            aideResultat.innerText = '';
            noteResultat.style.display = "block";
            noteResultat.innerText = '10/10, noice ! Pro de TR !';
            images.setAttribute("src", "https://i.imgur.com/7KEQe3F.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '9/10';
            images.setAttribute("src", "https://media.melty.fr/article-4367720-raw/media.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.style.display = "block";
            noteResultat.innerText = '8/10';
            images.setAttribute("src", "https://media2.giphy.com/media/l0O7MwsfDiAnYVoze/giphy.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            noteResultat.style.display = "block";
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '7/10'
            images.setAttribute("src", "https://thumbs.gfycat.com/BitesizedTatteredArachnid-max-1mb.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;
        case 4:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            noteResultat.style.display = "block";
            aideResultat.style.display = "block";
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '6/10'
            images.setAttribute("src", "http://media3.giphy.com/media/l4Jz7pKT4QdgR3bCE/giphy.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;
        case 5:
            titreResultat.innerText = `😭 M'BOF, que cinq bonnes réponses 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '5/10'
            images.setAttribute("src", "https://thumbs.gfycat.com/ShockingWhichHamadryad-size_restricted.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;

        case 6:
            titreResultat.innerText = `😭 Niarf, que quatre bonnes réponses 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '4/10'
            images.setAttribute("src", "https://fangirlish.com/wp-content/uploads/2020/02/ezgif.com-video-to-gif-2.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;

        case 7:
            titreResultat.innerText = `👎 Boarf, que trois bonnes réponses 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '3/10';
            images.setAttribute("src", "https://media1.giphy.com/media/Q86X5VJEIwPJnOb3Rz/source.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;

        case 8:
            titreResultat.innerText = `👎 Niarf,  que deux bonnes réponses 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '2/10';
            images.setAttribute("src", "https://media.tenor.com/images/cfbfd6630742b12eda9f412c2d97eaae/tenor.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;

        case 9:
            titreResultat.innerText = `👎 Shame, une seule bonne réponse  👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '1/10'
            images.setAttribute("src", "https://78.media.tumblr.com/87e4e3b4c01572abcc412eaa047effc0/tumblr_pceh0prXdm1wpp8xno1_540.gif");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
            break;

        case 10:
            titreResultat.innerText = `👎 Même pas une bonne réponse, i'm so sad 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            aideResultat.style.display = "block";
            noteResultat.style.display = "block";
            noteResultat.innerText = '0/10'
            images.setAttribute("src", "https://media1.tenor.com/images/5e965970cc0bf8dfe343ce482581261f/tenor.gif?itemid=16628980");
            images.style.marginLeft = "auto";
            images.style.marginRight = "auto";
            images.style.display = "block";
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