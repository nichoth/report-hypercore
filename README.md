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

Easy Replication: The replicate method returns a Duplex stream that can be piped over an arbitrary transport stream.

We pass a key parameter into the constructor to indicate that we're loading an existing hypercore rather than creating a new one

> Since the public key is also a read capability, it can't be used to discover other readers (by advertising it on a DHT, for example) as that would lead to capability leaks. The discovery key, being derived from the public key but lacking read capability, can be shared openly for peer discovery.

The replicate method can be used to create a Duplex stream that implements the Hypercore Wire Protocol. We can pipe together two replication streams, one from the original core and one from the clone, in order to start exchanging blocks:

```js
const firstStream = core.replicate(true, { live: true })
const cloneStream = clone.replicate(false, { live: true })

// Pipe the stream together to begin replicating.
firstStream.pipe(cloneStream).pipe(firstStream)
```


---------------------

## hyperspace
Hyperspace is a server 

we recommend using the Hyp CLI in most cases

Hyperspace serves its RPC interface over a UNIX domain socket on Linux/OSX 


## hyperdrive

https://github.com/hypercore-protocol/walkthroughs/blob/main/hyperdrive/step-1b.js

https://hypercore-protocol.org/guides/walkthroughs/sharing-files-with-hyperdrive/

As with Hypercores, a Hyperdrive can only have a single writer on a single machine; the creator of the Hyperdrive is the only person who can modify to it, because they're the only one with the private key. That said, the writer can replicate to many readers, in a manner similar to BitTorrent.

it uses two hypercores: one for storing the file metadata and another for storing the file content.

Hyperdrives are file archives which mimic the posix interface



## hyperbee
https://hypercore-protocol.org/guides/walkthroughs/p2p-indexing-with-hyperbee/

Hyperbee is a key-value store

Hyperbee is an append-only B-Tree that can be used to build P2P databases. 

Much of Hyperbee's API mirrors the LevelUP interface

As with Hypercores, a Hyperbee can only have a single writer on a single machine; the creator of the Hyperdrive is the only person who can modify to it, because they're the only one with the private key.







