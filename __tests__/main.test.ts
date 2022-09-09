import * as core from '@actions/core';
import { setOutputs } from '../src/set-outputs';

let setOutputSpy: jest.SpyInstance;

const OUTPUT = 'output';

describe('Test deployment path', () => {
  beforeEach(() => {
    setOutputSpy = jest.spyOn(core, 'setOutput');
    setOutputSpy.mockImplementation(() => undefined);
  })

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  })

  it('should clean dependabot string', () => {
    setOutputs({
      str: 'dependabot/npm_yarn_yada/this-and-that-1.0.1',
    });

    expect(setOutputSpy).toBeCalledWith(
      OUTPUT,
      'dependabotnpm_yarn_yadathis-and-that-1.0.1',
    );
  });

  it('should clean crazy string', () => {
    setOutputs({
      str: `Ω≈ç√∫˜µ≤≥÷åß∂ƒ©˙∆˚¬…æœ∑´®†¥¨ˆøπ“‘`
    })

    expect(setOutputSpy).toBeCalledWith(
      OUTPUT,
      '',
    )
  })

  it('should remove all explicit characters', () => {
    setOutputs({
      str: `":<>|*?/\\`,
    })
    expect(setOutputSpy).toBeCalledWith(
      OUTPUT,
      '',
    )
  })

  it('should use custom delimiter', () => {
    setOutputs({
      str: `feature/update-api-calls`,
      delimiter: '__'
    })
    expect(setOutputSpy).toBeCalledWith(
      OUTPUT,
      'feature__update-api-calls',
    )
  })

});
