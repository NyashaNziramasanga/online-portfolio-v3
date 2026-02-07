"use strict";

// Polyfill for Vite's use of crypto.getRandomValues in Node (fixes Vite 6+ on Node 18+)
// See: https://github.com/vitejs/vite/issues/19407
// Vite's bundle uses require('crypto'), so we must add getRandomValues to Node's crypto module.
const nodeCrypto = require("crypto");

function getRandomValues(array) {
  nodeCrypto.randomFillSync(array);
  return array;
}

if (typeof nodeCrypto.getRandomValues !== "function") {
  nodeCrypto.getRandomValues = getRandomValues;
}

if (
  typeof globalThis.crypto === "undefined" ||
  typeof globalThis.crypto.getRandomValues !== "function"
) {
  globalThis.crypto = globalThis.crypto || {};
  globalThis.crypto.getRandomValues = getRandomValues;
}
