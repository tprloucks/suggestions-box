const Suggestion = require("../model/Suggestions")

async function getAllSuggestions(req,res){
    try{
        let foundAllSuggestions = await Suggestion.find({})
        
        res.json({message: "success", data:foundAllSuggestions})

    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}
async function getSuggestionById(req, res){
    const id = req.params.id
    try{
        let findSuggestionById= await
        Suggestion.findById({_id:id})
        res.json({message:"success", data:findSuggestionById})
}catch(e){
        res.status(500).json({message: "failure", error:e.message})
    }
}

async function createSuggestion(req, res){
    const {title, author, suggestion, likes, anonymous} = req.body
    try {
        let savedSuggestion = new Suggestion({
            title,
            author,
            suggestion,
            likes,
            anonymous
        })
        return await savedSuggestion.save()
        res.json({message: "success", data:savedSuggestion})
    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}

async function updateSuggestionById(req, res){
    const id = req.params.id

    try{
        let UpdatedSuggestion = await
        Suggestion.findByIdAndUpdate({ _id: id}, req.body, {
            new:true,
        })

        res.json({message:"success", data:updatedSuggestion})
        
    }catch(e){
        res.status(500).json({message: "failure", error:e.message})
    }
}

async function deleteSuggestionByID(req, res) {
    const id = req.params.id;

    try {
        let deletedSuggestion = await Suggestion.findByIdAndRemove({ _id: id });
        res.json({ message: "success", data: deletedSuggestion });
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message });
    }
}



module.exports ={
    getAllSuggestions,
    getSuggestionById,
    createSuggestion,
    updateSuggestionById,
    deleteSuggestionByID
} 