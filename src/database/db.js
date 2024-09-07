import mongoose from 'mongoose'

async function connectDatabase(){
    await mongoose.connect('mongodb+srv://root:root@cluster0.q5kgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

export default connectDatabase