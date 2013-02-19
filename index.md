---
layout: default
title: (What) Should I prefix?
pagetitle: When to use CSS prefixes
description: Page <DESCRIPTION>
---

# {{page.title}}

Sometimes it is hard to remember what CSS properties to prefix. Not all prefixes are always needed and things often change. CSS Preprocessors and their mixin libraries are not always up to date (and sometimes you dont need them).

This page has one purpose: simply show **_what_ prefixes are needed for a CSS property**. If you need more information: I've linked to the awesome [caniuse.com](http://caniuse.com) and [html5please](http://html5please.com) (from which I took most of the info actually).


<input class="search" name="search" id="search" type="search" placeholder="Search CSS features: e.g. box-shadow" />
<a href="#" class="filter" id="filter-prefixed">Show Prefixed</a>
<a href="#" class="filter" id="filter-prefixless">Show Prefixless</a>
<a href="#" class="filter" id="filter-none">Show All</a>

<div id="feature-list">
<ul class="list">
{% for item in site.posts order:ascending %}
<li>{{ item.content }}</li>
{% endfor %}
</ul>
</div>