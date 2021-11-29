const getAll = (model) => async(req, res) => {
    try{

        const items = await model.find().lean().exec();

        return res.send(items);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
}

const getOne = (model) => async(req, res) => {
    try{

        const item = await model.find({"_id": req.params.id}).lean().exec();

        return res.send(item);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
}

const post = (model) => async(req, res) => {
    try{

        const item = await model.create(req.body);

        return res.status(201).send(item);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
}

const patch = (model) => async(req, res) => {
    try{

        const item = await model.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}).lean().exec();

        return res.send(item);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
}

const deleteOne = (model) => async(req, res) => {
    try{

        const item = await model.findByIdAndDelete({"_id": req.params.id}).lean().exec();

        return res.send(item);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
}


module.exports = { getAll, getOne, post, patch, deleteOne };