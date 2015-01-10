#ix.io syntax highlighter

http://ix.io & http://sprunge.us - syntax highlighter chrome extension

- http://ix.io/fHi
- http://ix.io/fHf
- http://ix.io/fHh

![](https://raw.github.com/xero/ix.io-syntax/master/preview.png)

##hacking

- install dependencies
  - `npm install`
- edit files
  - change style
    - `vim ui/sass/highlight.scss`
    - comment out `@import "monokai_sublime";`
    - uncomment `//@import "tomorrow-night-eighties";`
    - save
  - add short link code site
    - `vim manifest.json`
    - add entry in the matches section in the form of: `"*://codesite.link/*" ,`
- build
  - `grunt`

##install

this extension is not released on the store, so you must install it manually.

- navigate to chrome://extensions/
- choose load unpacked extension...
- browse to the repository location
- click ok

##powered by

- [highlight](https://highlightjs.org)
- [grunt](http://gruntjs.com)
- [sass](http://sass-lang.com)
- [node](http://nodejs.org)

##language support

- 1C
- AVR Assembler
- ActionScript
- Apache
- AppleScript
- AsciiDoc
- AspectJ
- AutoHotkey
- Axapta
- Bash
- Brainfuck
- C#
- C++
- CMake
- CSS
- Cap’n Proto
- Clojure
- Clojure REPL
- CoffeeScript
- D
- DOS .bat
- Dart
- Delphi
- Diff
- Django
- Dust
- ERB (Embedded Ruby)
- Elixir
- Erlang
- Erlang REPL
- F#
- FIX
- G-code (ISO 6983)
- GLSL
- Gherkin
- Go
- Gradle
- Groovy
- Haml
- Handlebars
- Haskell
- Haxe
- HTML
- HTTP
- Ini
- Intel x86 Assembly
- Java
- JavaScript
- JSON
- Lasso
- Less
- Lisp
- LiveCode
- LiveScript
- Lua
- Makefile
- Markdown
- MEL
- Mathematica
- Matlab
- Mercury
- Mizar
- Monkey
- Nginx
- NSIS
- Nimrod
- Nix
- Objective C
- OCaml
- Oracle Rules Language
- Oxygene
- Parser3
- Perl
- PHP
- PowerShell
- Processing
- Protocol Buffers
- Puppet
- Python
- Python profile
- Q
- R
- RenderMan RIB
- RenderMan RSL
- Roboconf
- Ruby
- Rust
- SCSS
- SML
- STEP Part 21 (ISO 10303-21)
- Scala
- Scheme
- Scilab
- Smali
- Smalltalk
- SQL
- Stata
- Stylus
- Swift
- Tcl
- TeX
- Thrift
- Twig
- TypeScript
- VB.NET
- VBScript
- VBScript in HTML
- VHDL
- Vala
- Verilog
- Vim Script
- XL
- XML
