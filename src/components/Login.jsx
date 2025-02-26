// Importation du hook useState de React
import { useState } from "react";

// Définition du composant fonctionnel Login
const Login = () => {
  // Déclaration des états pour stocker les valeurs des champs et les erreurs
  const [email, setEmail] = useState(""); // Stocke l'email de l'utilisateur
  const [password, setPassword] = useState(""); // Stocke le mot de passe de l'utilisateur
  const [error, setError] = useState(""); // Stocke un message d'erreur en cas de problème

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setError(""); // Réinitialise le message d'erreur

    // Vérifie si les champs email et mot de passe sont remplis
    if (!email || !password) {
      setError("Veuillez remplir tous les champs."); // Affiche un message d'erreur si un champ est vide
      return; // Arrête l'exécution de la fonction
    }

    // Vérification des identifiants (simulation)
    if (email === "admin@example.com" && password === "password123") {
      alert("Connexion réussie"); // Affiche une alerte si les identifiants sont corrects
    } else {
      setError("Email ou mot de passe incorrect."); // Affiche un message d'erreur si les identifiants sont incorrects
    }
  };

  return (
    // Conteneur principal centré sur l'écran avec un fond gris clair
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Carte contenant le formulaire */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Titre du formulaire */}
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>

        {/* Affichage du message d'erreur si nécessaire */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit}>
          {/* Champ de saisie de l'email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email" // Définition du type d'entrée
              className="w-full p-2 border-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email} // Valeur liée à l'état email
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état email à chaque changement
            />
          </div>

          {/* Champ de saisie du mot de passe */}
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password" // Définition du type d'entrée
              className="w-full p-2 border-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password} // Valeur liée à l'état password
              onChange={(e) => setPassword(e.target.value)} // Met à jour l'état password à chaque changement
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit" // Définit l'action du bouton comme une soumission de formulaire
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs
export default Login;
