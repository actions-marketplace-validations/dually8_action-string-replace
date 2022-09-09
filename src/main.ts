import * as core from "@actions/core";
import { setOutputs } from "./set-outputs";

async function run() {
  try {
    const str = core.getInput('string', {required: true});
    const delimiter = core.getInput('delimiter', { required: false });
    setOutputs({
      str,
      delimiter,
    });
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
