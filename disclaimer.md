---
layout: default
title: Disclaimer
pagetitle: Think for yourself
description: One should decide for oneself what new CSS features to prefix
---

# [What CSS to prefix?](/)

## '{{page.title}}'

The advice on this little one-pager here will be wrong. It will contain (syntax) errors and will be outdated sometimes. I _hope_ to avoid this as much as possible and I'll _try_ to keep the information correct and up-to-date but I will not manage to do this 100%. This is why I need your [help](https://github.com/davidhund/shouldiprefix/). I also need you to think for yourself (see under 'Opinionated').

There are so many super-valuable resources online! Things like [CSS3 Please](http://css3please.com/), [can I use](http://caniuse.com) and [HTML5 Please](http://html5please.com). But these also will be outdated and incorrect at times. For this reason I decided to focus this page on a _tiny subset_ of stuff: prefixes for newer CSS features.

### Autoprefixer

You should definitely take a look at [Autoprefixer](https://github.com/postcss/autoprefixer): it parses your CSS and adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/). Like Magic!

If you are looking for _cross browser CSS3 rules_ you should probably take a look at [CSS3 Please](http://css3please.com/), this page simply attempts to list the prefixes (if any) for newer CSS features in modern browser.

## Opinionated

Obviously, _to prefix or not to prefix_ is **your own responsability**. You _should_ take the visitors of _your_ site into account. The stats that matter are those of _your_ site.

I have chosen to take a 'progressive' approach: when a browser 'three versions back' still requires a prefix I will include it. If it is older I exclude that prefix.

With Opera adopting the WebKit rendering engine I have/will exclude `-o-` from these examples. The one exception, at the moment, is `-o-text-overflow` for Opera Mini.

## Just use XYZ!

Yes, I know jQuery can probably handle your prefix-needs ;) But I've found that even really cool tools such as [Compass](http://compass-style.org/) and [Bourbon](https://github.com/thoughtbot/bourbon) and [Prefixfree](http://lea.verou.me/prefixfree/) etc. are sometimes out-of-date. And some of us maintain our own mixin libraries or do not want to rely on Javascript.

## Why do you hate crossbrowser CSS (IE)!?

I don't. Actually: Internet Explorer 11 is pretty neat. IE10+ is the only browser to support CSS3 Grid Layout. But: **this site does not aim to provide _cross-browser_ CSS** It's goal is to clarify which properties (still) need prefixing. It is up to you to look for (IE) work arounds like `filter` and `SVG` stuff etc.

## This page does not deal with all CSS features!

But lists _newer_ CSS stuff — and their prefixes — that will be most difficult to keep up with.

## It does not matter to have unneeded prefixes in my CSS!

Correct. It matters little. Now. If it does not matter to you just chuck 'em all in and have the next front-end developer figure out what part of your CSS is still relevant. Kindly dismiss this site and have a good laugh about it. It has given me a little evening project ;)

## Prefixes suck!

Sure. That's like 'your opinion' :) Whatever. Dealing with prefixes is still a reality for every front-end developer.

## Feedback?

Thanks! If you have any thoughts or just want to say this is a nice (or lame) idea, holla [@valuedstandards](http://twitter.com/valuedstandards) — [Go back to the list](/)
