const Hyperdrive = require('hyperdrive')
const ram = require('random-access-memory')
const drive = new Hyperdrive(ram, null) // create
// var key = 'fooo'
// const drive2 = new Hyperdrive(ram, Buffer.from(key, 'hex')) // load

// get or create drive at given path
// const drive = new Hyperdrive('./storage-path')

// You can read details such as the key or writability of a drive after
// 'ready' has been emitted:
drive.ready(err => {
    if (err) return console.log('errrr', err)
    // the drive's public key, used to identify it
    console.log('key', drive.key)
    // the drive's discovery key for the DHT
    console.log('discovery key', drive.discoveryKey)
    // do we possess the private key of this drive?
    console.log('writable', drive.writable)
    // what is the version-number of this drive?
    console.log('version', drive.version)
    // list of the peers currently replicating this drive
    console.log('peers', drive.peers)
})


