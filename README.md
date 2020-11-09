# default-scrollbar

Get your default scrollbar back!

This extension fixes the custom scrollbars that some sites have by deleting scrollbar CSS rules.

# Development

## How it works

Based on the answer here https://superuser.com/questions/380629/is-there-a-way-to-disable-custom-webkit-scrollbars/1585452#1585452

I just run it in a setInterval.

## To regenerate icons

```
SIZE=48 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
SIZE=32 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
SIZE=16 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
```

## Chrome extension

I followed this tutorial: https://developer.chrome.com/extensions/getstarted

# License

MIT
