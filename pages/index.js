import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Header from "../components/Header";
import HeroImg from "../public/images/home-page-hero.png";
import LoomLogo from "../public/images/loom.png";
import PixarLogo from "../public/images/pixar.png";
import IBMLogo from "../public/images/ibm.png";
import NikeLogo from "../public/images/nike.png";
import SpotifyLogo from "../public/images/spotify.png";
import SlackLogo from "../public/images/slack.png";
import SpotContextImg from "../public/images/spot-context.png";
import ContextTileImg from "../public/images/context-tile.png";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      {/* Hero */}

      <div className="pt-20">
        <div className="wrapper">
          <div className="text-center lg:text-left lg:py-20 grid grid-cols-2 gap-4">
            <Fade bottom distance="20px">
              <div className="w-full order-last col-span-2 lg:order-first lg:col-span-1 max-w-xs md:max-w-md xl:max-w-none mx-auto lg:mx-0">
                <h1>One workspace. Every team.</h1>
                <p className="mt-4 lg:max-w-md subheader">
                  We’re more than a doc. Or a table. Customize Notion to work
                  the way you do.
                </p>
                <button className="btn btn-lg btn-primary mt-6 mx-auto lg:mx-0">
                  Try Notion free
                </button>
                <div className="mt-10">
                  <span className="uppercase text-xs font-normal text-gray-400">
                    Trusted by teams at
                  </span>
                  <div className="flex space-x-5 mt-3 items-center">
                    <div className="logos-wrapper">
                      <Image src={LoomLogo} />
                    </div>
                    <div className="logos-wrapper">
                      <Image src={PixarLogo} />
                    </div>
                    <div className="logos-wrapper">
                      <Image src={IBMLogo} />
                    </div>
                    <div className="logos-wrapper">
                      <Image src={NikeLogo} />
                    </div>
                    <div className="logos-wrapper">
                      <Image src={SpotifyLogo} />
                    </div>
                    <div className="logos-wrapper">
                      <Image src={SlackLogo} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full col-span-2 max-w-xs md:max-w-lg lg:max-w-none lg:col-span-1 mx-auto items-center">
                <Image src={HeroImg} />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div id="context">
        <div className="wrapper pt-40">
          <div className="grid grid-cols-3 gap-10">
            <div className="flex items-center col-span-3 lg:col-span-1">
              <Fade left distance="20px">
                <div className="space-y-4  ">
                  <Image
                    className="object-contain"
                    width={80}
                    height={65}
                    src={SpotContextImg}
                  />
                  <h2>Never ask “What’s the context?” again</h2>
                  <p className="subheader">
                    Stale wikis aren't helpful. Neither are floating docs. In
                    Notion, your daily work and knowledge live side by side — so
                    you never lose context.
                  </p>
                </div>
              </Fade>
            </div>
            <Fade right distance="20px">
              <div className="col-span-3 lg:col-span-2">
                <Image className="rounded-xl" src={ContextTileImg} />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div>
        <div className="wrapper pt-40">
          <div className="grid grid-cols-3 gap-10">
            <div className="flex items-center col-span-3 lg:col-span-1">
              <Fade left distance="20px">
                <div className="space-y-4  ">
                  <Image
                    className="object-contain"
                    width={80}
                    height={65}
                    src={SpotContextImg}
                  />
                  <h2>Never ask “What’s the context?” again</h2>
                  <p className="subheader">
                    Stale wikis aren't helpful. Neither are floating docs. In
                    Notion, your daily work and knowledge live side by side — so
                    you never lose context.
                  </p>
                </div>
              </Fade>
            </div>
            <Fade right distance="20px">
              <div className="col-span-3 lg:col-span-2">
                <Image className="rounded-xl" src={ContextTileImg} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
