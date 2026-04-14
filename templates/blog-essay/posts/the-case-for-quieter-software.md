---
title: "The case for quieter software"
description: "An argument for tools that stop competing for your attention — and the slow work of building them when every product incentive points the other way."
date: "2026-04-12"
author: "Wren Holloway"
readTime: "24 min"
category: "Essay"
tags: ["software", "craft"]
kind: "essay"
---

There is, somewhere near the middle of any long project, a week where you notice that the tool you have been building no longer behaves like a thing you are making — it behaves like a small city you live in. The streets are yours; the noise is yours. You begin to ask what kind of city you want to live in, and whether the decisions you made a year ago, when it was still a sketch, would be the same ones you would make today.

This essay is about that noticing. It is not a manifesto. It is a letter I have been writing to myself, on and off, for most of the last decade, and which, after a conversation over coffee at a mill in Évora, I finally decided to finish.

## I

The phrase &ldquo;quiet software&rdquo; is not mine. I heard it first from an engineer who worked at a company I will not name, who used it to describe the few tools in her life whose default state was waiting for her. Her calendar did not wait; it pinged. Her email did not wait; it pinged. Her text editor waited. Her notes waited. The tools she loved were the ones that behaved, she said, like a piece of paper on a desk.

I wrote the phrase down in a small notebook. I did not think much about it that year. It stayed with me through two subsequent years of building a different tool, which, at the end of those two years, I realised was not quiet at all.

## II

The default for software in 2026 is loud. Notifications are on by default. Email digests arrive at a cadence no human asked for. &ldquo;Engagement&rdquo; is the word we use to describe the sound of an application knocking on a person&rsquo;s door. The industry measures itself in knocks.

None of this is new. The argument against noisy software was already well-rehearsed in 2018, when I first tried to write it. The argument has, if anything, grown weaker in the intervening years — not because it is less correct but because the counter-gravity has grown stronger. The economic model of attention-economy companies depends on the knock.

## III

A tool I maintain has, from the start, no default notifications. When you install it, nothing pings. If you want a ping, you opt in, and you opt in per-channel. The opt-in flow is not hidden. It is not buried behind a modal. It is not interrupted by a tour. Most users, I have learned, never turn on a single notification.

This is not a growth hack. It is a design choice that costs us, in measurable ways, the volume of &ldquo;active&rdquo; users we could have.

What it gains us, in return, is trust. The users we do have stay. They recommend the tool to other quiet people. The funnel is thinner at the top. It is wider at the bottom, where people renew, year on year, without thinking.

## IV

Building quiet software is not a marketing stance. It is a commitment that disciplines every decision. Here are four rules we have, written down once, never re-written:

- **No notifications by default.** The user earns the right to interrupt themselves.
- **No growth theatre.** No &ldquo;others are looking at this right now,&rdquo; no artificial scarcity, no fake activity.
- **No dark patterns.** The cancel button is the same size as the subscribe button. The cancel flow is one click. The refund flow is one email.
- **Write to the reader.** The help text is for a human, not an engine.

None of these rules pays off in the first quarter. All of them pay off in the fifth year.

## V

The hardest part of building quiet software is not resisting the loud patterns. It is resisting the slightly-loud patterns — the pattern that is 5% noisier than the last version, 2% more insistent, 3% more &ldquo;helpful.&rdquo; Each increment is defensible. The sum, across three years, is a different tool.

The antidote, I have found, is to sit with the product without using it for a week, then open it again, cold, and read every piece of copy as a stranger. Ten percent of it will feel loud. Delete that ten percent. Wait a month. Repeat.

This is not a product roadmap. It is a gardener&rsquo;s habit. I am not sure there is another.

## VI

When the industry&rsquo;s next quarterly review arrives — and it is always arriving — the company that ships the louder feature will win the line item. The company that deletes the louder feature will win the decade.

That is a long time. Most of us are not building for the decade.

Most of us, in quiet moments, wish we were.
