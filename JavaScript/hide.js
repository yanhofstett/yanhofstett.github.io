// Récupérer la date et l'heure actuelles
var currentDate = new Date();

// Définir la date et l'heure de référence (20 mai 2023 à 8h45)
var referenceDate = new Date(2023, 4, 19, 23, 45);

// Vérifier si la date et l'heure actuelles sont après la date de référence
if (currentDate > referenceDate) {
// Afficher les éléments correspondants aux jours 1, 2 et 3
document.getElementById('jour1').style.display = 'list-item';
document.getElementById('jour2').style.display = 'list-item';
document.getElementById('jour3').style.display = 'list-item';
}
else
{
document.getElementById('jour1').style.display = 'none';
document.getElementById('jour2').style.display = 'none';
document.getElementById('jour3').style.display = 'none';

}