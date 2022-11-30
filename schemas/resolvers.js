const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },
      addThought: async (parent, { thoughtText, thoughtAuthor }) => {
        const thought = await Thought.create({ thoughtText, thoughtAuthor });
  
        await User.findOneAndUpdate(
          { username: thoughtAuthor },
          { $addToSet: { thoughts: thought._id } }
        );
  
        return thought;
      },
      addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: { comments: { commentText, commentAuthor } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
      removeThought: async (parent, { thoughtId }) => {
        return Thought.findOneAndDelete({ _id: thoughtId });
      },
      removeComment: async (parent, { thoughtId, commentId }) => {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;
  