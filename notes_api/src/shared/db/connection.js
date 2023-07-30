import mongoose from 'mongoose';
//console.log('DB URL is ', process.env.DBURL);
export function createConnection(){
const promise = mongoose.connect(mongodb+srv://test:test123@cluster0.y6jwf5b.mongodb.net/notetakingappdb?retryWrites=true&w=majority,{maxPoolSize:5});
    promise.then(data=>{
        console.log('DB URL is mongodb+srv://test:test123@cluster0.y6jwf5b.mongodb.net/notetakingappdb?retryWrites=true&w=majority');
        console.log('Connection Created...');
        
    }).catch(err=>{
        console.log('Error in Connection ', err);
        throw err;
    });
}
//export default mongoose;    
// export const connection = (request , response, next)=>{
//     const promise = mongoose.connect(process.env.DBURL,{maxPoolSize:5});
//     promise.then(data=>{
//         console.log('Connection Created...');
//         next();
//     }).catch(err=>{
//         console.log('Error in Connection ', err);
//         throw err;
//     });
   
// }

