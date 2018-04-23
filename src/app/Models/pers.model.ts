
export interface IPers {
  id: number
  user_id: number
  type: string
  nom: string
  prenom: string
  sexe: string
  email: string
  telcel: string
  telres: string
  emploi: string			
  dom_activ: string			
  titre_adh: string
}

export const TypePers = [
  { "code": 'M', "libelle": 'Membre' },
  { "code": 'E', "libelle": 'Enfant du membre' },
  { "code": 'P', "libelle": 'Parent du membre' },
  { "code": 'A', "libelle": 'Ammi du membre' },
  { "code": 'C', "libelle": 'Connaissance du membre' },
];
