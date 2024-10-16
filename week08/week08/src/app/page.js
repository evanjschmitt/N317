import Image from "next/image";
import pageStyles from "./page.module.css";
import ShowcaseImage from "@/components/showcaseImg";

export default function Home() {
  return (
    <main>
      <h1>Goofy Axolotls</h1>
      <section className={pageStyles.showcaseImages}>
        <ShowcaseImage title='Look At This Lil Guy' desc='How Cute!'/>
        <ShowcaseImage title='Axolotl 2' desc='it works!'/>
        <ShowcaseImage title='Axolotl 3' desc='SO COOL :D'/>
        
      </section>
    </main>
  );
}
