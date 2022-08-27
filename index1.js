/*const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        cardFace: Ancients.azathoth,
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    }
] */

let greenCardsData = [
    {
        id: 'green1',
        cardFace: "../assets/MythicCards/green/green1.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green2',
        cardFace: "../assets/MythicCards/green/green2.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green3',
        cardFace: "../assets/MythicCards/green/green3.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green4',
        cardFace: "../assets/MythicCards/green/green4.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green5',
        cardFace: "../assets/MythicCards/green/green5.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green6',
        cardFace: "../assets/MythicCards/green/green6.png",
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green7',
        cardFace: "../assets/MythicCards/green/green7.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green8',
        cardFace: "../assets/MythicCards/green/green8.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green9',
        cardFace: "../assets/MythicCards/green/green9.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green10',
        cardFace: "../assets/MythicCards/green/green10.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green11',
        cardFace: "../assets/MythicCards/green/green11.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green12',
        cardFace: "../assets/MythicCards/green/green12.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green13',
        cardFace: "../assets/MythicCards/green/green13.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green14',
        cardFace: "../assets/MythicCards/green/green14.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green15',
        cardFace: "../assets/MythicCards/green/green15.png",
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green16',
        cardFace: "../assets/MythicCards/green/green16.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green17',
        cardFace: "../assets/MythicCards/green/green17.png",
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green18',
        cardFace: "../assets/MythicCards/green/green18.png",
        difficulty: 'easy',
        color: 'green'
    },
]

let blueCardsData = [
    {
        id: 'blue1',
        cardFace: "../assets/MythicCards/blue/blue1.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue2',
        cardFace: "../assets/MythicCards/blue/blue2.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue3',
        cardFace: "../assets/MythicCards/blue/blue3.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue4',
        cardFace: "../assets/MythicCards/blue/blue4.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue5',
        cardFace: "../assets/MythicCards/blue/blue5.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue6',
        cardFace: "../assets/MythicCards/blue/blue6.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue7',
        cardFace: "../assets/MythicCards/blue/blue7.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue8',
        cardFace: "../assets/MythicCards/blue/blue8.png",
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue9',
        cardFace: "../assets/MythicCards/blue/blue9.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue10',
        cardFace: "../assets/MythicCards/blue/blue10.png",
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue11',
        cardFace: "../assets/MythicCards/blue/blue11.png",
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue12',
        cardFace: "../assets/MythicCards/blue/blue12.png",
        difficulty: 'normal',
        color: 'blue'
    },
]

let brownCardsData = [
    {
        id: 'brown1',
        cardFace: "../assets/MythicCards/brown/brown1.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown2',
        cardFace: "../assets/MythicCards/brown/brown2.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown3',
        cardFace: "../assets/MythicCards/brown/brown3.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown4',
        cardFace: "../assets/MythicCards/brown/brown4.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown5',
        cardFace: "../assets/MythicCards/brown/brown5.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown6',
        cardFace: "../assets/MythicCards/brown/brown6.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown7',
        cardFace: "../assets/MythicCards/brown/brown7.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown8',
        cardFace: "../assets/MythicCards/brown/brown8.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown9',
        cardFace: "../assets/MythicCards/brown/brown9.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown10',
        cardFace: "../assets/MythicCards/brown/brown10.png",
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown11',
        cardFace: "../assets/MythicCards/brown/brown11.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown12',
        cardFace: "../assets/MythicCards/brown/brown12.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown13',
        cardFace: "../assets/MythicCards/brown/brown13.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown14',
        cardFace: "../assets/MythicCards/brown/brown14.png",
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown15',
        cardFace: "../assets/MythicCards/brown/brown15.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown16',
        cardFace: "../assets/MythicCards/brown/brown16.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown17',
        cardFace: "../assets/MythicCards/brown/brown17.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown18',
        cardFace: "../assets/MythicCards/brown/brown18.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown19',
        cardFace: "../assets/MythicCards/brown/brown19.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown20',
        cardFace: "../assets/MythicCards/brown/brown20.png",
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown21',
        cardFace: "../assets/MythicCards/brown/brown21.png",
        difficulty: 'easy',
        color: 'brown'
    },
]

function smuffle() {
    let j, temp;
    for (let i = greenCardsData.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = greenCardsData[j];
        greenCardsData[j] = greenCardsData[i];
        greenCardsData[i] = temp;
    }
    return greenCardsData;
}
smuffle()

const greenCardsAzathoth = greenCardsData.slice(0, 5); {
    function smuffle() {
        let j, temp;
        for (let i = greenCardsAzathoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = greenCardsAzathoth[j];
            greenCardsAzathoth[j] = greenCardsAzathoth[i];
            greenCardsAzathoth[i] = temp;
        }
        return greenCardsAzathoth;
    }
}
smuffle()

function snuffle() {
    let j, temp;
    for (let i = blueCardsData.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = blueCardsData[j];
        blueCardsData[j] = blueCardsData[i];
        blueCardsData[i] = temp;
    }
    return blueCardsData;
}
snuffle()

const blueCardsAzathoth = blueCardsData.slice(0, 2); {
    function snuffle() {
        let j, temp;
        for (let i = blueCardsAzathoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = blueCardsAzathoth[j];
            blueCardsAzathoth[j] = blueCardsAzathoth[i];
            blueCardsAzathoth[i] = temp;
        }
        return blueCardsAzathoth;
    }
}
snuffle()

function shuffle() {
    let j, temp;
    for (let i = brownCardsData.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = brownCardsData[j];
        brownCardsData[j] = brownCardsData[i];
        brownCardsData[i] = temp;
    }
    return brownCardsData;
}
shuffle()

const brownCardsAzathoth = brownCardsData.slice(0, 9); {
    function shuffle() {
        let j, temp;
        for (let i = brownCardsAzathoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = brownCardsAzathoth[j];
            brownCardsAzathoth[j] = brownCardsAzathoth[i];
            brownCardsAzathoth[i] = temp;
        }
        return brownCardsAzathoth;
    }
}
shuffle()

const greenCardsAzathoth1 = greenCardsAzathoth.slice(0, 1);
const greenCardsAzathoth2 = greenCardsAzathoth.slice(1, 5);
const greenCardsAzathoth3 = greenCardsAzathoth2.slice(0, 2);
const greenCardsAzathoth4 = greenCardsAzathoth2.slice(2, 4);

const blueCardsAzathoth1 = blueCardsAzathoth.slice(0, 1);
const blueCardsAzathoth2 = blueCardsAzathoth.slice(1, 2);

const brownCardsAzathoth1 = brownCardsAzathoth.slice(0, 2);
const brownCardsAzathoth2 = brownCardsAzathoth.slice(2, 9);
const brownCardsAzathoth3 = brownCardsAzathoth2.slice(0, 3);
const brownCardsAzathoth4 = brownCardsAzathoth2.slice(3, 7);

const firstStageAzatoth = [...greenCardsAzathoth1, ...blueCardsAzathoth1, ...brownCardsAzathoth1]; {
    function buffle() {
        let j, temp;
        for (let i = firstStageAzatoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = firstStageAzatoth[j];
            firstStageAzatoth[j] = firstStageAzatoth[i];
            firstStageAzatoth[i] = temp;
        }
        return firstStageAzatoth;
    }
}
buffle()

const secondStageAzatoth = [...greenCardsAzathoth3, ...blueCardsAzathoth2, ...brownCardsAzathoth3]; {
    function guffle() {
        let j, temp;
        for (let i = secondStageAzatoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = secondStageAzatoth[j];
            secondStageAzatoth[j] = secondStageAzatoth[i];
            secondStageAzatoth[i] = temp;
        }
        return secondStageAzatoth;
    }
}
guffle()

const thirthStageAzatoth = [...greenCardsAzathoth4, ...brownCardsAzathoth4]; {
    function ruffle() {
        let j, temp;
        for (let i = thirthStageAzatoth.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = thirthStageAzatoth[j];
            thirthStageAzatoth[j] = thirthStageAzatoth[i];
            thirthStageAzatoth[i] = temp;
        }
        return thirthStageAzatoth;
    }
}
ruffle()

const allCards = [...firstStageAzatoth, ...secondStageAzatoth, ...thirthStageAzatoth]
console.log(allCards);

const currentCard = document.querySelector('.current__card')
document.querySelector(".card__shirt").onclick = function () {
    currentCard.style.backgroundImage = allCards[i];
    let i = 0;
    i++;
    if (i >= allCards.length) {
        i = 0;
    }
}

console.log(allCards[i]);

/*показать текущую картинку
показать число картинок в этапе
greenCardsData.forEach(grCards => console.log(grCards));

const ancientsGreenCards = greenCardsData
    .map(greenCards => {
        return ;
    })

    .filter(greenCards => greenCards.id)

console.log(ancientsGreenCards);
//массив использованных данных
инклюдс
слайс массив
Так а набрать массив обычным слайсом
    (только перед этим перемешать ранодмом) и всегда первые 
 три например будут разные и не повторяться

 А потом например сделать массив третьего уровня уже с 5 картами и ещё раз
перемешать, потом 2 потом 1 и все склеить в конце

удалить свойство у элемента тоглить
container.forEach((el, indx) => {
  el.addEventListener('click', () => {
    if (indx == число) {
      // код    
    }
   })  
})

arr = [...shuffle(easy),...shuffle(normal)]
arr.length = skolka_nuzhno

Удаляете выпавшую карту из массива, чекаете ее цвет, если цвет зеленый,
 то зеленый кружок -1 и т.д. Когда зеленый кружок первой стадии становится 0, начинаете отнимать у зеленого кружка второй стадии и т.д.

 Хм. Со сложностью смысл какой.  На очень легком нужно взять из колоды ВСЕ карты со снежинками и посчитать их, если их меньше, 
 чем нужно для древнего, тогда добераем из простых карт. Там карт хватает для всех сложностей.

 Для примера: нам нужно всего 6 зеленых. В общей колоде у нас, для примера, есть 4 с снежинками(легких) и 4 обычных. Если сложность очень легкая - берем все легкие, их 4,  и добераем до 6 необходимых карт еще 2 случайные карты из обычных. 
 Если сложность легкая - берем колоду из 4 легких(с снежинкой) и 4 обычных карты и из них случайно выбераем 6 карт
*/