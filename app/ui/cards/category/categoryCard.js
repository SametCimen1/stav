
import Image from "next/image";

export default function CategoryCard({name, image}){
    return(
        <div className="mx-5 min-w-24 w-1/5 p-5 bg-gray-100 rounded-full text-center"> 
            <Image className="mx-auto mb-1" src = {image} width={200} height={100}></Image>
            <span className="">{name}</span>
        </div>
    )
}