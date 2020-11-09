# default-scrollbar

Get your default scrollbar back!

This extension fixes the custom scrollbars that some sites have by deleting scrollbar CSS rules.

# Development

To regenerate icons:

```
SIZE=48 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
SIZE=32 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
SIZE=16 ffmpeg -i wheel_128.png -vf scale=$SIZE:$SIZE wheel_$SIZE.png
```

I followed this tutorial: https://developer.chrome.com/extensions/getstarted

# License

MIT
