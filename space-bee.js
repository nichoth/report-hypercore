const Hyperbee = require('hyperbee')
const createHyperspaceSimulator = require('hyperspace/simulator')

async function stuff () {
    // A Hyperbee can also be constructed with a RemoteHypercore instance.
    const { client, cleanup } = await createHyperspaceSimulator()
    const store = client.corestore('hyperbee-exercise')
    const core = store.get({ name: 'hyperbee-1' })

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

