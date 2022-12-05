const { User, Sleep } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('sleep');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('sleep');
        },
        sleep: async (parent, { _id }) => {
            return Sleep.findOne({ _id });
        },
        sleepData: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Sleep.find(params).sort({ date: -1 });
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
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
        addSleep: async (parent, args, context) => {
            if (context.user) {
                const sleep = await Sleep.create({ ...args, user: context.user._id });
                if (!sleep) {
                    throw new AuthenticationError('You need to be logged in!');
                }

                return sleep;
            }
        },
        updateSleep: async (parent, { _id, ...args }, context) => {
            if (context.user) {
                const sleep = await Sleep.findByIdAndUpdate
                    (
                        { _id },
                        { ...args },
                        { new: true, runValidators: true }
                    );
                if (!sleep) {
                    throw new AuthenticationError('You need to be logged in!');
                }

                return sleep;
            }
        },
        removeSleep: async (parent, { _id }, context) => {
            if (context.user) {
                const sleep = await Sleep.findByIdAndDelete
                    (
                        { _id }
                    );
                if (!sleep) {
                    throw new AuthenticationError('You need to be logged in!');
                }

                return sleep;
            }
        },
    },
};

module.exports = resolvers;