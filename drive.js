const Hyperdrive = require('hyperdrive')
const ram = require('random-access-memory')
const drive = new Hyperdrive(ram, null) // create
const createHyperspaceSimulator = require('hyperspace/simulator')

// https://github.com/hypercore-protocol/walkthroughs/blob/main/hyperdrive/step-1b.js

// https://hypercore-protocol.org/guides/walkthroughs/sharing-files-with-hyperdrive/

// get or create drive at given path
// const drive = new Hyperdrive('./storage-path')

// You can read details such as the key or writability of a drive after
// 'ready' has been emitted:
drive.ready(err => {
    if (err) return console.log('errrr', err)
    // the drive's public key, used to identify it
    console.log('key', drive.key.toString('hex'))
    // the drive's discovery key for the DHT
    console.log('discovery key', drive.discoveryKey.toString('hex'))
    // do we possess the private key of this drive?
    console.log('writable', drive.writable)
    // what is the version-number of this drive?
    console.log('version', drive.version)
    // list of the peers currently replicating this drive
    console.log('peers', drive.peers)
})

// -----------------------

// var key = 'fooo'
async function stuff () {
    const { client, cleanup } = await createHyperspaceSimulator()

    // create
    const drive1 = new Hyperdrive(client.corestore(), null)
    await drive.promises.ready()
    // load
    const drive2 = new Hyperdrive(client.corestore(), drive1.key)
    await drive2.promises.ready()

    await cleanup() // shut down the simulator
}

stuff()

