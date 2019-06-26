# template-node-express-ts
Starter repo for node+express+typescript+vscode debug configs

## How to run

```sh
npm start
```

## How to debug

```sh
npm run debug
```

Now you can press F5 in VS Code to attach to nodemon, and step through code, hit breakpoints, etc.

## Address already in use errors

Sometimes nodemon spawns child processes that don't get cleaned up, so when you debug again it will fail to launch.  See [this SO post about killing nodemon](https://stackoverflow.com/questions/45520706/how-to-kill-nodemon-process-on-mac) for help.

## References

- [Node.js with TypeScript, Debug inside VSCode and Nodemon](https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7)