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
    },

    fetchProducts: async () => {
        const res = await fetch("/api/products")
        const data = await res.json();
        set({products: data.data})
    },

    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE"
        });
        const data = await res.json();
        if(!data.success) return {success:false, message:data.message}

        set(state => ({products: state.products.filter(product => product._id !== pid)}))
    //without this fn UI state will not change after deleting a product(have to refresh the page)
    //But this line will update the UI state w/o refresh
        return {success:true, message:data.message}
// set(...)
// This is a function provided by Zustand to update the state.
// It takes a function as an argument, which receives the current state (state) and returns the new state.

// state => ({ ... })
// This is an arrow function that takes the current state and returns a new object with the updated state

// product._id !== pid
// For each product in the array, it checks whether its _id is not equal to the given pid.
// If it's not equal, the product is kept in the array.
// If it is equal, the product is removed.


    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await res.json();
        if(!data.success) return {success:false, message:data.message}

        set(state => ({
            products: state.products.map(product => 
                product._id === pid ? {...product, ...updatedProduct} : product
            )
        }))
        return {success:true, message:data.message}
    }
}))
//This is a global fn -> can be used in any other files
//Changes mad in any particular file will only render there not in other 
// files 

//It's like :
// const [product, setProduct] = usestate()
//but this is a local fn can only be used in a file


 