# gen-app-version

## Typescript app version file

> 🔢 Standard `app-version.ts` file generator from `git describe`.

### Install

```sh
npm i -g gen-app-version
```

### Usage

```sh
cd my-git-local-repo
gen-app-version

Wrote version info v1.13.0-1-g9697d15 to /path/to/my-git-local-repo/app-version.ts
```

### Aliases

```sh
gen-app-version
gav
genAppVersion (legacy)
```

### [Example output file (`app-version.ts`)](example-output-file/app-version.ts)

```ts
export const VERSION = {
  dirty: false,
  raw: 'v1.0.0-2-gab291c8',
  hash: 'gab291c8',
  distance: 2,
  tag: 'v1.0.0',
  semver: {
    raw: 'v1.0.0',
    major: 1,
    minor: 0,
    patch: 0,
    prerelease: [],
    build: [],
    version: '1.0.0',
  },
  suffix: '2-gab291c8',
  semverString: '1.0.0+2.gab291c8',
};
```
