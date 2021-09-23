'use strict';

const getDiff = (startDate, endDate) => {
  const diff = Math.abs(endDate - startDate);

  const d = Math.trunc(diff / (1000 * 60 * 60 * 24));
  const dRest = diff % (1000 * 60 * 60 * 24);
  // console.log(d);
  // console.log(dRest);
  const h = Math.trunc(dRest / (1000 * 60 * 60));
  const hRest = dRest % (1000 * 60 * 60);
  // console.log(h);
  // console.log(hRest);
  const m = Math.trunc(hRest / (1000 * 60));
  const mRest = hRest % (1000 * 60);
  // console.log(m);
  // console.log(mRest);
  const s = Math.trunc(mRest / 1000);
  // console.log(s);

  console.log(`${d}d ${h}h ${m}m ${s}s`);
};
getDiff(new Date(1991, 0, 17, 3, 24, 7), new Date(1991, 7, 24, 0, 0, 0));
