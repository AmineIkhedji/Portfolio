# Changelog

Historique des changements réalisés depuis la reprise du développement sur la branche `Reprise-2026`.

## Contexte

Le projet a initialement été développé en équipe. À partir de la branche `Reprise-2026`, j'ai repris activement le développement du projet, notamment la correction du backend, la réorganisation du code, la connexion à la nouvelle base de données et l'intégration des données backend dans l'application Flutter.

Ce changelog documente les principaux changements réalisés depuis cette reprise.

## 2026-10-01

### Frontend

- Correction du décalage des jours dans le calendrier et ajout du défilement du sélecteur sur les écrans bas.
- Actualisation des commandes de l'historique commerçant au retour sur l'onglet et par glissement pour rafraîchir.
- Correction de l'affichage des commandes côté employé : utilisation de l'identifiant du fournisseur et prise en charge des champs renvoyés par l'API.
- Amélioration de l'affichage mobile des cartes de commande et de la barre d'actions de sélection des produits, avec correction des débordements.
- Ajout de tests widget pour les dates du calendrier et les mises en page étroites.

## 2026-09-26

### Frontend

- Harmonisation des filtres de recherche et amélioration de leur ergonomie dans les espaces administrateur et commerçant.
- Ajout de la possibilité de recommander une commande et de cumuler les produits dans le panier commerçant.
- Mise à jour de l'écran des notifications, du splash screen et du logo de l'application.
- Traduction en français des textes de l'application.

### Backend

- Correction de la gestion des commandes.

## 2026-09-25

### Administration et gestion des produits

- Ajout de la gestion des signalements par l'administrateur et correction de leur affichage.
- Mise en place du workflow de modération des produits pour l'administrateur et le fournisseur, avec gestion des produits désactivés.
- Amélioration de l'affichage des produits désactivés et actualisation des pages après leur réactivation.
- Ajout d'un chargement skeleton à la gestion des catégories de l'administrateur.

## 2026-09-24

### Frontend

- Refonte et corrections des interfaces commerçant, fournisseur, administrateur et profil.
- Amélioration de la validation des formulaires et ajout de messages d'erreur et de réussite pour les champs.
- Ajout de l'heure aux dates de commande.

### Backend

- Correction du traitement des commandes fournisseur.
- Ajout de la gestion du refus des comptes commerçant et fournisseur.

## 2026-09-23

### Notifications

- Mise en place des notifications push Firebase Cloud Messaging, y compris sur Chrome et le Web.
- Ajout des notifications push pour les événements de l'application et de la gestion des préférences de notification.
- Suppression du token FCM à la déconnexion et association correcte d'un token à un utilisateur.
- Ajout de la configuration Firebase et du service backend d'envoi des notifications push.

### Frontend

- Correction de l'affichage et des données de l'historique commerçant.
- Suppression des traces de debug.

## 2026-09-22

### Comptes et profils

- Ajout de la gestion des employés côté fournisseur, avec récupération des données depuis la base et sécurisation du parcours.
- Ajout du profil employé et amélioration de la modification des profils commerçant, fournisseur et employé.
- Ajout d'un écran d'attente pour les nouveaux comptes en attente de validation et correction de la validation du registre de commerce.
- Mise à jour des informations de profil sur les différents écrans.

### Espace fournisseur et commerçant

- Correction et amélioration de la gestion des commandes fournisseur et employé.
- Ajout et amélioration des statistiques fournisseur, avec harmonisation de leur présentation.
- Amélioration de l'affichage des produits favoris sur l'accueil commerçant.
- Finalisation de l'onboarding adapté aux commerçants et fournisseurs.

## 2026-09-19

### Espace fournisseur

- Ajout de la création et de la modification des produits et variantes fournisseur.
- Correction de l'affichage des fiches produits et des variantes, avec ajout de skeleton loading à la modification d'un produit.
- Ajout de pages de statistiques et amélioration du tableau de bord fournisseur.

### Frontend

- Centralisation des couleurs de l'application et suppression des couleurs codées en dur.

## 2026-09-18

### Backend et fonctionnalités

- Mise en place du système de maintenance et de gestion des versions depuis l'administration et la base de données.
- Intégration des catégories dans les produits et correction de la récupération des produits et variantes fournisseur.
- Amélioration du système de notes et correction des favoris et des fiches produits sans variantes.

### Frontend

- Amélioration de la responsivité des écrans d'administration.
- Suppression d'images lourdes intégrées directement dans le code.

## 2026-09-17

### Backend

- Ajout de la gestion complète des catégories côté administrateur.
- Ajout de la table et du modèle des catégories, du contrôleur associé et des routes CRUD.
- Mise à jour des routes et validations liées aux produits et aux catégories.
- Ajustements des contrôleurs d'images et de produits pour prendre en charge ces évolutions.

### Frontend

- Création de l'écran de gestion des catégories dans l'administration.
- Ajout du service Flutter de gestion des catégories et intégration de la rubrique dans le menu administrateur.
- Adaptation des formulaires et controllers de produits fournisseur à la gestion des catégories.
- Création d'une architecture de skeleton loading réutilisable avec des adaptateurs par page.
- Ajout des skeletons pour les écrans d'accueil administrateur, panier, catégories, historique, notifications, commandes, produits, signalements, fournisseurs et utilisateurs.
- Ajustement du client API, du service des catégories et du service d'envoi d'images pour les nouveaux parcours.

## 2026-09-16

### Backend et sécurité

- Correction et renforcement de la protection des routes et des contrôles d'accès.
- Ajout d'une table et d'un modèle administrateur, avec suppression de la logique d'administration codée en dur.
- Ajout de Helmet et amélioration de la limitation du débit des requêtes pour renforcer la sécurité contre les abus.
- Correction de plusieurs incohérences dans les commandes, favoris, notifications, signalements, routes et validations.
- Ajout des données et endpoints nécessaires aux signalements affichés dans l'administration.

### Frontend

- Conservation de la session utilisateur après la fermeture et la réouverture de l'application.
- Amélioration du client API et des services d'authentification, favoris, commandes, fournisseurs et signalements.
- Refonte de la page d'accueil administrateur et amélioration des statistiques et états système.
- Amélioration des pages de signalements, de gestion des utilisateurs et des détails utilisateur.
- Amélioration des états de chargement et enrichissement des composants skeleton communs.
- Nettoyage et remplacement de l'image avatar, avec suppression des anciennes ressources inutilisées.

## 2026-09-15

### Backend et frontend

- Harmonisation des noms de variables dans les contrôleurs, modèles, routes, validations et utilitaires backend.
- Harmonisation des modèles Flutter et des services associés pour conserver des noms cohérents entre le frontend et le backend.
- Mise à jour des dépendances et des fichiers de verrouillage du backend et du frontend.

## 2026-09-13

### Backend et sécurité

- Protection des routes nécessitant une authentification et suppression de contrôles redondants.
- Correction de la gestion des tokens et des parcours de déconnexion et de profil.
- Correction de la logique entre variantes, panier, fournisseurs et commandes.
- Amélioration des contrôleurs et routes de commandes, panier et variantes.
- Remplacement d'imgBB par Cloudinary pour la gestion des images.
- Ajout de la configuration Cloudinary, des routes d'images et des opérations d'upload et de suppression d'images.
- Mise à jour des dépendances et du verrouillage backend nécessaires à la gestion des images.

### Frontend

- Correction des pages Settings, Login et des parcours d'authentification et de profil.
- Intégration de la nouvelle gestion des images dans les services et controllers Flutter.
- Correction de la communication entre l'écran d'adresse du panier et le service de commande.
- Centralisation de la palette de couleurs et extraction de widgets réutilisables depuis les vues.
- Suppression des widgets inutilisés, des utilitaires redondants et des sorties de debug.

## 2026-09-12

### Backend

- Correction de la gestion des notifications et des relations de réception.
- Correction et réorganisation des contrôleurs, modèles et routes backend.
- Ajout et harmonisation des validations pour les utilisateurs, commandes, produits, favoris, notifications, signalements et variantes.
- Déplacement de la configuration de base de données dans `backend/config/db.js`.
- Suppression des anciens scripts et fichiers de test temporaires du backend.
- Suppression des fichiers de crash et de diagnostic générés localement.
- Correction de la route des signalements et récupération des données signalées.
- Ajout de la récupération des variantes liées à un fournisseur.
- Ajout de méthodes backend pour récupérer et manipuler les commandes et les produits.
- Ajout de champs et relations nécessaires dans les modèles de commandes et de produits.
- Mise à jour des routes, du contrôleur d'authentification et de l'initialisation du serveur.

### Frontend

- Séparation plus claire des responsabilités entre les controllers et les services Flutter.
- Création du controller administrateur dédié à la gestion des utilisateurs.
- Création et centralisation de la configuration API dans `frontend/lib/services/api_config.dart`.
- Ajout du service de profil et correction des appels de gestion des utilisateurs.
- Correction des controllers de recherche, de profil, de produits fournisseur et de gestion administrateur.
- Suppression des controllers devenus inutiles après la séparation services/controllers.
- Remplacement des données de démonstration codées en dur par des appels aux services backend.
- Ajout des services pour les catégories, commandes et fournisseurs.
- Connexion des écrans de catégories, historique des commandes, accueil commerçant, fournisseurs et produits aux données backend.
- Mise à jour des écrans d’administration, de profil, de connexion, de commande et de gestion des produits.
- Suppression des anciens fichiers de données de test du commerçant.
- Ajout des champs nécessaires dans le modèle utilisateur.
- Création et harmonisation des modèles Flutter manquants : employés, évaluations, favoris, fournisseurs, notifications, panier, produits, signalements, statistiques et variantes.
- Consolidation des modèles utilisateur et commande, avec ajout d'utilitaires de conversion JSON.
- Suppression des anciens modèles redondants et réorganisation des modèles commerçant.
- Séparation du service utilisateur et du controller administrateur, avec ajout du service utilisateur et du modèle de résultat d'authentification.
- Correction du parcours de connexion, d'inscription, de gestion du profil et de création des employés afin d'aligner le frontend avec le backend et la base de données.
- Correction des incohérences entre plusieurs services, controllers, vues et widgets Flutter.
- Formatage et harmonisation du code Flutter sur les services, controllers, vues et widgets concernés.

### Configuration et sécurité

- Ajout d'un middleware d'authentification pour protéger les routes nécessitant une session utilisateur.
- Ajout d'un middleware de limitation du débit des requêtes.
- Renforcement de l'authentification avec le hashage et la vérification des mots de passe.

## 2026-09-11

### Backend et base de données

- Nettoyage initial des modèles de panier, fournisseur, produit et réception.
- Mise à jour de la configuration de connexion à la base de données.
- Connexion du backend à la nouvelle base de données.
- Mise à jour des dépendances Node.js et de leur verrouillage dans `package.json` et `package-lock.json`.
- Correction du passage de commande et de la communication entre les routes backend et le frontend.
- Correction de la récupération des variantes d’un fournisseur.
- Correction de la configuration de l’application backend utilisée par les fournisseurs.

### Frontend

- Correction du parcours de passage de commande et de l’écran d’adresse du panier.
- Mise à jour du service de commande et de la configuration Android nécessaire.
- Correction du processus de connexion et des appels du service d’authentification.
- Mise à jour de la page de connexion et de l’initialisation de l’application.

### Configuration et sécurité

- Renforcement des règles `.gitignore` du projet et du backend.
- Retrait du fichier d’environnement backend du dépôt afin de ne pas versionner les informations sensibles.
- Mise à jour du fichier `frontend/pubspec.lock`.

