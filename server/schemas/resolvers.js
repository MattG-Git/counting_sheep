const { User, Sleep } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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
        addSleep: async (parent, { date, hours, quality, user }) => {
            const sleep = await Sleep.create({ date, hours, quality, user });
            return sleep;
        }
    },
};

module.exports = resolvers;