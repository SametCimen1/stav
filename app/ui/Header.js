
export default function Header(){
    return(
        <div className="w-full lg:w-4/5 m-auto flex justify-between mt-2">
            <section className="w-1/4 ">
                <span className="font-black text-3xl italic">Stav</span>
            </section>
            
            <section className=" w-1/2 flex justify-center">
                <nav>
                    <ul className="flex text-slate-600">
                        <li className="p-1 hover:cursor-pointer mx-1">Computers</li>
                        <li className="p-1 hover:cursor-pointer mx-1">Books</li>
                        <li className="p-1 hover:cursor-pointer mx-1">Phones</li>
                    </ul>
                </nav>
            </section>


            <section className="w-1/4 flex justify-center">
                <nav>
                    <ul className="flex">
                        <li className="p-1">Help</li>
                        <li className="p-1">Cart</li>
                        <li className="p-1">Login</li>
                    </ul>
                </nav>
            </section>


        </div>
        
    )
}