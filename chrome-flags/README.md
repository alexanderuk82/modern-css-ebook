# Chrome flags · trying preview features

Some features in the book are still behind a flag. You only need this folder for
the preview chapters, mainly Chapter 23 (@mixin and @apply). Everything in the
main body works in stable browsers without any of this.

> Safety first: use a separate Chrome Canary profile for flag testing. Never run
> your daily browser with experimental flags on.

## How to enable a flag

**Option A · the flags page**

1. Open Chrome Canary.
2. Go to `chrome://flags`.
3. Search for the feature, for example "Experimental Web Platform features".
4. Set it to Enabled and relaunch.

**Option B · launch with a feature switch**

Launch Canary from the command line with the feature you want.

Windows (PowerShell):

```powershell
& "C:\Users\<you>\AppData\Local\Google\Chrome SxS\Application\chrome.exe" `
  --enable-features=CSSMixins
```

macOS:

```bash
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary \
  --enable-features=CSSMixins
```

## Features used in the book that may need a flag

| Feature | Chapter | How to enable | Status at writing |
| --- | --- | --- | --- |
| @mixin and @apply | 23 | `--enable-features=CSSMixins` | Behind flag |
| Masonry layout | 7 | Experimental Web Platform features | Behind flag, in spec |
| corner-shape | 14 | Experimental Web Platform features | Experimental |

Always confirm the current state at https://baseline.web.dev and
https://caniuse.com before trusting a label. Browsers move fast, and the whole
point of the book is to tell you what is safe right now.
