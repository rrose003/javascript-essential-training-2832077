/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const blenderBottle = {
    name: "My waterbottle",
    volume: 26,
    color: "black",
    liquid: "water",
    bottleLiquidAmount: 26,
    newLiquidAmount: function (liquidAmount){
        this.bottleLiquidAmount += liquidAmount;
    },
    capOn: true,
    toggleCap: function (capStatus){
        this.capOn = capStatus;
    }
}

console.log("This is the blenderBottle object: ", blenderBottle);

console.log("This is the bottleLiquidAmount: ", blenderBottle.bottleLiquidAmount);

