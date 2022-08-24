let brown = 21;
let blue = 12;

const green1 = "../assets/MythicCards/green/green1.png";
const green2 = "../assets/MythicCards/green/green2.png";
const green3 = "../assets/MythicCards/green/green3.png";
const green4 = "../assets/MythicCards/green/green4.png";
const green5 = "../assets/MythicCards/green/green5.png";
const green6 = "../assets/MythicCards/green/green6.png";
const green7 = "../assets/MythicCards/green/green7.png";
const green8 = "../assets/MythicCards/green/green8.png";
const green9 = "../assets/MythicCards/green/green9.png";
const green10 = "../assets/MythicCards/green/green10.png";
const green11 = "../assets/MythicCards/green/green11.png";
const green12 = "../assets/MythicCards/green/green12.png";
const green13 = "../assets/MythicCards/green/green13.png";
const green14 = "../assets/MythicCards/green/green14.png";
const green15 = "../assets/MythicCards/green/green15.png";
const green16 = "../assets/MythicCards/green/green16.png";
const green17 = "../assets/MythicCards/green/green17.png";
const green18 = "../assets/MythicCards/green/green18.png";

/*const greenCards = {
    green1,
    green2,
    green3,
    green4,
    green5,
    green6,
    green7,
    green8,
    green9,
    green10,
    green11,
    green12,
    green13,
    green14,
    green15,
    green16,
    green17,
    green18,
};

const ancientsData = [
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
]*/

const greenCardsAssets = 1;

const greenCardsData = [
    {
        id: 'green1',
        cardFace: greenCardsAssets.green1,
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green2',
        cardFace: greenCardsAssets.green2,
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green3',
        cardFace: greenCardsAssets.green3,
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green4',
        cardFace: greenCardsAssets.green4,
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green5',
        cardFace: greenCardsAssets.green5,
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green6',
        cardFace: greenCardsAssets.green6,
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green7',
        cardFace: greenCardsAssets.green7,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green8',
        cardFace: greenCardsAssets.green8,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green9',
        cardFace: greenCardsAssets.green9,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green10',
        cardFace: greenCardsAssets.green10,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green11',
        cardFace: greenCardsAssets.green11,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green12',
        cardFace: greenCardsAssets.green12,
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green13',
        cardFace: greenCardsAssets.green13,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green14',
        cardFace: greenCardsAssets.green14,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green15',
        cardFace: greenCardsAssets.green15,
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green16',
        cardFace: greenCardsAssets.green16,
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green17',
        cardFace: greenCardsAssets.green17,
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green18',
        cardFace: greenCardsAssets.green18,
        difficulty: 'easy',
        color: 'green'
    },
]

greenCardsData.forEach(grCards => console.log(grCards));

const ancientsGreenCards = greenCardsData.map(greenCards => {
    return greenCards.color;
});
console.log(ancientsGreenCards);