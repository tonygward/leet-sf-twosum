public with sharing class TwoSum { // NOPMD

    @AuraEnabled(cacheable=true)
    public static List<Integer> check(List<Integer> nums, Integer target) { // NOPMD
        Map<Integer, Integer> numbers = new Map<Integer, Integer>();
        List<Integer> matches = new List<Integer>();

        for (Integer i = 0; i < nums.size(); i++) {
            Integer complement = target - nums[i];
            if (numbers.containsKey(complement)) {
                matches.add(numbers.get(complement));
                matches.add(i);
                return matches;
            }
            numbers.put(nums[i], i);
        }

        return new List<Integer>();
    }
}