---
title: animations
url: animations
prefixed: true
---

<article id="animations" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>Animations</h2>
	</header>
	<p class="feature__description">
		Complex method of animating certain properties of an element
	</p>
<pre class="feature__code"><code>
@-webkit-keyframes MyAnimation {
    0% { left: 0; }	
   50% { left: 200px; }	
  100% { left: 20px; }	
}
@keyframes MyAnimation {
    0% { left: 0; }	
   50% { left: 200px; }	
  100% { left: 20px; }	
}

.example.is-animating {
  ...
  -webkit-animation: MyAnimation 2s; /* Chr, Saf */
          animation: MyAnimation 2s; /* IE >9, Fx >15, Op >12.0 */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/animations">Browser support</a> 
		<a href="http://html5please.com/#animations">Usage advice</a> 
		<a href="http://www.css3files.com/animation">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
