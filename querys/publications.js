const mongoose = require('mongoose');
const Publication = mongoose.model('Publication');
const User = mongoose.model('User');

exports.create = async(data) => {
    if(data){                
        const user = await User.findById(data.user);
        
        if(user){                                    
            const publication = await Publication.create(data);            
            user.publications.push(publication.id);
            user.save();   

            return await publication;
        }
        
        return null;
    }
    
    return null;
}

exports.getAll = async() => {
    return await Publication.find();
}

exports.getOne = async(id) => {
    return await Publication.findById(id);
}

exports.update = async(id, data) => {
    return await Publication.findByIdAndUpdate(id, data, { new: true });
}

exports.remove = async(id) => {
    return await Publication.findByIdAndDelete(id);
}