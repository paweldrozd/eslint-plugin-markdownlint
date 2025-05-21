/**
 * @fileOverview All rules disabled object.
 * @author Paweł BB Drozd
 */

import Rule from "../rules/rule.js";

export default Object.values(Rule).reduce((o, key) => {
  o[key] = false;
  return o;
}, {});
