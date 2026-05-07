import { Navbar } from "./navbar";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-[url('/images/phone-background.png')] md:bg-[url('/images/background.png')]"
    >
      <div className="px-[10%] py-4">
        <Navbar />
        <div className="mt-[60vh] md:mt-[20%] text-xl md:text-[30px]">
          <p className="text-foreground">Web Developer</p>
          <h1 className="text-3xl md:text-6xl font-semibold mt-5 text-foreground">
            Hi, I&apos;m <span className="text-primary">Allen,</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
