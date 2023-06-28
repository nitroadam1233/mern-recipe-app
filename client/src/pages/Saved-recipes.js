import { useState, useEffect } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";

export const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    const userID = useGetUserID();

    useEffect(() => {
        const fetcSavedRecipe = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recipes/savedRecipes/${userID}`,
                    { userID }
                );
                setSavedRecipes(response.data.savedRecipes);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetcSavedRecipe();
    }, []);

    return (
        <div>
            <h1>Saved Recipes</h1>
            <ul>
                {savedRecipes && savedRecipes.length > 0 ? (
                    savedRecipes.map((recipe) => (
                        <li key={recipe._id}>
                            <div>
                                <h2>{recipe.name}</h2>
                            </div>
                            <div className="instructions">
                                <p>{recipe.instructions}</p>
                            </div>
                            <img src={recipe.imageUrl} alt={recipe.name} />
                            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
                        </li>
                    ))
                ) : (
                    <li>No saved recipes found.</li>
                )}
            </ul>
        </div>
    )
}