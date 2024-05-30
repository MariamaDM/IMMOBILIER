import React, { useState } from 'react';
import'./Locataire.css';

const Locataire = () => {
  const [newTenant, setNewTenant] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    date_entree: '',
  });

  const [editingTenant, setEditingTenant] = useState(null);
  const [tenants, setTenants] = useState([]);

  const handleInputChange = (e) => {
    const { nom, value } = e.target;
    setNewTenant({ ...newTenant, [nom]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTenant) {
      // Modifier le locataire existant
      // Ajoutez votre logique de modification ici
      setEditingTenant(null); // Réinitialiser le formulaire de modification
    } else {
      // Ajouter un nouveau locataire
      // Ajoutez votre logique d'ajout ici
      setTenants([...tenants, newTenant]);
      setNewTenant({ nom: '', prenom: '', adresse: '', email: '', telephone: '', date_entree: '' }); // Réinitialiser le formulaire d'ajout
    }
  };

  const handleEdit = (tenant) => {
    setEditingTenant(tenant);
    setNewTenant(tenant);
  };

  const handleDelete = (tenant) => {
    // Supprimer le locataire de la liste
    // Ajoutez votre logique de suppression ici
    const updatedTenants = tenants.filter((t) => t !== tenant);
    setTenants(updatedTenants);
  };

  return (
    <div>
      <h2>Gestion des Locataires</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          value={newTenant.nom}
          onChange={handleInputChange}
          placeholder="Nom du locataire"
          required
        />
         <input
          type="text"
          name="prenom"
          value={newTenant.prenom}
          onChange={handleInputChange}
          placeholder="Prenom du locataire"
          required
        />
         <input
          type="text"
          name="adresse"
          value={newTenant.adresse}
          onChange={handleInputChange}
          placeholder="Adresse du locataire"
          required
        />
        <input
          type="email"
          name="email"
          value={newTenant.email}
          onChange={handleInputChange}
          placeholder="Email du locataire"
          required
        />
        <input
          type="tel"
          name="telephone"
          value={newTenant.telephone}
          onChange={handleInputChange}
          placeholder="Numéro de téléphone du locataire"
          required
        />
        <input
          type="date"
          name="date_entree"
          value={newTenant.date_entree}
          onChange={handleInputChange}
          placeholder="Date d'entrée du locataire"
          required
        />
        <button type="submit">{editingTenant ? 'Modifier' : 'Ajouter'}</button>
      </form>
      <ul>
        {tenants.map((tenant, index) => (
          <li key={index}>
            {tenant.name} - {tenant.email} - {tenant.phoneNumber} - {tenant.entryDate}
            <button onClick={() => handleEdit(tenant)}>Modifier</button>
            <button onClick={() => handleDelete(tenant)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locataire;
