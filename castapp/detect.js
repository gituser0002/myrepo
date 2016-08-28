var mdns = require('multicast-dns')()

mdns.on('response', function(response) {
  console.log('got a response packet:', response)
})

// lets query for an PTR record for '_googlecast._tcp.local'
mdns.query({
  questions:[{
    name: '_googlecast._tcp.local',
    type: 'PTR'
  }]
})