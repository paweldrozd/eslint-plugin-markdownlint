import { lint } from "markdownlint/sync";
import { runAsWorker } from "synckit";

runAsWorker(async (text, config) => {
  const { text: errors } = await lint({
    strings: { text },
    config,
  });

  return errors;
});
