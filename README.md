# Lottery++ - the better way to gamba
A better, community-made approach to the lotteries on the DougDoug SMP.

Note: this code is not going to be pretty, as it is my first attempt at working with both Svelte and Java respectively.

## TO-DO List:
- Frontend UI and API
    - finish the UI and prepare it for when we get the Java API to work
    - add lottery countdowns
        - should be managed by the api:
        - starts on Saturday @ 12 EST
        - ends on Friday @ 5 EST
        - API should return a UNIX timestamp of when the current lottery will end (should automatically rollover)