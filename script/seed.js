const { green, red } = require("chalk");
const {  db, User, Location } = require("../server/db/models");

const users = [
  {
    username: "Kevin",
    password: "123",
    coordinates: [-74.007624, 40.705137],
  },
  {
    username: "Altus",
    password: "123",
    coordinates: [-73.999542, 40.715317],
  },
  {
    username: "Kavin",
    password: "123",
    coordinates: [-74.017241, 40.705417],
  }
];

const locations = [
  {
    coordinates: [-74.017241, 40.705417],
  },
  {
    coordinates: [-74.010273, 40.704581],
  },
  {
    coordinates: [-74.009301, 40.715076],
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    const newUsers = await Promise.all(users.map(user => {
      return User.create(user);
    }));

    const newLocations = await Promise.all(locations.map(location => {
      return Location.create(location);
    }));

    await (newLocations[0].addUser(newUsers[0]))
    await (newLocations[1].addUser(newUsers[1]))
    await (newLocations[2].addUser(newUsers[2]))

    await (newUsers[0].addFriend(newUsers[1]))
    await (newUsers[1].addFriend(newUsers[0]))


  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
