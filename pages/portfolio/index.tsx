import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FolderButton from "../../components/folders";
import BackToPortFolio from "../../components/backtoportfolio";
import { useSpring, animated } from "react-spring";

export default function SMM() {
  const { x, y } = useSpring({ x: 0, y: 0 });
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

      <main>
        <BackToPortFolio link="/" text="" />
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

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {/* smm  */}
              <div className="bg-red-500 p-5 rounded">
                <h2 className="font-bold font-mono mb-5">
                  Social Media Marketing
                </h2>
                <p className="text-white text-md text font-extralight font-mono text-opacity-40">
                  The thing about social media marketing is that it&apos;s all
                  about creating a relationship with your customers. It&apos;s
                  not about selling them things, it&apos;s about engaging with
                  them and providing value.
                </p>
                <div className="col-start-1 md:col-start-2 m-5">
                  <Link href="portfolio/social-media-marketing">
                    <FolderButton name="Social Media Marketing" />
                  </Link>
                </div>
              </div>

              {/* tg-new  */}
              <div className="bg-blue-500 p-5 rounded">
                <h2 className="font-bold font-mono mb-5">Telegram Projects</h2>
                <p className="text-white text-md text font-extralight font-mono text-opacity-40">
                  Can Viber do that? Can WhatsApp do that? Can Telegram do that?
                  Telegram Probably can execute your crazy Bot idea.
                </p>
                {/* telegram  */}
                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/telegram">
                    <FolderButton name="Telegram Projects" />
                  </Link>
                </div>
              </div>

              {/* web-new  */}
              <div className="bg-purple-800 p-5 rounded">
                <h2 className="font-bold font-mono mb-5">Websites</h2>
                <p className="text-white text-md text font-extralight font-mono text-opacity-40">
                  I build internet real-estate. A website gives you full control
                  over visual communication without the limitations of social
                  media.
                </p>

                <p className="text-white text-md text font-extralight font-mono mt-5 text-opacity-40">
                  It is your connection to the world and a valuable asset.
                  Website culture is steadily growing in the Maldives and you
                  should be in on it too.
                </p>
                {/* websites  */}
                <div className="md:col-start-2 m-5">
                  <Link href="portfolio/websites">
                    <FolderButton name="Websites" />
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
