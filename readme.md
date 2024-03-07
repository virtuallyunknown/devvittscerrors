To reproduce these errors/warnings:

1. Clone the repository
2. Install all dependencies

```bash
pnpm install
```

3. Run the `playtest` command.

```
devvit playtest YOUR_SUBREDDIT
```

It should output this:

```
[tsc] Property 'includes' does not exist on type 'string[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2016' or later.; line 11, column 16 in file /home/user/path/to/devvit-app/src/main.ts:
Property 'includes' does not exist on type 'string[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2016' or later.
```

---

Known fixes:

-   Downgrade `@devvit/public-api` from `0.10.16` to `0.10.17`.
-   Use NPM
