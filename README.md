# koloja.github.io

A simple webpage by koloja\n
Coded of the [znci website](https://znci.dev/)

## skAPI

skAPI is a small API meant for skript to do some small things like preview your head in chat.
Get requests, Dad Jokes and more basic API things.

## Features

List the key features of your project. You can use bullet points for this section.

- headAPI
- Info Requests
- Jokes (soon)

## Usage

In your .sk file put some code like this

```js
set {_info} to text from "koloja.github.io/api/info"
map json {_info} to {_js::*}
send "version - %{_js::version}%"
send "credits - %{_js::credits}%"

```

You can also download the skAPI skript from the file [skAPI.sk](ect/skAPI.sk)

Some examples are:

```js
on load:
  import.skAPI("skAPI::*") # skAPI::* is the variable we are binding the info to. 

on unload:
  delete {skAPI::*}

command /skapi:info [<string>]:
  trigger:
    send "version - %{skAPI::version}%"
    send "credits - %{skAPI::credits}%"
```
