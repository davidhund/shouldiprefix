---
title: multiple-backgrounds
url: multiple-backgrounds
prefixed: false
---

<article id="multiple-backgrounds" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>multiple-backgrounds</h2>
	</header>
	<p class="feature__description">
		Method of using multiple images as a background
	</p>
<pre class="feature__code"><code>
.example {
  background-color: #F00; /* Fallback */
  background-image: url(image1.png), url(image2.png);
  background-position: center bottom, left top;
  background-repeat: no-repeat;
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/multibackgrounds">Browser support</a> 
		<a href="http://html5please.com/#multiple backgrounds">Usage advice</a> 
		<a href="http://www.css3files.com/background">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
