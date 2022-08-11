import { vi } from 'vitest'

export const promises = {
    // replace writeFile with Spy function
    // We can add our own implementation
    // The Spy function has 2 parameters
    writeFile: vi.fn((path, data) => {
        // It should return a promise
        return new Promise((resolve, reject) => {
            resolve();
        })
    })
}