# Monday Morning Punchlines — @berkahmuse

[![make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/berkahmuse/monday-morning-1125-berkahmuse/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/berkahmuse/monday-morning-1125-berkahmuse/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

One joke about Monday mornings, written by a small Node program that outputs
exactly one text file. Entered in the
[make.fun bounty "Monday Morning Punchlines"](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
— one joke, 200 characters at most, judged on laughs.

## The joke

> Monday morning, I tried to dump my bed. It said, 'You say that every week,' and tucked me back in like a hostage negotiator.

124 characters. The bed always wins on Mondays.

## How it works

`main.ts` writes the joke to `/output/entry.txt` (or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set, for local runs). No network, no
secrets, no dependencies — just Node 22.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
