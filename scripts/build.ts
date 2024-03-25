import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.js';
import packageJson from '../package.json' assert { type: 'json' };
import fs from 'fs-extra';

const userScriptBanner = `
// ==UserScript==
// @name            itg-web-enhance
// @description     ITG相关页面（OA、Rancher等）加强
// @version         ${packageJson.version}
// @author          BearBin
// @license         MIT
// @match           *://docker.itg.com.cn/*
// @match           *://jenkins.itg.it.org.test/*
// @match           *://oa.itg.cn/*
// @match           *://itg-dtc.coding.net/*
// @grant           none
// ==/UserScript==
`.trim();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

webpack(webpackConfig('', { mode: 'production' }), (err, stats) => {
  if (err) {
    console.error(chalk.red('打包出错：'), err.stack || err);
    return;
  }
  const { compilation } = (stats!);
  const {
    startTime,
    endTime,
    assets,
    errors,
  } = compilation;

  if (errors.length) {
    console.error(chalk.red('打包出错：'), errors);
    return;
  }

  console.log(`打包成功，用时${endTime! - startTime!}ms。`);
  console.log('输出文件：');
  for (const [file] of Object.entries(assets)) {
    const packedSource = fs.readFileSync(path.resolve(__dirname, `../dist/${file}`), 'utf-8');
    const solvedSource = `${userScriptBanner}\n\n${packedSource}`;
    fs.writeFileSync(path.resolve(__dirname, `../dist/${file}`), solvedSource);
    const updatedFileSize = fs.statSync(path.resolve(__dirname, `../dist/${file}`)).size;
    console.log(`- ${chalk.green(`dist/${file}`)}: ${chalk.yellow((updatedFileSize / 1024).toFixed(3))}KB (${chalk.underline(updatedFileSize)}字节)`);
  }
});
