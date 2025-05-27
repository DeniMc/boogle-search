import React from 'react'

export const inspirations = [
  {
    image: "/images/dougal-1.jpeg", // or a URL
    quote: "We're all going to heaven, lads. Wahey!"
  },
  {
    image: "/images/dougal-2.jpeg",
    quote: "The whole Catholic thing is a bit of a puzzler isn't it?"
  },
  {
    image: "/images/dougal-3.jpeg",
    quote: "Well, Ted, like I said the last time: it won't happen again."
  },
  {
    image: "/images/dougal-4.jpeg",
    quote: "I’m no good at judging the size of crowds Ted, but I’d say there’s about seventeen million of them out there."
  },
    {
    image: "/images/dougal-5.jpeg",
    quote: "God Ted, I’ve heard about those cults. Everyone dressing in black and saying our Lord’s going to come back and judge us all."
  },
  {
    image: "/images/dougal-6.jpeg",
    quote: "I’m going mad, Ted"
  },
   {
    image: "/images/dougal-7.jpeg",
    quote: "I wouldn’t know Ted, ye big bollocks."
  },
   {
    image: "/images/dougal-8.jpeg",
    quote: "Call it female intuition, or whatever the male equivalent of female intuition would be"
  },
   {
    image: "/images/dougal-9.jpeg",
    quote: "That would be an ecumenical matter!"
  },
   {
    image: "/images/dougal-10.jpeg",
    quote: "Is there anything to be said for a nice cup of tea?"
  },
   {
    image: "/images/dougal-11.jpeg",
    quote: "Sorry Ted, I was concentrating too hard on looking holy"
  },
 
];

export function getRandomInspiration() {
  const index = Math.floor(Math.random() * inspirations.length);
  return inspirations[index];
}
