# template-ts-node
Starter repo for node+express+graphql+typescript+tslint+vscode debug configs

## How to build locally

```
yarn build
```

## How to debug locally

To launch nodemon debug session from vscode use the `nodemon` debug configuration. To manually start a debug nodemon session that can be attached to run `yarn debug`.

## Debug with docker

```
yarn docker-debug
```

## How to build docker image

```
yarn docker-build
docker build -t myserver .
```

## References
- [Microsoft/TypeSript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)