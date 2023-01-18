export const questions =
    [
        {
            title: 'Question Réseau social',
            content: 'Qui est à l\'origine du tweet suivant ?',
            image: `${require('../images/flore_17.png')}`,
            possibleAnswers: [
                {
                    content: "ZackNani"
                },
                {
                    content: "Aminematué"
                },
                {
                    content: "Vibrozor"
                },
                {
                    content: "DrFlore" //yes
                },
            ]
        },
        {
            title: 'Question SIGNUP',
            content: 'Signup permet de créer des comptes NSRU. Cela signifie ...',
            image: `${require('../images/complaints.png')}`,
            possibleAnswers: [
                {
                    content: "Not Signed Request to User"
                },
                {
                    content: "Not Signed Registered User"
                },
                {
                    content: "Non Suscriber Referenced User" // yes
                },
                {
                    content: "Non Suscribed or Registered User"
                },
            ]
        },
        {
            title: 'Vrai/Faux ',
            content: 'Chifai a été PO de Dory ?',
            image: `${require('../images/train in.jpeg')}`,
            possibleAnswers: [
                {
                    content: "Vrai"
                },
                {
                    content: "Faux" // faux
                }
            ]
        },
        {
            title: 'Question DORY ',
            content: 'Alice est la combien-t-ième PO de l\'équipe ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "3ème" //yes. Alexandre URVOY, Sylvie THIOLLENT
                },
                {
                    content: "4ème"
                },
                {
                    content: "5ème"
                },
                {
                    content: "Aucune des propositions"
                },
            ]
        },
        {
            title: 'Question Equipe TIN ',
            content: 'Le dashboard invitation sera porté par l\'équipe ...',
            image: `${require('../images/train in.jpeg')}`,
            possibleAnswers: [
                {
                    content: "FEDS"
                },
                {
                    content: "FIRE" // yes
                },
                {
                    content: "VULKAN"
                },
                {
                    content: "System Team"
                },
            ]
        },
        {
            title: 'Question DORY',
            content: 'De quoi parle la feature 1613 ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" // VIM
                }
            ]
        },
        {
            title: 'Question Equipe TIN ',
            content: 'En quoi consiste le projet SUPERBAL ?',
            notAlphabetic: true,
            image: `${require('../images/superbowl.jpg')}`,
            possibleAnswers: [
                {
                    content: "L'ancêtre de Multibal"
                },
                {
                    content: "Suppression BAL internet sur contrat internet résilié" //yes
                    //Suppression de BAL des clients résiliés Internet Seulement
                    //hébergé sur PASS Erable
                    //si client souhaite déplacer sa BAL depuis un contrat résilié vers un nouveau contrat Orange, vérification du statut 
                },
                {
                    content: "Création de compte internet en ligne"
                },
                {
                    content: "Suppression de compte internet en ligne"
                },
                {
                    content: "Suppression BAL internet sur contrat actif"
                }
            ]
        },
        {
            title: 'Question Règlementation',
            content: 'Quel est le délai maximum pendant lequel Orange a le droit de conserver une bal avant suppression?',
            image: `${require('../images/judge.jpg')}`,
            possibleAnswers: [
                {
                    content: "Tant qu'Orange le juge nécessaire"
                },
                {
                    content: "1 an"
                },
                {
                    content: "6 mois"
                },
                {
                    content: "5 ans"
                },
                {
                    content: "Autre réponse"
                },
            ]
        },
        {
            title: 'Question Equipe TIN ',
            content: 'Que retrouve-t-on sur le logo de VULKAN ?',
            image: `${require('../images/vulkan.png')}`,
            possibleAnswers: [
                {
                    content: "Un forgeron portant un marteau"
                },
                {
                    content: "Un volcan en éruption"
                },
                {
                    content: "Un marteau et une enclume" //yes
                },
                {
                    content: "Un captcha à résoudre"
                },
                {
                    content: "Un taureau"
                },
            ]
        },
        {
            title: 'Question MULTIBAL ',
            content: 'Par combien d\'étapes doit passer un client qui fait un Multibal ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "3"
                },
                {
                    content: "4" //yes 1) vos informations, 2) Adresse email, 3) mot de passe, 4) Création
                },
                {
                    content: "5"
                },
                {
                    content: "6"
                },
            ]
        },
        {
            title: 'Question Credentials ',
            content: 'Que signifie LDAP ?',
            //ldap permet d'accéder à des bases d'informations sur les utilisateurs d'un réseau, via l'interrogation d'annuaires. 
            image: `${require('../images/ldap.jpg')}`,
            possibleAnswers: [
                {
                    content: "Lightweight Directory Access Protocol" //yes
                },
                {
                    content: "Live Data Access Protocol"
                },
                {
                    content: "Autre proposition"
                },
            ]
        },
        {
            title: 'Question Versions ',
            content: 'Laquelle / lesquelles des propositions suivantes ne permet(tent) pas d\'avoir le numéro de version de l\'api de Signup sur tb2oab ?',
            notAlphabetic: true,
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Visiter https://login-tb2oab.staging.orange.fr/signup/api/status"
                    //yes
                },
                {
                    content: "Visiter https://login-tb2oab.staging.orange.fr/signup/api/version"
                    //no, n'existe pas
                },
                {
                    content: "Visiter https://login-tb2oab.staging.orange.fr/signup/api/env"
                    // no, donne les variables d'env, pas le numéro de version
                },
                {
                    content: "Demander à Seb E"
                    // yes
                },
                {
                    content: "Aucune des propositions"
                },
            ]
        },
        {
            title: 'Question Equipe',
            content: 'Qui se charge du portail JDD ?',
            image: `${require('../images/train in.jpeg')}`,
            possibleAnswers: [
                {
                    content: "FIRE"
                },
                {
                    content: "FEDS" //yes
                },
                {
                    content: "System Team"
                },
                {
                    content: "Aucune des propositions"
                },
            ]
        },
        {
            title: 'Question Equipe',
            content: 'Quelles sont les 2 dernières personnes à avoir quittés l\'équipe DORY ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //Chifai & Gossard ?
                }
            ]
        },
        {
            title: 'Question Manage',
            content: 'Quel est le code basicat ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "MAN"
                },
                {
                    content: "MNG"
                },
                {
                    content: "MGE"
                },
                {
                    content: "Aucune des propositions" // GNM
                },
            ]
        },
        {
            title: 'Question technique',
            content: 'Laquelle / lesquelles des affirmation(s) suivante(s) permet(tent) d\'être sûr qu\'un JDD est un VRAI pro ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "MSS = 6"
                },
                {
                    content: "SPR = 7" //yes
                },
                {
                    content: "SPR > 5"
                },
                {
                    content: "La mention 'PROF' sur CSRTool" //outil du Customer Care d'Orange France permettant d'unifier les demandes d'assistances
                    //pour les clients I, M, GP, Pro...
                },
                {
                    content: "Autre proposition"
                },
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'MCI peut modifier les moyens de contact ?',
            image: `${require('../images/flore_3.png')}`,
            possibleAnswers: [
                {
                    content: "Vrai"
                },
                {
                    content: "Faux" //yes
                }
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'A part l\'appli permettant d\'appeler les apis d\'Orange, OKAPI représente aussi ...',
            color: '#FF7A00',
            image: `${require('../images/unknown_animal.jpg')}`,
            possibleAnswers: [
                {
                    content: "une girafe-zèbre"
                    //Les giraffidés constituent une famille des mammifères qui ne compte que 2 espèces, la girafe
                    // et l’okapi, qui vit dans les forêts pluviales du centre du continent africain.
                    // on la rencontre dans les forets du RDC (Congo Kinshasa)
                    //une des cinq dernières espèces de la famille des giraffidés, 
                    //espèce protégée, considérée comme en danger
                    //mammifères ruminants de la famille des Giraffiadae, endémique des forêts tropicales de la République démocratique du Congo.
                },
                {
                    content: "un cochon"
                },
                {
                    content: "un cerf"
                },
                {
                    content: "Autre animal"
                },
            ]
        },
        {
            title: 'Définition',
            content: 'Que signifie CogU ?',
            image: `${require('../images/complaints.png')}`,
            possibleAnswers: [
                {
                    content: "Contested Guest User"
                },
                {
                    content: "Confirmation Guest User" //yes
                },
                {
                    content: "Co-generated User"
                },
                {
                    content: "Common Guest User"
                },
            ]
        },
        {
            title: 'Question MEP',
            content: 'Laquelle des versions suivantes de LOST a engendré un hotfix sur le wording des comptes 1ere Co ?',
            objectFit: 'cover',
            image: `${require('../images/doryfor.png')}`,
            possibleAnswers: [
                {
                    content: "3.3.0" //yes
                },
                {
                    content: "3.0.1"
                },
                {
                    content: "3.0.0"
                },
                {
                    content: "2.1.4"
                },
            ]
        },
        {
            title: 'Question Authentification',
            content: 'Quel pourcentage de clients Orange ne se sont pas connectés depuis plus d\'un an ?',
            color: '#FF7A00',
            image: `${require('../images/rompiche.png')}`,
            possibleAnswers: [
                {
                    content: "5%"
                },
                {
                    content: "10%"
                },
                {
                    content: "15%"
                },
                {
                    content: "1%" //yes
                },
            ]
        },
        {
            title: 'Question Lost',
            content: 'Lequel des développeurs suivants a fait le plus de commits sur la develop de lost-front ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Seb E" //104
                },
                {
                    content: "Pascal" //101
                },
                {
                    content: "Seb G" //41
                },
                {
                    content: "Andrea" //113
                },
            ]
        },
        {
            title: 'Question Delete',
            content: 'Quel(s) utilisateur(s) peuvent accéder à Delete account',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //NSRU + secondaires
                }
            ]
        },
        {
            title: 'Question DORY',
            content: 'Combien d\'anomalies a remonté Gaetan sur Octane ?',
            image: `${require('../images/flore_4.png')}`,
            possibleAnswers: [
                {
                    content: "33"
                },
                {
                    content: "120"
                },
                {
                    content: "54" //yes
                },
                {
                    content: "12"
                },
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'Quelle équipe s\'occupe de l\'enabler famille ?',
            image: `${require('../images/train in.jpeg')}`,
            possibleAnswers: [
                {
                    content: "FEDS" //yes
                },
                {
                    content: "FIRE"
                }
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'PADDOCK ... ?',
            image: `${require('../images/paddock.jpg')}`,
            // Enclos aménagé dans une prairie pour les juments poulinières et leurs poulains.
            possibleAnswers: [
                {
                    content: "envoie des mails"
                },
                {
                    content: "envoie des SMS" //yes
                },
                {
                    content: "envoie les 2"
                },
                {
                    content: "aucun des 2"
                },
            ]
        },
        {
            title: 'Vrai / Faux',
            content: 'Lost n\'envoie pas de messages de notification en cas de modification de moyen de contact ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Vrai" //yes, lost envoie juste les notifs pour le mdp pas le mdc
                },
                {
                    content: "Faux"
                }
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'Comment savoir si un compte est 1ère connexion ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue (plusieurs réponses possibles)" // PPE = 0
                }
            ]
        },
        {
            title: 'Question Réseau social',
            content: 'A la suite de quelle MEP de Lost a eu lieu ce tweet ?',
            objectFit: 'contain',
            image: `${require('../images/flore_2.png')}`,
            possibleAnswers: [
                {
                    content: "3.3.0" // oui EUI-4227
                },
                {
                    content: "3.6.0"
                },
                {
                    content: "3.5.2"
                },
                {
                    content: "4.6.0"
                },
            ]
        },
        {
            title: 'Question Groupe',
            content: 'Comment s\'appelle le PDG d\'Orange France ?',
            image: `${require('../images/pdg.webp')}`,
            possibleAnswers: [
                {
                    content: "Stéphane Richard"
                },
                {
                    content: "Kylian Mbappé"
                },
                {
                    content: "Christel Heydemann" //yes
                },
                {
                    content: "Christine Lagarde"
                },
                {
                    content: "Fabienne Dulac"
                },
            ]
        },
        {
            title: 'Question LOST', //EASY
            content: 'Quelle est la 4ème étape du parcours mot de passe oublié ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Réponse direct attendue" 
                }
            ]
        },
        {
            title: 'Question Groupe',
            content: 'Pourquoi Orange s\'appelle Orange ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Le fondateur aimait les oranges"
                },
                {
                    content: "Les oranges c'est mieux que les lapins"
                },
                {
                    content: "La couleur orange attire l'oeil"
                },
                {
                    content: "Aucune raison particulière" //yes
                    //Successeur de France Telecom, autrefois exploitant public du téléphone
                    //la marque Orange en elle même nait en GB. Lors du rachat par FT vers les années 2000
                    //il y a une vaste refonte de l'image de la marque et en 2001 Itinéries et Ola de FT dans le mobile sont rebaptisées Orange
                    //rien de très précis, lors d'une interview en 2019, une directrice exécutive com & marque de groupe dit
                    //que la couleur fait référence à une couleur chaleureuse et dynamique mais n'écarte pas non plus que le lien au fruit 
                    //a aidé à cette proximité avec les consommateurs
                },
            ]
        },
        {
            title: 'Question Lost', //triche
            content: 'Quelle est la proportion d\'utilisateurs qui viennent sur Lost via desktop ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "50%"
                },
                {
                    content: "60%" //yes
                },
                {
                    content: "40%"
                },
                {
                    content: "70%"
                },
            ]
        },
        {
            title: 'Question DORY',
            content: 'Parmi les briques gérées par l\'équipe, le(s)quel(s) nécessite(nt) d\'avoir son mobile à portée de main ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "MULTIBAL"
                },
                {
                    content: "RECOVERY" //yes
                },
                {
                    content: "MANAGE MAIL"
                },
                {
                    content: "MANAGE PASSWORD" //yes
                },
                {
                    content: "SIGNUP"
                },
            ]
        },
        {
            title: 'Question Parnasse', // triche
            content: 'A l\'origine, l\'offre Parnasse était réservée ...',
            image: `${require('../images/parnasse.webp')}`,
            possibleAnswers: [
                {
                    content: "aux habitants de la région Parnasse"
                },
                {
                    content: "aux voyageurs" //yes
                },
                {
                    content: "au grand public"
                },
                {
                    content: "à l'élite"
                },
            ]
        },
        {
            title: 'Question TIN',
            content: 'Parmi les personnalités suivantes, laquelle / lesquelles ne sont pas BO ?',
            image: `${require('../images/train in.jpeg')}`,
            possibleAnswers: [
                {
                    content: "DE ROUVILLE Amai"
                },
                {
                    content: "PETESCH Maxime"
                },
                {
                    content: "FATNASSI Karim" //epic engineer
                },
                {
                    content: "ISAAC Arnaud" // epic owner
                },
            ]
        },
        {
            title: 'Question Groupe',
            content: 'Pour quelle(s) raison(s) Stéphane Richard (ex. PDG Orange) a-t-il du précipiter son départ ?',
            color: '#FF7A00',
            image: `${require('../images/richard.jpg')}`,
            possibleAnswers: [
                {
                    content: "il est mêlé à une escroquerie en bande organisée" //yes
                },
                {
                    content: "il a fait preuve de sexisme"
                },
                {
                    content: "il a été impliqué dans l'affaire Tapie"
                },
                {
                    content: "il a eu des histoires extra-conjugales avec Fabienne Dulac"
                },
            ]
        },
        {
            title: 'Question Partenaire',
            content: 'Comment savoir si un compte est compromis ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue (plusieurs réponses possibles)" // IDS = 0
                }
            ]
        },
        {
            title: 'Question DORY',
            content: 'Parmi les développeurs suivants, lequel a effectué le plus de commits sur la branche develop de signup-api ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Olivier" //0
                },
                {
                    content: "Andréa" //41
                },
                {
                    content: "Thomas" //4
                },
                {
                    content: "Seb G" //388, le 1er en 11 octobre 2017
                },
            ]
        },
        {
            title: 'Question Sécurité',
            content: 'Quel système se base exclusivement sur la session et sur l\'IP de l\'utilisateur après connexion pour savoir si celui-ci est un fraudeur ?',           
            color: '#FF7A00',
            image: `${require('../images/hacker.jpg')}`,
            possibleAnswers: [
                {
                    content: "Trust System" // système de scoring permettant de détecter si l'utilisateur qui se connecte
                    // est un robot. TrustSystem se base sur les comportements et sur l'IP (à l'authentification)
                },
                {
                    content: "Risk Scorer" // système de scoring permettant de détecter si l'utilisateur qui se connecte est un fraudeur. 
                    //Risk Scorer se base sur la session et sur l'IP après authentification.
                    //Contient des scores de session et de score users
                },
                {
                    content: "Session Scorer" //acte de scorer la session avec RiskScorer
                },
                {
                    content: "Check User Line" //pour l'authentification de la ligne
                },
                // eSim appelle riskscorer et CUL en fonction du résultat soit il dit co toi derrière ta LB soit il laisse pas, session red ou compte red or grey et session != green
                // eSim RCS (renouvellement de carte SIM : 3 types 1 eSIM virtuel 2 carte sim physique en boutique 3 boite aux lettres en boutique). C'est un parcours sensible. Les pirates remplacent la carte SIM mettent la leur, se connecte à la banque et disent j'ai oublié mon mot de passe, récupère le compte et peuvent vider la banque
                // combien d'authentifications se font à travers IDME(80%) et combien à travers le SDK(20%)
                // sur les authent, combien se font à travers la LB : 44%
                // trust system appelle risk scorer et en rajoute des choses que nous meme on appelle déjà
                // quel % de session rouges sont ouvertes par les clients Orange 5%
                // compte grey = quand qqn s'est pas connecté depuis longtemps (1an), pendant 4j il passe gris, il passe en probation. Longue inactivity detection
                // 2,5% de trafics liés à des sondes de la supervision et tests de service pour les authents
                // sur 30j, il y a 1% des comptes qui ne se sont pas connectés depuis 1 an
                // combien d'authent avec MC 4% (23 aout au 23 septembre) 90% avec Password, 6% token SDK (connexion SDK avec WT, cookie déjà présent qu'on rafraichit pour ne pas créer de nouvelles connexions)
                // sessions vertes 56%, 34% jaunes (rien de suspect mais rien ne prouve que c'est bien ce user qui se connecte, Derriere LB, MC rien qui nous rassure mais rien qui nous inquiete), 5% oranges (on trouve que c'est inquietant mais rien ne prouve que c'est un fraudeur), 5% (on est quasiment sur que c'est un fraudeur)
                // risk injector : possibilité de pousser les scores directement au service sans passer par risk/session scorer
                // WT = Wassup Translator, 1 api ou SDK se connecte, 2 reverse proxy = verifie que ta session est valide sur les pages Orange, et te redirige sur l'authent si ta session a expiré
            ]
        },
        {
            title: 'Mise en situation',
            content: 'Madame Michu se trouve en boutique Orange. Elle a un mobile de contact. Elle souhaite créer un compte secondaire pour son fils Michaud. Elle possède un compte Internet principal. Elle peut le faire ? (justification attendue)',
            color: '#FF7A00',
            image: `${require('../images/michu.webp')}`,
            possibleAnswers: [
                {
                    content: "Vrai"
                },
                {
                    content: "Faux" //faux, multibal 90
                }
            ]
        },
        {
            title: 'Question SIGNUP',
            content: 'Quelle est la 2ème étape du parcours de création d\'un compte One ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Réponse direct attendue" //vérification de l'email via OTC
                }
            ]
        },
        {
            title: 'Question LOST',
            content: 'Combien de clients visitent le parcours du mot de passe oublié chaque mois ?',
            image: `${require('../images/diagram.jpg')}`,
            possibleAnswers: [
                {
                    content: "un demi-million"
                },
                {
                    content: "un quart de million"
                },
                {
                    content: "deux millions"
                },
                {
                    content: "deux demi-millions" //1M sur lost, 250K de 1ere Co, 50k de manage
                },
            ]
        },
        {
            title: 'Question Authentification',
            content: 'Quelle est la proportion d\'authentifications du SDK par rapport à IDME ?',
            color: '#FF7A00',
            image: `${require('../images/sdk.jpg')}`,
            possibleAnswers: [
                {
                    content: "1/4" // 20% SDK 80% IDME
                },
                {
                    content: "1/3"
                },
                {
                    content: "2"
                },
                {
                    content: "3"
                },
                {
                    content: "1/2"
                },
            ]
        },
        
        {
            title: 'Question Authentification',
            content: 'Sur le mois de septembre dernier, combien de clients ont utilisé Mobile Connect pour s\'authentifier ?',
            image: `${require('../images/mc.png')}`,
            possibleAnswers: [
                {
                    content: "20%"
                },
                {
                    content: "30%"
                },
                {
                    content: "10%"
                },
                {
                    content: "4%" //4% MC, 90% paswword, 6% token SDK (connexion avec WT, cookie déjà présent qu'on rafraichit pour ne pas créer de nouvelles connexions)
                },
            ]
        },
        {
            title: 'Question Supervision',
            content: 'Combien d\'authentifications sont réalisées par les sondes de la supervision et les tests des services ?',
            image: `${require('../images/supervision.jpg')}`,
            possibleAnswers: [
                {
                    content: "2%" //yes, 2,5% exactement
                },
                {
                    content: "5%"
                },
                {
                    content: "8%"
                },
                {
                    content: "Aucune des propositions"
                },
            ]
        },
        {
            title: 'Question Sécurité',
            content: 'Dans quel cas, l\'API RiskScorer attribue-t-elle la couleur GRISE à un compte ?',
            notAlphabetic: true,
            image: `${require('../images/score.webp')}`,
            possibleAnswers: [
                {
                    content: "Lorsqu'un utilisateur se comporte comme un humain mais on n'en est pas sûr"
                },
                {
                    content: "Lorsqu'un utilisateur ne s'est pas connecté depuis plus d'un an", //yes
                    // quand qqn ne s'est pas connecté depuis 1 an, pendant 4 jours il passe gris (période de probation ou Long Inactivity Detection)
                },
                {
                    content: "Lorsqu'un utilisateur vient de faire un parcours d'assainissement de compte"
                },
                {
                    content: "Aucune des propositions"
                },
            ]
        },
        {
            title: 'Vrai / Faux',
            content: 'L\'offre Parnasse est exclusivement réservée aux voyageurs',
            image: `${require('../images/parnasse.webp')}`,
            possibleAnswers: [
                {
                    content: "Vrai"
                },
                {
                    content: "Faux" //yes, depuis le 19 novembre 2019
                    //des anciens voyageurs ont avoué qu'ils voulaient garder les services même s'ils ne voyagent plus car ils ne peuvent plus se passer des 
                    //hommes et des femmes de Parnasse
                },
            ]
        },
        {
            title: 'Question TIG',
            content: 'A votre avis, combien de sessions ROUGES (sessions de fraudeurs) sont ouvertes sur Orange?',
            image: `${require('../images/risk.webp')}`,
            possibleAnswers: [
                {
                    content: "1.5%"
                },
                {
                    content: "8%"
                },
                {
                    content: "5%" //yes
                },
                {
                    content: "2.4%"
                },
            ]
        },
        {
            title: 'Question TIG',
            content: 'Quelle est la différence entre une session jaune et orange ?',
            notAlphabetic: true,
            image: `${require('../images/risk.jpg')}`,
            possibleAnswers: [
                // sessions vertes 56%, 
                // 34% jaunes (rien de suspect mais rien ne prouve que c'est bien ce user qui se connecte, Derriere LB, MC rien qui nous rassure mais rien qui nous inquiete), 
                //5% oranges (on trouve que c'est inquietant mais rien ne prouve que c'est un fraudeur), 
                //5% (on est quasiment sur que c'est un fraudeur)
                {
                    content: "Jaune : rien d'inquiétant mais rien de rassurant. Orange: on est presque sûr que c'est un fraudeur"
                },
                {
                    content: "Orange: on trouve que c'est inquiétant mais rien ne prouve que c'est un fraudeur. Jaune : rien de suspect mais rien de rassurant" 
                    //yes
                },
                {
                    content: "Jaune: on trouve que c'est inquiétant mais rien ne prouve que c'est un fraudeur. Orange : rien de suspect mais rien de rassurant"
                },
            ]
        },
        {
            title: 'Question Sécurité',
            content: 'Quelle(s) api(s) sont appelée(s) pour savoir si un client Orange peut accéder au parcours eSIM ?',
            image: `${require('../images/esim.png')}`,
            possibleAnswers: [
                {
                    content: "Risk Scorer"
                },
                {
                    content: "Trust System et Check User Line"
                },
                {
                    content: "Check User Line et Risk Scorer" //yes
                    //SESSION RED ou (COMPTE RED or GREY et SESSION != GREEN)
                },
                {
                    content: "Check User Line"
                },
            ]
        },
        {
            title: 'Question Orange boutique',
            content: 'Parmi les clients qui viennent en boutique, combien ne pourront pas aller au bout de leur opération en raison d\'absence de pièce d\'identité ?',
            image: `${require('../images/boutiquee.jpg')}`,
            possibleAnswers: [
                {
                    content: "10%"
                },
                {
                    content: "5%"
                },
                {
                    content: "25%" //yes
                },
                {
                    content: "44%"
                },
            ]
        },
        {
            title: 'Question TACC',
            content: 'Combien de clients reprennent la main sur leur compte chaque mois grâce à TACC ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "250K"
                },
                {
                    content: "500K"
                },
                {
                    content: "100K"
                },
                {
                    content: "Autre proposition" //on ne sait pas
                },
            ]
        },
        {
            title: 'Mise en situation',
            content: 'Madame Michu se trouve en boutique Orange. Elle est titulaire d\'une ligne Internet sur laquelle elle a renseigné son mobile de contact. Elle a déjà créé un compte secondaire pour son fils Michaud. Il n\'a pas encore de mdc. Elle veut ajouter sur le compte de son fils, son mobile en moyen de contact. Comment peut-elle faire ?',
            color: '#FF7A00',
            notAlphabetic: true,
            image: `${require('../images/michu.webp')}`,
            possibleAnswers: [
                {
                    content: "Dire à son fils de se connecter puis de faire un parcours de modification de mot de passe (mode connecté) et d'en profiter pour ajouter son mobile"
                },
                {
                    content: "Ajouter elle-même le moyen de contact pour lui"
                },
                {
                    content: "Dire à son fils de faire un parcours de modification de mot de passe oublié (non connecté) et d'en profiter pour ajouter son mobile"
                },
            ]
        },
        {
            title: 'Question LOST',
            content: 'De combien ont diminué les courriers papier envoyés au client depuis le LOST en 2022?',
            image: `${require('../images/batons.png')}`,
            possibleAnswers: [
                {
                    content: "de 10" //on est passé d'environ 60K/mois à 6-7K/mois
                },
                {
                    content: "de 5"
                },
                {
                    content: "de 20"
                },
                {
                    content: "de 2"
                },
            ]
        },
        {
            title: 'Question DORY',
            content: 'En moyenne, combien de clients passent par cette page chaque jour ?',
            image: `${require('../images/confirm_lost.png')}`,
            possibleAnswers: [
                {
                    content: "~15k" 
                },
                {
                    content: "~80k"
                },
                {
                    content: "~40k" //40-45k par jour pour tous les composants (lost, 1e co, Manage etc)
                },
                {
                    content: "Autre proposition"
                },
            ]
        },
        {
            title: 'Vrai / Faux',
            content: 'Madame Michu vient de créer un compte One. Pas de bol, celui-ci a été instantanément compromis. Pouvez-vous l\'aider ?',
            color: '#FF7A00',
            image: `${require('../images/michu.webp')}`,
            possibleAnswers: [
                {
                    content: "Réponse attendue" //plusieurs réponses sont possibles
                }
            ]
        },
        {
            title: 'Question TIG',
            content: 'Qu\'est ce que le Risk Injector ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Système permettant d'envoyer une note à Risk Scorer pour qu'il mette à jour le score de l'utilisateur"
                },
                {
                    content: "Système permettant à un service appelant de récupérer directement le risk/session scorer" //yes
                },
                {
                    content: "Système de score développé par l'équipe VULKAN qui complétera le Trust System"
                },
            ]
        },
        {
            title: 'Définition',
            content: 'Que veut dire SGM ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //service de gestion de messagerie
                }
            ]
        },    
        {
            title: 'Question Etude',
            content: 'Lors de quelle étude a-t-on récemment entendu parler de SGM & SM ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //DECORRELATION MAIL IDENTITE, utiliser Signup pour la suppression du compte, cfsid
                }
            ]
        },    
        {
            title: 'Question VULKAN',
            content: 'Qu\'est ce qui n\'est pas vrai concernant le Trust System Autonome (TSA) ? Justification attendue',
            image: `${require('../images/ts.png')}`,
            possibleAnswers: [
                {
                    content: "Le TSA utilise GCP"
                },
                {
                    content: "Le TSA se base sur des modèles prédictifs, back-office et système de supervision qualitative"
                },
                {
                    content: "Le TSA va de plus en plus s'appuyer sur Datadome"//yes, faux
                    // se mettre à l'abri d'une potentielle évolution agressive de la politique commerciale de Datadome
                    // un meilleur ciblage des attaques dans notre ecosystem en s'appuyant sur nos propres datas
                },
            ]
        },
        {
            title: 'Question DORY',
            content: 'En quoi consiste le Lost Scorer?',
            notAlphabetic: true,
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "C'est confidentiel"
                },
                {
                    content: "Feature qui arrive au S2 2023"
                },
                {
                    content: "Score que Lost va attribuer à l'utilisateur après son parcours en fonction du temps qu'il a mis à saisir l'otc, changer son mdp, nombre d'erreurs sur la saisie du mdp..."
                },
                {
                    content: "Autre proposition" // yes, n'existe pas
                },
            ]
        },
        {
            title: 'Question TIN',
            content: 'Parmi les personnalités suivantes, lequel / lesquelles n\'a / ont jamais été Scrum Master du TIN?',
            image: `${require('../images/sm.jpeg')}`,
            possibleAnswers: [
                {
                    content: "Chifai"
                },
                {
                    content: "Benjamin Caramel"
                },
                {
                    content: "Christophe Guérin" //yes
                },
                {
                    content: "Steeve Audoli"
                },
                {
                    content: "Meriam Maadi"
                },
                {
                    content: "Benoit Mercier"
                },
            ]
        },
        {
            title: 'Question TIN',
            content: 'Quel est le nom de la 1ère EPIC de 1ère Connexion ?',
            image: `${require('../images/flore_1.png')}`,
            possibleAnswers: [
                {
                    content: "R2D2"
                },
                {
                    content: "C3PO"
                },
                {
                    content: "AD1C" //yes
                },
                {
                    content: "BB8"
                },
            ]
        },
        {
            title: 'Question Parnasse',
            content: 'Combien de membres compte Parnasse ?',
            image: `${require('../images/flore_3.png')}`,
            possibleAnswers: [
                {
                    content: "3k" //yes
                },
                {
                    content: "5k"
                },
                {
                    content: "10k"
                },
                {
                    content: "20k"
                },
            ]
        },
        {
            title: 'Question SIGNUP',
            content: 'Lors de quelle version l\'OTC a-t-il été ajouté sur SIGNUP ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "4.2.0" //yes
                },
                {
                    content: "5.2.0"
                },
                {
                    content: "4.0.3"
                },
                {
                    content: "3.11.3"
                },
            ]
        },
        {
            title: 'Acronyme',
            content: 'Que signifie MSISDN ?',
            image: `${require('../images/msisdn.jpg')}`,
            possibleAnswers: [
                {
                    content: "Mobile Subscriber ISDN" //yes
                },
                {
                    content: "Mobile Subscriber ISDN Number"
                },
                {
                    content: "Mobile Station ISDN Number"
                },
                {
                    content: "Mobile Station ISDN"
                },
            ]
        },
        {
            title: 'Mise en pratique',
            notAlphabetic: true,
            color: '#FF7A00',
            content: 'Madame Michu va créer un compte One. Elle a l\'habitude d\'écrire son n° de la façon suivante : 00 33 6 XX XX XX XX. Que va-t-il se passer ? (justification attendue)',
            image: `${require('../images/michu.webp')}`,
            possibleAnswers: [
                {
                    content: "Elle va s'en sortir"
                },
                {
                    content: "Elle va être bloquée et appelera le Service Clients" //yes
                },
            ]
        },
        {
            title: 'Composition MSISDN',
            content: 'Quelles sont les 3 parties constituant un MSISDN ?',
            image: `${require('../images/msisdn parts.jpg')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue"
                    // CC (country code) + NDC (national destination code) + SN (subscriber number)
                    // indicatif ou pays - indicatif de l'opérateur du reseau mobile - numéro abonné
                    // indicatif pays - indicatif operateur réseau - numéro de l'abonné
                }
            ]
        },
        {
            title: 'Question ODI',
            content: 'Avec quelle(s) api(s) peut-on récupérer le prénom de l\'utilisateur ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //hparties
                }
            ]
        },
        {
            title: 'Question Equipe',
            content: 'Que fait l\'équipe CIFRA ?',
            image: `${require('../images/cifra.jpg')}`,
            objectFit: 'contain',
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //équipe anti-fraude
                    //Controle Interne Fraude Revenue Assurance
                },
            ]
        },
        {
            title: 'Question VULKAN',
            content: 'En quoi consiste le Honey Pot développé par l\'équipe VULKAN ?',
            color: '#FF7A00',
            image: `${require('../images/hpot.gif')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue"
                    //système permettant de récupérer des comptes compromis.
                    //sur certains status blacklist du trust, le parcours IDME autorise à aller plus loin pour avoir la saisie du login+pwd
                    // dans les mains d'un pirate. Si le login + pwd sont corrects, le compte est envoyé à l'équipe Vulkan puis à TACC pour bloquer le compte et notifier le client
                    // sujet de Seb G : ressaisie du mdp pour avoir le 90 ? Cohérence ?
                },
            ]
        },
        {
            title: 'Acronyme',
            content: 'Que signifie DGP (entité Orange) ?',
            image: `${require('../images/blank.png')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //Direction Grand Public
                }
            ]
        },
        {
            title: 'Question DORY',
            content: 'A votre avis, combien de commits, Seb E a-t-il effectué sur la branche develop de lost-api ?',
            image: `${require('../images/dory.jpg')}`,
            possibleAnswers: [
                {
                    content: "Réponse directe attendue" //530, le 1er le 24 juillet 2018
                },
            ]
        },
    ]
