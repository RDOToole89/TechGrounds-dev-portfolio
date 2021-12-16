const converteer = (nummer) => {
  let word = [];

  const eentallenObj = {
    0: 'nul',
    1: 'een',
    2: 'twee',
    3: 'drie',
    4: 'vier',
    5: 'vijf',
    6: 'zes',
    7: 'zeven',
    8: 'acht',
    9: 'negen',
    10: 'tien',
    11: 'elf',
    12: 'twaalf',
    13: 'dertien',
    14: 'veertien',
  };

  let honderden = 0 || (nummer % 1000) / 100;
  let tienden = 0 || (nummer % 100) / 10;
  let eentallen = nummer % 10;

  if (nummer % eentallen) {
    console.log(eentallenObj[nummer]);
  }

  if (nummer % tienden) {
    console.log(`${nummer} is deelbaar door tienden`);
  }

  if (nummer % honderden) {
    console.log(`${nummer} is deelbaar door honderden`);
  }
};

converteer(1);
