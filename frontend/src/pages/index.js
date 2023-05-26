import Head from "next/head";
import HouseThumb from "@/assets/HouseThumb.png";
import Banner from "@/components/banner";
import Intro from "@/components/intro";
import Property from "@/components/property";
import WhyChoose from "@/components/whyChoose";
import About from "@/components/about";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Counter from "@/components/counter";
import Neighborhoods from "@/components/neighborhoods";
import Brands from "@/components/brands";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProperLand</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Banner
          agency="Real Estate Agency"
          title="Find the perfect place to Live with your family"
          image={HouseThumb}
          description="Distinctively re-engineer revolutionary meta-services and
          premium architectures. Intrinsically incubate."
          button="Explore Property"
          key={Math.random()}
        />
        <Intro />
        <Property />
        <WhyChoose />
        <About />
        <Service />
        <Testimonial />
        <Counter />
        <Neighborhoods />
        <Brands />
      </>
    </>
  );
}
