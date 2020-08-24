Kind Words Message Retriever
============================

Grab any unread messages you have for the game, "Kind Words."

## Prerequisites

* Node v10+
* Command line experience
* Yarn

## Installation

* Clone repo
* Run `yarn` to install dependencies

## How to use
* Get your Kind Words ID from the game
  * Open the game
  * Click "Start" on the title screen
  * Click "More" at the bottom while in your cozy little room
  * Click "Notifications"
  * Click "More" to be taken to the web page where the mail deer tells you if you have unread letters
  * In the URL, You should see something that looks like: `https://lofichillbeats.com/kindwordsserver/?action=notifications&id=YOUR_KIND_WORDS_ID_HERE` - The last part is your kind words ID. Use this argument in the last command
* Run `node bin [YOUR_KIND_WORDS_ID_HERE]`

See your messages on the command line :)

Created with <3 by Ben Junya
