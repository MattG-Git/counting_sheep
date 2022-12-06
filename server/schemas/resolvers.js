const { User, Sleep } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        sleepData: async (parent, args, context) => {
            if (context.user) {
                const sleepData = await Sleep.find({ user: context.user._id });
                return sleepData;
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addSleep: async (parent, { date, hours, quality }, context) => {
            if (context.user) {
                const sleep = await Sleep.create({
                    date,
                    hours,
                    quality,
                    user: context.user._id,
                });
                return sleep;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
};

module.exports = resolvers;