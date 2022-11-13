import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BackToPortFolio from "../../components/backtoportfolio";

export default function Telegram() {
  return (
    <div>
      <BackToPortFolio link="/portfolio" text="" />

      <main className="p-8">
        <div className="grid lg:grid-cols-3">
          <div className="about col-start-1 lg:col-start-2">
            <p className="tg_content">
              I have been developing for the Telegram platform since 2017.
              Telegram is my favourite chat platform from a long time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <div className="telegram_card  ">
            <div className="telegram_titles">DHIVEHI SHOP</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>

            <p className="tg_problem">
              There is no notification system within Ibay to get new housing
              listings, while the real-estate industry is so competitive.
            </p>
            <p className="tg_solution">
              @dhivehishop lists all housing listings that fit into our criteria
              automatically after retrieving from ibay. Subscribers will recieve
              direct notifications if they have telegram notifications for the
              channel enabled.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">LeaveForever</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>

            <p className="tg_problem">
              The freedom of constantly joining and leaving without consequences
              is a feature of telegram but it is also a problem for admins.
            </p>

            <p className="tg_solution">
              The bot will ban anyone who leaves the chat making sure they
              cannot rejoin again without an admins permission.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">InviteRewardsBot</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>

            <p className="tg_problem">
              There is no incentive for users to invite new members to your
              channel or group. and telegram does not have a discovery option
              like facebook groups, discord community search, etc
            </p>
            <p className="tg_solution">
              The best people who can vouch for your community are the people
              who are already in it. This bot will reward users for inviting new
              members to your community.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">TokinTG / ShortsInTG</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_problem">
              Leaving from telegram to tiktok or youtube wastes a lot of time.
            </p>
            <p className="tg_solution">
              This bot will help you to watch tiktok and youtube videos directly
              from telegram.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">RadheefBot</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_content">
              This is a live inlinebot that you could use even now.
            </p>
            <p className="tg_content">
              Just type @RadheefBot in any chat and write a dhivehi word to get
              the related words from Radheef. When you click a result you will
              get the detailed meaning of the word.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">EngeyBot</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_content">
              This is an AI Based Bot made using OpenAI GPT-3
            </p>
            <p className="tg_content">
              You could ask it anything and it will try to answer you.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">YTBackups</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>
            <p className="tg_content">
              This is a tool made to download every video in a youtube channel
              and send them to Telegram as streamable media. The process takes a
              while and a Telegram useraccount is needed for this process.
            </p>
            <p className="tg_content">
              Check out @dhivehidharus a complete Backup of Dharus Library from
              youtube
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">Rust Stalk Bot</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_content">
              A bot to send you how many players are on a steam game server and
              their durations
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">Torrent Telegram Bot</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>
            <p className="tg_content">
              This bot generates the direct download link for a given torrent
              file when a magnet url is sent. It also has the ability to search
              for torrents.
            </p>
          </div>
        </div>
        {/* Fixed back button on bottom without icon*/}
      </main>
    </div>
  );
}
