import cacheManager from "cache-manager";

function someFn() {
  // doesn't matter what you do with it
  console.log(cacheManager);
  return "whatever";
}

export { someFn }
