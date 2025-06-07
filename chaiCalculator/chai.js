function calculateChaiIngredients(){
    let cups = prompt("Enter number of chai cups you want to make:");
    cups = Number; 
    if(cups === 0){
        console.log("Enter number of cups");
        return;
    }
    const water = 200  * number of cups;
    const milk = 50  * number of cups;
    const tea leaves = 1 teaspoon * number of cups;
    const sugar = 2 teaspoons * number of cups ;

    console.log(`cups of chai: ${cups}`);
    console.log(`water: ${water} ml');
    console.log(`milk: ${milk} ml`);
    console.log(`tea leaves: ${tealeaves} teaspoons`);
    console.log(`sugar: ${sugar} teaspoons`);

}
