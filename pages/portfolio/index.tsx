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
              <div className="col-start-1 md:col-start-2">
                <Link href="portfolio/social-media-marketing">
                  <FolderButton name="Social Media Marketing" />
                </Link>
              </div>

              {/* telegram  */}
              <div className="md:col-start-2">
                <Link href="portfolio/telegram">
                  <FolderButton name="Telegram Projects" />
                </Link>
              </div>

              {/* websites  */}
              <div className="md:col-start-2">
                <Link href="portfolio/websites">
                  <FolderButton name="Websites" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
