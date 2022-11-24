import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BackToPortFolio from "../../components/backtoportfolio";

export default function Telegram() {
  return (
    <div>
      <BackToPortFolio link="/portfolio" text="" />

      <main className="p-8 h-screen">
        <div className="grid lg:grid-cols-3">
          <div className="about col-start-1 lg:col-start-2">
            <p className="the_header">
              Making websites are always fun. I have been developing websites
              since I first got to play with HTML in 2011.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="telegram_card  ">
            <div className="telegram_titles">dhivehi.shop</div>
            <p className="tg_status">
              <span className="tg_active">Status: Active</span>
            </p>

            <p className="tg_problem">
              A front page for @dhivehishop telegram channel.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">wyndomv.com</div>
            <p className="tg_status">
              <span className="tg_active">Status: active</span>
            </p>

            <p className="tg_problem">
              A normal ecommerce setup for a local online business.
            </p>

            <p className="tg_solution">
              This website features a telegram alert system for new orders. and
              a mobile login system for placing orders. That way every order is
              assosiated with a phone number which we can contact the verified
              customer.
            </p>
          </div>

          <div className="telegram_card">
            <div className="telegram_titles">homeambition.net</div>
            <p className="tg_status">
              <span className="tg_inactive">
                Status: Temporary Idle Business
              </span>
            </p>

            <p className="tg_problem">
              This was a website made for an online business who ran preorders
              for furniture sets.The business have been inactive for a while,
              which is why it looks a little empty but they would be starting
              off soon again.
            </p>
            <p className="tg_solution">
              The website features a PWA and an installable and publishable
              Android Application
            </p>
          </div>
        </div>
        {/* Fixed back button on bottom without icon*/}
      </main>
    </div>
  );
}
