import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FolderButton from "../../components/folders";
import BackToPortFolio from "../../components/backtoportfolio";

export default function SMM() {
  return (
    <div>
      <Head>
        <title>fauzaanu.com | Design - Code - Automation</title>
        <meta
          name="description"
          content="I'm Fauzaan. A designer and developer focused on Automation, Marketing, and Creating Innovative Experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackToPortFolio link="/" text="" />
      <main>
        <div className="p-10 min-h-screen text-xl">
          <div className="text-white col-start-2 space-y-4">
            {/* cat for better viewing  */}
            <div className="grid lg:grid-cols-3">
              <div className="about col-start-1 lg:col-start-2">
                <p>
                  I work on a variety of different projects that span in between
                  design and code.
                </p>
              </div>
            </div>
            {/* Navigation buttons for portfolio blog and Skills */}

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:col-start-2">
              {/* smm  */}
              <div className="bg-red-500 p-5 rounded lg:col-span-3">
                <h2 className="font-bold font-mono mb-5">Social Media Ads</h2>

                <p className="text-white text-md text font-extralight font-mono text-opacity-40">
                  I create ads that help you understand the needs of your
                  customers.
                </p>
                <div className="col-start-1 md:col-start-2 m-5">
                  <Link href="portfolio/social-media-marketing">
                    <FolderButton name="D:\portfolio\SMA\" />
                  </Link>
                </div>
              </div>

              {/* tg-new  */}
              <div className="bg-blue-500 p-5 rounded lg:col-span-3">
                <h2 className="font-bold font-mono mb-5">Telegram Projects</h2>
                <div className="text-white text-md text font-extralight font-mono text-opacity-40">
                  <code className="italic opacity-50 blur-[1px]">
                    Can Viber do that? Can WhatsApp do that? Can Telegram do
                    that?
                  </code>
                  <p className="">
                    Actually, Telegram Probably can execute your crazy Bot idea,
                    such as downloading an entire youtube channel to a telegram
                    channel: which I have done here&nbsp;
                    <a
                      href="https://t.me/dhivehidharus"
                      className="underline text-black"
                    >
                      @dhivehidharus
                    </a>
                  </p>
                </div>

                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/telegram">
                    <FolderButton name="D:\portfolio\Telegram-Projects\" />
                  </Link>
                </div>
              </div>

              {/* web-new  */}
              <div className="bg-purple-800 p-5 rounded lg:col-span-3 ">
                <h2 className="font-bold font-mono mb-5">Websites</h2>

                <p className="text-white text-md text font-extralight font-mono text-opacity-40 mt-3">
                  Making a functional website is not expensive. However making a
                  custom design specefic to your brand takes research, time and
                  effort. I can provide you either of these depending on your
                  budget.
                </p>

                {/* websites  */}
                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/websites">
                    <FolderButton name="D:\portfolio\Websites\" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
