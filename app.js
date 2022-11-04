const c = console.log.bind(document);

// Je veux pouvoir afficher et cache le div .answer-container
// -> Je vais utiliser la prop display pour ça (toggle la classe show-answer)
// Quand je clique sur .question-btn
// -> Je veux changer la visibilité de .answer-container  (toggle la classe show-answer)
// -> Je veux changer l'icone dans .question-btn  (toggle la classe opened)

// On sélectionne tous les éléments qui ont la classe .question-btn

const questionsButtons = document.getElementsByClassName("question-btn");

console.log(questionsButtons.length);

// Je parcours chaque élément trouvé
for (let iterationNumber = 0; iterationNumber < questionsButtons.length; iterationNumber = iterationNumber + 1) {
  // console.log("Iteration n°" + iterationNumber);
  console.log(questionsButtons[iterationNumber].outerHTML);

  let currentElement = questionsButtons[iterationNumber];

  // J'écoute les clicks
  currentElement.addEventListener('click', function(element){

    // -> Je change l'icone dans .question-btn  (toggle la classe opened)
    element.classList.toggle('opened');
    // Je traverse le dom à la recherche du parent le plus proche qui s'appelle "question-container".
    // A partir de là je récupère answer-container dans les enfants
    const answerContainer = element
        .closest('.question-container')
        .getElementsByClassName('answer-container');

    // Je sais qu'il n'y a qu'un seul élément portant la classe answer-container,
    // c'est pourquoi je prends le 1er élément du tableau [0]
    // Je toggle la classe show-answer
    answerContainer[0].classList.toggle('show-answer');

  });
}

console.log(questionsButtons);


