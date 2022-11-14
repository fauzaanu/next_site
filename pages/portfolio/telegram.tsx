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
            <p className="the_header">
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
            <p className="tg_problem">
              Saw that no one has made a radheefbot on telegram so i decided to
              make one as my very first inline bot.
            </p>
            <p className="tg_solution">
              @RadheefBot has a lot to improve and is opensource if anyone wants
              to contribute and make it better.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">EngeyBot</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_problem">
              GPT-3 was super interesting, @Engeybot is the interface used by me
              and my friends to play with GPT-3 from OpenAI.
            </p>
            <p className="tg_solution">
              It has been an absolute help when we need understand something
              without going back to google.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">YTBackups</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>
            <p className="tg_problem">
              Telegram somehow offers unlimited cloud storage for anything. The
              idea came from the fact that youtube can take down content that
              does not follow their guidelines. But telegram could be a backup
              for youtube videos while they are up (before they are taken down)
            </p>
            <p className="tg_solution">
              This tool is yet to be improved enough to be used by the public.
              But you can Check out @dhivehidharus a complete Backup of Dharus
              Library from youtube.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">Rust Stalk Bot</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>
            <p className="tg_problem">
              Steam requires you to join a gameserver to know how many players
              are playing as a general rule. (or join the game atleast)
            </p>
            <p className="tg_solution">
              My gaming tastes are a lot different from normal people who want
              to PVP all day. So I wrote this bot to find when the server is
              least active. You can see a demo of this on @rustmalaysia
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">Torrent Telegram Bot</div>
            <p className="tg_status">
              <span className="tg_inactive">Status: Inactive</span>
            </p>
            <p className="tg_problem">
              After making YTBackups it was a dream to make a torrent download +
              Backup via telegram. Had many challanges and it was not possible
              due to a lot of factors. But I ended up with this bot that
              generates a direct download link from a magnet URL
            </p>
            <p className="tg_solution">
              Eventhough it is not a complete solution, it is still a good
              solution for an active torrent user which I am not. So the bot is
              down as it requires some heavy maintenance.
            </p>
          </div>
        </div>
        {/* Fixed back button on bottom without icon*/}
      </main>
    </div>
  );
}
