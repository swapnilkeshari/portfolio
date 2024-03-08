import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const ek_kahani = () => {
return (
  <>
    <Head>
      <title>Poe|Swapnil_Keshari</title>
      <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
      creating innovative solutions. Discover tips for building a developer portfolio and insights on 
      full-stack development, front-end development, and back-end development." />
    </Head>
    <TransitionEffect />
    <main
      className={`flex  w-full flex-col items-center justify-center dark:text-light`}
    >
      <Layout className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
          md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              BIOGRAPHY
            </h2>
            <p className="font-medium ">
              Hi, I&apos;m <strong>CodeBucks</strong>, a web developer and
              UI/UX designer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 4 years
              of experience in the field. I am always looking for new and
              innovative ways to bring my clients&apos; visions to life.
            </p>
            <p className="my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating
              intuitive, enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look
              forward to the opportunity to bring my skills and passion to
              your next project.
            </p>
          </div>
          <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
          bg-light p-8 dark:border-light dark:bg-dark
          xl:col-span-4 md:col-span-8 md:order-1
          ">
            <div
              className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
              bg-dark
      dark:bg-light  "
            />
          </div>
        </div>
      </Layout>
    </main>
  </>
);
}
export default ek_kahani;

// Ek Kahani

// Bageeche mein baitha hun, uss sundar gulab ke pass.
// Mehekta sa wo, kushnuma uska ahsaas.
// Bitaye kitne pal, likhe uspe kitne alfaaz;
// Banayi anginat yaadein, bataye dil ke raaz.

// Dheeme dheeme hawa ne rukh moda, 
// Badhti kareebi jan, gulab ne saath chhoda.
// Murjha jayega wo, tod jo le jaunga usko
// Murjha jaunga main, chhod jo chale jaunga usko

// Isii kashmakash mein sandhya hui,
// Ujli anischita ki har seema hui. 
// Ab tu hi bata ae sooraj karu main kya,
// Ye Jo karta tu ishara ki, 
// waqt beete jaa raha...