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
        <div className="min-h-screen text-xl">
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

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:col-start-2 md:grid-cols-3">
              {/* smm  */}
              <div className="bg-red-500 p-10 rounded">
                <h2 className="font-bold font-mono mb-5">Social Media Ads</h2>

                <p className="text-white text-md text font-extralight font-mono text-opacity-40">
                  I create ads that help you understand the needs of your
                  customers.
                </p>
                <div className="col-start-1 md:col-start-2 m-5">
                  <Link href="portfolio/social-media-marketing">
                    <FolderButton name="D:\portfolio\sma\" />
                  </Link>
                </div>
              </div>

              {/* tg-new  */}
              <div className="bg-blue-500 p-10 rounded ">
                <h2 className="font-bold font-mono mb-5">Telegram Projects</h2>
                <div className="text-white text-md text font-extralight font-mono text-opacity-40">
                  <p className="">
                    Telegram Bots, Automated Channels, and more. . .
                  </p>
                </div>

                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/telegram">
                    <FolderButton name="D:\portfolio\tg\" />
                  </Link>
                </div>
              </div>

              {/* web-new  */}
              <div className="bg-purple-800 p-10 rounded  ">
                <h2 className="font-bold font-mono mb-5">Websites</h2>

                <p className="text-white text-md text font-extralight font-mono text-opacity-40 mt-3">
                  From setting up a wordpress site to building custom websites.
                </p>

                {/* websites  */}
                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/websites">
                    <FolderButton name="D:\portfolio\www\" />
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
