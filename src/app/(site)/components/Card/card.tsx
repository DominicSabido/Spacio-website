import Image from "next/image";

const Card = () => {
  return (
    <>
    <section className="text-stone-900 flex flex-col items-center">
    <div className="border border-stone-900 rounded-xl inline-block p-4 m-4">
      <div className="relative w-[300px] h-[300px]">
      <Image src="/Room1.jpg" alt="Room 1 Image" fill className="object-cover rounded-xl" />
      </div>
      <h2 className="text-xl font-semibold">Deluxe Double</h2>
      <p className="text-stone-700">Hillside Casita</p>
      
    </div>
    </section>
    </>
  );
};

export default Card;
