import userModel from "../models/userModel.js"

// Add items to user Cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added to Cart"})
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


// Remove items from user Cart
const removeFromCart = async (req,res) => {

}


// Fetch user Cart data
const getCart = async (req,res) => {

}


export {addToCart,removeFromCart,getCart}
