/**
 * @fileOverview Plugin.
 * @author Paweł BB Drozd
 */

import fs from "fs";
import Rule from "./rules/rule.js";
import md001 from "./rules/md001.js";
import md003 from "./rules/md003.js";
import md004 from "./rules/md004.js";
import md005 from "./rules/md005.js";
import md007 from "./rules/md007.js";
import md009 from "./rules/md009.js";
import md010 from "./rules/md010.js";
import md011 from "./rules/md011.js";
import md012 from "./rules/md012.js";
import md013 from "./rules/md013.js";
import md014 from "./rules/md014.js";
import md018 from "./rules/md018.js";
import md019 from "./rules/md019.js";
import md020 from "./rules/md020.js";
import md021 from "./rules/md021.js";
import md022 from "./rules/md022.js";
import md023 from "./rules/md023.js";
import md024 from "./rules/md024.js";
import md025 from "./rules/md025.js";
import md026 from "./rules/md026.js";
import md027 from "./rules/md027.js";
import md028 from "./rules/md028.js";
import md029 from "./rules/md029.js";
import md030 from "./rules/md030.js";
import md031 from "./rules/md031.js";
import md032 from "./rules/md032.js";
import md033 from "./rules/md033.js";
import md034 from "./rules/md034.js";
import md035 from "./rules/md035.js";
import md036 from "./rules/md036.js";
import md037 from "./rules/md037.js";
import md038 from "./rules/md038.js";
import md039 from "./rules/md039.js";
import md040 from "./rules/md040.js";
import md041 from "./rules/md041.js";
import md042 from "./rules/md042.js";
import md043 from "./rules/md043.js";
import md044 from "./rules/md044.js";
import md045 from "./rules/md045.js";
import md046 from "./rules/md046.js";
import md047 from "./rules/md047.js";
import md048 from "./rules/md048.js";
import md049 from "./rules/md049.js";
import md050 from "./rules/md050.js";

const pkg = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
);

const meta = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
};

const configs = {
  recommended: {
    plugins: ["markdownlint"],
    rules: {
      [`markdownlint/${Rule.MD001}`]: 2,
      [`markdownlint/${Rule.MD003}`]: 2,
      [`markdownlint/${Rule.MD004}`]: 2,
      [`markdownlint/${Rule.MD005}`]: 2,
      [`markdownlint/${Rule.MD007}`]: 2,
      [`markdownlint/${Rule.MD009}`]: 2,
      [`markdownlint/${Rule.MD010}`]: 2,
      [`markdownlint/${Rule.MD011}`]: 2,
      [`markdownlint/${Rule.MD012}`]: 2,
      [`markdownlint/${Rule.MD013}`]: 2,
      [`markdownlint/${Rule.MD014}`]: 2,
      [`markdownlint/${Rule.MD018}`]: 2,
      [`markdownlint/${Rule.MD019}`]: 2,
      [`markdownlint/${Rule.MD020}`]: 2,
      [`markdownlint/${Rule.MD021}`]: 2,
      [`markdownlint/${Rule.MD022}`]: 2,
      [`markdownlint/${Rule.MD023}`]: 2,
      [`markdownlint/${Rule.MD024}`]: 2,
      [`markdownlint/${Rule.MD025}`]: 2,
      [`markdownlint/${Rule.MD026}`]: 2,
      [`markdownlint/${Rule.MD027}`]: 2,
      [`markdownlint/${Rule.MD028}`]: 2,
      [`markdownlint/${Rule.MD029}`]: 2,
      [`markdownlint/${Rule.MD030}`]: 2,
      [`markdownlint/${Rule.MD031}`]: 2,
      [`markdownlint/${Rule.MD032}`]: 2,
      [`markdownlint/${Rule.MD033}`]: 2,
      [`markdownlint/${Rule.MD034}`]: 2,
      [`markdownlint/${Rule.MD035}`]: 2,
      [`markdownlint/${Rule.MD036}`]: 2,
      [`markdownlint/${Rule.MD037}`]: 2,
      [`markdownlint/${Rule.MD038}`]: 2,
      [`markdownlint/${Rule.MD039}`]: 2,
      [`markdownlint/${Rule.MD040}`]: 2,
      [`markdownlint/${Rule.MD041}`]: 2,
      [`markdownlint/${Rule.MD042}`]: 2,
      [`markdownlint/${Rule.MD043}`]: 2,
      [`markdownlint/${Rule.MD044}`]: 2,
      [`markdownlint/${Rule.MD045}`]: 2,
      [`markdownlint/${Rule.MD046}`]: 2,
      [`markdownlint/${Rule.MD047}`]: 2,
      [`markdownlint/${Rule.MD048}`]: 2,
      [`markdownlint/${Rule.MD049}`]: 2,
      [`markdownlint/${Rule.MD050}`]: 2,
    },
  },
};

export const rules = {
  [Rule.MD001]: md001,
  [Rule.MD003]: md003,
  [Rule.MD004]: md004,
  [Rule.MD005]: md005,
  [Rule.MD007]: md007,
  [Rule.MD009]: md009,
  [Rule.MD010]: md010,
  [Rule.MD011]: md011,
  [Rule.MD012]: md012,
  [Rule.MD013]: md013,
  [Rule.MD014]: md014,
  [Rule.MD018]: md018,
  [Rule.MD019]: md019,
  [Rule.MD020]: md020,
  [Rule.MD021]: md021,
  [Rule.MD022]: md022,
  [Rule.MD023]: md023,
  [Rule.MD024]: md024,
  [Rule.MD025]: md025,
  [Rule.MD026]: md026,
  [Rule.MD027]: md027,
  [Rule.MD028]: md028,
  [Rule.MD029]: md029,
  [Rule.MD030]: md030,
  [Rule.MD031]: md031,
  [Rule.MD032]: md032,
  [Rule.MD033]: md033,
  [Rule.MD034]: md034,
  [Rule.MD035]: md035,
  [Rule.MD036]: md036,
  [Rule.MD037]: md037,
  [Rule.MD038]: md038,
  [Rule.MD039]: md039,
  [Rule.MD040]: md040,
  [Rule.MD041]: md041,
  [Rule.MD042]: md042,
  [Rule.MD043]: md043,
  [Rule.MD044]: md044,
  [Rule.MD045]: md045,
  [Rule.MD046]: md046,
  [Rule.MD047]: md047,
  [Rule.MD048]: md048,
  [Rule.MD049]: md049,
  [Rule.MD050]: md050,
};
const processors = {};

const plugin = {
  meta,
  configs,
  rules,
  processors,
};

export default plugin;
