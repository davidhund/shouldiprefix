# (What) should I prefix?

**NOTE:** Any help is much appreciated. At the moment this is a very simple MVP-style one pager and some of the info is missing. Ideas and feedback? @valuedstandards !

Knowing what CSS features to prefix is hard. Things change (-OperaKit- anyone?) and documentation, even Preprocessor mixin libraries, are often out of date.
This is simply(!) an attempt to have a handy list of CSS features and their prefixes, if any.

It is a WIP, not complete, will contain errors blah blah

## Autoprefixer

While having a reference page such as this project provides is neat, parsing your CSS and *automagically* inserting the proper prefixes is **awesome**.

[Autoprefixer](https://github.com/postcss/autoprefixer) does exactly this: it parses CSS and adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

Seriously: look into using [@autoprefixer](https://twitter.com/autoprefixer). It works with plain CSS, Sass, Less, you name it. You can even try out [a live demo](https://autoprefixer.github.io/)
