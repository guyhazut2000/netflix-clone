import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Row from "@/components/Row";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Row />
    </div>
  );
}
