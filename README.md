# Risingstart bootcamp-step-1

## Requirements

1. searchRepositories(query): should search for repositories given certain programming languages and/or keywords
   - The query function parameter is an Object of key-value pairs of the request query parameters (eg. { q: 'language:javascript' }, defaults to {})
   - It returns a Promise of the HTTP response without modification
2. getContributors(repository, query): get contributors list with additions, deletions, and commit counts (statistics)
   - repository function parameter is a String of the repository full name, including the 
   owner (eg. RisingStack/cache)
   - The query function parameter is an Object of key-value pairs of the request query 
   - It returns a Promise of the HTTP response without modification
3. Write unit tests for each function, use nock to intercept HTTP calls to the GitHub API endpoints

## Instalation and Execution

1. git clone <https://github.com/orennitzan/bootcamp-step-2.git>
2. Change directory to **bootcamp-step-2**
3. Run npm test. Expect to pass 2 new tests defined in models/github-api/api.test.js
4. Please note that in this file you will find 2 test that are based on nock and 4 (commented) tests that atually using github api service that should work too. Also note that nock tests are defined widh .persist() option in order to prevent them from failing the calls to the api itself. See: <https://github.com/nock/nock#persist> for more information.
