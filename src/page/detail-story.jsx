import React from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import Navbar from "../components/navbar";
// import { div } from "framer-motion/client";

export default function StoryDetail() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-purple-800">
          The Bundle Of Sticks Short Story & Audiobook
        </h1>
        <p className="text-gray-600">
          A father has three sons who simply won’t stop fighting, so he comes up
          with a calming lesson. And that lesson involves a bundle of sticks.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <audio controls className="w-full max-w-md">
            <source src="/audio/the-bundle-of-sticks.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <img
            src="/images/the-bundle-of-sticks-cover.png"
            alt="The Bundle of Sticks"
            className="w-28 h-auto rounded shadow-lg hidden md:block"
          />
        </div>
      </header>

      <article className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          The Bundle Of Sticks
        </h2>
        <p>
          Once upon a time there was a dad who had a family that was just three
          sons and one single daughter. Those sons were really irritating and
          noisy, too.
        </p>
        <p>
          They were always quarreling and fighting and getting annoyed amongst
          themselves and it gave the poor old dad a real headache.
        </p>
        <p>
          Nothing he could say or do would make them stop, so he thought and
          thought about some kind of lesson that he might be able to teach them.
        </p>
        <img
          src="/images/fighting-sons.png"
          alt="Sons fighting"
          className="w-full rounded-lg shadow-md"
        />
        <p>
          One day the quarreling and fighting got so annoying he went to the
          garden and picked up some sticks and made them into one great big
          bundle and tied them all together.
        </p>
        <p>
          He handed them to the boys. He gave the entire bundle to his oldest
          son and said, “Try to break this.”
        </p>
        <p>
          His oldest son tried and twisted and couldn’t do it. Then, he said,
          “See? If you can break it…”
        </p>
        <img
          src="/images/breaking-sticks.png"
          alt="Trying to break sticks"
          className="w-full rounded-lg shadow-md"
        />
        <p>“Easy,” said one son and snapped the single in half.</p>
        <p>
          “Now see if it’s easier,” said the man, as he handed a single stick to
          him.
        </p>
        <p>
          Then he did the same to the other two sons and gave them one each on
          the other end and asked them to try to break it.
        </p>
        <p>
          They tried everything they could and handed the bundle over their
          head, stomped on it, twisted it and hit with their hands, and even
          pulled and pulled but it didn’t break.
        </p>
        <img
          src="/images/sons-trying-to-break-bundle.png"
          alt="Sons trying together"
          className="w-full rounded-lg shadow-md"
        />
      </article>
    </div>
  );
}
