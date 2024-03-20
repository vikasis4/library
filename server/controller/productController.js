const Product=require("../model/productModel") 
exports.createProduct=async(req,res)=>{
    try {
        const product=await Product.create(req.body)
        res.status(200).json({
            sucess:"true",
        })
    } catch (error) {
        res.status(4000).json({
            sucess:"false"
        })
    }

}
//get all vendor products
exports.getvendorproducts=async(req,res)=>{
    const email=req.body.email;
    try {
        const products=Product.find({email})
        res.status(200).json({
            sucess:"true",
            products
        })
    } catch (error) {
        res.status(400).json({
            sucess:"false"
        })
    }
}
//edit product
exports.editproduct=async(req,res)=>{
    const {id}=req.body
    try {
        const product=Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
      
          // Update the status field
          product.status = status;
      
          // Save the changes to the database
          await product.save();
          res.status(200).json({
            sucess:"true",
            product
          })
    } catch (error) {
        res.status(400).json({
            sucess:"ISE"
        })
    }
}
//delete product
exports.deleteproduct=async(req,res)=>{
    const {id}=req.body;
    try {
        // Find the product by ID and delete it
        const product = await Product.findByIdAndDelete(productId);
    
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json({ sucess:"true", product });
      } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

