import Header from "./ui/Header";
import Categories from "./ui/cards/category/category";


export default function Home() {
  
  return (
    <main className="">
      <header>
        <Header> </Header>
      </header>

      <section className="w-full lg:w-4/5 m-auto mt-10">
        <h2 className="font-bold text-xl">Categories</h2>
        <div className="mt-2 m-auto">
          <Categories></Categories>
        </div>
      </section>


      <section className="mt-10 w-full lg:w-4/5 m-auto">
        <h2 className="font-bold text-xl">Most Viewed</h2>

        <div>

        </div>
      </section>
    
    </main>
  );
}
