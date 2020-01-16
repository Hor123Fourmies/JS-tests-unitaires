import { test } from './script2.js';

test();

describe ('test', function()
{
    it('should return 5', function ()
    {
        expect (test().toBe(5));

    });
});