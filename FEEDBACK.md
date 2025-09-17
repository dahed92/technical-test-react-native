# Votre feedback
Le test est plutot bon et challenge bien le candidat sur ses competences.
Cependant n'ayant jamais utilisé twrnc ou native wind j'ai perdu enorment de temps à comprendre le foncitonnement
j'aurais du egalement prendre plus de temps au debut afin d'analyser les response des differents endpoints de l'api afin de 
mieux typer mes donnés. le stress m'a fait beacoup paniqué et perdu beacoup de temps mais vers la fin j'ai reussi à reprendre
une vitess de dev convenable. j'ai laissé la parti design de coté afin de rattraper mon retatard sur le fetch des données.
Avec plus de temps et moins de stress j'aurais finaliser le style de la card produit ainsi que la page detail produit, 
j'aurais egallement implementer le formulaire d'ajout de produit. je m'arrete un peut avant la fin du temps reglementaire car
je pense que cela ne changererai pas grand chose à la decision finale à propos de ce test.

Archi:
J'ai voulu gerer toutes les requettes produits dans le hook useGetProduct et utiliser react query pour le caching des données


# Question bonus

## Comment feriez-vous pour gérer une stratégie offline-first ?
Pour du offline firt j'aurais soit utilisé rxDb ou alors j'aurais configuré react query afin d'utiliser le AsyncStorage de react native