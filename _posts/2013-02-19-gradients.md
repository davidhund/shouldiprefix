---
title: gradients
url: gradients
prefixed: true
---

<article id="gradients" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>gradients</h2>
	</header>
	<p class="feature__description">
		Method of defining a linear or radial color gradient as a CSS image.
	</p>
<pre class="feature__code"><code>
	.example {
	  background: -webkit-linear-gradient(top,       #333 0%,#EEE 100%);
	  background:    -moz-linear-gradient(top,       #333 0%,#EEE 100%);
	  background:      -o-linear-gradient(top,       #333 0%,#EEE 100%);
	  background:         linear-gradient(to bottom, #333 0%,#EEE 100%);
	}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/gradients">Browser support</a> 
		<a href="http://html5please.com/#gradients">Usage advice</a> 
		<a href="http://www.css3files.com/gradients">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
