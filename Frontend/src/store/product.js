import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message:"Please fill in all fields"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products:[...state.products,data.data]}))
        //...state.products -prev data stored
        //data.data - set new data
        // data  -> backen-controller-createProduct - we are setting
        //new product data to data
            return {success:true, message:"Product created sucessfully"}
    }
}))
//This is a global fn -> can be used in any other files
//Changes mad in any particular file will only render there not in other 
// files 

//It's like :
// const [product, setProduct] = usestate()
//but this is a local fn can only be used in a file