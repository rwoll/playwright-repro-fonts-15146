Repro for https://github.com/microsoft/playwright/issues/15146
==============================================================

To run (on macOS/Linux):

```bash
$ git clone git@github.com:rwoll/playwright-repro-fonts-15146.git repro
$ cd repro
$ docker build -t rwoll/pw .
$ docker run -it --rm -v $(PWD):/app --pull=never rwoll/pw npx playwright test
# observe screenshots in __snapshots__ directory contain properly rendered characters
```


| | |
|-|-|
| amazon | ![amazon screenshot illustrating font rendered correctly](__snapshots__/tests/example.spec.ts-snapshots/amazon-cn-1-chromium-linux.png) |
| google | ![google screenshot illustrating font rendered correctly](__snapshots__/tests/example.spec.ts-snapshots/google-cn-1-chromium-linux.png) |
