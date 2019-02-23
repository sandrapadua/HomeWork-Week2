class ShoppingCart{
    constructor() {
        this.item = []
      }

    
        addItem(itemName, quantity, price) {


            const itemsList = {
                name :itemName,
                quantity : quantity,
                pricePerUnit : price
            }
            return this.item.push(itemsList)

        }
            getItems() {
                return this.item
            }
            clear(){
                this.item =[]
            } 
            total(){

 const priceOfEachItem = this.getItems().map((eachItem) => {
return eachItem.quantity * eachItem.pricePerUnit
})
const totalPrice = priceOfEachItem.reduce((accumulator,currentValue) => {
return accumulator+currentValue
},0)

return totalPrice   
            } 

}

const cart = new ShoppingCart()





module.exports = ShoppingCart