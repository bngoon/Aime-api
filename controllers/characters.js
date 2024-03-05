import Character from "../models/Character.js";

export const getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
};

export const getCharacter = async (req, res) => {
    try {
      const { id } = req.params;
      const character = await Character.findById(id);
  
      if (character) {
        return res.json(character);
      }
  
      res.status(404).json({ message: "Character not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };