export class UserInfo {
  displayName: string;
  email: string;
  nom: {
    prenom: string,
    nomDeFamille: string
  };
  dateDeNaissance: string;
  adresse: string;
  codePostal: string;
  ville: string;
  profession: string;
  photoUrl: string;
  permisScanUrl: string;
  chiens: string[];
  covoiturage: boolean;
  niveau: string;
  posteMarcheur: string;

  constructor() {
  }
}
