# Risingstart Booktcamp-step-1

## Requirements

1. searchRepositories(query): should search for repositories given certain programming languages and/or keywords
   - The query function parameter is an Object of key-value pairs of the request query parameters (eg. { q: 'language:javascript' }, defaults to {})
   - It returns a Promise of the HTTP response without modification
2. getContributors(repository, query): get contributors list with additions, deletions, and commit counts (statistics)
   - repository function parameter is a String of the repository full name, including the owner (eg. RisingStack/cache)
   - The query function parameter is an Object of key-value pairs of the request query 
   - It returns a Promise of the HTTP response without modification
3.Write unit tests for each function, use nock to intercept HTTP calls to the GitHub API endpoints

## Instalation and Execution

1. node
2. npm
3. git
4. Open git terminal and change drictory to your wirkspace directory
5. Run git clone **https://github.com/orennitzan/booktcamp-step-2.git**
6. Change directory to **booktcamp-step-1**
7. Once you have it you may want to open it in visual studio code or jast run it through a command line.
8. Run npm install
9. Run the following command: set PORT=1000&&  npm run --silent start:dev ==> expect to see log message: Listening on localhost:1000
10. Configure port 9999 in detenv file and run the following command: npm run --silent strt:dev ==> expect to see log message: Listening on localhost:9999
11. Use **localhost:[your port]/hello** url to test the 'hello' end point and message. 
