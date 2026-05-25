/**
 * @fileOverview Load markdownlint config from project config files.
 * @author Paweł BB Drozd
 */

import fs from "fs";
import path from "path";
import { readConfig } from "markdownlint/sync";
import JSON5 from "json5";

const CONFIG_FILENAMES = [".markdownlint.jsonc", ".markdownlint.json"];

// JSON5 handles JSONC (JSON with comments); use it as fallback after JSON.parse
const PARSERS = [JSON.parse, JSON5.parse];

/** @type {Map<string, object | null>} */
const cache = new Map();

/**
 * Walk up from `dir` to find the first markdownlint config file.
 * Returns the file path or null if not found.
 *
 * @param {string} dir Starting directory.
 * @returns {string | null}
 */
const findConfigFile = (dir) => {
  let current = dir;
  while (true) {
    for (const name of CONFIG_FILENAMES) {
      const candidate = path.join(current, name);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    const parent = path.dirname(current);
    if (parent === current) break; // reached filesystem root
    current = parent;
  }
  return null;
};

/**
 * Load markdownlint config for the given file, walking up to find a config
 * file. Results are cached per config file path.
 *
 * @param {string} filePath Path of the file being linted.
 * @returns {object | null} Parsed markdownlint config, or null if not found.
 */
const loadMarkdownlintConfig = (filePath) => {
  const dir = path.dirname(path.resolve(filePath));
  const configPath = findConfigFile(dir);

  if (!configPath) return null;

  if (cache.has(configPath)) {
    return cache.get(configPath);
  }

  try {
    const config = readConfig(configPath, PARSERS);
    cache.set(configPath, config);
    return config;
  } catch {
    cache.set(configPath, null);
    return null;
  }
};

export default loadMarkdownlintConfig;
