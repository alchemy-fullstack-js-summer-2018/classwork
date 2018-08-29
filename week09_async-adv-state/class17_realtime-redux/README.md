Realtime Redux
===

Integrate firebase real time data with redux.

This is a beta experiment :)

## Agenda

* Review lab
* Firebase real time database
* Firebase auth

## Realtime Game

1. Use anonymous authentication to identify separate users
1. Use queues and cloud functions to run "game"
1. Use action creators to 
    1. "listen" for data
    1. write data
    1. "unlisten"?

## firebase tools

1. install cli tools
1. init project

## Make Game

1. Queue of people waiting for game
1. Cloud function listens and matches up people by creating a game
    1. add to `games`
    1. add game id to `userGames` under each user id
1. App "Games" listens for available games

## Play Game
1. Queue for game moves
1. Cloud function listens and alters game accordingly
1. App "Game" listens for game changes and outcomes