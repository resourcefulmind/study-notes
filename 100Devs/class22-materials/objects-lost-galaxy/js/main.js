//Create a mouse object that has four properties and three methods
let mouseObj = {};

mouseObj.name = "Apple Magic Mouse";
mouseObj.size = "1.2kg";
mouseObj.color = "white";
mouseObj.secondColor = "black matte";
mouseObj.introduction = function() {
    console.log(`Apple presents to you, the new ${mouseObj.name}`);
}
mouseObj.options = function() {
    console.log(`The product is majorly available in ${mouseObj.color}`)

}
mouseObj.secondOption = function() {
    console.log(`For users in Europe, it is also available in ${mouseObj.secondColor}`)
}

function ProduceMouse(mouseMake, mouseSize, mouseColor, mouseSecondColor, mouseIntro, mouseOptions, mouseSecondOptions) {
    this.name = mouseMake;
    this.size = mouseSize;
    this.color = mouseColor;
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