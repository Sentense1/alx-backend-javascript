import createReportObject from '../12-createReportObject.js';
import createIteratorObject from '../100-createIteratorObject.js';

test('createIteratorObject returns the correct object', () => {
    const report = createReportObject({});
    const reportWithIterator = createIteratorObject(report);
    expect(typeof reportWithIterator[Symbol.iterator]).toBe('function');
  });
  