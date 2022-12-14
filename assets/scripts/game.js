let game = {

    lockMode: false,
    firstCard: null,
    secoundCard: null,

    setCard: function(id){

        let card = this.cards.filter(card=> card.id === id)[0]

        if(card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true 
            return true
        } else {
            this.secoundCard = card;
            this.secoundCard.flipped = true
            this.lockMode = true;
            return true
        }

    },

    checkMatch: function(){
        if(!this.firstCard || !this.secoundCard){
            return false;
        }

        return this.firstCard.icon === this.secoundCard.icon
    },

    unflipCards(){
        this.firstCard.flipped = false
        this.secoundCard.flipped = false
        this.clearCards()
    },

    checkGameOver(){

        return this.cards.filter(card=> !card.flipped).length == 0;
    },

    clearCards: function(){
        this.firstCard = null
        this.secoundCard = null
        this.lockMode = false
    },
    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
    ],
    cards: null,


    createCardsFromTechs: function (){

        this.cards = [];
    
        for(let tech of this.techs){
            this.cards.push(this.createPairFromTech(tech))
        }
        this.cards = this.cards.flatMap(pair=>pair)
        this.shuffleCards()
        return this.cards
    },
    
    createPairFromTech: function (tech){
    
        return[
            {
                id: tech + parseInt(Math.random()*1000),
                icon: tech,
                flipped: false,
            },
            {
                id: tech + parseInt(Math.random()*1000),
                icon: tech,
                flipped: false,
            }
        ]
    },
     shuffleCards: function(cards){
    
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0){
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    
    }

}