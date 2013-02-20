---
title: media-queries
url: media-queries
prefixed: false
---

<article id="media-queries" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>media-queries</h2>
	</header>
	<p class="feature__description">
		Method of applying styles based on media information. Includes things like page and device dimensions
	</p>
<pre class="feature__code"><code>
  /*
  Wide support except for < IE9
  - Make sure to (almost always) build 'mobile first': http://vlst.nl/x/e3
  - Build _logical_ minor/major breakpoints, not 'device width' breakpoints 
  - Make sure to think about using EM's: http://vlst.nl/x/e4
  */
  @media all and (min-width: 35em) {
    ...
  }
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/css-mediaqueries">Browser support</a> 
		<a href="http://html5please.com/#media queries">Usage advice</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
