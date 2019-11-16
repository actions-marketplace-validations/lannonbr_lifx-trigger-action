# LIFX Trigger Action

Trigger a LIFX bulb to change a color for a short period of time.

Note: There is some code that will not trigger the bulb if it is not on.

## Required Environment variables

- `LIFX_TOKEN`: an access token For the LIFX API.
- `LIFX_BULB_ID`: The id of the light bulb you wish to trigger

## Parameters

- `color` _required_: the color the bulb will go
- `period`: how many seconds the bulb should be triggered for (default of 5 seconds)

## Usage

```yaml
on: push
jobs:
  run:
    runs-on: ubuntu-latest
    env:
      LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
      LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
    steps:
      - name: Do stuff
        run: echo do stuff
      - name: Trigger light to go green on success
        if: success()
        uses: lannonbr/lifx-trigger-action@1.0.0
        with:
          color: green
      - name: Trigger light to go red on failure
        if: failure()
        uses: lannonbr/lifx-trigger-action@1.0.0
        with:
          color: red
```
