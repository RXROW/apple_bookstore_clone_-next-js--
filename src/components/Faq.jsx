import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const title = "Questions? Answers.";

const faqItems = [
  {
    title: "What is Apple Books?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
          Apple Books is a built-in app that lets you find, buy, listen to, and
          read audiobooks and ebooks all in one place. You can browse curated
          collections, top audiobooks, and top ebooks and even get personalized
          recommendations. If you can’t find the app on your device, use the
          search function or look for Apple Books in the App Store.
        </p>
      </>
    ),
  },
  {
    title: "How much does Apple Books cost?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
          The Apple Books app is free and there is no subscription. Audiobooks
          and ebooks are priced individually, and thousands of free audiobooks
          and ebooks are available. You can also sample audiobooks and ebooks
          for free while you browse.
        </p>
      </>
    ),
  },
  {
    title: "Can I play audiobooks on my devices?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
          Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch,
          Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth
          speaker from your iPhone.
        </p>
      </>
    ),
  },
  {
    title: "Can I pre-order an audiobook or ebook?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
          Yes. Apple Books makes it easy to find the most anticipated audiobooks
          and ebooks. Search for the title and select the Pre-Order button to
          confirm the purchase. The title will be added to your library
          automatically once it is available. To preview upcoming releases, look
          for the Coming Soon section in the app.
        </p>
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>

        <Accordion collapseAll className="  border-none">
          {faqItems.map((item, index) => (
            <AccordionPanel key={index}>
              <AccordionTitle className=" text-xl sm:text-2xl text-black ">{item.title}</AccordionTitle>
              <AccordionContent className="  text-gray-700">{item.content}</AccordionContent>
            </AccordionPanel>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
