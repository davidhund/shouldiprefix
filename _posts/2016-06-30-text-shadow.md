---
title: text-shadow
url: text-shadow
prefixed: false
---

<article id="text-shadow" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>text-shadow</h2>
	</header>
	<p class="feature__description">
		Method of applying one or more shadow or blur effects to text
	</p>
<pre class="feature__code"><code>
.example {
  /* Do this... */
  text-shadow: 0 1px 0 rgba(0,0,0,0.3); /* Subtle */

  /* Do _not_ do this (Not so subtle :)
     http://mothereffingtextshadow.com/
  */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/text-shadow">Browser support</a> 
		<a href="http://html5please.com/#text-shadow">Usage advice</a> 
		<a href="http://www.css3files.com/shadow/#textshadow">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
