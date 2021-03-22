let Functions = {
  randNo: function (no1, no2) {
    let seed = Math.random();
    let lower = no1 + Math.floor(seed * 10);
    while (lower > no2) {
      seed = Math.random();
      lower = no1 + Math.floor(seed * 10);
    }
    return lower;
  },
};
