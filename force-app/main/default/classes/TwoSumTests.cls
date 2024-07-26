@isTest
public with sharing class TwoSumTests {

    @isTest
    static void returns9(){
        List<Integer> input = new List<Integer> { 2, 7, 11, 15 };
        List<Integer> expected = new List<Integer> { 0, 1 };
        System.Assert.areEqual(expected, TwoSum.check(input, 9));
    }

    @isTest
    static void returns6(){
        List<Integer> input = new List<Integer> { 3, 2, 4 };
        List<Integer> expected = new List<Integer> { 1, 2 };
        System.Assert.areEqual(expected, TwoSum.check(input, 6));
    }
}