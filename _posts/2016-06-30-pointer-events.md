---
title: pointer-events
url: pointer-events
prefixed: false
---

<article id="pointer-events" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>pointer-events</h2>
	</header>
	<p class="feature__description">
		This CSS property, when set to "none" allows elements to not receive hover/click events, instead the event will occur on anything behind it.
	</p>
<pre class="feature__code"><code>
/* Note: no IE (and old — pre WebKit — Opera) support */
.example {
  pointer-events: none;
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/pointer-events">Browser support</a> 
		<a href="http://html5please.com/#pointer events">Usage advice</a> 
		<a href="http://robertnyman.com/2010/03/22/css-pointer-events-to-allow-clicks-on-underlying-elements/">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
