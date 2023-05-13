import User from "../models/user.js";
import Movie from "../models/movies.js";

const Mutation = {
  async createUser(_, { email, password }) {
    const newUser = { email, password };

    const userExist = await User.findOne({ email });

    console.log(newUser)
    if (userExist) {
      throw new Error(`Email: ${email} already exists`);
    }

    const user = await User.create(newUser);

    return await User.find();
  },

  async updateUser(_, { _id, email, password }) {
    const user = { email, password };

    const userExist = await User.findOne({ _id });
    console.log(userExist);

    if (!userExist) {
      throw new Error("No user found, pleas verify ID");
    }
    if (userExist.email === email) {
      throw new Error("El email es el mismo al ya existente, favor de verificar");
    }
    if (userExist.password === password) {
      throw new Error("La contraseña es la misma a la ya existente, favor de verificar");
    }

    return await User.findByIdAndUpdate(_id, user, { new: true });
  },

  async deleteUser(_, { _id }) {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      throw new Error("No user found");
    }
    return await User.find();
  },

  //MOVIES

  async createMovie(_, { _id, tittle, description, likes, image, dateOfRelease }) {
    const newMovie = { tittle, description, likes, image, dateOfRelease };
    console.log(newMovie);

    const movieExist = await Movie.findOne({ tittle });

    if (movieExist) {
      throw new Error("Movie already exists");
    }

    const movie = await Movie.create(newMovie)

    return await Movie.find()
  },

  async updateMovie (_, { _id, tittle, description, likes, image, dateOfRelease }) {

    const movie = { tittle, description, likes, image, dateOfRelease };

    const movieExist = await Movie.findOne({ _id });
    console.log(_id)
    console.log(movie)

    if (!movieExist) {
      throw new Error("Movie not found");
    }

    return await Movie.findByIdAndUpdate(_id, movie, { new: true })

  },

  async deleteMovie(_, {_id}) {
    
    const movie = await Movie.findByIdAndDelete(_id)

    if(!movie) {
        throw new Error("Movie not found");
    }
    return await Movie.find()
  }

};

export default Mutation;
