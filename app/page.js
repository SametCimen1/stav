import Image from "next/image";
import CategoryCard from "./ui/cards/categoryCard";

export default function Home() {
  const arr = ['laptop', 'computers', 'phone'];
  return (
    <main className="">
      {arr.map(() => {
        return(<CategoryCard></CategoryCard>)
      })}
    </main>
  );
}
