import path from "path";
import fs from "fs";

const getMdFilename = (ref, name) => {
  return path.join(ref, "files", name + ".md");
};

const valid = (ref, name, options = {}) => {
  const filename = getMdFilename(ref, name);
  const code = fs.readFileSync(filename, "utf-8");

  return {
    options,
    code,
    filename,
  };
};

const invalid = (ref, name, errors, output, options = []) => {
  const obj = {
    ...valid(ref, name, options),
    errors: errors.map((message) => ({
      message,
    })),
  };

  if (output) {
    obj.output = fs.readFileSync(getMdFilename(ref, output), "utf-8");
  }

  return obj;
};

export function getTestCase(ref, options = []) {
  return {
    valid: (name) => valid(ref, name, options),
    invalid: (name, errors, output = undefined) =>
      invalid(ref, name, errors, output, options),
  };
}
