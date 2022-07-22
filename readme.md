## Introduction

A very simple [omp server](https://github.com/openmultiplayer/server-beta) that uses the [samp-node](https://github.com/AmyrAhmady/samp-node) plugin and the [samp-node-lib](https://github.com/peterszombati/samp-node-lib) library.

## Advantages

I think with node.js, you can embrace the idea of object-oriented programming and a wide range of libraries without relying on pawn plug-ins to the greatest extent.

For example, we can use node.js 's mongodb/mysql library to operate the database, and we can also operate asynchronously, or we can use fs to manipulate files or folders.

But for the necessary libraries, you need to encapsulate the wrapper class to implement, such as the streamer plug-in, if you want to write through node.js, you need to encapsulate an underlying native caller / public caller that calls samp-node.

For the native added by OMP, the principle should be wrapped in the same way as described above.

If you look at the samp-node-lib code, you will see that the underlying calls are to native caller / public caller.

## Notice

- samp-node requires compliance with the commonjs specification, but it is possible to convert esmodule to commonjs via the typescript compiler.
