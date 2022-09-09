/* eslint-disable no-control-regex */
import * as core from "@actions/core";

type SetOutputArgs = {
  str: string;
  delimiter?: string;
};
export function setOutputs({
  str, delimiter = ''
}: SetOutputArgs) {
  const cleanStr = str
    .replace(/"/gi, delimiter)
    .replace(/:/gi, delimiter)
    .replace(/</gi, delimiter)
    .replace(/>/gi, delimiter)
    .replace(/\|/gi, delimiter)
    .replace(/\*/gi, delimiter)
    .replace(/\?/gi, delimiter)
    .replace(/\//gi, delimiter)
    .replace(/\\/gi, delimiter)
    .replace(/[^\x00-\x7F]/gi, delimiter)

  core.info(`Input: ${str}`)
  core.info(`Output: ${cleanStr}`)
  core.setOutput('output', cleanStr);
}
