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
 * Read and cache a config file by absolute path.
 *
 * @param {string} configPath Absolute path to the config file.
 * @returns {object | null}
 */
const readAndCache = (configPath) => {
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

/**
 * Load markdownlint config for the given file.
 *
 * If `customConfigFile` is provided (from ESLint settings), it is resolved
 * relative to cwd and used directly. Otherwise the nearest
 * `.markdownlint.jsonc` / `.markdownlint.json` is found by walking up from
 * the linted file's directory.
 *
 * @param {string} filePath Path of the file being linted.
 * @param {string | undefined} customConfigFile Optional path from ESLint settings.
 * @returns {object | null} Parsed markdownlint config, or null if not found.
 */
const loadMarkdownlintConfig = (filePath, customConfigFile) => {
  if (customConfigFile) {
    const configPath = path.resolve(customConfigFile);
    return readAndCache(configPath);
  }

  const dir = path.dirname(path.resolve(filePath));
  const configPath = findConfigFile(dir);
  if (!configPath) return null;
  return readAndCache(configPath);
};

export default loadMarkdownlintConfig;
