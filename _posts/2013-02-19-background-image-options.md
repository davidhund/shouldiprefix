---
title: background-image-options
url: background-img-options
prefixed: false
---

<article id="background-image-options" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>background-image-options</h2>
	</header>
	<p class="feature__description">
		New properties to affect background images, including background-clip, background-origin and background-size
	</p>
<pre class="feature__code"><code>
.example {
  /* various options, see e.g. http://www.css3files.com/background */
  background: url(image1.png), url(image2.png), url(image3.png);
  background-clip: border-box;
  background-origin: padding-box;
  background-size: cover;
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/background-img-opts">Browser support</a> 
		<a href="http://html5please.com/#background-image options">Usage advice</a> 
		<a href="http://www.css3files.com/background">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
