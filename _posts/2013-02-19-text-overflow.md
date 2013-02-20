---
title: text-overflow
url: text-overflow
prefixed: true
---

<article id="text-overflow" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>text-overflow</h2>
	</header>
	<p class="feature__description">
		Append ellipsis when text overflows its containing element
	</p>
<pre class="feature__code"><code>
.example {
  -o-text-overflow: ellipsis; /* Only for current Opera Mini */
     text-overflow: ellipsis;
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/text-overflow">Browser support</a> 
		<a href="http://html5please.com/#text-overflow">Usage advice</a> 
		<a href="https://developer.mozilla.org/en-US/docs/CSS/text-overflow">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
