'use strict'

const api = require('./api');
const nock = require('nock')


test('Search repository "booktcamp-step-1 in:name" should return 1 item', async () => {
    const gitApi = nock('https://api.github.com', {
        reqheaders: {
            accept: 'application/vnd.github.v3+json',
            'user-agent': 'RisingStack-Bootcamp'
        }
    })
        .persist()
        .get('/search/repositories')
        .query({ q: 'booktcamp-step-1 in:name' })
        .reply(200, {
            items: [{
                "name": "booktcamp-step-1",
                "full_name": "orennitzan/booktcamp-step-1",
            },
                // Uncomment to fail test
                // {
                //     "name": "booktcamp-step-2",
                //     "full_name": "orennitzan/booktcamp-step-2",
                // }
            ]
        });

    let res = await api.searchRepositories({ q: 'booktcamp-step-1 in:name' });
    //expect(gitApi.isDone()).to.eql(true)
    expect(res.items.length).toBe(1);

});


test('Contributors should indicate 1 contributor', async () => {

    const gitApi = nock('https://api.github.com', {
        reqheaders: {
            accept: 'application/vnd.github.v3+json',
            'user-agent': 'RisingStack-Bootcamp'
        }
    })
        .persist()
        .get('/repos/orennitzan/booktcamp-step-1/stats/contributors')
        .query({})
        .reply(200,
            [
                {
                    author: { login: 'orennitzan' }
                }
            ])

    let res = await api.getContributors('orennitzan/booktcamp-step-1', {});
    expect(res.length).toBeGreaterThanOrEqual(1);
});



// Working search url
// https://api.github.com/search/repositories?q=booktcamp-step-1%20in:name
// Working contributors url
//https://api.github.com/repos/orennitzan/booktcamp-step-1/stats/contributors

// Note!! These tests worg against the real git-api. But thw task ask to nock it!! See above tests.

test('Search repository "booktcamp-step-1 in:name" should return 1 item', async () => {
    let res = await api.searchRepositories({ q: 'booktcamp-step-1 in:name' })
    expect(res.items.length).toBe(1);
});

test('Search repository booktcamp-step-1 in:name should return 1 repository with full_name as orennitzan/booktcamp-step-1', async () => {
    let res = await api.searchRepositories({ q: 'booktcamp-step-1 in:name' })
    expect(res.items[0].full_name).toBe('orennitzan/booktcamp-step-1');
});

test('Contributors should indicate 1 contributor', async () => {
    let res = await api.getContributors('orennitzan/booktcamp-step-1', {});
    expect(res.length).toBeGreaterThanOrEqual(1);
});

test('Contributors first author login should be orennitzan', async () => {
    let res = await api.getContributors('orennitzan/booktcamp-step-1');
    expect(res[0].author.login).toBe('orennitzan');
});

