import CategoryCard from "./categoryCard"


export default function Categories(){

    const data = [
        {
            name:"Laptops",
            image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531072_sd.jpg;maxHeight=140;maxWidth=140"
        },
        {
            name:"Phones",
            image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531072_sd.jpg;maxHeight=140;maxWidth=140"
        }
    ]

    return(
        <div className="flex w-full ">
            {data.map((item)=>{
                console.log("HERE IN ITEM", item)
                return(
                    <CategoryCard name = {item.name} image = {item.image}></CategoryCard>
                )
            })}
        </div>
    )
}
