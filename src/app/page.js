import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'הסיפור שלנו'}
          mainHeader={'קצת עלינו'}
        />
        <div className="mx-auto mt-3 flex flex-col gap-9 lg:flex-row :justify-between items-center">
          <div className="w-full lg:w-3/3 rounded-lg mb-4 lg:mb-0">
            <img
              src="/sol1.jpeg" // Adjust the path to your left image
              alt="Left Image"
              className="w-full rounded-lg mb-4 lg:mb-0"
            />
          </div>
          <div className="text-gray-700 text-lg max-w-md mx-auto mt-4 flex flex-col gap-4">
            <p>
              חנות "פיצה - כווורת" נוצרה למען נוחיות החיילים אשר משרתים בבסיס ורוצים להנות מאוכל חם וטעים
            </p>
            <p>אתר "פיצה כוורת" נועד כדי לקצר שעות המתנה ולייעל את מערך ההזמנות של אוכל בבסיס, בעזרת הזמנה מראש תוכל להנות מאוכל חם וטרי ישר אליך למשרד !</p>
            <p>בעזרת מערך המשלוחים המיוחד שלנו אנו יכולים להגיע לכלל רחבי הבסיס במהירות שיא כדי לספק שירות מהיר ויעיל</p>
          </div>
          <div className="w-full lg:w-3/3 rounded-lg mb-4 lg:mb-0">
            <img
              src="/sol1.jpeg" // Adjust the path to your left image
              alt="Left Image"
              className="w-full rounded-lg mb-4 lg:mb-0"
            />
          </div>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'! כל הקודם זוכה'}
          mainHeader={'!התקשרו עכשיו להזמנות!'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            054-926-5440
          </a>
        </div>
      </section>
    </>
  )
}
