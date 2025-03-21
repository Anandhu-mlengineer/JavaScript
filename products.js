
const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let product = [];
let new_prod = {}
function mainmenu(){
    console.log("\n 1. Addproduct");
    console.log("2. Update Product");
    console.log("3. Delete product");
    console.log("4. List Product");
    rl.question("What do you want to do", handleoption );

}
function handleoption(option){
    switch (option){
        case "1":
            addproduct();
            break;
        case "2":
            viewProduct();
            break;
        case "3":
            deleteProduct();
            break;
        
        case "4":
            console.log("We are exiting");
            rl.close();
            break;
        default:
            console.log("Invalid Responce");

    }
}
function addproduct(){
    //let new_prod = {}
    rl.question("enter your product name: ", (product_name) => {new_prod.product_name=product_name;
        rl.question("Enter your product id: ", (product_id) => {new_prod.product_id=product_id;
            rl.question("Enter your product quantity: ", (quantity) =>{new_prod.quantity = Number(quantity);
                rl.question("Enter the price of the product: ",(price) => {new_prod.price = Number(price);
                    product.push(new_prod);
                    console.log("Products updated sucesfully");
                    mainmenu();

                });
            });
        });
    });


}
function viewProduct(){
    product.forEach((prod) => {
        console.log(`id : ${new_prod.product_id} , Name: ${new_prod.product_name}, quantity: ${new_prod.quantity}, price: ${new_prod.price} `);
    });

    mainmenu()
    
}

mainmenu();
