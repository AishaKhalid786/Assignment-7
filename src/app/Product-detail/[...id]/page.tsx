"use client"

const Products =({params}:{params:{id:string}})=>{
    console.log (params)
    return (
        <div>
            <h1>Product-Deatils</h1>
            <h2>name:{params.id}</h2>
            <p>title:{params.id}</p>
            <p>description:{params.id}</p>
        </div>
    );
};

export default Products