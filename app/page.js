
import Hero from "@/section/Hero";
import Review from "@/section/review";
import Service from "@/section/Service";
import Product from "@/section/produk";
import Gallery from "@/section/Gallery";
import Contact from "@/section/Contact";
import Navbar from "@/components/navbar";
import About from "@/section/About";

export default function HomePage (){
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Service />
                <Product />
                <Review />
                <Gallery />
                <Contact />
                <About />
            </main>
        </>
    )
}