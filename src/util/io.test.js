
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

it('should write data in data.txt without writing anything on hard drive', () => {
    const testData = 'Gia Bao ne!';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
})