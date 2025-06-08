function calculateChaiIngredients(){
    let cups = prompt("Enter number of chai cups you want to make:");
    cups = Number; 
    if(cups === 0){
        console.log("Enter number of cups");
        return;
    }
    const water = 200 * numberOfcups;
    const milk = 50 * numberOfcups;
    const teaLeaves = 1 * numberOfcups;
    const sugar = 2 * numberOfcups ;

    console.log(`cups of chai: ${cups}`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves: ${tealeaves} teaspoons`);
    console.log(`Sugar: ${sugar} teaspoons`);

    if(prompt === "function"){
        const = prompt("Karibu! How many cups of Chai Bora would you like to make?");
        const cups = Number(input);
        console.log("Please enter a valid number of cups.")
    }

}
