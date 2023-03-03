//Define the available pack sizes and their respective widget quantities.
//Accept the user's order size as input. 
//Determine if the order can be fulfilled with a single package (smallest possible)
//If not, check if the order can be fulfilled with the next size of pack.
//After, check what is the remaining amount and find which pack it can be fitted, when found, add said pack to the order status and repeat the operation same operation if there still units remaining
//Output the recommended pack sizes and their quantities to fulfill the order size.

const packSizes = [250, 500, 1000, 2000, 5000];

const order = (numOfWidgets) => {
    
    for(let i = 0; i < packSizes.length; i++){
        let ref = i + 1
        if(numOfWidgets <= packSizes[i]){
            console.log("Pack size: " + packSizes[i]);
        }else if (numOfWidgets <= (packSizes[i] + packSizes[ref])){
            console.log(`Pack size:  ${packSizes[i]} , ${packSizes[ref]}`);
            break;
        }
    }
    console.log("Order function executed.");
}

order(900);