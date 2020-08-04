/*
 * File: copyTS.js
 * Project: components-lib
 * File Created: Friday, 31st July 2020 3:18:41 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 31st July 2020 3:18:53 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
/* eslint-enable @typescript-eslint/no-var-requires */
const srcDir = path.join('./src');
const distDir = path.join('./dist');
const files = glob.sync('**/*.d.ts', {
  cwd: srcDir,
});
files.forEach((file) => {
  const from = path.join(srcDir, file);
  const to = path.join(distDir, file);
  fse.copySync(from, to);
});
