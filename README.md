# hypercore report
Learning about hyper\*

[Paul walks through the Hypercore Protocol API stack](https://www.youtube.com/watch?v=tFpjKdrTQnQ)

--------------

* https://hypercore-protocol.org/guides/
* https://hypercore-protocol.org/guides/workshops/
* https://hypercore-protocol.org/guides/walkthroughs/
* https://hypercore-protocol.org/guides/getting-started/standalone-modules/


## [Paul walks through the Hypercore Protocol API stack](https://www.youtube.com/watch?v=tFpjKdrTQnQ)

hyperdive & hyperbee -- top level data structures, usually the things you will be building off of. Lower level is plumbing.

`hypercore` is an append-only log, the core data strucute. All other data structues are built off of it, including hyperbee & hyperdrive

`corestore` utility for managing many hypercores on disk

`hyperswarm` is the connectivity layer. Helps devices find each other

## [Paul explains the new Hyperbee Key/Value P2P database](https://www.youtube.com/watch?v=jT20rAmRxvU)

### hyperdive vs hyperbee
`hyperbee` is able to do range-reads, hyperdrive is not. For example, read keys `a` to `m`

Use the hyper-network as a database. Hyperbee is a better DB basis than hyperdrive

------------------------

Hyper uses `dat` -- which is based on bittorrent. It's a drop-in replacement for http.

---------------------------

* injestDB

-----------------------

[Speakeasy JS – Hyperbee (Mathius Buus) & Indexing P2P Sites](https://www.youtube.com/watch?v=CXGDvjAXP8g)

## hyperbees

### create a hyperbee
Rather than specifying some storage and/or key, you provide a Hypercore:
```js
const core = new Hypercore('./my-hyperbee')
const bee = new Hyperbee(core)
```

Unlike Hyperdrive, Hyperbees only use one Hypercore to record their data. 

## hypercore
[Creating and Sharing Hypercores](https://hypercore-protocol.org/guides/walkthroughs/creating-and-sharing-hypercores/)

Hypercore gives you many knobs to tweak, so if you'd like something with more "batteries included", head on over to the [Hyperspace Walkthrough](https://hypercore-protocol.org/guides/getting-started/hyperspace/).

It is an append-only log.

* The `replicate` method returns a Duplex stream that can be piped over an arbitrary transport stream.

the creator of the Hypercore is the only person who can modify it, because they're the only one with the private key.

---------------------

## hyperspace
Hyperspace is a server 

we recommend using the Hyp CLI in most cases

Hyperspace serves its RPC interface over a UNIX domain socket on Linux/OSX 


## hyperdrive
As with Hypercores, a Hyperdrive can only have a single writer on a single machine; the creator of the Hyperdrive is the only person who can modify to it, because they're the only one with the private key. That said, the writer can replicate to many readers, in a manner similar to BitTorrent.

## hyperbee
Hyperbee is an append-only B-Tree that can be used to build P2P databases. 










