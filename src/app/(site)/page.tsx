import Image from "next/image";
import BookingWidget from "./components/BookingWidget/bookingWidget";
import Card from "./components/Card/card";

export default function Home() {
  return (
    <>
    <section className="w-full min-h-screen mx-auto bg-[url('/bonfire_spacio.jpg')] bg-cover bg-center">
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Welcome to Spacio</h1>
        <p className="text-2xl mt-5">Experience luxury and comfort in every stay. Where exceptional service meets timeless elegance.</p>
        <BookingWidget />
      </div>
    </section>

    <div className="flex flex-wrap justify-center ">
        <Card/>
        <Card/>
        <Card/>
      </div>
      </>
  );
}
