// https://hypercore-protocol.org/guides/walkthroughs/p2p-indexing-with-hyperbee/
const ram = require('random-access-memory')
const hypercore = require('hypercore')
// A Hyperbee is stored as an embedded index within a single Hypercore.
const core = hypercore(ram)
const Hyperbee = require('hyperbee')

async function stuff () {
    // It accepts LevelDB-style key/value encoding options.
    const db = new Hyperbee(core, {
        keyEncoding: 'utf-8',
        valueEncoding: 'utf-8'
    })

    await db.ready()

    await db.put('a', 'b')
    await db.put('c', 'd')

    const node = await db.get('a')

    console.log('node', node)

}

stuff()

