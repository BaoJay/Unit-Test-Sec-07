import { it, expect, vi, describe } from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {
    it('should execute logFn function if provided', () => {
        // Arrange
        // this spy function is an empty function
        // const logger = vi.fn();
        const logger = vi.fn(() => {  });


        // Act
        // pass the spy function to the testing function
        generateReportData(logger)

        // Assert
        // Check whether the spy is called
        // expect(logger).toBeCalled();
        expect(logger).toHaveBeenCalled()
    })
})