import User from "../models/user.js"
import Movie from "../models/movies.js"

const Query = {
    
    async getUsers() {
        const users = await User.find()
        return users
    },

    async findByEmail(_, {email}) {
        const user = await User.find({email})
        return user
    },

    async login(_,{email,password}) {
        const verifyUser= await User.findOne({email,password})
        console.log(verifyUser)
        return verifyUser
    },

    async getMovies() {
        const movies = await Movie.find()
        return movies
    },

    async getMovieByName(_, {tittle}) {
        const movie = await Movie.findOne({tittle})
        return movie
    }
}

export default Query