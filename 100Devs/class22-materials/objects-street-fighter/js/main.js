//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterCharacter(fighterName, fighterSkill, fighterWeakness, fighterKnockout, fighterBio, fighterMoves, fighterBoss ) {
    this.name = fighterName;
    this.skill = fighterSkill;
    this.weakness = fighterWeakness;
    this.knockout = fighterKnockout;
    this.bio = function() {
        console.log(`Forged by the fires of chinatown and, ${this.name} has buried his ${this.weakness} and will fight to the death! `)
    }
    this.moves = function () {
        console.log(`The supreme ${this.knockout}`)
    }
    this.boss = fighterBoss
}

let Kenshi = new StreetFighterCharacter('Kensi Nakamura', 'kick boxing', 'blindness', 'kick box box uppercut' )




   // function ProduceMouse(mouseMake, mouseSize, mouseColor, mouseSecondColor, mouseIntro, mouseOptions, mouseSecondOptions) {
    //    this.name = mouseMake;
      //  this.size = mouseSize;
        //this.color = mouseColor;
        this.secondColor = mouseSecondColor;
        this.introduction = function() {
            console.log(`Apple presents to you, the new ${mouseObj.name}`);
        }
        this.options = function() {
            console.log(`The product is majorly available in ${mouseObj.color}`)

        }
        this.secondOption = function() {
            console.log(`For users in Europe, it is also available in ${mouseObj.secondColor}`)
        }
    }

    let appleMouse = new ProduceMouse('Apple', '1.3kg', 'white', 'black');
//ProduceMouse.prototype.touchScreen = true;