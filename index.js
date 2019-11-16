const lifx = require('lifx-http-api')

const client = new lifx({
  bearerToken: process.env.LIFX_TOKEN,
})

const lifxBulbId = `id:${process.env.LIFX_BULB_ID}`
const color = process.env.INPUT_COLOR
const period = +process.env.INPUT_PERIOD

client.listLights(lifxBulbId).then(bulbs => {
  if (bulbs[0].power === 'on') {
    client.pulse(lifxBulbId, { color, period })
  }
})
