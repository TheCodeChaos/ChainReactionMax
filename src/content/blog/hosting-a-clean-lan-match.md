---
title: Hosting a Clean LAN Match
description: The current multiplayer flow is local-network only, so a little setup discipline makes sessions smoother.
pubDate: 2026-04-10
authors:
  - ayaan
  - shravan
tags:
  - Multiplayer
  - LAN
---

Chain Reaction MAX already supports a practical host-and-join loop for local networks. That makes it great for nearby friends, classrooms, and small tournaments, but it also means the session quality depends on how cleanly the room is set up.

## Start with one clear host

Only one device should act as the host for a match. The host advertises the room, waits for player joins, and sends the game-start payload once enough people are connected.

That flow works best when everyone agrees up front on:

- player count
- board size
- who is hosting

If those decisions stay fluid while people are connecting, the room feels broken even when the network code is behaving correctly.

## Keep everyone on the same network

Because discovery is local-first, joining works best when devices truly share the same network environment. In practical terms:

- use the same Wi-Fi network
- avoid switching networks mid-lobby
- let the host stay stable once players begin joining

The current implementation is optimized for nearby play, not cross-internet matchmaking.

## Pick the board before the room fills

The host passes rows, columns, and player count when the match begins. That means the room is smoother when the host decides the format first instead of negotiating after players have already connected.

Good defaults:

- `6 x 5` for fast warm-up rounds
- `9 x 6` for balanced sessions
- `12 x 8` for longer tables that want real reversals

## When something looks wrong

If a player cannot see the host or a room never starts, capture the details that matter:

- whether the issue happened during discovery or after connecting
- the selected board size
- expected player count versus connected player count
- a screenshot of the lobby state

Those are the same details that make GitHub issues much easier to reproduce later.
