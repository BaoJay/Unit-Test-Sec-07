import { expect, it } from "vitest";
import writeData from './io'

it('should write data in data.txt', () => {
    const testData = 'Gia Bao ne!';
    const testFilename = 'test.txt';

    // Should use 'return' for a promise
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
})