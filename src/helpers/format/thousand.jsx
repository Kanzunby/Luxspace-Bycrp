/* eslint-disable no-prototype-builtins */
if (!Number.hasOwnProperty("thousand"))
  // eslint-disable-next-line no-unused-vars
  Number.prototype.thousand = function (decimal = 0) {
    const thousand = new Intl.NumberFormat(navigator.language);

    return thousand.format(this);
  };
