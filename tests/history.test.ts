import { CommitHistoryOfSubTreeQuery } from '../src/generated/graphql'
import { parseCommitHistoryOfSubTreeQuery } from '../src/history'

/*
Commits of pull request #98.
You can get this from https://docs.github.com/en/graphql/overview/explorer with:

{
  "owner": "int128",
  "name": "list-associated-pull-requests-action",
  "path": ".",
  "expression": "test-fixture-head",
  "since": "2022-05-13T22:33:57Z",
  "historySize": 100
}
*/
const fixtureQuery: CommitHistoryOfSubTreeQuery = {
  rateLimit: {
    cost: 1,
  },
  repository: {
    object: {
      __typename: 'Commit',
      history: {
        totalCount: 27,
        pageInfo: {
          hasNextPage: false,
          endCursor: '0f9bbfade221f8b590163c664e27c3839fffd3c8 26',
        },
        nodes: [
          {
            oid: '0f9bbfade221f8b590163c664e27c3839fffd3c8',
          },
          {
            oid: 'f2ac78bee33a1a55186732a1f2fb6b7d68008a53',
          },
          {
            oid: 'dcff886579270638a2146cf8ba5380f2240774c7',
          },
          {
            oid: '4e216f67567bdbb723ad28b1d946c63b6cb09a8d',
          },
          {
            oid: 'aba1fb9e861f34176727a527a6e5af8ba74f628c',
          },
          {
            oid: 'ca85088adb0f411ef934833e2b4c47941794ac58',
          },
          {
            oid: 'ebb87b274ad05f7e5d9a38c677f2e399041dae01',
          },
          {
            oid: 'fc7d55b8f3e86b9f2b71c30d9e8578dffc40c807',
          },
          {
            oid: '8e07a09848e1158d3326ec2ab9006077c087bd33',
          },
          {
            oid: 'aed841c2c1550f2e2bac160837085856b6cc5120',
          },
          {
            oid: '13868898d92652c27d889259bd11215f7a4551c1',
          },
          {
            oid: 'd486e046fca314b3a42693a5ca878e47c69a89ed',
          },
          {
            oid: '6df54289158cbd5a61c8604cf97b8a0f7d1847f7',
          },
          {
            oid: '49a339c426a28b6e5abd3203fadcc749560b2362',
          },
          {
            oid: 'd5414767c25010a8d42f44121dba0ee870c1da53',
          },
          {
            oid: 'e1d47057c2a2eafd8ebb570c8f7a4a84dffb234e',
          },
          {
            oid: '15a4eb0b903195d92d089454ab9ffa1c7598d3ef',
          },
          {
            oid: '797d211a801b403772b703ed29e60dc148d708b8',
          },
          {
            oid: 'b256f3b36b635040e4ce150eec4c4d2fdab3495c',
          },
          {
            oid: '1a74c41db6587e71a6c97a2a64741d6152a88638',
          },
          {
            oid: '6c696b80a95830b40ae8ed882bbb9bbe1972b24c',
          },
          {
            oid: 'ead2316173fbd364d6d241b8c05df4a349c7821f',
          },
          {
            oid: '4449d60e7f1ce5fd3d26750c66b5d708cbac1d20',
          },
          {
            oid: 'f656f6812207d5301492cab12f399463e35fbdbb',
          },
          {
            oid: '0ad635a9b2be184a6a02253bcdb090dab6e195c9',
          },
          {
            oid: '3d9cb2f7a130e4427676df5f6da9c06cd228d7d7',
          },
          {
            oid: '639b198eeec3ff282b00e53e936929b72c004817',
          },
        ],
      },
    },
  },
}

test('parseCommitHistoryOfSubTreeQuery', () => {
  const sinceCommitId = '3d9cb2f7a130e4427676df5f6da9c06cd228d7d7'
  const commits = parseCommitHistoryOfSubTreeQuery(fixtureQuery, sinceCommitId)
  expect(commits).toMatchSnapshot()
})
