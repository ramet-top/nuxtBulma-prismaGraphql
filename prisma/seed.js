const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createUser({
    username: "admin",
    email: 'admin@example.com',
    firstname: 'adminfirst',
    lastname: 'adminlasname',
    password: '$2b$10$jQysfvcR7Qcm7XYujc3rLe9ziMFCLyV9NyVlHK6azHjONVA27KpJG', // "123456789",
    role: 'ADMIN',
    posts: {
      create: {
        title: 'Join us for Prisma Day 2019 in Berlin',
        content: 'https://www.prisma.io/day/',
        published: true,
      },
    },
  })
  await prisma.createUser({
    username: "bob",
    email: 'bob@prisma.io',
    firstname: 'bobfirst',
    lastname: 'bobasname',
    password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43"
    role: 'ADMIN',
    posts: {
      create: [
        {
          title: 'Subscribe to GraphQL Weekly for community news',
          content: 'https://graphqlweekly.com/',
          published: true,
        },
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://twitter.com/prisma',
        },
      ],
    },
  })
}

main()
