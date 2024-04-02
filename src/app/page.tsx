import Button from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center p-5 mt-36 gap-5">
        <h1 className="text-6xl font-bold text-center max-w-lg leading-tight">We make crypto clear and simple</h1>
        <p className="max-w-2xl text-[#898CA9] text-center">Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</p>
        <Button>
          Get Started
        </Button>
      </section>
    </main >
  );
}
