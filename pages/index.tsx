import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <main className="telegram">
        <div className="p-10 min-h-screen text-xl">
          <div className="text-white col-start-2 space-y-4">
            <div className="grid lg:grid-cols-3">
              <div className="about col-start-2">
                <p>I&apos;m Fauzaan.</p>
                <p>
                  I create Telegram bots, Automation Scripts, Websites, Apps,
                  Social Meda Ads and much more.
                </p>
                <p>
                  If you want to work together on a project, or just have a chat
                  feel free to . . .
                </p>
                {/* Lets place some really awersome buttons */}
                <div className="flex flex-row space-x-4">
                  <button className="contact_button">
                    <a href="tg://resolve?domain=fauzaanu">GET IN TOUCH</a>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation buttons for portfolio blog and Skills */}

            <div className="grid grid-cols-3 gap-4">
              <Link
                href="/portfolio"
                className="portfolio_buttons lg:col-span-1 lg:col-start-2 text-center "
              >
                <button className="">Portfolio</button>
              </Link>
              <Link
                href="/blog"
                className="portfolio_buttons lg:col-span-1 lg:col-start-2 text-center"
              >
                <button>Blog</button>
              </Link>
              <Link
                href="/skills"
                className="portfolio_buttons lg:col-span-1 lg:col-start-2  text-center"
              >
                <button>Skills</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
