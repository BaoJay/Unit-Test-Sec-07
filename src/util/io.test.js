
import { expect, it, vi } from "vitest";
import { promises as fs } from 'fs';

import writeData from './io'

vi.mock('fs')
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            }
        }
    }
})

it('should execute the writeFile method', () => {
    const testData = 'Gia Bao ne!';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
})

it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'Gia Bao ne!';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(writeData(testData, testFilename)).toBeUndefined();

    // expect(fs.writeFile).toHaveBeenCalled()
})

// it('should count one time the fs.writeFile is called', () => {
//     const testData = 'Gia Bao ne!';
//     const testFilename = 'test.txt';

//     writeData(testData, testFilename)

//     // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
//     expect(fs.writeFile).toBeCalledTimes(1)
// })