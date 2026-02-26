# taking-flight-tailwind-css.pdf

Taking Flight with Tailwind CSS

 PHP and Front End Developer 

 System Administrator 

 Senior Engineer at Inviqa 

 Part-<me freelancer 

 Open sourcer 

 @opdavies 

 oliverdavies.uk

What is Tailwind CSS?

A u"lity-first CSS framework for rapidly building custom designs. 

Tailwind CSS is a highly customizable, low-level CSS 

framework 

Tailwind is more than a CSS framework, it's an engine for 

crea%ng design systems. 

 Text/border/background colours 

 Font size/family/weight 

 Alignment 

 Padding/margin/nega>ve margin 

 Flexbox 

 Posi>oning 

 Lists 

 z-index 

 Opacity

 Screenreader visibility 

 Placeholder colour 

 first-child, last-child, nth-child 

 CSS Grid 

 Transi;on 

 Transform 

 Spacing / Divide

How do I use Tailwind?

With Tailwind, you style elements by applying pre-exis.ng classes 

directly in your HTML.

Using u"lity classes to build custom designs without wri"ng CSS

Benefits 

 You aren't was.ng .me and energy inven.ng class names 

 Your CSS stops growing 

 Making changes feels safer

How do I install Tailwind?

1. Use the CDN

h"ps://unpkg.com/tailwindcss/dist/ tailwind.min.css 

To get the most out of Tailwind, you really should install it via npm. 

 You can't use any direc1ves like @apply, @variants, etc. 

 You can't enable features like group-hover 

 You can't install third-party plugins 

2. Installing Tailwind via NPM

npm install --save-dev tailwindcss 

yarn add -D tailwindcss

Adding Tailwind to your CSS

/* src/css/app.pcss */ 

@tailwind base; 

@tailwind components; 

@tailwind utilities;

/* src/css/app.pcss */ 

@tailwind base; 

/* Custom base styles go here */ 

@tailwind components; 

/* Custom components go here */ 

@tailwind utilities; 

/* Custom utilities go here */

Processing your CSS with Tailwind with the build command

npx tailwind build src/css/app.pcss 

-o dist/css/app.css

.text-left {   text-align: left; } 

.text-center {   text-align: center; } 

.text-right {   text-align: right; } 

.text-justify {   text-align: justify; }

Processing your CSS with Tailwind with Laravel Mix

npm install --save-dev laravel-mix

// webpack.mix.js 

const mix = require('laravel-mix') 

mix.postCss(   'src/css/app.pcss',   'dist/css',   [     require('tailwindcss')()   ] )

// webpack.mix.js 

const mix = require('laravel-mix') 

require('laravel-mix-tailwind') 

mix.postCss('src/css/app.pcss', 'dist/css')   .tailwind()

<!DOCTYPE html> <html lang="en">   <head>     <meta charset="UTF-8" />     <title>My new website</title>     <link rel="stylesheet" href="/dist/css/app.css" />   </head>   <body></body> </html>

npm run dev 

npm run watch 

npm run prod

Interac(on states hover, focus, ac-ve, disabled, visited, 

group-hover, focus-within, first-child, last-child...

[state][separator][class]

hover:text-red-500

.text-red-500 {   color: #f56565; } 

.hover\:text-red-500:hover {   color: #f56565; } 

.focus\:text-red-500:focus {   color: #f56565; }

<a href="#" class="text-red-500 hover:text-red-800">   Read more </a>

// defaultConfig.stub.js 

variants: {   alignContent: ['responsive'],   alignItems: ['responsive'],   alignSelf: ['responsive'],   appearance: ['responsive'],   backgroundAttachment: ['responsive'],   backgroundColor: ['responsive', 'hover', 'focus'],   backgroundPosition: ['responsive'],   backgroundRepeat: ['responsive'],   ...

Responsive

.[screen][separator][class]

// defaultConfig.stub.js 

screens: {   sm: '640px',   md: '768px',   lg: '1024px',   xl: '1280px', },

md:flex

md:hover:bg-red-500

.block {   display: block; } 

@media (min-width: 640px) {   .sm\:block {     display: block;   } } 

@media (min-width: 768px) {   .md\:block {     display: block;   } }

<div class="block md:flex">   <div class="w-full md:w-1/2">     Column 1   </div> 

  <div class="w-full md:w-1/2">     Column 2   </div> </div>

Keeping Things Small: Controlling the File Size

Disabling unused variants and core plugins

// tailwind.config.js 

variants: {   alignContent: ['responsive'],   alignItems: ['responsive'],   alignSelf: ['responsive'],   appearance: ['responsive'],   backgroundAttachment: ['responsive'],   backgroundColor: ['responsive', 'hover', 'focus'],

// tailwind.config.js 

variants: {   alignContent: ['responsive'],   alignItems: ['responsive'], - alignSelf: ['responsive'], + alignSelf: false,   appearance: ['responsive'],   backgroundAttachment: ['responsive'], - backgroundColor: ['responsive', 'hover', 'focus'], + backgroundColor: ['responsive'],

Manually removing unused or unwanted classes

screens: {   sm: '640px',   md: '768px',   lg: '1024px',   xl: '1280px', }, colors: {   transparent: 'transparent', 

  black: '#000',   white: '#fff', 

  gray: {     100: '#f7fafc',     200: '#edf2f7',     300: '#e2e8f0',     400: '#cbd5e0',     500: '#a0aec0',     600: '#718096',     700: '#4a5568',     800: '#2d3748',     900: '#1a202c',   },

screens: {   sm: '640px',   md: '768px',   lg: '1024px', - xl: '1280px', }, colors: {   transparent: 'transparent', 

  black: '#000',   white: '#fff', 

  gray: {     100: '#f7fafc', -   200: '#edf2f7',     300: '#e2e8f0', -   400: '#cbd5e0', -   500: '#a0aec0',     600: '#718096',     700: '#4a5568', -   800: '#2d3748',     900: '#1a202c',   },

Automa'cally removing unused classes

npm install --save-dev laravel-mix-purgecss

const mix = require('laravel-mix') 

mix.postCss('src/css/site.css', 'dist/css').purgeCss({   folders: ['templates'],   extensions: ['html', 'php', 'twig'], })

const mix = require('laravel-mix') 

require('laravel-mix-purgecss') 

mix.postCss('src/css/site.css', 'dist/css').purgeCss({   folders: ['templates'],   extensions: ['html', 'php', 'twig'], })

PurgeCSS is now included by default with Tailwind 1.4

module.exports = {   purge: [     './src/**/*.html',     './src/**/*.vue',     './src/**/*.jsx',   ],   theme: {},   variants: {},   plugins: [], }

Avoid repe**on by extrac'ng components

Does something jus$fy becoming a component?

Could the duplica.on be moved elsewhere?

{# base.html.twig #} 

{% for item in navItems %}   <a     class="block py-3 px-4 text-sm text-gray-800"     href="{{ item.url }}"   >    {{ item.title }}   </a> {% endfor %}

{# classes.html.twig #} 

<h2>Adults</h2> 

{% include 'class-list' with {     classes: page.classes,     type: 'adults', } %} 

<h2>Kids</h2> 

{% include 'class-list' with {     classes: page.classes,     type: 'kids', } %}

a.btn {   @apply text-sm no-underline font-bold;   @apply rounded-full inline-block px-5 py-2;   @apply text-white bg-blue-600; } 

a.btn:hover {   @apply bg-blue-700; }

a.btn {   font-size: 0.875rem;   text-decoration: none;   font-weight: 700;   border-radius: 9999px;   display: inline-block;   padding-left: 1.25rem;   padding-right: 1.25rem;   padding-top: 0.5rem;   padding-bottom: 0.5rem;   color: #fff;   background-color: #3182ce; } 

a.btn:hover {   background-color: #2b6cb0; }

Customising Tailwind

npx tailwind init

// tailwind.config.js 

module.exports = {   theme: {     extend: {},   },   plugins: [],   variants: {}, }

// tailwind.config.js 

module.exports = {   theme: {     colors: {       inherit: 'inherit',     },     extend: {},   },   plugins: [],   variants: {}, }

// tailwind.config.js 

module.exports = {   theme: {     extend: {       colors: {         inherit: 'inherit',       },     },   },   plugins: [],   variants: {}, }

// tailwind.config.js 

module.exports = {   prefix: '',   important: false,   theme: {     extend: {},   },   plugins: [],   variants: {}, }

npx tailwind init --full

Extending Tailwind CSS with Plugins

npm install --save-dev tailwindcss-list-reset

// tailwind.config.js 

module.exports = {   theme: {     extend: {},   },   plugins: [require('tailwindcss-list-reset')()],   variants: {}, }

.list-reset {   list-style: none;   padding: 0; }

// index.js 

module.exports = variants => ({addUtilities}) => {   addUtilities(     {       '.list-reset': {         listStyle: 'none',         padding: 0,       },     },     variants,   ) }

Demo

Useful links 

 tailwindcss.com 

 tailwindui.com 

 builtwithtailwind.com 

 youtube.com/adamwathan 

 drupal.org/project/tailwindcss 

 oliverdavies.uk/tags/tailwind-css 

 oliverdavies.uk/tailwind-repos

Ques%ons? oliverdavies.uk/tailwind-talk 

@opdavies