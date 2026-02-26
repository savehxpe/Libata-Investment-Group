# Theo_Ryffel_Phd_Thesis_Manuscript_VDEF.pdf

Préparée à l’École Normale Supérieure de Paris 

### Cryptography for Privacy-Preserving Machine Learning 

Soutenue par 

Théo Ryffel Le 23 Juin 2022 

École doctorale no386 Sciences Mathématiques de Paris Centre 

Spécialité Informatique 

Composition du jury : 

Aurélien Bellet INRIA Lille Rapporteur 

Yuval Ishai Technion Rapporteur 

Renaud Sirdey CEA Président du jury 

Mariya Georgieva Inpher Examinatrice 

Laurent Massoulié INRIA, ENS, PSL, Paris Examinateur 

Jonathan Passerat-Palmbach Imperial College London Examinateur 

David Pointcheval ENS, CNRS, PSL, Paris Directeur de thèse 

Francis Bach INRIA, ENS, CNRS, PSL, Paris Directeur de thèse

# Résumé 

L’usage sans précédent du machine learning (ML) ou apprentissage automatique, motivé par les possibilités qu’il apporte dans un grand nombre de secteurs, interroge de plus en plus en raison du caractère sensible des données qui doivent être utilisées et du manque de transparence sur la façon dont ces données sont collectées, croisées ou partagées. Aussi, un certain nombre de méthodes se développent pour réduire son intrusivité sur notre vie privée, afin d’en rendre son usage plus acceptable notamment dans des domaines tels que la santé, où son potentiel est encore très largement sous-exploité. 

Cette thèse explore différentes méthodes issues de la cryptographie ou plus largement du monde de la sécurité et les applique au machine learning afin d’établir des garanties de confi-dentialité nouvelles pour les données utilisées et les modèles de ML. 

Notre première contribution est le développement d’un socle technique pour implémenter et expérimenter de nouvelles approches au travers d’une librairie open-source nommée PySyft. Nous proposons une architecture modulaire qui permet à chacun et chacune d’utiliser les briques de confidentialité nécessaires selon son contexte d’étude, ou encore de développer et d’interfacer de nouvelles briques. Ce socle sert de base à l’ensemble des implémentations proposées dans cette thèse. 

Notre seconde contribution consiste à mettre en lumière la vulnérabilité des modèles de ML en proposant une attaque qui exploite un modèle entraîné et permet de révéler des attributs confidentiels d’un individu. Cette attaque pourrait par exemple détourner un modèle qui recon-naît le sport fait par une personne à partir d’une image, pour détecter les origines raciales de cette personne. Nous proposons des pistes pour limiter l’impact de cette attaque. 

Dans un troisième temps, nous nous intéressons à certains protocoles de cryptographie qui permettent de faire des calculs sur des données chiffrées. Une première étude propose un pro-tocole de chiffrement fonctionnel qui permet de réaliser des prédictions grâce à un petit modèle de ML à partir de données chiffrées et de ne rendre public que la prédiction. Une seconde étude porte sur l’optimisation d’un protocole de partage de secret fonctionnel, qui permet d’entraîner ou d’évaluer un modèle de ML sur des données de façon privée, c’est à dire sans révéler à quiconque ni le modèle ni les données. Ce protocole offre des performances suffisantes pour utiliser des modèles qui ont une utilité pratique dans des tâches non triviales comme la détec-tion de pathologies dans les radiographies de poumons. 

Dans un dernier temps, nous intéressons à la confidentialité différentielle qui permet de limiter la vulnérabilité des modèles de ML et donc l’exposition des données qui sont utilisées lors de l’entraînement, en introduisant une perturbation contrôlée. Nous proposons un protocole et démontrons qu’il offre notamment la possibilité d’entraîner un modèle lisse et fortement convexe en garantissant un niveau de confidentialité indépendant du nombre d’accès aux données sensibles lors de l’entraînement. 

Mots clés : Apprentissage Automatique, Apprentissage Fédéré, Chiffrement Fonctionnel, Calculs Multipartites, Partage de Secret Fonctionnel, Confidentialité Différentielle, Intégrité Contextuelle

# Abstract 

The ever growing use of machine learning (ML), motivated by the possibilities it brings to a large number of sectors, is increasingly raising questions because of the sensitive nature of the data that must be used and the lack of transparency on the way these data are collected, com-bined or shared. Therefore, a number of methods are being developed to reduce its impact on our privacy and make its use more acceptable, especially in areas such as healthcare where its potential is still largely under-exploited. 

This thesis explores different methods from the fields of cryptography and security, and ap-plies them to machine learning in order to establish new confidentiality guarantees for the data used and the ML models. 

Our first contribution is the development of a technical foundation to facilitate experimenta-tion of new approaches, through an open-source library named PySyft. We propose a modular architecture that allows one to pick the confidentiality blocks necessary for one’s study, or to de-velop and easily integrate new blocks. This library is reused in all the implementations proposed in this thesis. 

Our second contribution consists in highlighting the vulnerability of ML models by proposing an attack that exploits a trained model to reveal confidential attributes of an individual. This attack could, for example, subvert a model that recognizes a person’s sport from an image, to detect the person’s racial origins. We propose solutions to limit the impact of this attack. 

In a third step, we focus on some cryptographic protocols that allow us to perform computa-tions on encrypted data. A first study proposes a functional encryption protocol that allows to make predictions using a small ML model over encrypted data and to only make the predictions public. A second study focuses on optimizing a functional secret sharing protocol, which allows an ML model to be trained or evaluated on data privately, i.e. without revealing either the model or the data to anyone. This protocol provides sufficient performance to use models that have practical utility in non-trivial tasks such as pathology detection in lung X-rays. 

Our final contribution is in differential privacy, a technique that limits the vulnerability of ML models and thus the exposure of the data used in training by introducing a controlled perturbation. We propose a new protocol and show that it offers the possibility to train a smooth and strongly convex model with a bounded privacy loss regardless of the number of calls to sensitive data during training. 

Keywords: Machine Learning, Federated Learning, Functional Encryption, Multi-Party Computation, Function Secret Sharing, Differential Privacy, Contextual Integrity

# Acknowledgments 

Je me retourne avec un certain vertige sur ces trois années et demie de thèse qui s’achèvent, laissant derrière elles une densité de souvenirs et de rencontres que ces remerciements ne pourront probablement pas restituer à leur juste valeur. Pourtant, je mesure la chance immense qui m’a été accordée de pouvoir réaliser ce projet, secoué comme tant d’autres par la pandémie, et je souhaite vous remercier tous et toutes pour le soutien que vous m’avez apporté, de mille manières différentes mais toujours aussi précieux. 

Je souhaite tout d’abord exprimer ma profonde reconnaissance à David Pointcheval et Fran-cis Bach qui m’ont soutenu et guidé tout au long de cette thèse. Le souvenir de nos premiers échanges reste gravé dans ma mémoire, comme cette matinée à l’Inria où Francis il me semble avoir lu dans tes yeux « et puis au fond pourquoi pas » lorsque je te présentais mon projet icono-claste. En plus du temps que vous avez chacun pris pour me former –moi qui avais soigneusement évité les cours de cryptographie–, de votre réactivité sans faille pour répondre à mes questions à toute heure du jour et de la nuit, vous m’avez ouvert de nombreuses portes, me présentant à de nombreux chercheurs et chercheuses, m’envoyant présenter mes travaux à plusieurs évènements et dans une revue ; cette confiance m’honore profondément. Je garde enfin un souvenir riant de ces décalages entre les exigences de la cryptographie et celles de l’apprentissage automatique qui animaient nos sessions de travail et j’espère pouvoir continuer ces débats avec vous. 

Je remercie très spécialement Jonathan Palmbach-Passerat qui m’a encadré lors de ma thèse de master à Londres et a fait germer en moi la passion qui a été la mienne pour le sujet de ce manuscrit. Qui aurait cru que ce projet sobrement intitulé « Federated machine learning on medical data using blockchain » saurait me convertir à une thèse ? Je te remercie une seconde fois d’avoir accepté de prendre part à mon jury, bouclant ainsi la boucle commencée il y a quatre ans. 

I would also like to thank Yuval Ishai and Aurélien Bellet who have accepted to be rapporteurs on this manuscript. Their comments and suggestions have been of a precious help and I hope the reading hasn’t been too tedious, some chapters being much more cryptography focused and some others more centered around differential privacy or federated learning. Aurélien, I’ve been told that I have the privilege of your first thesis manuscript review, thank you for this! I also sincerely thank Renaud Sirdey, Laurent Massoulié and Mariya Georgieva who also compose the jury. Having your insights both from the academic and industry world is very precious to me. 

Je remercie également l’ensemble des membres de l’équipe crypto de l’ENS avec qui j’ai eu le privilège de travailler, notamment Anca qui m’a montré que la cryptographie pouvait être aussi féérique qu’un livre de contes, Antoine, Aurélien qui a terminé sa thèse peu après mon arrivée me donnant une idée de à quoi ressemblait le produit fini, Azam, Balthazar, Baptiste, Brice, Céline, Chloé pour m’avoir transmis la passion des aquariums et pour les innombrables con-seils notamment pour surmonter les différents écueils administratifs, Geoffroy pour tes précieux conseils en FSS, Georg, Guillaume, Hoeteck, Hugo, Huy, Huyen, Jérémy, Jianwei, Ky, Lénaïck, Léonard, Louiza, Mélissa, Michael, Michel pour le soutien indéfectible à mon addiction au café, Michele pour avoir partagé notre petit bureau et pour les expériences toujours troublantes à base de cartes de cantine, Paul, Paola pour avoir repris le flambeau de Michele (mais sans les cartes), Phong, Pierrick, Pooya, Quentin, Robert, Romain pour cette clématite qui n’était vrai-

ment pas en forme et à laquelle j’ai prodigué tant de soins avant qu’elle n’expire, et Xiaxi. Je remercie aussi l’ensemble de l’équipe administrative qui ont tant oeuvré, souvent en coulisse, pour que nous puissions travailler dans d’excellentes conditions, notamment Lise-Marie Bivard, Linda Boulevart, Martine Girardot, Sophie Jaudon, Valerie Mongiat, Nathalie Gaudechoux pour sa bonne humeur inaltérable même au plus profond de l’hiver, ainsi que Jacques Beigbeder et Ludovic Ricardou au SPI. 

I would also like to deeply thank the OpenMined community with which I have lived one of the biggest adventures of my life. From discovering the world of open-source, learning to code according to the best practices, discovering collaboration across 4 continents, 24/24 7/7, to managing a team of highly motivated volunteers, this journey has been rich in precious learning lessons. Thanks Andrew for fueling OpenMined with your amazing energy and your good vibes. Thanks Bobby, Jason, Morten, Patrick for putting up the first blocks together. And last but not least, a big thank to all cryptography team, including Pierre Tholoniat, George Muraru, Rasswanth S, Hrishikesh Kamath, Arturo Marquez, Yugandhar Tripathi, S P Sharan, Nicolas Remerscheid, Jason Paumier, Muhammed Abogazia, Alan Aboudib, Ayoub Benaissa, Sukhad Joshi and many others. 

Je tiens à remercier l’ensemble d’Arkhn qui m’a accompagné depuis trois ans, et tout parti-culièrement Alexis, Corneliu et Emeric avec qui tout a commencé. J’ai conscience de la chance qui a été la mienne de pouvoir travailler sur mes problématiques de recherche tout en restant proche du terrain, notamment auprès des hôpitaux, et je sais que cela n’aurait pas été possible sans le travail acharné de notre formidable équipe. Vous êtes incroyables. 

Je remercie également l’ensemble de mes amis et camarades de longue date, qui ont parfois essuyé les externalités inhérentes au travail doctoral : l’Orlins crew, le clan corse, la team Saint-Louis, le Binet Marais, l’équipée aventureuse du Styx, les fistons, les Bons Entendeurs, vous vous reconnaîtrez j’en suis certain. 

Enfin, je tiens à remercier les plus grands artisans de cette thèse, ma famille, qui par une double action coordonnée de soutien et de persuasion, ont su me mettre sur les rails de la recherche. Sans sarcasme et sans moquerie : merci, ça en valait la peine ! Marianne, merci pour ton soutien sans faille depuis quatre ans, il me semble que tes forces sont sans limites lorsque les miennes viennent à manquer. 

A celles et ceux que je n’ai pas mentionné, je suis un ingrat et vous méritez une bière.

# Contents 

Résumé i 

Abstract iii 

Acknowledgments v 

1 Introduction 1 1.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 

1.1.1 Privacy Through Contextual Integrity . . . . . . . . . . . . . . . . . . . . 2 1.1.2 Federated Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 1.1.3 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 1.1.4 Encrypted Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 

1.2 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 1.3 Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 

2 Preliminaries 11 2.1 Definitions and Notations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.2 Adversary Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 2.3 Functional Encryption . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 

2.3.1 Generic Notions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 2.3.2 Security . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.3.3 Computational Assumptions . . . . . . . . . . . . . . . . . . . . . . . . . 15 

2.4 Machine Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 2.5 Multi-Party Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 

2.5.1 Generic Notions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 2.5.2 Secret Sharing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.5.3 Preprocessing Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 

2.6 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 

3 Initial Building Blocks 23 3.1 PySyft Core Privacy Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 

3.1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 3.1.2 Privacy and Federated Learning . . . . . . . . . . . . . . . . . . . . . . . 24 3.1.3 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 3.1.4 Secure Multi-Party Computation . . . . . . . . . . . . . . . . . . . . . . . 26 

3.2 PySyft Implementation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 3.2.1 A Framework to Abstract Operations on Tensors . . . . . . . . . . . . . . 29 3.2.2 Application to Additive Secret Sharing . . . . . . . . . . . . . . . . . . . . 31 3.2.3 Actions, Plans and Protocols . . . . . . . . . . . . . . . . . . . . . . . . . 32 

3.3 PySyft Literature Review and Use Cases . . . . . . . . . . . . . . . . . . . . . . . 33 3.3.1 Comparisons with other Frameworks . . . . . . . . . . . . . . . . . . . . . 33 3.3.2 Use Case: Benchmarking and Standardizing Federated Learning Systems 33

3.3.3 Use Case: Federated Learning on Edge Devices . . . . . . . . . . . . . . . 34 3.3.4 Use Case: Healthcare and Medical Research . . . . . . . . . . . . . . . . . 34 3.3.5 Use Case: Finance, Business or Industry . . . . . . . . . . . . . . . . . . . 35 3.3.6 Use Case: Anomaly Detection . . . . . . . . . . . . . . . . . . . . . . . . . 35 

3.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 

4 Privacy Attacks in Machine Learning 37 4.1 Data Privacy Attacks on Neural Networks . . . . . . . . . . . . . . . . . . . . . . 37 

4.1.1 Membership Inference Attacks . . . . . . . . . . . . . . . . . . . . . . . . 37 4.1.2 Model Inversion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 

4.2 Collateral Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 4.2.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 4.2.2 Private Inference Setting . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 4.2.3 Defeating Collateral Learning . . . . . . . . . . . . . . . . . . . . . . . . . 42 4.2.4 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 

5 Private Evaluation and Training of Neural Networks 47 5.1 Partially Encrypted Machine Learning using Functional Encryption . . . . . . . . 48 

5.1.1 Background on Functional Encryption . . . . . . . . . . . . . . . . . . . . 49 5.1.2 Our Context for Private Inference . . . . . . . . . . . . . . . . . . . . . . 50 5.1.3 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 5.1.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 

5.2 AriaNN: Low-Interaction Privacy-Preserving Deep Learning via FSS . . . . . . . 54 5.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54 5.2.2 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 5.2.3 Function Secret Sharing Primitives . . . . . . . . . . . . . . . . . . . . . . 58 5.2.4 Application to Deep Learning . . . . . . . . . . . . . . . . . . . . . . . . . 68 5.2.5 Extension to Private Federated Learning . . . . . . . . . . . . . . . . . . . 72 5.2.6 Experiments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73 5.2.7 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78 

6 Differential Privacy Guarantees for Stochastic Gradient Langevin Dynamics 79 6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 6.2 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81 6.3 Privacy Analysis of Noisy Stochastic Gradient Descent . . . . . . . . . . . . . . . 81 

6.3.1 Tracing Diffusion for DP-SGLD . . . . . . . . . . . . . . . . . . . . . . . . 82 6.3.2 Privacy Erosion in Tracing (Langevin) Diffusion . . . . . . . . . . . . . . 83 6.3.3 Privacy Guarantee for DP-SGLD . . . . . . . . . . . . . . . . . . . . . . . 83 

6.4 Utility Analysis for Noisy Stochastic Gradient Descent . . . . . . . . . . . . . . . 87 6.4.1 Fixed Step Size η . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87 6.4.2 Decreasing Step Size ηk . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91 

6.5 Experiments: Application to Logistic Regression . . . . . . . . . . . . . . . . . . 95 6.6 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97 

7 Conclusion 99 7.1 Summary of the Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99 7.2 Applications in Healthcare . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100 

7.2.1 Technical: Heterogeneity of Healthcare Data . . . . . . . . . . . . . . . . 100 7.2.2 Regulatory: a Robust but Rigid Framework . . . . . . . . . . . . . . . . . 101 7.2.3 Cross Domain Expertise . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102 

7.3 Perspectives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

A Private evaluation and training of neural networks 105 A.1 Partially Encrypted Machine Learning using Functional Encryption . . . . . . . . 105 

A.1.1 Our Quadratic Functional Encryption Scheme - Proofs . . . . . . . . . . . 105 A.1.2 Additional Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107 A.1.3 Security Proof of our FE Scheme . . . . . . . . . . . . . . . . . . . . . . . 108 

A.2 AriaNN: Low-Interaction Privacy-Preserving Deep Learning via FSS . . . . . . . 114 A.2.1 Encoding Precision . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114 A.2.2 Implementation Details . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114 A.2.3 Extended Results about Private Inference . . . . . . . . . . . . . . . . . . 116 A.2.4 Datasets and Networks Architecture . . . . . . . . . . . . . . . . . . . . . 117 

B Differential Privacy Guarantees for Stochastic Gradient Langevin Dynamics119 B.1 Smoothness and Convexity of Multinomial Logistic Regression . . . . . . . . . . 119 B.2 Datasets and Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120

Chapter 

# 1 Introduction 

Chapter content 1.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 

1.1.1 Privacy Through Contextual Integrity . . . . . . . . . . . . . . . . . . . 2 1.1.2 Federated Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 1.1.3 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 1.1.4 Encrypted Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 

1.2 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 1.3 Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 

1.1 Motivation Whatever our opinion of machine learning, it is already part of our everyday life. When we write a message on our phone, an algorithm suggests the next word we might need. When we visit a website, moments before the page is displayed, a lightning auction takes place between different advertisers who analyze our user profile and determine the ad most likely to capture our attention. When watching a series, film or music video, the application makes its best recommendations for us to keep watching. Despite these chilling examples, there are also more socially beneficial applications, from helping to clean up pollution by identifying garbage using aerial images, to preventing infrastructure failures or leaks, to helping diagnose patients in hospitals. Let’s look at this last example, because the healthcare sector is very specific. Indeed, while it is one of those where machine learning could have the greatest societal impact, it is nevertheless the one where it is the least present. Why this paradox? A diversion into the origins of machine learning will help us understand it better. 

Machine learning actually refers to a large number of techniques and we will focus on deep learning, which is particularly widespread for image analysis. It was conceptualized in the 1950s by analogy with the human brain, and took its current form in the 1980s thanks to the work of John Hopfield [Hop82] and Geoffrey Hinton [RHW86]. The latter defined modern deep learning models, also known as neural networks. The idea of neural networks is to process information (should it be text, images, etc.) through a series of interconnected layers of neurons. It took almost 30 years from these early ideas for neural networks to become popular. Two factors explain this period of hibernation: computing power and available data. Indeed, to be properly trained, neural networks must learn from a large number of examples. The more data there is, the better the network learns; and the bigger the network is, the more complex tasks it can perform, which in turn requires a lot of computation. 

It is precisely these two barriers - computing capacity and availability of data - that are being lifted around 2010 in many sectors. On the one hand, the continuous progress in the computational performance of computers, which doubled every two years on average between 1975 and 2015 (the so-called Moore’s law), has made it possible to achieve sufficient power to

train deep networks on non-trivial tasks. On the other hand, the rise of home computing and the Internet has made it possible to collect large amounts of data that can be used to perform complex learning tasks. For example, the ImageNet image database, resulting from the collection and annotation of more than 14 million images on the Internet, was published for the first time in 2009 [DDS+09] and has served as a reference for the development of many neural networks in the field of imaging. As a result, research work has multiplied and the sectors where a lot of data was available have also benefited from these advances by investing heavily in the analysis of their data. The AI market is estimated by IDC to be worth 340 billion US dollars in 2021, with an estimated growth of 19% for 2022. 

However, other sectors such as healthcare have not followed this trajectory. In France for example, each healthcare institution is responsible for storing its health data and the IT system varies greatly from one institution to another. Access to health care data is also highly regulated, and must be done on a case-by-case basis, both for clinical research teams and for companies specializing in AI. This leads to the following paradox that one can rely on public databases containing millions of images to train a model detecting cat species. But to solve public health problems such as the study of depressive behavior, the cohorts available rarely exceed hundreds of individuals. However, the data exists, whether it be medical records, but also email content or bank statements that could be useful for this type of study, but the information is "siloed": it is not shared because the risks of malicious use are too high. From this point of view, the big data revolution in healthcare has not yet happened. 

GDPR The General Data Protection Regulation (GDPR), which entered into effect in 2018 in the European Union (EU), redefines and extends the concept of health data. This includes not only medical history, diagnoses, exam results or treatments, but also any information that identifies a person for health purposes (such as a patient identifier). It requires the explicit consent of individuals to the collection and processing of their data for a reason that must be specified and legitimate: it cannot be re-used at a later date for other purposes. Finally, the RGPD indicates that any information system or database must take into account the notion of respect for privacy from the outset and restrict access to designated persons. It strengthens the power of national administrative authorities of EU members like the CNIL in France to impose sanctions on companies in the event of non-compliance, up to 4% of global turnover. 

1.1.1 Privacy Through Contextual Integrity 

The absolute necessity of protecting health data, as enshrined in the GDPR, is non-negotiable. It is therefore a question of finding a framework that ensures data security while allowing inno-vation, with the promise of being able to achieve unparalleled advances through the exploitation of data on a national scale. This observation is now shared by many actors, but it requires finding solutions adapted to such a sensitive subject. The controversies surrounding the French Health Data Hub illustrate this well: this is a government initiative that consists of centralizing and facilitating access to French healthcare data for research projects, and which is criticized [PU19, FH19], among other things, for having a scope that is too broad and for storing the data on a cloud belonging to a American company. In the light of this example, it is important not to oppose innovation and respect for privacy. One should not see innovation as a forced march for which necessary sacrifices on privacy are needed, or on the contrary consider that privacy consists of locking up all personal information. 

To reconcile diverging visions, we can revisit privacy from the perspective of contextual in-tegrity [Nis04] as conceived by Helen Nissenbaum. Privacy is respected when an information flow from one individual to another via a dedicated channel is appropriate, with respect to the

person concerned, the sender, the recipient, the type of information and the transmission princi-ple. For example, someone sending his own medical report to his doctor via a secure messaging system is probably an appropriate flow of information, which does not harm the patient’s pri-vacy. Replace now the doctor with the employer, or the secure messaging app with a public communication channel and the flow of information becomes much more problematic. In other words, according to Helen Nissenbaum, privacy is exercised not by locking up one’s data but by sharing it appropriately, revealing only to legitimate actors the information they need to have. This approach disrupts the usual notion of privacy, as having channels to exchange appropriate information flows not only limits the negative effects of inappropriate information dissemination, it also enhances information sharing where it is legitimate. Through such channels, it becomes possible for institutions to collaborate by sharing only what is necessary, without having to expose all their data and risk it being copied or misused. 

Our motivation throughout this thesis is to explore several privacy-preserving techniques in the context of machine learning and to link them with the notion of contextual integrity. More specifically, we detail three techniques that can be used separately or jointly depending on the context: federated learning, differential privacy and computation on encrypted data. To illustrate our discussion, we will take the example of a laboratory that wants to train a model to help detect pneumonia in patients from lung imaging data owned by several institutions. This example will accompany us throughout this introduction to relate to a concrete case. 

1.1.2 Federated Learning 

The standard method for this type of task is to import all the images to a central server to train the model. This poses several problems. The first is that, in relation to the desired task (detecting whether a patient has pneumonia), the information flow is not necessarily appropriate as it may not be useful to transfer all the lung imaging data. The second, more practical, is that it is complicated to transfer large amounts of data such as imaging, and the question of where to store it is a thorny one: should it be stored on a cloud? If so, a national cloud or not? If not, which institution should be responsible for storing the data? 

Federated learning solves these questions by reversing the way things are done: it consists of leaving the data where it is hosted (in hospitals, for example) and sending the neural network there to be trained. The process works like this: say a model should be trained on data from three hospitals. A copy of the initial and untrained version of the model is first sent to each center to train locally on their data. After a certain learning period, each center sends back its model to a central server. Models are then aggregated to build a single neural network resulting from the training on the three centers, which is sent back to the centers. These two phases of local learning and aggregation alternate until sufficient performance is obtained for the aggregated model. 

Federated learning [MMR+17] builds upon a long line of research is distributed learning [VBT17, BT97, MR03], but differs in the sense that it exploits computing resources that are distributed because the data is intrinsically distributed. It has developed since 2017 under the influence of technology giants who first wanted to apply it to phones. One main use case is the prediction of the next word when writing text messages, for which transferring personal data to central servers would be unacceptable from a privacy standpoint. Today, this type of learning is applied in very different contexts, depending on whether few or millions of parties possess the data as in the case of telephones. This is a subject that is evolving very quickly and is the subject of active academic and industrial research in France and other countries. We have been involved in developing open-source tools for federated learning, including the pioneering PySyft library that we inspect more in depth in Chapter 3. The main challenges of this technique are the impact on bandwidth linked to the transfer of large models and the standardization of data. To reduce bandwidth usage, it is possible to transfer only certain layers

of the networks or to compress the model parameters, at the expense of the learning quality. Regarding standardization, it is necessary that the centers receiving the models have a uniform data model. Indeed, the model cannot adapt to the way the data are stored, which can be very different, as in the case of hospital information systems. 

Let us now take up the notion of contextual integrity as defined above and analyze the notion of federated learning from this perspective. It is not necessary to expose the data directly because it is ultimately the model and its ability to aid diagnosis that we want to extract. The information flow is therefore composed of the versions of the model updated by the different stakeholders. The aggregation of these versions is done either by the parties directly or by a third party central server. The question is therefore whether it is acceptable for a third party or the parties involved in the learning process to have access to the final model. Behind this question lies another: is it possible for the model to reveal more information than it was designed for? In particular, can it reveal specific information about the data on which it was trained, the same data that it was decided not to expose? The answer is yes. Due to their very large size (several million of parameters), models can store specific information about certain training data, even if they have not been overexposed to this data (so-called overfitting). Studies have looked at the various pieces of information that can be extracted from these models, ranging from straightforward reconstruction of certain training data [FJR15] to more subtle manipulations such as identifying whether a piece of data was in the training set or not [SSSS17]. We also have formalized in Chapter 4 an attack that exploits trained models to infer specific private attributes about data provided for a given prediction task. Aware of the ability of some models to leak sensitive information, the acceptability of such leakage depends on the context of stakeholder collaboration. In our example, if we only consider hospitals that could have directly shared together their data, it is likely that such leaks would not compromise patient privacy, as long as the model is not made public or shared with other stakeholders or companies. 

In some situations, the model needs to be widely shared or published, such as for a mobile melanoma detection application that would not export the images to servers. In this case, a second technique needs to be implemented to resist the extraction attacks just mentioned. This means taking data protection a step further by using differential privacy. 

1.1.3 Differential Privacy 

Differential privacy [DMNS06] in its current form was theorized in 2006 by Cynthia Dwork, Frank McSherry, Kobbi Nissim and Adam Smith. It can be formalized as follows: an algorithm achieves a certain level of differential privacy, if, given two arbitrary datasets as input that differ by only one individual, its output distribution differs by at most a certain margin. The intuition behind the formula they proposed is that adding or removing an individual from a dataset should not significantly alter the behavior of an algorithm that respects differential privacy. This means that an individual alone should not have any influence on the algorithm. In other words, the algorithm should reveal as little information as possible about a single individual. 

The concept of differential privacy applies not only to machine learning but also to other fields such as statistics in general and to any aggregation process on databases of individuals. Techniques for obtaining differential privacy are usually based on the addition of random noise. Let’s take the example of a sociological study on the religious practices of a population, which leverages randomized response [War65]. Each person is asked whether they are religious or not, but before they do so, they are asked to toss a coin twice without anyone else being able to see the result. If they get "heads" on the first toss, they must give their true answer, and if they get "tails", they should answer randomly according to the second toss. If the study is carried out on a large number of people, and we obtain for example 60% of people who say that they are believers, as we know that half of the people questioned answered randomly and the other half answered honestly, we deduce that the real proportion of believers is 70%. Thus the result of

the study is preserved, but it is not possible to know whether a particular person is a believer or not. This notion is also known as plausible deniability. 

In order to understand how differential privacy can be applied to deep learning, let’s go back to the way neural networks are trained. To train a network given an objective and a loss function, we often use stochastic gradient descent, a method that updates the model parameters in the opposite direction of their contribution to the loss, with the aim of iteratively reducing the loss i.e. the gap between predictions and the objective. Differential privacy is applied during the parameters update, by adding some extra Gaussian noise [ACG+16]. The variance of this noise is finely calibrated to obtain the right level of confidentiality, to ensure the required privacy level without perturbing too much the training procedure and hurting the model accuracy. The reduction in model performance is indeed one of the major drawbacks of this method, as it can make the model much less relevant in practice. We analyze in Chapter 6 one particular approach of training models with differential privacy based on Langevin diffusion and show that it provides promising trade-offs for simple tasks. 

Confidentiality can be further increased by combining federated learning and differential privacy. For example, differential privacy can be used in the local training phase by each center. Returning to our healthcare data example, if the laboratory actually wants to re-use the model outside of the hospital centers that participated in the training, combining the two methods ensures that the training data cannot be compromised, either directly or indirectly by exploiting the neural network. One last point remains to be addressed: let us imagine that the laboratory does not wish to make the model visible to the institutions that contribute to training, for example for intellectual property reasons, or because it has already been pre-trained elsewhere and represents a strategic product on which it wishes to retain exclusivity. In this case, the contextual integrity of the model may be compromised: we would therefore like to be able to encrypt the model before sharing it with the parties and do the training in a fully encrypted way. 

1.1.4 Encrypted Computation 

There are three main techniques for computing over encrypted data that we have explored throughout this thesis and particularly in Chapter 5: homomorphic encryption, functional en-cryption and multi-party computation. Let’s take a quick look at each of these techniques to illustrate how they work. 

Homomorphic encryption is based on computational security, meaning that decrypting ci-phertexts (i.e. the objects that encode the secrets) from this protocol would be equivalent to solving a cryptographic problem which is known to be difficult or intractable. The Paillier cryp-tosystem [Pai99] for example, proposed in 1999 by the cryptographer Pascal Paillier, is based on the difficulty of factoring a number N formed by the product of two large prime numbers p and q. It is additively homomorphic, which means that it is possible to add two private values only by manipulating their ciphertexts without learning anything about the underlying values. Evaluation of circuits including an arbitrary number of additions and of multiplications was first proposed by Craig Gentry [Gen09]. This fully homomorphic encryption (FHE) protocol implements circuits of unbounded length by using a bootstrapping operation. In practice, the scheme relies on noisy ciphertexts, whose noise increases at each multiplication until it becomes too large to allow decryption. Bootstrapping acts as a procedure to periodically refresh the ciphertext to remove the noise without revealing the underlying intermediate results. 

The interesting characteristic about homomorphic encryption is that it allows us to delegate an entire calculation without having to intervene except for the final decryption. For example, in our example, we could imagine that the laboratory encrypts the parameters of the model and sends a copy to each hospital so that it can train it on its data. Or the other way around, if the hospital does not have the necessary computing power. Indeed, current implementations for

fully homomorphic encryption remain quite costly in terms of compute time even if significant improvements such as [CGGI16] have been proposed upon the initial work [Gen09]. 

Second, functional encryption [BSW11] is also based on computational assumptions but it differs from homomorphic encryption since it combines the computation step with the decryp-tion step. In other words, given an encrypted input, a function can be applied and the result automatically decrypted without requesting decryption to the input owner. This owner main-tains its ownership by selecting the functions that can be applied on its input. One classic example of functional encryption is the spam filtering done by an email server. If granted the appropriate key, the server can apply a spam detection function on an encrypted email and only decrypt whether the email is likely a spam or not. 

Last, multi-party computation [GMW87] consists of jointly computing a function between several parties while keeping the input of each party private. One family of multi-party compu-tation techniques is based on secret sharing. The simplest sharing method is additive sharing and works as follows: given a value, say a salary, two completely random shares are constructed in a large space (such as the space of 64-bit encoded integers), so that their sum is equal to the initial value. Each share is distributed to a different party, which means that each party only receives a random number that reveals nothing of the secret value. To reconstruct it, the parties have to pool and add up their shares. This secret sharing method also makes it pos-sible to calculate sums over secret values: it is simply a matter of each party calculating the sum of the shares of the values it owns. It is also possible to construct more than 2 shares, in order to share the secret between an arbitrary number of parties. Thus, it would be possible to easily calculate an average of n wages without revealing any particular wages. But the more parties are involved, the more likely it is that one of the parties will leave the protocol and make reconstruction impossible. Thus, protocols that resist defection by n− k of the n parties involved have been developed. For example, the cryptographer Adi Shamir proposed the so-called Shamir secret sharing [Sha79], which consists of encoding a secret as the fixed coefficient of a polynomial of degree k − 1, and giving each party an evaluation of the polynomial at a different point. Thanks to this construction, k parts are sufficient to reconstruct the polynomial by Lagrangian interpolation and thus to identify its fixed coefficient. This protocol is detailed in the preliminary chapter 2. 

Multiplication and comparison operators are crucial for modeling neural networks. However, they require the different parties to communicate with each other, making the number of ex-changes needed an important criterion when choosing a secret sharing protocol. In this thesis, we have explored function secret sharing protocols that were based on the work of [BGI15]. Function secret sharing is a protocol that can be used to drastically reduce the number of in-teractions for private comparison. Indeed, we can accelerate the calculations using specialized hardware such as GPUs but we are limited in the exchanges by the speed of light which means that data will never transit between Paris and San Francisco in less than 30ms. In practice, the latency is even 150ms, which means that each interaction eliminated offers a directly measur-able gain. Chapter 5 presents AriaNN, a framework that leverages function secret sharing to implement comparison with a single interaction, at the expense of larger computations that are accelerated using GPUs. 

The choice of the cryptographic protocols to use is therefore once again a function of the context: it is not useful to apply excessive constraints if the risks can legitimately be considered limited, especially since the extra cost associated with certain protections may be prohibitive for learning tasks that are already computationally intensive in clear text. Finally, encryption can be used in isolation or as a complement to other techniques, and Chapter 6 illustrates how differential privacy and multi-party computation can be used in synergy. 

However, despite all these available techniques, protecting data cannot be an end in itself, as it would then be in opposition to any scientific progress. Data protection must be exercised as

a means to share data and to strengthen collaboration between all actors. Helen Nissenbaum’s approach of analyzing privacy through the notion of contextual integrity is not the only way to address this issue, but she defends the vision that the development of privacy-preserving methods will not lead to a society of secrecy but to a society of cooperation. 

1.2 Contributions 

Following this goal of exploring several approaches to implementing privacy in machine learning, we have included in this thesis results that belong to quite different fields, but we expect that the prism of contextual integrity sheds light on how all these domains are facets of the same solution. 

More specifically, the results in this manuscript are mainly issued from the following papers, which are already published or still in the reviewing process. 

PySyft: A Library for Easy Federated Learning [ZTL+21]. This article is more precisely a chapter of the Springer book "Federated Learning Systems" published in 2021. It builds upon two preliminary articles [RTD+18] and [HJC+21], respec-tively presented at the NeurIPS 2018 workshop on Privacy-Preserving Machine Learning and the ICLR 2021 workshop on Distributed and Private Machine Learning. In this paper, we provide insights on the implementation principles we chose when building the PySyft li-brary, to be able to simultaneously use federated learning with encrypted computation and differential privacy. We propose a modular architecture centered around the notion of ten-sor and show how external open-source contributors can easily integrate future protocols into this library. 

Partially encrypted machine learning using functional encryption [RPB+19]. In this article, we propose a practical framework to perform partially encrypted and privacy-preserving inference which combines adversarial training and functional encryp-tion. We first present a new functional encryption scheme to efficiently compute quadratic func-tions so that the data owner controls what can be computed but is not involved in the calculation: it provides a decryption key which allows one to learn a specific function eval-uation of some encrypted data. We show how to use it in machine learning to partially encrypt neural networks with quadratic activation functions and perform inference. We provide an analysis of the information leaks by studying indistinguishability of data items of the same label. To this aim, we introduce a new image dataset made of distorted print characters that can either be classified by font or by letter. Second, we propose a training method to prevent selected sensitive features from leaking, which adversarially optimizes the network against an adversary trying to identify these features. Several existing works using partially encrypted machine learning cannot deal with the last thresholding operation used for classification, which could significantly reduce the leakage. For these works, this approach can be very interesting as it comes with little reduction on the model’s accuracy and significantly improves data privacy. This paper has been published in the proceedings of the NeurIPS conference in 2019. 

AriaNN: Low-interaction privacy-preserving deep learning via function secret shar-ing [RTPB22]. In this article, we propose AriaNN, which is a framework for private neural network train-ing and inference on sensitive data, whose particularity is to require very few interactions thanks to a new protocol for implementing comparison.

This protocol is semi-honest and involves 2 parties with a trusted dealer. It builds upon [BGI15] and leverages function secret sharing, a lightweight cryptographic protocol that allows for an efficient online phase. We design optimized primitives for the building blocks of neural networks such as ReLU, MaxPool and BatchNorm. For instance, we perform private comparison for ReLU operations with a single message of the size of the input during the online phase, and with preprocessing keys close to 4× smaller than previous work [BGI16]. We implement our framework in open-source, as an extensible system on top of PyTorch that leverages CPU and GPU hardware acceleration for cryptographic and machine learn-ing operations. We evaluate our end-to-end system for private inference between distant servers on standard neural networks such as AlexNet, VGG16 or ResNet18, and for private training on smaller networks like LeNet. We show that computation rather than commu-nication is the main bottleneck and that using GPUs together with reduced key size is a promising solution to overcome this barrier. This paper has been published in the proceedings of the PoPETS 2022 conference. 

Differential Privacy Guarantees for Stochastic Gradient Langevin Dynamics [RBP22]. In this paper, we analyze the privacy leakage of noisy stochastic gradient descent by mod-eling Rényi divergence dynamics with Langevin diffusions. Inspired by the recent work on non-stochastic gradient descent [CYS21], we derive similar desirable properties in the stochastic setting. In particular, we prove that the privacy loss converges exponentially fast for smooth and strongly convex objectives under constant step size, which is a very interesting property compared to previous DP-SGD analyses [ACG+16]. We also extend our analysis to arbitrary sequences of varying step sizes and derive new utility bounds. We propose an open-source implementation of this protocol and our experiments on various datasets show the practical utility of our approach compared to classical DP-SGD libraries. 

1.3 Outline This thesis is organized into seven chapters as follows: 

Chapter 1 is the present introduction. 

Chapter 2 is a preliminary chapter. It introduces core concepts informally presented in this introduction, together with notations that will be used in the next chapters. 

Chapter 3 presents our work on building a modular open-source library to implement privacy-preserving techniques for machine learning. It is based on the papers [RTD+18, HJC+21, ZTL+21] 

Chapter 4 proposes a new attack against trained models which consists of exploiting the output signal to infer private attributes of the input data. It is based on the second part of the paper [RPB+19]. 

Chapter 5 is divided in two parts. First we present and implement a quadratic functional encryption scheme which can be used for partially encrypted machine learning inference. Second, we provide a new framework based on function secret sharing for private inference and training. They are respectively based on the first part of [RPB+19] and on [RTPB22]. 

Chapter 6 explores synergies between differential privacy and private computation protocols like the ones presented in the previous chapter. It proposes a new protocol for differentially private stochastic gradient descent. It is based on the paper [RBP22].

Chapter 7 comes back to the notion of contextual integrity and discusses how the techniques discussed in this thesis could apply to the domain of healthcare. It concludes the manuscript with some open questions.

Chapter 

# 2 Preliminaries 

Chapter content 2.1 Definitions and Notations . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.2 Adversary Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 2.3 Functional Encryption . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 

2.3.1 Generic Notions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 2.3.2 Security . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.3.3 Computational Assumptions . . . . . . . . . . . . . . . . . . . . . . . . 15 

2.4 Machine Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 2.5 Multi-Party Computation . . . . . . . . . . . . . . . . . . . . . . . . . 17 

2.5.1 Generic Notions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 2.5.2 Secret Sharing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.5.3 Preprocessing Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 

2.6 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 

This preliminary chapter aims to fix the notations and to recall the basic notions we will use throughout this thesis. 

2.1 Definitions and Notations 

Set: A set is a collection of elements. a ∈ S denotes that the element a belongs to the set S. Two sets S and S′ are said equal (S = S′) if they contain the same elements. We denote by N the set of non-negative integers, and by Z the set of integers. We denote Zn the finite set of integers {k, k ∈ Z, 0 ≤ k < n}. For any finite set S, |S| refers to the number of elements in the set S. 

Cartesian Product: Let S1, . . . , Sn be n sets, with n ≥ 2. For all k, xk refers to an element of Sk. (x1, . . . , xn) is a tuple of elements of S1, . . . , Sn. We denote as S1 × · · · × Sn the cartesian product of S1, . . . , Sn, i.e. the set of all (x1, . . . , xn). 

Group: We denote by group (G, ∗) a set equipped with a law of composition ∗, which satisfies the following: the law ∗ is associative and admits a neutral element, every element of G has an inverse. (G, ∗) is said to be abelian if the law ∗ is commutative. For example, (Z, +) is an additive group. (Zn, +) is also an additive group for the addition operation modulo n, where modulo n refers to the remainder of the Euclidean division by n. 

Cyclic group: A cyclic group (G, ∗) is a finite group which can be completely generated by composing one of its elements g by itself using the group law, namely G = (1, g, g2, gp−1) for some p ∈ N. We say that g is a generator of G and that p is the order of the group. We write such a group G to indicate that it is cyclic.

Ring: We denote by ring (G, +,×) an abelian group (G, +) equipped with a law × which is associative and distributive with respect to the law +, and admits a neutral element. For example, (Zn, +,×) is an abelian ring. With a slight abuse of notation, this ring will be referred to as Zn. 

Bit string: By definition, {0, 1} = Z2. {0, 1}n, the cartesian product of n sets Z2 with n ∈ N, refers to the set of bit strings of length n. The bit decomposition of any element x of Z2n 

into a bit string of {0, 1}n is a bijection between Z2n and {0, 1}n. In particular, we denote by x[i] the i-th element of the bit decomposition of x, namely the i-th bit of x. When there is no confusion, we will use Z2n and {0, 1}n interchangeably. Additionally, we denote by {0, 1}∗ the set of all bit strings, which we can identify with N or Z. The symbol || is used to concatenate bit strings: if x ∈ {0, 1}m and y ∈ {0, 1}n, then x || y ∈ {0, 1}m+n. 

Vector, Matrix: A vector (x1, . . . , xn) of n elements of S is represented as x in bold, or sometimes x for more clarity. Similarly, a matrix of n rows and p columns is denoted M = (xi,j)i=1..n 

j=1..p . For any element g and vector x of n elements, we denote by gx the 

vector (gx1 , . . . , gxn), and by x · y the inner product x · y = ∑ i xiyi. 

Bilinear groups: Bilinear groups or pairings are used in cryptography like in functional encryp-tion. Let G1 and G2 be two cyclic groups of prime order p, respectively generated by g1 and g2, and GT another cyclic group of prime order p. A pairing e is a map e : G1×G2 → GT 

which is efficiently computable, non-degenerated and bilinear: e(gα 1 , gβ 

2 ) = e(g1, g2)αβ for any scalars α, β ∈ Z∗ 

p. We define gT := e(g1, g2) which spans the group GT of prime order p. 

2.2 Adversary Models Cryptography protocols like the ones defined in this thesis describe procedures for parties to compute over private data without having access to this data. When parties follow the protocol, it is guaranteed that the private data is not revealed. However, for some protocols, parties that deviate from the protocol can succeed in revealing all or part of the data. For other protocols, any deviation from the instructions can be detected and the computation aborted. The security of the protocols is therefore conditioned on some assumptions on what the adversaries can do, that we call the adversary model. We present here three main models. 

Semi-honest model: The semi-honest model [Gol09, Chapter 7.2.2] refers to adversaries that follow the protocol but will try to leverage any information gained as part of the protocol. That’s why we often refer to it as the honest-but-curious model. This model makes the strongest assumptions on the adversaries, and there are situations where such assumptions may not hold in practice. However, it allows for more lightweight and efficient cryptog-raphy, and can be a first step towards designing protocols against stronger adversaries. We claim throughout this thesis that this model is valid for cooperation scenarios between institutions like public health institutions, that would in any case cooperate even with-out cryptography protocols and for which such semi-honest protocol represent already a decisive step forward. 

Malicious model: In this model [Gol09, Chapter 7.2.3], the adversaries use any strategy avail-able to gain insight on the private data, and may deviate arbitrarily from the protocol. Such a model often requires heavier cryptography primitives and results in a longer run-time. When several parties are involved in the protocol, like in the field of secure multi-party computation, we often consider that only a subset of the adversary are malicious and that the others are semi-honest, hence defining notions like honest-majority malicious

secure protocols. In particular, a line of work [MR18, WTB+21] has developed protocols that can transition from semi-honest to honest-majority malicious security with limited im-pact on the runtime, which suggests that malicious security for privacy-preserving machine learning is becoming practical. 

Covert security model: This model [AL10] is a compromise between the two others. In-formally, it means that parties that deviate from the protocol can be caught with some non-negligible probability. This notion is particularly interesting for parties that can be associated with real world entities, and therefore care about their reputation: they may not want to take the risk of having their reputation damaged. We use this notion in this thesis for the third parties that provide cryptography primitives: it is usually simple for semi-honest parties to check that the primitives were generated correctly by a third party, and this party has a great interest in remaining trustworthy. 

2.3 Functional Encryption This section contains several notions of security and cryptography that are used primarily in our results in functional encryption in chapter 5. 

2.3.1 Generic Notions 

Probabilistic Polynomial-Time Algorithms. A probabilistic polynomial-time algorithm (or PPT algorithm in short) is a probabilistic algorithm, namely an algorithm that has access to some source of randomness, and that runs in time polynomial with respect to its input size. This notion of PPT algorithm is used to refer to an efficient algorithm, compared to an algorithm that would run for instance in time exponential compared to its input length, like a brute-force attack to uncover a password. 

Security parameter. The security parameter denoted here by λ is a measure of the difficulty for an adversary to break a scheme. For example, a secret key encoded on a small number of bits could easily be guessed by an adversary while recovering a key encoded on say 128 bits is intractable for modern computers. Unless specified otherwise, we will use λ = 128. This parameter is often provided as input to algorithms as 1λ. A PPT algorithm that take as input 1λ and output a secret key is therefore expected to run in time polynomial to λ while outputting a key that would need O(2λ) iterations to break by an adversary. 

Public-Key Encryption Scheme. A public-key encryption scheme is a composed of the following three PPT algorithms: 

 KeyGen(1λ): the key generation algorithm takes as input the security parameter λ and outputs two keys, the public key pk and the private key sk. 

 Enc(pk, m): the encryption algorithm uses the public key to convert a message m into a ciphertext c. 

 Dec(sk, c): the decryption algorithm uses the private key to decrypt a ciphertext c and recover the original message m 

A correct public-key encryption scheme should satisfy that for any (pk, sk) output by KeyGen, and for any message m, we have Dec(sk, Enc(pk, m)) = m except with negligible probability. Such scheme is widely used in practice because parties willing to exchange information only have to publicly share their pk instead of sharing a secret key in advance to the trusted recipients.

Example. The El Gamal Encryption Scheme [ElG85] is an example of public-key encryption scheme. Given a cyclic group G of prime order p, it is defined as follows: 

 KeyGen(1λ): Randomly choose s $← Zp. Output the public key pk = g−s and the private key sk = s. 

 Enc(pk, m): given a message m ∈ G, sample r $← Zp. Output c = (c1, c2) = (m · pkr, gr). 

 Dec(sk, c): given the ciphertext c, recover the message by computing c1 · csk 2 . 

Correctness of the scheme can be verified directly: Dec(sk, Enc(pk, m)) = c1 · csk 

2 = m · pkr · g−rsk = m · grs · g−rs = m 

Security of a public-key encryption scheme can be defined under several scenarios regarding the adversary. 

2.3.2 Security 

First, let us define two different kinds of security that we will use throughout this thesis. 

Information-theoretic security. This notion of security also known as perfect secrecy [KL14, Chapter 2.1] relies on the fact that the adversary is not given the information required to break the encryption. This means that no matter the computational power an adversary has, it is not able to break a given scheme. This is typically what is achieved with secret sharing in multi-party computation. 

Computational security. [KL14, Chapter 3.1] Computational security can be seen as a re-laxation of perfect secrecy: it relies on the fact that an adversary has in practice a (potentially huge but) finite amount of computational power. Hence, the security relies on the hardness of a problem that cannot be plausibly solved by an adversary that runs for a feasible amount of time. Note that in this scenario, there is a negligible but not null probability that the adversary succeeds. For example, public-key encryption schemes like El Gamal or also functional encryp-tion schemes rely on computational security. 

We define security of protocols based on different scenarios where an adversary has some specific capabilities and tries to infer information about private input data given one or several ciphertexts. The argument of security relies on the fact that if a ciphertext is indistinguishable from random, then it does not disclose sensitive information. This is formalized using the notion of advantage, which informally means the advantage that an adversary has in distinguishing a ciphertext from randomness. 

IND-CPA. IND-CPA [KL14, Chapter 3.4.2] stands for indistinguishability under chosen-plaintext attacks. It defines the following scenario or game between a PPT adversary and a challenger: the adversary can perform a polynomial number (in λ) of encryptions, and then chooses two plaintext different messages m0 and m1 and gives them to the challenger. The challenger chooses mb with b $← {0, 1} and returns Enc(pk, mb). The adversary can perform more encryptions (of messages distinct from m0 and m1) and then outputs a guess for the value of b. We measure its success against pure luck by defining the following advantage. 

AdvIND−CPA A (1λ) := Pr 

b′ = b : 

(pk, sk)← KeyGen(1λ) (m0, m1)← A(pk) b $← {0, 1}, c← Enc(pk, mb) b′ ← AEnc(c) 

− 1 2 

We say a schema is IND-CPA secure if for all PPT adversaries A, AdvA(1λ) = negl(λ).

IND-CCA. IND-CCA [KL14, Chapter 3.7.1] stands for indistinguishability under chosen ci-phertext attack. IND-CCA is a stronger notion of security than IND-CPA, as it provides an additional capability to the adversary. Indeed, the adversary is also given the ability to ask for decryption of any ciphertext, either up to the release of the challenge (IND-CCA1) or even after c is returned by the challenger (IND-CCA2), provided that decryption on c is not performed. 

Similarly, we can define the following advantage for IND-CCA1: 

AdvIND−CCA A (1λ) := Pr 

b′ = b : 

(pk, sk)← KeyGen(1λ) (m0, m1)← ADec(pk) b $← {0, 1}, c← Enc(pk, mb) b′ ← AEnc(c) 

− 1 2 

Back to our example with the El Gamal encryption scheme, we will prove that it is IND-CPA secure. But such (computational) security can only be proven under some computational assumptions, that we use to state that breaking the schema would be equivalent to solving a problem that is believed to be difficult. 

2.3.3 Computational Assumptions 

We present here some computational assumptions that are useful for this thesis, but many others exist, including those based on integer factorization. 

The Discrete Log assumption. This is a very standard computational assumption [KL14, Chapter 8.3.2] over the computation of discrete logarithms in cyclic groups. It says that given a generic cyclic group G of order p with a generator g, and given an element h ∈ G, it is computationally intractable to find x ∈ Zp such that h = gx. The bigger the order p is, the more complex it is to solve this problem. Best known approaches for generic cyclic groups are computed in time O(√p) [Pol78], so p should be chosen to verify λ ∼ log(p). 

The Decisional Diffie–Hellman assumption (DDH). The DDH assumption [KL14, Chap-ter 8.3.2] is related to the discrete log assumption, and states that given G, a cyclic group of order p (such that λ ∼ log(p)), g a generator of G, and a, b, c $← Z3 

p chosen by a challenger, the two following DDH triplets (ga, gb, gab) and (ga, gb, gc) are computationally indistinguishable for any PPT adversary. 

We can use this assumption to prove that the El Gamal encryption scheme is IND-CPA secure. The IND-CPA game is the following: on input (m0, m1) provided by the adversary, the challenger chooses b $← {0, 1} and outputs c = (c1, c2) = (mb · pkr, gr) = (mb · g−rs, gr). The challenger can compute m0 

−1 (since every element of a group admits an inverse by the composition law) and deduce c1 · m0 

−1 which equals g−rs if and only if b = 0. In addition, it has access to gr 

(this is c2) and g−s (this is pk). Hence, any adversary that can break the El Gamal scheme can distinguish between (gr, g−s, g−rs) and (gr, g−s, gc) for some c ∈ Zp and hence break the DDH assumption. We can also briefly show that the El Gamal scheme is not secure in the IND-CCA2 way. Say now that the adversary samples another message m′ $← Zp. It can craft a ciphertext c′ := (m′ · c1, c2) which is an admissible ciphertext for the message m′ ·mb since c′ = ((m′ ·mb) · pkr, gr). It can then call the decryption oracle to recover m′ ·mb and deduce mb. 

When using asymmetric pairings as we do for our functional encryption schemes, the DDH assumption is not a strong assumption. Indeed, using the notations of Section 2.1, distinguishing between (ga 

1 , gb 2, gab 

T ) and (ga 1 , gb 

2, gc T ) is straightforward as the pairing function e can be used to 

compute gab T = e(ga 

1 , gb 2) and to compare it to gc 

T . Instead, we introduce a new assumption called co-DBDH.

The Decisional Co-Bilinear Diffie-Hellman assumption (co-DBDH). In the case of asymmetric pairing groups (i.e. when G1 ̸= G2), we introduce the following assumption [BF01]. With the notations of Section 2.1, and given (a, b, c, d) $← Z4 

p chosen by a challenger, the following triples (ga 

1 , gb 1, gb 

2, gc 2, gabc 

T ) and (ga 1 , gb 

1, gb 2, gc 

2, gd T ) are computationally indistinguishable. 

2.4 Machine Learning Most of our work has consisted in developing new privacy-privacy techniques or improving existing ones to be practical in the context of machine learning. In particular, we have considered private training and evaluation of neural networks, which are commonly used for many real world applications. We recall here the main notions about neural networks. 

Linear Neural layers. A neural layer [BN06, Chapter 5.1] is a function which acts on a signal based on its internal parameters (or weights) and outputs a modified signal. The most simple layer is the feed forward layer and is defined as such: 

f : x 7→Wx + b f : Rm → Rn 

W ∈ Rm×n, b ∈ Rn 

This layer can for example implement linear regression, but more complex layers exist like convolution and batch normalization. Convolution is mostly used for vision tasks and consists of extracting local features of an image. Batch normalization normalizes the signal and is particularly useful for very deep networks. Other layers like the ones used for text analysis are not described here. 

Pooling layers. Pooling layers [LBBH98] do not have internal state: their role is to reduce the dimension of a signal by averaging or taking the maximum of neighbor components and hence outputting a signal with a smaller dimension. This is very helpful to reduce the complexity of a neural network. 

Activation functions. An activation function [BN06, Chapter 5.1] usually transforms the signal to introduce a non-linearity and does not necessarily have internal weights. It is of-ten combined with a neural layer like the feed forward or the convolutional layer. A popular activation function is the sigmoid function or the ReLU function, which is defined as such: 

σ : x 7→ max(x, 0) σ : Rm → Rm 

In some work in privacy preserving machine learning, we sometimes also use the square function σ : x 7→ x2, which also introduces a non-linearity while being significantly simpler to compute than a sigmoid or a maximum function with the current cryptographic protocols. We also introduce the softmax activation function: 

σ(x)i = exi∑m j=1 exj 

, ∀i = 1, . . . , m 

Neural Network. A neural network is a sequence of neural layers, pooling layers and activa-tion functions. It can be composed of a single layer or dozens of them like ResNet152 [HZRS16] which is composed of 152 layers, depending on the complexity of the task considered. Neu-ral networks are commonly used for regression and classification, and most of the experiments

conducted throughout this thesis address classification tasks. Classification between C classes means in practice the neural network takes as input a sample x and outputs y ∈ RC where each component of y corresponds to a class. A softmax activation function is often added on top of this output to normalize the signal and squeeze it between 0 and 1, so that each component yi 

can be viewed as the probability that x belongs to class i. 

Back propagation. [BN06, Chapter 5.3] A neural network is trained by adapting the weights of its layers so that the output signal y corresponds to the expected one ŷ. This is done by letting the network compute an output for some training samples and comparing it to the expected output using a loss function L like the mean square error. Then, the error observed is differentiated with respect to all the weights of the network to analyze which layer contributed most to the error. Given the feed forward structure of the network, the successive derivatives are computed using the chain rule, starting backward from the output layer. This is why this step is called back propagation of the gradients. Then, each weight is updated using the gradient descent method or a variant of it, which basically consists of updating the weight in the direction opposed to its contribution to the error: 

W←W− η∇WL(y, ŷ) 

2.5 Multi-Party Computation 

We now switch to notions that will be helpful to introduce our results in multi-party computation. 

2.5.1 Generic Notions 

One-Way Function. [KL14, Chapter 7.1] A function f : {0, 1}∗ 7→ {0, 1}∗ is a one-way function if it satisfies two key properties: 

 For any x ∈ {0, 1}∗, f(x) can be efficiently computed, namely in time polynomial with respect to the input size. 

 Given x chosen uniformly over {0, 1}∗ and y = f(x), finding a x′ such that f(x′) = y is computationally infeasible for any PPT adversary. 

One-way functions are used to prove the existence of pseudorandom generators and pseu-dorandom functions that we will use in our construction in function secret sharing in chapter 5. 

Pseudorandom generator. [KL14, Chapter 7.4] Pseudorandomness is often seen as a computational relaxation of pure randomness in the same sense that indistinguishability is a relaxation of perfect secrecy: a PPT adversary is not able to distinguish between them. More formally, a pseudorandom generator G : {0, 1}λ 7→ {0, 1}ν is a deterministic polynomial time algorithm, if for any PPT distinguisher D, i.e. a PPT adversary that returns 1 when it detects that the input is random and 0 otherwise, the following holds: 

∣∣Pr [D(G(s)) = 1]− Pr [D(r) = 1] ∣∣ ≤ negl(λ), 

where probabilities are respectively taken uniformly over s and r. In addition, it is expected that the output bit string should be longer than the input, meaning ν > λ.

Pseudorandom function. [KL14, Chapter 7.5] In a similar way, we can define keyed pseudorandom functions. A function F : {0, 1}n1 × {0, 1}n2 7→ {0, 1}n3 , where the first input space stands for the key and the second for the actual input, is said to be a keyed pseudorandom function if for any PPT distinguisher, the following holds:∣∣Pr[DF (k,·)(1λ) = 1]− Pr[Df(·)(1λ) = 1] 

∣∣ ≤ negl(λ), 

where the probabilities are respectively taken uniformly for k on the key space and for f on the space of function whose input space is {0, 1}n2 and output space is in {0, 1}n3 . 

2.5.2 Secret Sharing 

Secret sharing [KL14, Chapter 13.3.1] is widely used in multi-party computation to split and distribute a private input across several (say n) parties that are involved in some protocol. The general idea consists of building n shares from a secret x, such that t (with t ≤ n) shares are required to reconstruct x. These shares should be distributed among the parties involved such that no party can recover the secret alone. As a consequence, no party should hold more than t− 1 shares. 

From now on, we will assume that private inputs and shares are defined in the ring Zk, with k typically equal to 32 or 64. This allows in practice to benefit from hardware optimization for respectively int and long types. 

Additive Secret Sharing. The most common type of sharing is additive secret sharing. Given a secret x ∈ Zk, n are chosen at random such that ∑i=1..n xi = n mod 2k. In this situation, the view of any subset of shares {xi, i ∈ J, J ⊂ [1, n], |J | < n} provides no information at all about x, since each share is perfectly indistinguishable from random (in the information theoretic way). Note also that all arithmetic operations should be taken modulo 2k. When each party is given exactly one share, we achieve n out of n secret-sharing, meaning that all parties should agree to recover a secret, which corresponds to fully shared governance. However, when the number of parties is high, it is to be expected that one party might drop from the computation, say a mobile phone that runs out of battery or goes offline. Hence, it is also possible to distribute more than one share to each party. This process is referred to as replicated secret sharing since n− t + 1 copies are made for each share. It allows n− t parties to drop from the computation without aborting the protocol. As a consequence, this implements t out of n sharing since t parties alone are guaranteed to have at least one copy of each share. In addition, such a replicated secret sharing scheme is very practical to achieve malicious security since several parties that share the same share can verify between them that no one is deviating from the protocol. 

Shamir Secret Sharing. The Shamir Secret Sharing scheme [Sha79] is an interesting and classic k out of n secret sharing scheme that relies on polynomial interpolation. It is known that any polynomial P of degree d ≤ k− 1 can completely described by at most k evaluations of the polynomial on distinct inputs (x1, . . . , xk), using Lagrange interpolation for example: 

∀x, P (x) = k∑ 

i=1 P (xi) 

∏ j ̸=i 

x− xi 

xj − xi 

Hence, given P , n shares can be made by evaluating the polynomial on n distinct inputs, and each party should receive exactly one share. The private value can be encoded as any of the polynomial coefficients, or even several values can be encoded depending on the convention cho-sen.

Both of these schemes are additively homomorphic, which mean that values secret shared can still be manipulated to compute additive operations without having to reveal them. Indeed, in the first scheme for example, if each party has received a share of some input x and a share of an-other input y, then by summing those two shares, each party will create a share of the value x+y. 

We will denote by [[x]]Pn a private input x secret shared using a scheme P across n parties, or just [[x]] when there is no risk of confusion. The i-th share of [[x]] will be referred to as with [[x]]i. Hence, for n out of n additive secret sharing, that we use for example for our results in function secret sharing, [[x]] can be viewed as a tuple ([[x]]0, . . . , [[x]]n−1) distributed across parties. In addition, using this notation the homomorphic property writes [[x + y]] = [[x]] + [[y]]. 

In practice, most protocols only involve 2 up to 4 parties, because it reduces the number of interactions needed, especially when broadcasting some information to all parties, while offering already efficient schemes with various levels of security. 

2.5.3 Preprocessing Model 

The preprocessing model consists of pre-computing generic cryptographic material ahead of the interaction between the parties to make it more efficient. As a consequence, the protocol is divided into two sequences. First, the offline (or preprocessing) phase, where cryptographic primitives that are independent from the future inputs but are generally computation intensive, are generated, possibly exchanged, and stored. Second, the online phase, where the inputs for the computation are made available and where the cryptographic primitives are consumed to realize a given protocol. The online phase is generally the one where there are most constraints of efficiency, as it corresponds to the situation where one or several parties have provided their inputs and are waiting for the protocol to output the result, for example a physician sending an encrypted X-ray and waiting for a pre-diagnosis result. Therefore, offloading as much com-putation as possible in the offline phase is critical, as we show for example with our AriaNN framework in chapter 5. 

In general, the preprocessing is agnostic of the input value but is circuit dependent [BGI19]. We can illustrate this with the example above and consider a scenario where a neural network is computing a prediction based on the X-ray provided, using some secret sharing protocol like SPDZ [DPSZ12] or a derived protocol. Such protocols are not only additively but also multiplica-tively homomorphic and they rely on preprocessed Beaver triplets [Bea91] for multiplication. A Beaver triplet is a random triplet ([[a]], [[b]], [[c]]) which satisfies c = a · b and it is used when parties (Pi)i=1..n compute the product [[z]] = [[x · y]] from inputs [[x]] and [[y]]. Shares [[a]] and [[b]] are respectively used to mask [[x]] and [[y]], each party Pi revealing [[x − a]]i and [[y − b]]i to reconstruct collectively δ = x− a and ϵ = y − b. Randomness of a and b guarantees that δ and ϵ do not leak any information about x and y. Then, the parties use such δ and ϵ to compute additively [[z]] = δ · [[b]] + ϵ · [[a]] + δ · ϵ + [[c]] = [[(x−a)b + (y−b)a + (x−a)(y−b) + ab]] = [[x · y]]. Such approach with Beaver triplets also works for matrix product, provided that we consider matrix triplets ([[A]], [[B]], [[C]]) ∈ (Rn1×n2 ,Rn2×n3 ,Rn1×n3), which is very convenient for neural networks to implement private fully connected layers f(x) = Wx + b. However, the prepro-cessing is circuit dependent because (n1, n2, n3) is directly linked to the size of the layer, and therefore the architecture of the model needs to be provided prior to the preprocessing phase, even if the weight values need not be provided. 

The preprocessing material can be created jointly by the parties as it is done in [DPSZ12] or can be provided by a trusted third-party dealer, depending on the security model considered (malicious, semi-honest, or covert security).

2.6 Differential Privacy 

Differential privacy [DKM+06, DR+14] is a system for publicly sharing insights derived from a dataset while keeping private information about individuals in the dataset. It provides a measurement of the privacy risk associated with publishing each particular result, by measuring the maximum leakage that each result can cause about the individuals’ data. The role of differential privacy in compliance with new privacy regulations like GDPR is still being explored [CD18], alongside other privacy-enhancing techniques. 

Differential privacy applied to training machine learning models is a promising technique to reduce exposure of training datasets when releasing machine learning models. The privacy leakage from these models can be quantified using either (ϵ, δ)-differential privacy [DR+14] or (α, ε)-Rényi differential privacy [Mir17], which are described below. The standard procedure consists of providing an upper bound of the leakage, modeled through the divergence of the distributions of two models trained on neighboring datasets, i.e. datasets that only differ in one item. The intuition behind is that a model whose behavior (in terms of distribution) is sensitive to the presence or absence of a single individual is likely to memorize information about specific individuals of the training set. 

More formally, let D = (x1, . . . , xn) ∈ Rm×n and D′ = (x′ 1, . . . , x′ 

n) ∈ Rm×n be two neigh-bouring datasets, meaning that there exists exactly one index i0 such that xi0 ̸= x′ 

i0 . 

Definition 1 ((ϵ, δ)-differential privacy). A randomized algorithm A : D → Rd satisfies (ϵ, δ)-differential privacy if for any neighboring datasets D and D′, i.e. datasets that only differ in one item, and any subset S ⊂ Rd, the distribution of A satisfies: 

P[A(D) ∈ S] ≤ eϵP[A(D′) ∈ S] + δ 

An alternative notion, coined as (α, ε)-Rényi differential privacy has been proposed by [Mir17], which is more suited to studying composition mechanisms, but can be converted back to standard (ϵ, δ)-differential privacy. 

Definition 2 (Rényi differential privacy). A randomized algorithm A : D → Rd satisfies (α, ε)-Rényi differential privacy if for any neighboring datasets D and D′, the Rényi divergence of order α > 1 satisfies Rα(A(D) || A(D′)) ≤ ε, where: 

Rα(A(D) || A(D′)) = 1 α− 1 log E 

θ∼A(D′) 

[( µA(D)(θ) µA(D′)(θ) 

)α] 

and where µA denotes the density A. 

Conversion from Rényi differential privacy to (ϵ, δ)-differential privacy is given by the fol-lowing proposition: 

Proposition 3 ([Mir17] From Rényi to (ϵ, δ)-differential privacy). If A satisfies (α, ε)-Rényi differential privacy, it also satisfies (ϵ, δ)-differential privacy for any 0 < δ < 1 with 

ϵ = ε + log(1/δ) α− 1 

Differential privacy often relies on the notion of sensitivity (or global sensitivity). The sensitivity of a function corresponds to the delta in its output when the input is modified. More formally:

Definition 4 (Sensitivity). For a function f : D → Rd, the global sensitivity of f is defined as follows: 

S(f) = max D,D′ : d(D,D′)≤1 

∥∥f(x)− f(x′) ∥∥ 

2 

where d(D,D′) ≤ 1 means that D and D′ differ by at most one element and hence that they are neighbours. 

In practice, differential privacy works through the addition of a controlled amount of statis-tical noise to obscure the contributions from each individual in the dataset in the global result. In machine learning, the most standard approaches to training neural networks with differential privacy are derived from [ACG+16]’s method of differentially private stochastic gradient descent (DP-SGD), which is described in Algorithm 1. DP-SGD is an attractive method as it closely mimics classic SGD training of neural networks and applies to almost all architectures. It there-fore enjoys easy adoption from data scientists: at each batch update, Gaussian noise is carefully added to the gradient update to hide the contribution of the batch data items. This means that virtually any neural network can be trained using DP-SGD1 and DP-SGD has been integrated in popular libraries like Opacus [YSS+21] and TensorFlow Privacy. 

Input: Dataset D = (x1, . . . , xn), loss function ℓ, step size {ηk}k≥0, noise variance σ2, gradient norm bound C and initial random parameter θ0 ∈ C 

Output: θK 

1 for k = 0, . . . , K − 1 do 2 Sample batch Bk of size m from D with replacement 3 Compute and clip ∇LBk 

(θk) = 1 m 

∑ x∈Bk 

∇ℓ(θk, x)/ max ( 1, 

∥∇ℓ(θk,x)∥2 C 

) 4 Add noise and update θk+1 = θk − ηk 

( ∇LBk 

(θk) +N (0, σ2C2Id) ) 

5 return θK 

Algorithm 1: [ACG+16] ADP−SGD: Differentially Private Stochastic Gradient Descent 

As DP-SGD is a succession of differentially private steps, the differential privacy estimation of the whole training mechanism needs some composition rules to leverage each step. We recall here the notion of adaptive composition in differential privacy and two major composition theorems attached: 

Definition 5 (Adaptive Composition). A k-fold adaptive composition is a sequence of mecha-nisms m1, . . . , mk such that for i ∈ [1, k]: 

 mi can adapt to the execution of the previous mechanisms 

 mi takes as input not only the input dataset but also the output of the previous mecha-nisms. 

Theorem 6 ([DRV10] Simple adaptive composition). Consider K ∈ N mechanisms, each of them satisfying (ϵk, δk)-differential privacy with ϵk > 0, δ ≥ 0, then the adaptive composition of these mechanisms satisfy (ϵ̃, δ̃)-differential privacy, where 

ϵ̃ = K∑ 

k=1 ϵk δ̃ = 

K∑ k=1 

δk 

1There are some slight adjustments to be made for some architectures, as for example BatchNorm is usually replaced with GroupNorm

Theorem 7 ([DRV10] Strong composition). For ϵ > 0, δ ≥ 0, δ′ > 0, and K ∈ N, the class of (ϵ, δ)-differentially private mechanisms is (ϵ̃, δ̃)-differentially private under K-fold adaptative composition, where 

ϵ̃ = √ 

2K log 1 δ′ ϵ + Kϵ 

eϵ − 1 eϵ + 1 δ̃ = kδ + δ′ 

This states that the privacy leakage modeled through standard (ϵ, δ)-differential privacy grows approximately in 

√ K for high privacy regimes (i.e. when ϵ≪ 1), where K is the number 

of iterations, which represents a significant improvement over the bound of the simple adaptive composition theorem.

Chapter 

# 3 Initial Building Blocks 

One motivation for this thesis was to provide the machine learning community with new practical tools to help it transition towards more privacy-preserving approaches when dealing with sensi-tive data. To this view, the main challenge was to provide libraries that fit in the data scientist toolbox while providing strong privacy guarantees. This chapter sheds the light on how we tried to address this challenge through the development of the open-source PySyft library as part of a global initiative of the OpenMined community. It is based on two implementation papers and one book chapter: [RTD+18] presented at the NeurIPS workshop on Privacy-Preserving Machine Learning in 2018, [HJC+21] presented the ICLR workshop on Distributed and Private Machine Learning in 2021, and [ZTL+21] which is part of the Springer book "Federated Learning Systems" published in 2021. 

These papers can be seen as white papers, they represent above all the work of a community in its entirety, despite the fact that we were first author on the first article and co-authors on the two others. In this perspective, we reuse indistinguishably parts of the papers that explain best the parts of the PySyft library we have contributed to. 

Chapter content 3.1 PySyft Core Privacy Features . . . . . . . . . . . . . . . . . . . . . . . 23 

3.1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 3.1.2 Privacy and Federated Learning . . . . . . . . . . . . . . . . . . . . . . 24 3.1.3 Differential Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 3.1.4 Secure Multi-Party Computation . . . . . . . . . . . . . . . . . . . . . . 26 

3.2 PySyft Implementation . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 3.2.1 A Framework to Abstract Operations on Tensors . . . . . . . . . . . . . 29 3.2.2 Application to Additive Secret Sharing . . . . . . . . . . . . . . . . . . . 31 3.2.3 Actions, Plans and Protocols . . . . . . . . . . . . . . . . . . . . . . . . 32 

3.3 PySyft Literature Review and Use Cases . . . . . . . . . . . . . . . . 33 3.3.1 Comparisons with other Frameworks . . . . . . . . . . . . . . . . . . . . 33 3.3.2 Use Case: Benchmarking and Standardizing Federated Learning Systems 33 3.3.3 Use Case: Federated Learning on Edge Devices . . . . . . . . . . . . . . 34 3.3.4 Use Case: Healthcare and Medical Research . . . . . . . . . . . . . . . . 34 3.3.5 Use Case: Finance, Business or Industry . . . . . . . . . . . . . . . . . . 35 3.3.6 Use Case: Anomaly Detection . . . . . . . . . . . . . . . . . . . . . . . . 35 

3.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 

3.1 PySyft Core Privacy Features 

3.1.1 Background 

Modern machine learning models require large datasets to achieve state of the art performance, and even larger datasets to validate that trained models are fair, unbiased and robust. However,

most real world datasets include confidential or private data which needs to be protected for regulatory, contractual, or ethical reasons. Additionally, much of this data is generated and stored in a decentralized fashion, for example on edge computing hardware, such as mobile phones or wearable health tracking devices. 

Research using large, private and decentralized datasets requires novel technical solutions so that this data can be used securely. These technical solutions must enable training on data which is neither locally available nor directly accessible without leaking that data. 

Decentralized computing techniques collectively referred to as federated learning (FL) allow training on non-local data. In federated learning, training is performed at the location where the data resides, and only the machine learning (ML) algorithm (or updates to it) are being transferred. Secure machine learning on the other hand represents a collection of techniques which allow ML models to be trained without direct access to the data while protecting the models themselves from theft, manipulation or misuse. Some examples of secure computation are encryption techniques such as homomorphic encryption (HE) or secure multi-party computation (SMPC). Last, differential privacy (DP) in machine learning aims to prevent trained models from inadvertently storing personally identifiable information about individuals from the dataset in the model itself. 

For secure and private ML to attain widespread acceptance, the availability of well-maintained, high quality, easily deployed open-source code libraries incorporating state-of-the art techniques of the above-mentioned fields is essential. OpenMined, an open-source community, built the PySyft library to make these techniques as accessible and easy to implement as possible. 

PySyft is an open-source, multi-language library which enables secure and private machine learning. PySyft aims to popularize privacy preserving techniques in machine learning by making them as accessible as possible via Python bindings and an interface reminiscent of common ML frameworks which are familiar to researchers and data scientists like PyTorch or Numpy. To ease future development in the field of privacy preserving machine learning, PySyft aims to be extensible such that new federated learning, multi-party computation, or differential privacy methods can be flexibly and simply implemented and integrated. 

This chapter will introduce the methods available within the PySyft library that we have directly contributed to and will describe some implementations. We also review the use of PySyft in academic literature to date and discuss future use-cases. 

3.1.2 Privacy and Federated Learning 

Federated learning (FL) is a collection of computational techniques allowing the distributed training of algorithms on remote datasets. It relies on distributing copies of the learning al-gorithm to where the data is instead of centrally collecting the data itself. For example, in a healthcare setting, patient data can remain on the hospital’s servers thus retaining data owner-ship while still allowing the training of algorithms on the data. FL can be set up in several ways, for example a common way is having decentralized nodes for training who send their updates back to a central server for aggregation. 

There are some interesting distinctions that we can make about FL settings. First, we should distinguish between horizontal and vertical federated learning. In the horizontal federated learn-ing setting, the dataset, seen as a collection of items (x1, . . . , xn) where each sample is a vector xi ∈ Rp, is split by samples, meaning that the samples are distributed across several machines. This is the configuration of some companies that leverage data from mobile users to improve the prediction of the next word when writing messages: the samples are sentences and they are not necessarily distributed equally across several mobile phones. In this scenario, gathering more datasets allows to collect more samples and improve the model accuracy. In contrast, ver-tical federated learning, which is also referred to as heterogeneous federated learning, considers that the dataset is split in feature sets. Each sample xi is composed of several feature sets

xi = (x1 i , . . . , xk 

i ), which are held by k different parties. This situation is typically encountered when a consumer profile is built up from the habits of a user across several websites that track different behaviors, or also when trying to train healthcare models on the data of a patient which is split across several software applications with different medical specialties. In this scenario, the sum of feature sets provides the big picture about the individual, allowing for more complex models to be trained. 

Another interesting distinction is between model-centric and data-centric federated learning. Model-centric federated learning refers to a situation where the task is well defined and should be executed on designated data owners, as much as possible. This means that there is little flexibility on the design of the task like the type of model or the training procedure to use. This is typically what a company which runs mobile operating systems would do, defining a task and recruiting mobile phones that are available to do the training. In return, data-centric federated learning consists for a data owner to make its data available for federated tasks, should it be research studies or any kind of federated analytics. In this scenario, the data owner is more in control of its data but it is also responsible for providing high quality and well documented data, since the entity willing to perform federated learning might not know in advance how the data is structured and how to leverage it. This setting is probably the most promising in terms of perspective of global collaboration, because it holds in its core principles that data owners are empowered and well equipped to contribute their data. 

As we see, these two distinctions are complementary, and a federated task like the one on the next word prediction on mobiles is both horizontal and model-centric. 

Federated learning itself is not always a sufficient privacy mechanism. Deep learning models tend to unintentionally memorize aspects of their training data, i.e. storing dataset attributes in their parameters [WSZ+19]. This unintentional memorization makes federated learning settings without additional privacy preserving techniques sensitive to various attacks, such as member-ship inference attacks which are described more in depth in the next chapter. In addition to the various attack vectors, FL typically has substantial network transfer requirements as well as usually reduced algorithm performance compared to centralized training. Techniques for efficient training and for reducing network transfer requirements are being actively researched [KMA+19]. These concerns aside, federated learning is an important component of many privacy preserving machine learning systems. 

3.1.3 Differential Privacy 

Introduction 

Differential privacy is a randomized system for publicly sharing meaningful information about a dataset by describing the patterns within the dataset while withholding information about individuals in the dataset. 

Consider the example of a simple private database which stores the names and ages of the citizens of a small town. This dataset could be useful for various applications and help better the lives of the citizens of that town, but it is important that the database remains private and does not get into the wrong hands. 

If we wanted to obtain statistics on the database publicly, such as the average, minimum and maximum age of the citizens, we need to be careful. If we report the true average, minimum or maximum, we might compromise the privacy of some specific citizens. So, we report a slightly noisy average, minimum and maximum publicly, so that no one single citizen’s privacy is breached. This enables all citizens a certain degree of plausible deniability as to whether they were a part of the database. 

(ϵ, δ)-differential privacy provides us with a universal privacy guarantee: given some small privacy budget modeled through ϵ and δ, we can ensure that the output of the process does not

change more than a certain margin if we change or remove a single person from the database. In this perspective, differential privacy is more robust than naive anonymization since it quan-tifies the risk of data leakage and provides theoretical privacy guarantees within its scope of application. A formal definition of differential privacy is given 2.6. 

Differentially Private Machine Learning 

In the context of data-driven approaches like machine learning, differential privacy is very useful. Their objectives align, since both focus on recognizing general meaningful patterns instead of individual user data. However, it is quite challenging to generalize various DP techniques to the broad set of techniques in machine learning. Consider deep learning for example. Neural networks which are composed of a large number of layers and parameters are notoriously non-linear and can have unpredictable behaviors as illustrated by authors of [EEF+18] who show that small magnitude perturbations on the input can heavily mislead a prediction. Therefore, finding the query sensitivity for these algorithms is generally a very complex task. 

However, differential privacy has also been observed to provide interesting capabilities to ma-chine learning models, beyond increased resistance to privacy attacks like membership inference attacks. One observation is the ability of a model trained with differential privacy to generalize. It has been a surprising result that adding noise to ensure privacy actually improves the utility of the learning model, as it can generalize better on larger unseen data. Another observation is regarding the stability of the model, as adding differential privacy tends to improve the stability of the learning algorithm. 

Differential Privacy in PySyft 

PySyft has created an automatic differential privacy to provide the data users with strong privacy guarantees, independent of the machine learning architecture and the data itself. Automatic DP works by adding automatic query sensitivity tracking and privacy budgeting to the private tensor. The tensor is made up of a matrix of private scalar values, which are all bounded. This way, we can dynamically track the sensitivity of the query function as well as the amount of privacy budget we have spent. This helps us in employing the various techniques on making machine learning automatically differentially private with ease. Thus, PySyft is general enough to support any kind of deep learning architecture, as the key components of differential privacy are a part of PySyft’s building blocks. 

PySyft has also been combined with popular DP libraries like Opacus [YSS+21] which sup-ports a large range of neural network architectures, to be able to leverage the implementation of the existing literature around the privacy budget estimation, including tools like the strong composition theorem or the moment accountants [ACG+16]. 

3.1.4 Secure Multi-Party Computation 

Expressiveness for machine learning 

Federated learning and differential privacy are not sufficient to prevent attacks against machine learning models or datasets by the participants in the training. For example it is very easy for a data owner to steal a model in classic federated learning as the model is sent in plain text. 

Secure multi-party computation (SMPC) provides a framework to safe-keep both the data and the algorithms, while still permitting training and inference. It allows multiple parties to jointly perform computations over a set of inputs and to receive the resulting outputs without exposing any party’s sensitive input. It thus allows models to be trained or applied to data without disclosing the training data items or the model’s weights. SMPC methods implemented in PySyft rely on additive secret sharing, which is detailed in the preliminary chapter. Evaluating or training a model can be decomposed in basic computations for which SMPC protocols exist,

which allows for flexible, end-to-end and secure procedures. In the case of ML, during training, the model’s gradients can be secret shared, while in inference, the entire model function is secret shared. 

SMPC as implemented in PySyft, which relies on semi-honest protocoles, incurs a significant communication overhead but it has the advantage that unless parties involved in the protocol are malicious or coordinate to reveal an input, the data will remain private even if sought after for unlimited time and resources. In addition, it conveys the notion of shared governance, in the sense that all (or a sufficient number of) owners of shares must agree to be able to reconstruct the secret. 

As described in the preliminary chapter, additive secret sharing allows for efficient addi-tion and multiplication. This schema appears quite simple, but it already permits numerous arithmetic and machine learning operations as combinations of additions and multiplications, like fully connected layers or convolutions. Some operations like the sigmoid can also be imple-mented using polynomial approximations. Boolean operations like equality tests, comparisons or the ReLU activation function receive a particular treatment, since some protocols have been developed on top of standard secret sharing to perform exact private comparison such as Se-cureNN [WGC19], which was first implemented in PySyft. The new protocol for efficient boolean comparison introduced in chapter 5 has later been integrated in PySyft in replacement of Se-cureNN. 

Fixed precision encoding 

These protocols are adequate for integers, covering the encryption of elements like the values of the pixels in images or the counts of entries in a database. However, the parameters of many machine learning models like neural networks are floats, so how can we use additive secret sharing in machine learning? We have introduced a new element in PySyft which allows us to approximately encode floats as integers in order to leverage the SMPC toolbox: fixed precision encoding. The intuition behind fixed precision encoding in base 10 is to fix a precision k, to round all float values up to the k-th decimal and to remove the decimal point. 

Let’s take an example, like 123.456. Say that we want to keep the first 2 decimals. In that case, we will store the integer 12345 and the fact that the fixed precision is set to k = 2 allows us to convert back when needed to the original value 123.45 up to a small approximation error. When we keep enough decimals, typically k = 6, we do not observe any noticeable degradation on the accuracy of the models trained in fixed precision, i.e. when the weights and the inputs are converted to fixed precision. 

We can first make the following observation: the more precision you require, the smaller your range of values is. For example, if one encodes values on int32, only values in the range [−2.147 109, 2.147 109] can be stored, so setting k = 6 with a base 10 means that only floats in the range [−2.147 103, 2.147 103] can be encoded properly. At the same time, values smaller than 10−6 will be corrupted with the encoding and decoded to 0. Hence, there is a trade-off between the precision one can keep and the range of floats that can be supported. 

Fixed precision is very practical for addition because one just has to sum the integers encoded and keep the same precision k. Multiplication is a bit different. Let’s consider for example the multiplication of 1.2 and 2.0 encoded with a decimal precision of 2, so 120 × 10−2 and 200× 10−2. If we multiply the integer part, and keep the precision unchanged, we end up with 24000× 10−2 so 240 instead of 2.4. We can either increase the precision from 2 to 4, but in the fixed precision setting we prefer the precision to remain constant (otherwise we will be limited in the number of sequential multiplication we can perform), or we can truncate the integer part, by removing the 2 least significant digits which correspond to the current precision of 2: (24000//102)× 10−2 = 240× 10−2 = 2.4.

In practice, bit precision is preferred to decimal precision, i.e. rescaling numbers with powers of 2, because it is closer to the way numbers are encoded. Hence, 1.5 encoded in a bit precision of 3 would be 12× 2−3. 

Such fixed precision encoding is directly supported in PySyft: any floating point tensor can be converted by calling the method .fix_precision(base=..., precision=...). 

Fixed precision encoding and additive secret sharing 

In additive secret sharing, shares are not float values but integers in a sufficiently big space, for example in Z2n , the space of the numbers encoded on n bits, with typically n = 32. Hence, if we want to secret share a float value, say a model parameter, we need to first convert it to fixed precision and then secret share the underlying integer value. As we recall that private machine learning using SMPC relies on decomposing model operations in basic operations, we first study how fixed precision impacts these two operations: addition and division by a public constant, which is needed for multiplication through the truncation operation. 

For addition, nothing changes, each part only needs to sum its shares of each term. For division by a public constant, which is a very common operation for example when one computes a mean 1 

n 

∑n i=1 xi, things get a bit more complicated. Indeed, the first idea would be to ask each 

party to compute the division on its share, so that when the shares are summed up, the result will be the original result divided by the public constant. We propose two examples to see how this naive method behaves: 

A working public division. We consider shares to be in Z24 to simplify the computation. Z24 represents all the integers in the range [−8, 7]. Indeed, 24 = 16 and we consider signed numbers, so instead of the range [0, 15], we use [−8, 7]. 

Let’s consider x = 4, shared between Alice and Bob as such: [x] = (xalice, xbob) = (−2, 6). If each party computes the division by 2 on its share, we obtain (−1, 3) which reconstructs to 2 and is the correct result. 

A non-working public division. Let’s now consider x = −4, shared as such: [x] = (xalice, xbob) = (6, 6). This sharing is correct since 6 + 6 = 12 which maps to 12− 16 = −4 in Z24 . We say that there is a wrap around, as we exceeded the maximum value of our space, 7. Dividing the shares by 2 like before leads to a sharing (3, 3), which reconstructs to 6 ̸= −4/2. It’s failing. 

So what happened? Actually the shared result (3, 3) is still valid, but no longer in Z24 but in the space of values divided by 2, namely Z23 . Indeed, Z23 represents the range [−4, 3], so 3 + 3 = 6 should map to 6 − 8 = −2 in Z23 . However, we want to keep the same space for all the shares that we are using, so we need to find a solution. 

The reason why it failed is because of the wrap around, which happens when we sum the shares of x but not when we sum the shares of x/2. It is not possible for any of the parties holding a single share of x to know if there is a wrap around, denoted by the boolean θx, because it would reveal information about the other parties shares. However, they can privately compute the wrap around and obtain a secret shared [[θx]]. Computing such [[θx]] is non-trivial but protocols like [WTB+21] propose some implementations. 

Having access to [[θx]] helps to compute privately and correctly x/k in Z2n using the following formula: 

[[x/k]] = [[x]]/k − [[θx]] · 2n/k 

This means that each party divides naively its shares, and they jointly correct the result if there was a wrap around (i.e. if θx ̸= 0). 

We can verify on the previous non-working example that this formula works. Indeed, we have θx = 1 and 2n/k = 16/2 = 8. If we assume [[θx]] = (1, 0), then the shares of the result

would not be (3, 3) but (−5, 3), which sums up to −2. 

As a side note, we mention the impact of numerical errors when using small fields. In the examples above, we have been using Z24 . If we consider x = 4 to be shared in Z24 as such: [[x]] = (1, 3), and that we apply division per 2, even with the method involving θx that is 0 here, we will end up with shares (0, 1) (because 1 // 2 = 0 and 3 // 2 = 1), that sum up to 1 ̸= 4/2. The rounding error here causes the result to be completely incorrect, but for bigger spaces like Z232 that we usually consider, this error will be less important and will not significantly impact the computation. 

3.2 PySyft Implementation 

Since not all machine learning practitioners hold expertise in privacy and cryptography tech-niques, PySyft was built to make them easily available via the most popular machine learning tools that researchers and data scientists work with on a daily basis. 

The central component in PySyft is the Tensor. Tensors usually follow standard APIs like the PyTorch or TensorFlow APIs, but also provide extra functionalities like the ability to send a tensor to a remote worker or to encode it to fix precision or to secret share it between several parties. This is done using chains of tensors where each tensor in the chain adds a specific capability to the chain, like the conversion of float values to fixed precision. This modularity is the key to implement federated learning, differential privacy, homomorphic encryption or secure multi-party computation protocols within the same framework. Another important concept is the concept of Worker : workers own tensors and are able to perform computation on them. They can communicate using Messages with other workers to send or get tensors, or to perform remote computations. Workers are composed of a client and a server: an interaction with a remote worker is always made through its client which defines the set of possible actions. Messages are serialized using protocol buffers which allows for cross-platform distributed execution: a worker in Python can communicate with a worker in JavaScript, Swift, Kotlin, etc. All remote computations are made through Pointers. The most popular pointer is the PointerTensor but there exists other types of pointers like the PointerDataset. 

3.2.1 A Framework to Abstract Operations on Tensors 

The chain structure 

Performing transformations or sending tensors to other workers can be represented as a chain of operations, and each operation is embodied by a special class. To achieve this, we created an abstraction called the AbstractTensor. It gives default behaviors to Syft tensors, and implements actions that are independent from the underlying framework (PyTorch, Tensorflow, ..). All tensors living under the AbstractTensor are meant to represent a state or transformation of the data and can be chained together. The chain structure allows the transformations or states embodied by the different Syft tensors to be accessed downward using the child attribute and upward using the parent attribute. 

Figure 3.1 presents the general structure of a tensor chain, where SyftTensors are a generic term for any concrete instance of AbstractTensor. All operations are first applied to a Wrapper tensor at the top of the chain which makes it possible to have the native PyTorch interface, and they are then transmitted through the chain by being forwarded to the child attribute. 

Wrapper tensor is one of the two important subclasses of Tensor types. It wraps the new Syft tensor types with a native type so that the new tensor is compatible with the rest of the PyTorch or TensorFlow API. It’s only role is to forward operation down to its child Syft tensor; it holds no value. This construction primarily addresses the lack of support in PyTorch and

Figure 3.1: General structure of a Tensor chain. SyftTensors are a generic term for any concrete instance of AbstractTensor. 

TensorFlow for creating arbitrary Tensor types (via subclassing torch.Tensor for instance in PyTorch). Ensuring this compatibility is critical in order for the new tensors to be usable with the existing ecosystem of layers and loss functions shipping with the native frameworks. All tensor chains begin with a Wrapper tensor, hence we did not report them on the figures. 

PointerTensors are the second important class deriving from AbstractTensor. They mimic the entire API of a normal tensor, but instead of computing a tensor function locally (such as addition, subtraction, etc.) they forward the computation to another PySyft worker where the real tensor is held. 

As such, PointerTensors should never exist by themselves: their role is to proxy API calls to an actual tensor located on a different worker (Virtual or actually remote) that it points to. From a data communication point of view, PointerTensors fully rely on the corresponding worker owning the target tensor to communicate the API commands it receives down the chain of tensors as shown in Figure 3.2. 

From virtual to real context execution of federated learning 

In order to simplify debugging complex chains of operations, PySyft develops the notion of Virtual Workers. Virtual Workers all live on the same machine and do not communicate over the network. They simply replicate the chain of commands, serialization operations, and expose the very same interface as the actual workers to communicate with each other. 

Network-enabled workers in the context of Federated Learning have two implementations in the framework as of now: WebSocket workers and GridNodes. They both leverage WebSockets as their communication medium, thus ensuring a broad range of devices from IoT to web browsers to servers can participate in a PySyft network. 

WebSocket workers allow multiple workers to be instantiated from within a browser, each within its own tab. This gives us another level of granularity when building federated learning applications before actually addressing remote workers which are not on the same machine. Web Socket workers are also a very good fit for the data science ecosystem revolving around browser-based notebooks. 

The PyGrid project, also developed under the OpenMined umbrella, introduces its own

Figure 3.2: Impact of sending a tensor on the local and remote chains. The complete chain of tensors, including a LoggingTensor (which logs all operations requested) is sent to the remote worker and the local worker only keeps a pointer to the remote chain. 

Worker known as GridNode. GridNodes communicate with their peers and clients over web socket, but contrary to Web Socket workers, they expose a traditional web socket server interface that then passes input commands and messages down to an embedded VirtualWorker. 

3.2.2 Application to Additive Secret Sharing 

The elements introduced in Section 3.2.1 form the building bricks necessary to create more advanced privacy-preserving tensors. The SMPC protocol detailed in Section 3.1.4 involves splitting and sending shares of an original tensor. These elements can be managed using a list of PointerTensors as described in Figure 3.3. This section describes the MPC toolbox proposed in PySyft, it provides in particular convenient abstractions over the SecureNN [WGC19] and AriaNN [RTPB22] protocols. 

As explained above, additive secret sharing requires fixed precision to work on float val-ues. Figure 3.3 shows the corresponding tensor chain associated with performing MPC with additive secret sharing. We can first observe the FixedPrecisionTensor which is in charge of transforming multiplications for example in a sequence of multiplication and truncation to keep the precision unchanged. This tensor also replaces some operations like the square root or the sigmoid for instance with a polynomial approximation, without any change for the end user experience. Down the chain, the operations are managed through the AdditiveSharingTensor that hold references through PointerTensors to each remote secret shares. This tensor lever-ages protocols like SecureNN or AriaNN to instruct remote workers on how to perform each basic operation like multiplication, public division, equality or comparisons. Last, secret shared values are actually stored on LongTensors i.e. 64 bits tensors, to be able to conciliate high fixed precision and a large range of possible values. IntTensors i.e. 32 bits tensors can also be used in specific contexts for increased computation performance. 

Unlike standard MPC protocols like the ones proposed by [DPSZ12], players are not equal in

Figure 3.3: Chain structure for an additively shared tensor. Local worker holds through an AdditiveSharingTensor some references to secret shares owned by remote workers Alice and Bob. 

our framework since one is the owner of the model (called the local worker). He acts as a leader by controlling the training procedure on all the other players (the remote workers) through the AdditiveSharingTensor interface. This asymmetry is aligned with the network structure of federated learning where a central node (or server) manages the training of a model on multiple nodes. 

So far, the current implementation does not come with a mechanism to ensure that every player behaves honestly. An interesting improvement would be to implement MAC authentica-tion of the secret shared value, as proposed by [DPSZ12]. 

3.2.3 Actions, Plans and Protocols 

All operations in PySyft are called actions. Actions are categorized in two main classes. On the one hand, computation actions are actions which act on tensors and produce new tensors. For example, framework specific commands like torch.add(x, y) is a computation action, but syft specific command like x.fix_precision() is also one. On the other hand, com-munication actions are actions which involve moving tensors across workers. The command pointer = x.send(alice) which sends a tensor to a worker Alice is typically a communication action and pointer.get() which brings back a remote value is one as well. When a local worker wants to execute a computation action but on remote tensors, it will send a specific message to have the action computed remotely. If it wants to run n actions it will therefore need to send n messages, which can be very inefficient especially if there is some latency between the workers. Therefore, PySyft provides an object called a Plan which allows to batch together several computation actions. This Plan can be sent to any worker with a single message and be executed. One thing special about Plans is that they need to be built i.e. they need to be run once on dummy data to select and store the computation actions they will contain. However, Plans fall short when someone wants to include communication actions to ship them to other workers. That’s why we introduced Protocols. 

Protocols contain an arbitrary set of computation and communication actions which should involve a fixed number of workers, modeled by Roles. Like Plans, Protocols need to be built, and then are deployed across workers which all receive a Role and the actions in which this role is involved. This Protocol abstraction allows the design of complex, distributed and asynchronous computation graphs which are extremely suited for federated learning and secure multi-party computation. 

More information about the implementation choices and the documentation can be found

on the OpenMined GitHub1. 

3.3 PySyft Literature Review and Use Cases 

PySyft is the first open-source federated learning framework for building secure and scalable ML models [YLC+19]. In recent review articles, PySyft has been described as a framework that has “made SMPC and Federated Learning intuitive and accessible to machine learning developers” [AMD20], and allows data scientists to “focus purely on building up the machine learning model without being burdened with how it will be deployed in local data repositories” [IVF19]. In a recent review [WNK20], authors have mentioned the PySyft project as an influential open-source library for encrypted computations. 

To date, PySyft has been discussed as a novel and convenient approach to federated learn-ing in several comprehensive surveys of existing literature on federated learning frameworks in healthcare, mobile edge devices, and more [QQBAF20] [SŞ20] [YLC+19] [LWH19] [LLH+20] [AMIA21] [AMD20]. In [MJ20], PySyft was mentioned for its functionality of applying differen-tial privacy methods to federated learning and preventing the extraction of sensitive information from trained models. In this section, we summarize the use of PySyft in the literature and pro-vide the most common use cases reported. 

3.3.1 Comparisons with other Frameworks 

In 2019, Li et al. [LWH19] noted the advantages of PySyft over other contemporary FL frame-works like TFF, PaddleFL and others. The authors explain that while PaddleFL provides algorithm level APIs for users to use directly, PySyft provides more detailed building blocks so that the developers can easily implement their FL processes. It is also mentioned that PySyft provides more privacy mechanisms compared to TFF, while covering all the listed features that TFF supports. Asad et al. presented in [AMIA21] a detailed comparison between different ex-isting FL frameworks such as PySyft, TFF and LEAF based on their architecture, features and communication-efficiency. In addition, Boemer et al. in [BCD+20] compared their framework MP2ML to PySyft and reported that in terms of model privacy PySyft hides model weights but not the activation functions and model architecture which is a key feature of MP2ML. Last, [BTM+20] introduces Flower, a framework to facilitate FL research which is agnostic of the ML framework used. The main difference is that Flower is very opinionated on the compu-tation workflow, which guarantees ease of use, while PySyft is intended to allow any remote computation, not only federated learning. 

3.3.2 Use Case: Benchmarking and Standardizing Federated Learning Sys-tems 

Along with frameworks with cutting-edge tools, there are also new frameworks being introduced for benchmarking federated learning algorithms applied in different use-cases. As example, in [HLL+20] Hu et al. presented a benchmark suite for federated machine learning systems equipped with diverse data partitioning methods, cutting edge applications in image, text and structured data and use-cases with various learning complexity. They also implemented few available tools using existing FL frameworks as references to their benchmarking. They used PySyft for model training and implementing the encryption process for secure multy-party com-putation. On the other hand, He et al in [HLS+20] introduced an open research library called FedML for the development and benchmarking of new FL algorithms in different system envi-ronments including distributed training, mobile on-device training, and standalone simulation. Authors reported that compared to PySyft, FedML provides additional features like topology 

1https://github.com/OpenMined/

customization, algorithm implementation of decentralized FL, FedNAS [HAA20] and vertical FL and standardized benchmarking of Deep Neural Networks. In an attempt to standard-ize Federated Learning based applications, Rodríguez-Barroso et al. in [RBSJL+20] proposed an open-source unified framework for federated learning and differential privacy including the standard methodology for adapting the machine learning paradigms and developing AI based services like classification and regression using federated learning and differential privacy. While analyzing different existing frameworks, they mentioned PySyft as a low level FL framework intended to be used by advanced developers with the lack of beginner-friendly support and mechanism and algorithms for differential privacy. In [RTPB22], we proposed a low-interaction SMPC protocol for private training and inference of standard deep neural networks on sensitive data based on function secret sharing. The framework offers a wide range of functions including ReLU, MaxPool and BatchNorm, and allows to use very deep neural networks like AlexNet and ResNet18. It uses PySyft for the communication layer between parties and for fixed precision tensors, and was integrated into the library. 

3.3.3 Use Case: Federated Learning on Edge Devices 

In a comprehensive survey on implementing federated learning on mobile edge networks in terms of the background, challenges and existing solutions [LLH+20], PySyft is mentioned as an existing open-source framework for performing encrypted, privacy-preserving deep learning and implementations of techniques like SMPC and differential privacy in untrusted environments while protecting data. In a research article [FYS+20], PySyft was used for Federated Learning in IoT Edge devices for training machine learning models in edge devices in a secure and resource-efficient way. The authors explain their use of PySyft as the FL framework as “it provides the network worker structure that enables the remote communication of the model and uses the WebSocket protocol to lower overhead, and facilitates real-time data transfer from and to the Server”. The PySyft library is also used by Chaulwar et al. in their privacy preserving framework FedCollabNN [Cha20] for training machine learning models at edge, which is computationally efficient and robust against adversarial attacks. PySyft has also been discussed as a tool for training deep neural networks on the Raspberry Pi 4 boards as edge devices [DB19]. Finally, in [KXJ+20], Kang et al. proposed a blockchain-empowered secure, scalable and communication-efficient decentralized federated edge learning system with a hierarchical blockchain framework consisting of a main chain and subchains. Their proposed framework was implemented using Pytorch, PySyft, and a blockchain platform named EOSIO. 

3.3.4 Use Case: Healthcare and Medical Research 

The benefits of PySyft as an adaptable secure and private machine learning framework have been leveraged in several healthcare-related research works. Our recent work with Kaissis et al. [KMRB20] describes the availability of frameworks like PySyft as instrumental to the widespread application of secure, privacy-preserving and federated machine learning techniques in medical imaging and medicine in general, and a number of current review articles reference PySyft in relation to medical image workflows, amongst others Quayyum et al. [QQBAF20], Suzen et al. [SŞ20] and Li et al. [LWH19]. Furthermore, several concrete healthcare-related use cases have been proposed utilizing PySyft. Passerat-Palmbach et al. in their work [PPFM+19] present a combination of federated learning and blockchain for use by healthcare consortia. Their proposed system architecture leverages federated learning building blocks from the PySyft li-brary. In a 2019 research paper by Gao et al. on federated learning on heterogeneous EEG data for human behavior and emotion recognition tasks [GJW+19], the PySyft framework was used for Horizontal Federated Learning. PySyft has also been used in a prototype platform of federated-learning-based quantitative structure–activity relationships modeling for collaborative drug discovery in a work by Chen et al. [CXC+21]. Last, the PriMIA (Private Medical Imaging

Analysis) library [ZPPR+20], which is a collaborative development between the Technical Uni-versity of Munich, Imperial College London and OpenMined, builds upon PySyft and PyGrid to offer a single interface for federated training of algorithms and encrypted inference-as-a-service, which is showcased on a multi-institutional case study on pediatric X-ray image data. 

3.3.5 Use Case: Finance, Business or Industry 

In [HSKS20], Hiessl et al introduce an industrial federated learning system to enable collabora-tion of business partners on common ML problems. As a future work, they would like to evaluate the incorporation of FL open source frameworks including PySyft with respect to production readiness and support for concurrent communication and computation required by the FL co-horts they introduce. In [THL+19], Tang et al. designed and implemented a general scheme for privacy-preserving and fair deep learning inference service in a three-worker model under the setting of publicly verifiable covert security. The implementation for secure three-party com-putation is completely based on PySyft and PyTorch. They also noted a major advantage of PySyft over MiniONN on the basis of PySyft’s ability to split and share data and model using PointerTensors as opposed to MiniONN’s requirement of transforming an entire existing neural network to an oblivious neural network. In addition, a potential use-case of federated learning and privacy-preserving collaborative learning has been discussed by Kawa et al. in [KPN+19] for credit risk assessment where multiple participating institutes will be able to collaboratively learn a shared prediction model while keeping all the data within themselves. Last, in her master’s thesis [JA19] Jansson presented a framework for training a credit card fraud detection model using Federated Averaging implemented in PySyft. 

3.3.6 Use Case: Anomaly Detection 

PySyft has also been relied on for building federated learning based anomaly detection models. In [SBPB21], Singh et al. implemented unsupervised anomaly detection using federated learning. They used a special type of neural network called autoencoder and used it’s reconstruction loss as the basis of classifying anomalies. The autoencoder part was obtained from PyTorch library, whereas the federated learning and aggregation of models were implemented using PySyft tools. Authors reported results comparable to the baseline model which was implemented without federated learning. Apart from that, as mentioned in [LGN+20] by Liu et al., a communication-efficient on-device federated learning based deep anomaly detection framework for sensing time-series data in Industrial IoT was implemented entirely using PySyft libraries. 

3.4 Conclusion PySyft is an open-source library built and maintained by the OpenMined community, which allows data scientists to perform arbitrary federated learning or encrypted computation, and also supports differential privacy. Its flexibility comes from the tensor chain structure, thanks to which users can combine multiple functionalities on top of standard tensors. 

We have contributed to this library throughout the duration of this thesis, by building the core tensor and federated architecture, and later on by adding new privacy-preserving blocks like the AriaNN function secret sharing protocol introduced in chapter 5.

Chapter 

# 4 Privacy Attacks in Machine Learning 

This chapter is based on the paper [RPB+19] published in the proceedings of Advances in Neural Information Processing Systems, NeurIPS 2019. 

Chapter content 4.1 Data Privacy Attacks on Neural Networks . . . . . . . . . . . . . . . 37 

4.1.1 Membership Inference Attacks . . . . . . . . . . . . . . . . . . . . . . . 37 4.1.2 Model Inversion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 

4.2 Collateral Learning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 4.2.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 4.2.2 Private Inference Setting . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 4.2.3 Defeating Collateral Learning . . . . . . . . . . . . . . . . . . . . . . . . 42 4.2.4 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 

Machine learning models, especially deep neural networks, are known to be sensitive to several attacks that aim at subverting the original goal of a model (like performing image clas-sification for a given set of classes), in order to perform several tasks breaching the privacy of training data items or disclosing sensitive attributes about evaluated data items. For example, reverse-engineering attacks [FJR15] try to analyze the model to recover part of the training dataset, or model inversion attacks [SSSS17] analyze the behavior of a trained model on some input to determine if this input was part of the training dataset. We first propose a panorama of classical privacy attacks against data used for training or inference, which underlines the importance of developing privacy enhancing machine learning approaches, and we then expose one attack developed as part of [RPB+19]. 

4.1 Data Privacy Attacks on Neural Networks We present here attacks that aim at disclosing information about the sensitive data. In particu-lar, we do not consider methods like adversarial examples [YHZL19], model extraction [TZJ+16] or backdoor attacks [BVH+20] which underline the weaknesses of machine learning models but do not directly break the privacy of the data. 

4.1.1 Membership Inference Attacks 

Membership inference attacks on machine learning models were first reported by [SSSS17], where the model to attack is provided as a black-box. A membership inference attack consists of exploiting a trained model to assess whether a data item was used during training or not. We usually consider two types of attacks: in the white-box setting, the model is provided to the attacker who can analyze its architecture and the parameters’ value. It is the most permissive setting, but it is of particular interest in the context of federated learning, where each party

contributing its data has a direct access to the model. In the black-box setting, the model is not provided directly but can be queried to get predictions on data items provided by the attacker, as studied in [SSSS17]. This setting is very interesting because it fits many real case scenarios where a model is only available through an API by a company and is trained on sensitive data, should it be company internal data or data from individuals like healthcare data. Say a hospital releases a model which analyzes side effects of chemotherapy. No matter what data is used to train this model, if an attacker is able to infer if one patient was part or not of the dataset, it can learn that this patient underwent chemotherapy. Therefore the privacy leakage is here associated with the risk of belonging to such or such dataset, which for healthcare directly relates to the consent of the patient to having their data included in a research study. 

The black-box setting is appealing because virtually any model as a service is sensitive to such attacks. The way the attack is usually conducted is by training an attacker model that uses the output signal of the target model on some input to perform the binary classification of membership. Providing this attacker model with examples of items inside and outside the train-ing dataset is not possible in real scenarios, since no precise information about how the target model was trained is generally available. To circumvent this, one builds several proxies to the target model by training models that are believed to be close in terms of architecture, on proxy datasets which are also believed to be comparable to the target dataset. The attacker model can then be trained on the output of this proxy model, and [SSSS17] shows that its predictions gen-eralize well on the target models, providing a significant advantage in the membership inference over the random guess performance. [SSSS17] experiments are mostly based on vision datasets or on numerical datasets. [SS19] also studied black-box membership inference attacks but in the context of natural language processing on models like recurrent neural networks, where they provide evidence that such models are also sensitive to these attacks. 

Recently, authors of [CCN+22] have proposed a new approach to quantify how successful a membership attack is. Instead of relying on average-case success metrics such as the accuracy, they argue that a better metric should be able to quantify the success of an attack when only a small fraction of the population is targeted. As such, they propose to measure the true-positive rate at low false-positive rates, thus reproducing standard practices from computer security [HSJ+17]. 

4.1.2 Model Inversion 

The power of model inversion attacks, also known as reconstruction attacks, have been brought in light by [FJR15] which has shown that trained models, either provided in the white-box or in the black-box setting, can be exploited to recover sensitive attributes about individuals present in the training dataset. One particular example provided in the study is through two different attacks on a facial recognition model, which associates a name from a pre-defined list to a facial image. The first attack consists of exploiting the model to produce an image given a name in the list. The success of the attack is measured through the ability to match the produced image with one in the set of faces presented to the attacker, composed of one face per name. The second attack consists of providing an attacker with a blurred image for which the model is unable to perform its classification, and the attacker exploits the model to try to deblur the image. The success is then measured in a similar way by trying to match the deblurred image with a representative set. 

[FJR15] used a simple method to perform this attack which is based gradient descent. The main idea is to update an input x of class c ∈ [0, C − 1] so as to maximize the output of the model f(θ, x) ∈ RC on its c-th component, where this output is modelling a probability to belong to each of the C classes and is typically implemented using a softmax activation function. Gradient descent, as commonly used to train models parametrized with θ ∈ Rp, consists of iteratively computing θk+1 = θk − η∇θf(θk, x). Here, as the model parameters are

freezed and x is being optimized, it writes instead xk+1 = xk − η∇xf(θ, xk). In the white-box setting, ∇xf can easily be computed, but in the black-box setting, the gradient needs to be computed approximately based on the observed output f(x). As they show and as we illustrate in a different setting in our work on collateral learning, the precision with which the output probabilities are provided directly conditions the success of the attack, as low precision compromises the ability to numerically estimate the gradient. This is an interesting observation as the black-box setting usually corresponds to machine learning as a service, a scenario where the user of the service is mainly interested by the predicted class than the exactly probability distribution output by the model, and even when this distribution is required by the user, it needs not be provided with great precision. Hence, providing the output of the model with low precision is en efficient countermeasure to model inversion attacks in the black-box setting. 

Federated learning allows for a new kind of attack based on the inversion of gradients dur-ing training instead of the fully trained model and has been explored by [GBDM20]. Indeed, since the users usually send the updates of the model through the gradients of its parameters, such gradients can be exploited by the central server to try to reconstruct the user batch data. The authors demonstrate how successful this attack can be, especially but not solely for fully connected networks. 

Membership inference and model inversion attacks can be formalized through the advantage of an adversary A: 

AdvMI A (1λ) := Pr 

b′ = b : 

x $← Ω b← τ(x) c← Gen(M,D, x) b′ ← AM(D)(c) 

− Pr 

b′ = b : 

x $← Ω b← τ(x) c← Gen(M,D, x) b′ ← A∗(c) 

 Where τ is the objective function which maps any x from the sample space Ω to some objective space {0, 1}∗. The advantage corresponds to the difference between the probability of success for adversary A to predict the output of τ on x given some auxiliary information c derived from x using Gen, when the adversary has some access to the trained model M(D) or not. This access can be limited as in the black-box setting or not, like as in the white-box setting. 

For both attacks, Gen(M,D, x) := h(M(D)(x)), where h is a post-processing function over the output of the model over x. For membership inference attacks, the objective function τ is defined as such: 

τ(x) = { 

1 x ∈ D 0 x /∈ D 

and for model inversion attacks, τ is the identity function: 

τ(x) = x 

. 

4.2 Collateral Learning As part of our work [RPB+19], we introduce a new functional encryption scheme which is described more in depth in the following chapter and we show how to use it to build privacy preserving neural networks that perform well on simple image classification problems. Functional encryption (FE) [BSW11, O’N10] allows users to receive in plaintext evaluations on a function over encrypted data: for a function f , a functional decryption key is generated such that, given any ciphertext with underlying plaintext x, a user can use this key to obtain f(x) without learning x or any other information than f(x).

An interesting question that emerges as part of this work is: how much information does f(x) reveal about x? In the case of this FE scheme which only allows building small neural networks with a single hidden layer and a quadratic activation function, this question is particularly important. We develop an attack that we coin collateral learning which does not consist in reconstructing the original input as in model inversion, but instead in inferring sensitive collateral attributes of the input which were not part of the learning task. These attacks can be classified in the family of property inference attacks which is formalized in [RG20] as the family of attacks that extract input properties which were not features and were not correlated to the learning task. In addition, we present an adversarial training technique to process a model in order to improve privacy, so that its output which is in plaintext cannot be exploited by adversaries to recover specific sensitive information at test time. 

Our contributions 

We first provide a thorough analysis of the information leaks from the output of a model, based on indistinguishability of data items of the same label. We show how the leaks materialize using a privacy attack against some input properties. Second, we propose a training method to prevent selected sensitive features from leaking, which adversarially optimizes the network against an adversary trying to identify these features. This is interesting since many encryption schemes cannot deal with the thresholding operation commonly used for classification to select the most probable class, and it comes with little reduction on the model’s accuracy while significantly improving data privacy. 

4.2.1 Background 

Quadratic and Polynomial Neural Networks 

Polynomial neural networks are a class of networks which only use linear elements, like fully connected linear layers, convolutions but with average pooling, and model activation functions with polynomial approximations when not simply the square function. Despite these simplifica-tions, they have proved themselves satisfactorily accurate for relatively simple tasks ([DGBL+16] learns on MNIST and [BCL+18] on CIFAR10 [Kri12]). The simplicity of the operations they build on guarantees good efficiency, especially for the gradient computations, and works like [LSSS14] have shown that they can achieve convergence rates similar to those of networks with non-linear activations. 

In particular, they have been used for several early stage implementations in cryptography [DGBL+16, CGGI16, BMMP18] to demonstrate the usability of new protocols for machine learning. However, the argmax or other thresholding functions present at the output of a classifier network to select the predicted class among the output neurons cannot be conveniently handled, so several protocol implementations (among which ours) run polynomial networks on encrypted inputs, but take the argmax over the decrypted output of the network. This results in potential information leakage which can be maliciously exploited. 

Indistinguishability 

We analyze how sensitive the output f(x) is with respect to the private input x, using a relaxed version of indistinguishability. More precisely, we assume that our input data can be used to predict public labels but also sensitive private ones, respectively ypub and ypriv. Our quadratic FE scheme denoted by q aims at predicting ypub and an adversary would rather like to infer ypriv. In this case, the security game consists in the adversary providing two inputs (x0, x1) labeled with the same ypub but a different ypriv and then trying to distinguish which one was selected by the challenger, given its output q(xb), b ∈ {0, 1}. One way to do this is to measure

the ability of an adversary to predict ypriv for items which all belong to the same ypub class, given only outputs of q. 

In particular, note that we do not consider approaches based on input reconstruction (as done by [CFLS18]) because in many cases, the adversary is not interested in reconstructing the whole input, but rather wants to get insights into specific properties of the data. 

Another way to see this problem is that we want the sensitive label ypriv to be independent from the decrypted output q(x) given the true public label ypub. This independence notion is known as separation and is used as a fairness criterion in [BHN18] if the sensitive features can be misused for discrimination. 

4.2.2 Private Inference Setting 

Classifying in two directions 

We are interested in specific types of datasets (xi)i=1,...,n which have public labels ypub but also private ones ypriv. Moreover, these different types of labels should be entangled, meaning that they should not be easily separable, unlike the color and the shape of an object in an image for example which can be simply separated. For example, in the spam filtering use case mentioned above, ypub would be a spam flag, and ypriv would be some marketing information highlighting areas of interest of the email recipient like technology, culture, etc. In addition, to simplify our analysis, we assume that classes are balanced for all types of labels, and that labels are independent from each other given the input: ∀x, P (ypub, ypriv|x) = P (ypub|x)P (ypriv|x). To illustrate our approach in the case of image recognition, we propose a synthetic dataset inspired by MNIST which consists of 60 000 gray scaled images of 28×28 pixels representing digits using two fonts and some distortion, as shown in Figure 4.1. Here, the public label ypub is the digit on the image and the private one ypriv is the font used to draw it. 

Figure 4.1: Artificial dataset inspired from MNIST with two types of labels. 

We define two tasks: a main task which tries to predict ypub using a partially-encrypted polynomial neural network with functional encryption, and a collateral task which is performed by an adversary who tries to leverage the output of the FE encrypted network at test time to predict ypriv. Our goal is to perform the main task with high accuracy while making the collateral one as bad as random predictions. In terms of indistinguishability, given a dataset with the same digit drawn, it should be infeasible to detect the used font. 

Threat of Collateral Learning 

A typical adversary would have read access to the main task classification process. It would leverage the output of the quadratic network to try to learn the font used on ciphered images. To do this, all that is needed is to train another network on top of the quadratic network so that it learns to predict the font, assuming some access to labeled samples (which is the case if the adversary encrypts itself images and provides them to the main task at evaluation time). Note that in this case the private network is not updated by the collateral network as we assume it is only provided as a black-box after the main task is trained. Figure 4.3 summarizes the setting. 

We implemented this scenario using as adversary a neural network composed of a first layer acting as a decompression step where we increase the number of neurons from 10 back to 28 × 28 and add on top of it a classical convolutional neural network1 convolutional. This 

1Described here: https://github.com/pytorch/examples/blob/master/mnist/main.py

Figure 4.2: Semi-encrypted network using quadratic FE. 

Figure 4.3: Semi-encrypted network with an adversary try-ing to recover private labels from the private network. 

structure is reminiscent of autoencoders [VLBM08] where the bottleneck is the public output of the private net and the challenge of this autoencoder is to correctly memorize the public label while forgetting the private one. What we observed is striking: in less than 10 epochs, the collateral network leverages the 10 public neurons output and achieves 93.5% accuracy for the font prediction. As expected, it gets even worse when the adversary is assessed with the indistinguishability criterion because in that case the adversary can work on a dataset where only a specific digit is represented: this reduces the variability of the samples and makes it easier to distinguish the font; the probability of success is indeed of 96.9%. 

We call collateral learning this phenomenon of learning unexpected features and we show in the next section how to implement counter-measures to this threat in order to improve privacy. 

4.2.3 Defeating Collateral Learning 

Reducing information leakage 

Our first approach is based on the observation that we leak many bits of information. We first investigate whether we can reduce the number of outputs of the privately-evaluated network, as adding extra layers on top of the private network makes it no longer necessary to keep 10 of them. The intuition is that if the information that is relevant to the main task can fit in less than 10 neurons, then the extra neurons would leak unnecessary information. We have therefore a trade-off between reducing too much and losing desired information or keeping a too large output and having an important leakage. We can observe this through the respective accuracies as it is shown in Figure 4.4, where the main and adversarial networks are CNNs as in Section 4.2.2 with 10 epochs of training using 7-fold cross validation. What we observe here is interesting: the main task accuracy does not drop significantly even when we reach an output size of 3 neurons, where it reaches 97.1% which is still very good although 2% under the best accuracy. In return, the collateral accuracy starts to significantly decrease when output size is below 7. At size 4, it is only 76.4% on average so 18% less than the baseline. We will keep an output size of 3 or 4 for the next experiments to keep the main accuracy almost unchanged. 

Another hyperparameter that we can consider is the weight compression: how many bits do we need to represent the weights on the private networks layers? This is of interest for the FE scheme as we need to convert all weights to integers and those integers will be low provided that the compression rate is high. Small weight integers mean that the output of the private

Figure 4.4: Trade-off between main and collateral accuracies depending on the private output size. 

network has a relatively low amplitude and can be therefore efficiently decrypted using discrete logarithm. We managed to express all weights and even the input image using 4 bit values with limited impact on the main accuracy and almost none on the collateral one. Details about compression can be found in Appendix A.1.2. 

Adversarial training 

We propose a new approach to actively adapt against collateral learning. The main idea is to simulate adversaries and to try to defeat them. To do this, we use semi-adversarial training and simultaneously optimize the main classification objective and the opposite of the collateral objective of a given simulated adversary. The function that we want to minimize at each iteration step can be written: 

min θq 

[min θpub Lpub(θq, θpub)− α min 

θpriv Lpriv(θq, θpriv)]. 

This approach is inspired from [LKC17] where the authors train some objective against nuisances parameters to build a classifier independent from these nuisances. Private features leaking in our scheme can indeed be considered to be a nuisance. However, our approach goes one step further as we do not just stack a network above another; our global network structure is fork-like: the common basis is the private network and the two forks are the main and collateral classifiers. This allows us to have a better classifier for the main task which is not as sensitive to adversarial training as the scheme exposed by [LKC17, Figure 1]. One other difference is that the collateral classifier is a specific modeling of an adversary, and we will discuss this in detail in the next section. We define in Figure 4.5 the 3-step procedure used to implement this semi-adversarial training using partial back-propagation. 

4.2.4 Experimental Results 

Accurate main task and poor collateral results. In Figures 4.6 and 4.7 we show that the output size has an important influence on the two tasks’ performances. For this experiment, we use α = 1.7 as detailed in Appendix A.1.2, the adversary uses the same CNN as stated above and the main network is a simple feed forward network (FFN) with 4 layers. We observe that both networks behave better when the output size increases, but the improvement is not synchronous which makes it possible to have a main task with high accuracy while the collateral task is still very inaccurate. In our example, this corresponds to an output size between 3 and

Pre-training: Initial phase where both tasks learn and strengthen before the joint optimization Minimize Lpub(θq, θpub) Minimize Lpriv(Frozen(θq), θpriv) 

Semi-adversarial training: The joint optimization phase, where θpub and θpriv are updated depending on the variations of θq and θq is optimized to reduce the loss L = Lpub − αLpriv Minimize Lpub(Frozen(θq), θpub) Minimize Lpriv(Frozen(θq), θpriv) Minimize L = Lpub(θq, Frozen(θpub)) − αLpriv(θq, Frozen(θpriv)) 

Recover phase: Both tasks recover from the perturbations induced by the adversarial phase, θq does not change anymore Minimize Lpub(Frozen(θq), θpub) Minimize Lpriv(Frozen(θq), θpriv) 

Figure 4.5: Our semi-adversarial training scheme. 

Figure 4.6: Influence of the output size on the main task accuracy with adversarial training. 

Figure 4.7: Influence of the output size on the collateral task accuracy with adversarial train-ing. 

5. Note that the collateral result is the accuracy at the distinction task, i.e., the digit is fixed for the adversary which trains to distinguish two fonts during a 50 epoch recover phase using 7-fold cross validation, after 50 epochs of semi-adversarial training have been spent to reduce leakage from the private network. 

Generalizing resistance against multiple adversaries. In practice, it is very likely that the adversary will use a different model than the one against which the protection has been built. We have therefore investigated how building resistance against a model M can provide resistance against other models. Our empirical results tend to show that models with less parameters than M do not perform well. In return, models with more parameters can behave better, provided that the complexity does not get excessive for the considered task, because it would not provide any additional advantage and would just lead to learning noise. In particular, the CNN already mentioned above seems to be a sufficiently complex model to resist against a wide range of feed forward (FFN) and convolutional networks, as illustrated in Figure 4.8 where the measure used is indistinguishability of the font for a fixed digit. This study is not exhaustive as the adversary can change the activation function (here we use ReLU) or even the training parameters (optimizer, batch size, dropout, etc.), but these do not seem to provide any decisive advantage. 

We also assessed the resistance to a large range of other models from the sklearn library [PVG+11] and report the collateral accuracy in Figure 4.9. As can be observed, some models such as k-nearest neighbors or random forests perform better compared to neural networks, even if their accuracy remains relatively low. One reason can be that they operate in a very different manner compared to the model on which the adversarial training is performed: k-nearest neighbors for example just considers distances between points.

Figure 4.8: Collateral accuracy depending of the adversarial network complexity seen as the log of the number of parameters. 

Linear Ridge Regression 53.5± 0.5% Logistic Regression 52.5± 0.6% Quad. Discriminant Analysis 54.9± 0.3% SVM (RBF kernel) 57.9± 0.4% Gaussian Process Classifier 53.8± 0.3% Gaussian Naive Bayes 53.2± 0.5% K-Neighbors Classifier 58.1± 0.7% Decision Tree Classifier 56.8± 0.4% Random Forest Classifier 58.9± 0.2% Gradient Boosting Classifier 58.9± 0.2% 

Figure 4.9: Accuracy on the distinction task for different adversarial learning models.

Chapter 

# 5 Private Evaluation and Training of Neural Networks 

This chapter is based on the article [RPB+19] published in the proceedings of Advances in Neural Information Processing Systems, NeurIPS 2019 and on the article [RTPB22] published in Proceedings on Privacy Enhancing Technologies Symposium, PoPETS 2022. 

Chapter content 5.1 Partially Encrypted Machine Learning using Functional Encryption 48 

5.1.1 Background on Functional Encryption . . . . . . . . . . . . . . . . . . . 49 5.1.2 Our Context for Private Inference . . . . . . . . . . . . . . . . . . . . . 50 5.1.3 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 5.1.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 

5.2 AriaNN: Low-Interaction Privacy-Preserving Deep Learning via FSS 54 5.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54 5.2.2 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 5.2.3 Function Secret Sharing Primitives . . . . . . . . . . . . . . . . . . . . . 58 5.2.4 Application to Deep Learning . . . . . . . . . . . . . . . . . . . . . . . . 68 5.2.5 Extension to Private Federated Learning . . . . . . . . . . . . . . . . . . 72 5.2.6 Experiments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73 5.2.7 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78 

Beyond the analysis of federated systems, the development of new types of attacks against trained models together with some countermeasures, we turn ourselves towards another problem which can be summed up as such: can we have an algorithm interact with some data without exposing any of those? One typical example would be a regulation authority that builds a model to analyze financial fraud using sensitive data from banks. On the one hand, the authority does not want to expose its model to the banks to avoid any form of optimization against that model in order to slip under the radar. On the other hand, banks are not willing to expose their customers’ data, even to a regulation authority. Cryptography protocols are a common solution to this problem, since they allow to encrypt or hide the data before sharing it to other parties. For a computation to be possible, such as a model evaluation or training using the data, we require the protocol to satisfy homomorphic properties, which roughly means that applying operations on encrypted inputs should be equivalent to applying the operation on the inputs and then encrypting the result. Numerous protocols have been proposed but we have investigated two specific directions. The first one goes somewhat beyond standard scenarios for homomorphic encryption and combines the computation step and the decryption step together, which is very interesting in situations where we want to avoid an extra decryption request after the computation was made. It is called functional encryption (FE) and we explore new capabilities for FE algorithms. In particular, we show that our algorithm can be used to evaluate small neural networks in a semi-encrypted way. The second direction we explore is the family of SMPC protocols based on additive secret sharing, which have been studied more

intensively in the context of private machine learning. Existing results are promising in terms of the flexibility they offer to support various neural layers but they require a prohibitive number of interaction rounds which make them impractical for real world scenarios with high latency. We build upon a cryptographic primitive known as function secret sharing (FSS) to propose a new low-interaction protocol for comparison, which is a core primitive of neural network non linearities and a bottleneck in private ML in terms of computation time. We show that we can train and evaluate real world neural networks in a fully private fashion, and we have integrated our implementation as part of the PySyft library to enlarge the privacy-preserving toolbox of privacy aware data scientists. 

5.1 Partially Encrypted Machine Learning using Functional En-cryption 

As both public opinion and regulators are becoming increasingly aware of issues of data privacy, the area of privacy-preserving machine learning has emerged with the aim of reshaping the way machine learning deals with private data. Breakthroughs in fully homomorphic encryption (FHE) [BMMP18, CGGI16] and secure multi-party computation (SMPC) [DPSZ12, WGC19] have made computation on encrypted data practical and implementations of neural networks to do encrypted predictions have flourished [RWT+18, RTD+18, SEA19, BFL+11, BPTG15]. 

However, these protocols require the data owner encrypting the inputs and the parties per-forming the computations to interact and communicate in order to get decrypted results, which we would like to avoid in some cases, like spam filtering, for example, where the email receiver should not need to be online for the email server to classify incoming email as spam or not. Functional encryption (FE) [BSW11, O’N10] in return does not need interaction to compute over encrypted data: it allows users to receive in plaintext specific functional evaluations of en-crypted data: for a function f , a functional decryption key can be generated such that, given any ciphertext with underlying plaintext x, a user can use this key to obtain f(x) without learning x or any other information than f(x). It stands in between traditional public key encryption, where data can only be directly revealed, and FHE, where data can be manipulated but cannot be revealed: it allows the user to tightly control what is disclosed about his data. 

Use cases 

Spam filtering. Consider the following scenario: Alice uses a secure email protocol which makes use of functional encryption. Bob uses Alice’s public key to send her an email, which lands on Alice’s email provider’s server. Alice gave the server keys that enable it to process the email and take a predefined set of appropriate actions without her being online. The server could learn how urgent the email is and decide accordingly whether to alert Alice. It could also detect whether the message is spam and store it in the spam box right away. 

Privacy-preserving enforcement of content policies Another use case could be to enable platforms, such as messaging apps, to maintain user privacy through end-to-end encryption, while filtering out content that is illegal or does not adhere to policies the site may have regard-ing, for instance, abusive speech or explicit images. 

These applications are not currently feasible within a reasonable computing time, as the con-struction of FE for all kinds of circuits is essentially equivalent to indistinguishable obfuscation [BGI+01, GGH+13], concrete instances of which have been shown insecure, let alone efficient. However, there exist practical FE schemes for the inner-product functionality [ABDP15, ALS16] and more recently for quadratic computations [BCFG17], that are usable for practical applica-tions.

Our contributions 

We introduce a new FE scheme to compute quadratic forms which outperforms that of Baltico et al. [BCFG17] in terms of complexity, and provide an efficient implementation of this scheme. We show how to use it to build privacy preserving neural networks, which perform well on simple image classification problems. Specifically, we show that the first layers of a polynomial network can be run on encrypted inputs using this quadratic scheme. 

We demonstrate the practicality of our approach using a dataset inspired from MNIST [LC10], which is made of images of digits written using two different fonts. We show how to perform classification of the encrypted digit images in less than 3 seconds with over 97.7% accuracy. 

This paper builds on a preliminary version available on the Cryptology ePrint Archive. All code and implementations can be found online1. 

5.1.1 Background on Functional Encryption 

Functional encryption extends the notion of public key encryption where one uses a public key pk and a secret key sk to respectively encrypt and decrypt some data. More precisely, pk is still used to encrypt data, but for a given function f , sk can be used to derive a functional decryption key dkf which will be shared to users so that, given a ciphertext of x where x is an integer from a set X , they can decrypt f(x) but not x. In particular, someone having access to dkf cannot learn anything about x other than f(x). Note also that functions cannot be composed, since the decryption happens within the function evaluation. Hence, only single quadratic functions can be securely evaluated. We provide below a more formal definition, together with notions of correctness and security. 

5.1.1.1 Formal Definition of Functional Encryption 

Functional encryption relies on a pair of keys like in public key encryption: a master secret key msk and a public key pk. The public key pk can be shared and is used to encrypt the data, while the master secret key msk is used to build functional decryption keys dkf for f ∈ F . A user having access to c an encryption of x with pk and to dkf can learn f(x) but cannot learn anything else about x. 

We give the definition of Functional Encryption, originally defined in [BSW11, O’N10]. 

Definition 8 (Functional Encryption). A functional encryption scheme FE for a set of functions F ⊆ X → Y is a tuple of PPT algorithms FE = (SetUp, KeyGen, Enc, Dec) defined as follows. 

SetUp(1λ,F) takes as input a security parameter 1λ, the set of functions F , and outputs a master secret key msk and a public key pk. 

KeyGen(msk, f) takes as input the master secret key and a function f ∈ F , and outputs a functional decryption key dkf . 

Enc(pk, x) takes as input the public key pk and a message x ∈ X , and outputs a ciphertext ct. 

Dec(dkf , ct) takes as input a functional decryption key dkf and a ciphertext ct, and returns an output y ∈ Y ∪ {⊥}, where ⊥ is a special rejection symbol. 

1Available at https://github.com/LaRiffle/collateral-learning and https://github.com/edufoursans/reading-in-the-dark

5.1.1.2 Correctness 

Perfect correctness. Perfect correctness is achieved in functional encryption: ∀x ∈ X , f ∈ F , Pr[Dec(dkf , ct) = f(x)] = 1, where dkf ← KeyGen(msk, f) and ct ← Enc(pk, x). Note that this property is a very strict condition, which is not satisfied by existing fully homomorphic encryption schemes (FHE), such as [BV11, GSW13]. 

5.1.1.3 IND-CPA Security 

To assess the security of our framework, we first consider the FE scheme security and make sure that we cannot learn anything more than what the function is supposed to output given an encryption of x. We will rely on indistinguishability [GM84], a classical security notion which can be summed up in the following game: an adversary provides two input items to the challenger (here our FE algorithm), and the challenger chooses one item to be encrypted, runs encryption on it before returning the output. The adversary should not be able to detect which input was used. This is known as IND-CPA security and is formally defined in the preliminary chapter in section 2.3.2. 

With notations of above, for any stateful adversary A and any functional encryption scheme FE, IND-CPA security translates in the following advantage: 

AdvFE A (λ) := Pr 

β′ = β : 

(pk, msk)← SetUp(1λ,F) (x0, x1)← AKeyGen(msk,·)(pk) β $← {0, 1}, ct← Enc(pk, xβ) β′ ← AKeyGen(msk,·)(ct) 

− 1 2 , 

with the restriction that all queries f that A makes to key generation algorithm KeyGen(msk, ·) must satisfy f(x0) = f(x1). 

We say FE is IND-CPA secure if for all PPT adversaries A, AdvFE A (λ) = negl(λ). 

5.1.1.4 Bilinear Groups 

Our FE scheme uses bilinear (or pairing) groups, whose use in cryptography has been introduced by [BF03, Jou04] and which are defined in the preliminary chapter in section 2.1. Given λ a security parameter, let G1 and G2 be two cyclic groups of prime order p (for a 2λ-bit prime p) and g1 and g2 their generators, respectively. The application e : G1×G2 → GT is a pairing if it is efficiently computable, non-degenerated, and bilinear: e(gα 

1 , gβ 2 ) = e(g1, g2)αβ for any α, β ∈ Zp. 

Additionally, we define gT := e(g1, g2) which spans the group GT of prime order p. We will denote by GGen a probabilistic polynomial-time (PPT) algorithm that on input 1λ 

returns a description PG = (G1,G2, p, g1, g2, e) of an asymmetric bilinear group. For conve-nience, given s = 1, 2 or T , n ∈ N and vectors u := (u1 . . . un) ∈ Zn 

p , v ∈ Zn p , we denote by 

gu s := (gu1 

s . . . gun s ) ∈ Gn 

s and e(gu 1 , gv 

2 ) = ∏ i=1 e(g1, g2)ui·vi = e(g1, g2)u·v ∈ GT , where u · v is 

the inner product, i.e. u · v := ∑n i=1 uivi. 

Last, GL2 denotes the general linear group of degree 2, i.e. the multiplicative group of 2× 2 invertible matrices. 

5.1.2 Our Context for Private Inference 

5.1.2.1 Functional Encryption Scheme 

We now introduce our new framework for quadratic functional encryption and show that it can be used to partially encrypt a polynomial network. 

We build an efficient FE scheme for the set of quadratic functions defined as Fn,Bx,By ,Bq ⊂ {q : [−Bx, Bx]n × [−By, By]n → Z}, where q is described as a set of bounded coefficients {qi,j ∈ [−Bq, Bq]}i,j∈[n] and for all vectors (x, y), we have q(x, y) = ∑ 

i,j∈[n] qi,jxiyj .

A complete version of our scheme is given in Figure 5.1, but here are the main ideas and notations. A pair of vectors (s, t) is first selected and constitutes the private key msk, while the public key is (gs 

1, gt 2). Encrypting (x, y) roughly consists of masking gx 

1 and gy 2 with gs 

1 and gt 

2, which allows any user to compute g q(x,y)−q(s,t) T with for any quadratic function q, using the 

pairing. The functional decryption key for a specific q is g q(s,t) T which allows to get g 

q(x,y) T . Last, 

taking the discrete logarithm gives access to q(x, y) (discrete logarithm for small exponents is easy). Security uses the fact that it is hard to compute msk from pk (discrete logarithm for large exponents s, t is hard to compute). More details are given in Appendix A.1.12 

SetUp(1λ,Fn,Bx,By ,Bf ): 

PG := (G1,G2, p, g1, g2, e)← GGen(1λ), s, t $← Zn p , msk := (s, t), pk := 

( PG, gs 

1, gt 2 ) 

Return (pk, msk). 

Enc ( pk, (x, y) 

) : 

γ $← Zp, W $← GL2, for all i ∈ [n], ai := (W−1)⊤ ( 

xi 

γsi 

) , bi := W 

( yi 

−ti 

) Return ct := 

( gγ 

1 , {gai 1 , gbi 

2 }i∈[n] ) ∈ G1 × (G2 

1 ×G2 2)n 

KeyGen(msk, q): Return dkf := 

( g 

q(s,t) 2 , q 

) ∈ G2 ×Fn,Bx,By ,Bq . 

Dec ( pk, ct := 

( gγ 

1 , {gai 1 , gbi 

2 }i∈[n] ) 

, dkq := ( g 

q(s,t) 2 , q 

)) : 

out := e(gγ 1 , g 

q(s,t) 2 ) ·∏i,j∈[n] e 

( gai 

1 , g bj 

2 )qi,j 

Return log(out) ∈ Z. 

Figure 5.1: Our functional encryption scheme for quadratic polynomials. 

Theorem 9 (Security, correctness and complexity). The FE scheme provided in Figure 5.1: 

 is IND-CPA secure in the Generic Bilinear Group Model, 

 verifies log(out) = q(x, y) and satisfies perfect correctness, 

 has a overall decryption complexity of 2n2(E + P ) + P + D, 

where E, P and D respectively denote exponentiation, pairing and discrete logarithm complexi-ties. 

Our scheme outperforms previous schemes for quadratic FE with the same security assump-tion, like the one from [BCFG17, Sec. 4] which achieves 3n2(E + P ) + 2P + D complexity and uses larger ciphertexts and decryption keys. Note that the efficiency of the decryption can even be further optimized for those quadratic polynomials used that are relevant to our application (see Section 5.1.2.2). 

Computing the discrete logarithm for decryption. Our decryption requires computing discrete logarithms of group elements in base gT , but contrary to previous works like [KLM+18] it is independent of the ciphertext and the functional decryption key used to decrypt. This allows pre-computing values and dramatically speeds-up decryption. 

2Note that we only present a simplified scheme here. In particular, the actual encryption is randomized, which is necessary to achieve IND-CPA security.

5.1.2.2 Equivalence of the FE Scheme with a Quadratic Network 

We classify data which can be represented as a vector x ∈ [0, B]n (in our case, the size B = 255, and the dimension n = 28 × 28 = 784) and we first build models (qi)i∈[ℓ] for each public label i ∈ [ℓ], such that our prediction ypub for x is argmaxi∈[ℓ] qi(x). 

Quadratic polynomial on Rn. The most straightforward way to use our FE scheme would be for us to learn a model (Qi)i∈[ℓ] ∈ (Rn×n)ℓ, which we would then round onto integers, such that qi(x) = x⊤Qix, ∀i ∈ [ℓ]. This is an unnecessarily powerful model in the case of MNIST as it has ℓn2 parameters (n = 784), and the resulting number of pairings to compute would be unreasonably large. 

Linear homomorphism. The encryption algorithm of our FE scheme is linearly homo-morphic with respect to the plaintext: given an encryption of (x, y) under the secret key msk := (s, t), one can efficiently compute an encryption of (u⊤x, v⊤y) under the secret key msk′ := (u⊤s, v⊤t) for any linear combination u, v (see proof in Appendix A.1.1). Any vector v is a column, and v⊤ is a row. 

Therefore, if q can be written q(x, y) = (Ux)⊤M(Vy) for all (x, y), with U, V ∈ Zd×n p pro-

jection matrices and M ∈ Zd×d p , it is more efficient to first compute the encryption of (Ux, Vy) 

from the encryption of (x, y), and then to apply the functional decryption on these ciphertexts, because their underlying plaintexts are of reduced dimension d < n. This reduces the number of exponentiations from 2n2 to 2dn and the number of pairing computations from 2n2 to 2d2 for a single qi. This is a major efficiency improvement for small d, as pairings are the main bottleneck in the computation. 

Projection and quadratic polynomial on Rd. We can use this and apply the quadratic polynomials on projected vectors: we learn P ∈ Rn×d and (Qi)i∈[ℓ] ∈ (Rd×d)ℓ, and our model is qi(x) = (Px)⊤Qi(Px), ∀i ∈ [ℓ]. We only need 2ℓd2 pairings and since the same P is used for all qi, we only compute once the encryption of Px from the encryption of x. Better yet, we can also perform the pairings only once, and then compute the scores by exponentiating with different coefficients the same results of the pairings, thus only requiring 2d2 pairing evaluations, independently of ℓ. 

Degree 2 polynomial network, with one hidden layer. To further reduce the number of pairings, we actually limit ourselves to diagonal matrices, and thus rename Qi to Di. We find that the gain in efficiency associated with only computing 2d pairings is worth the small drop in accuracy. The resulting model is actually a polynomial network of degree 2 with one hidden layer of d neurons and the activation function is the square. In the following experiments we take d = 40. 

Our final encrypted model can thus be written as qi(x) = (Px)⊤Di(Px), ∀i ∈ [ℓ], where we add a bias term to x by replacing it with x = (1 x1 . . . xn). 

Full network. The result of the quadratic (qi(x))i∈[ℓ] (i.e., of the private quadratic network) is now visible in clear. As mentioned above, we cannot compose this block several times as it contains decryption, so this is currently the best that we can have as an encrypted computation with FE. Instead of simply applying the argmax to the cleartext output of this privately-evaluated quadratic network to get the label, we observe that adding more plaintext layers on top of it helps improve the overall accuracy of the main task. We have therefore a neural network composed of a private and a public part, as illustrated in Figure 4.2.

5.1.3 Experimental Results 

We have assessed the performance of this network on the image dataset presented in the previous chapter about collateral learning, which can be assimilated to the MNIST dataset in terms of image format (60, 000 gray scale 28× 28 pixel images). 

Accuracy. We do not report precise accuracy results on this dataset since it is non standard and hence does not have established benchmarks, but experiments conducted as part of the attacks in the previous chapter report an accuracy around 98% for the quadratic network alone, which is not altered by encryption and conversion to fixed precision. 

Runtime. The runtime during the test phase is dominated by the FE scheme part which can be broken down to 4 steps: functional key generation, encryption of the input, evaluation of the function and discrete logarithm. Regarding encryption and evaluation, the main overhead comes from the exponentiations and pairings which are implemented in the crypto library charm [AGM+13]. In return, the discrete logarithm is very efficient thanks to the reduction of the weights amplitude detailed in Section 4.2.3. 

Functional key generation 94± 5ms Evaluation time 2.97± 0.07s Encryption time 12.1± 0.3 s Discrete logarithms time 24± 9ms 

Table 5.1: Average runtime for the FE scheme using a 2,7 GHz Intel Core i7 and 16GB of RAM. 

Table 5.1 shows that encryption time is longer than evaluation time, but a single encryption can be used with several decryption keys dkqi to perform multiple evaluation tasks. 

5.1.4 Conclusion 

Our algorithm based on quadratic functional encryption can successfully be used for evaluation of a small quadratic neural network and displays reasonable performance even on a laptop. How-ever, to be able to use more complex neural network architectures or to study model training scenarios, functional encryption does not yet offer enough flexibility. 

As a consequence, we consider another cryptographic protocol, function secret sharing, that belongs to the SMPC family and we show that it can efficiently be used for private training and inference of neural networks on sensitive data.

5.2 AriaNN: Low-Interaction Privacy-Preserving Deep Learn-ing via Function Secret Sharing 

We introduce AriaNN, a low-interaction additive secret sharing framework for private neural network training and inference. Our semi-honest 2-party computation protocol (with a trusted dealer) leverages function secret sharing [BGI15], a lightweight cryptographic protocol that allows us to achieve an efficient online phase. We design optimized primitives for the building blocks of neural networks such as ReLU, MaxPool and BatchNorm. For instance, we perform private comparison for ReLU operations with a single message of the size of the input during the online phase, and with preprocessing keys close to 4× smaller than previous work. Furthermore, we propose an extension to support n-party private federated learning. 

We implement our protocol as an extensible framework based on PyTorch, that leverages CPU and GPU hardware acceleration for cryptographic and machine learning operations, and integrate it into the PySyft library. We evaluate our end-to-end system for private inference between distant servers on standard neural networks such as AlexNet, VGG16 or ResNet18, and for private training on smaller networks like LeNet. We show that computation rather than communication is the main bottleneck and that using GPUs together with reduced key size is a promising solution to overcome this barrier. 

5.2.1 Introduction 

With the massive improvements of cryptography techniques for secure computation over sensi-tive data [DPSZ12, CGGI16, KPR18], privacy-preserving machine learning [SS15, ARC19] has become practical for concrete use cases, thus encouraging public authorities to use them to protect citizens’ data especially in healthcare applications [KKB18, DZ16]. 

However, tools are lacking to provide end-to-end solutions for institutions that have little expertise in cryptography while facing critical data privacy challenges. A striking example is hospitals, which handle large amounts of data while having relatively constrained technical teams. SMPC is a promising technique that can be efficiently integrated into machine learning workflows to ensure data and model privacy, while allowing multiple parties or institutions to participate in a joint project. In particular, it provides intrinsic shared governance: because data is secret-shared, none of the parties can decide alone to reconstruct it. 

Use case 

The main use case driving our work is the collaboration between a healthcare institution and an AI company. The healthcare institution, a hospital for example, acts as the data owner and the AI company as the model owner. The collaboration consists of either training the model with labelled data or using a pre-trained model to analyze unlabelled data. Training can possibly involve several data owners, as detailed in Section 5.2.5. Since the model can be a sensitive asset (in terms of intellectual property, strategic asset or regulatory and privacy issues), it cannot be trained directly on the data owner(s) machines using techniques like federated learning [KMY+16, BEG+19]: it could be stolen or reverse-engineered [HAPC17, FJR15]. 

We will assume that the parties involved in the computation are located in different regions, and that they can communicate large amounts of information over the network with a reasonable latency (70ms for example). This corresponds to the Wide Area Network (WAN) setting, as opposed to the Local Area Network (LAN) setting where parties are typically located in the same data center and communicate with low latency (typically <1ms). Second, parties are honest-but-curious, [Gol09, Chapter 7.2.2] and care about their reputation. Hence, they have little incentive to deviate from the original protocol, but they will use any information available in their own interest.

Contributions 

By leveraging function secret sharing (FSS) [BGI15, BGI16], we propose a low-interaction frame-work for private deep learning which drastically reduces communication to a single round for ba-sic machine learning operations, and achieves the first private evaluation benchmark on ResNet18 using GPUs. 

 We improve upon existing work of [BGI16] on function secret sharing to design compact and ready-to-implement algorithms for tensor private comparison, which is a building block for neural networks and can be run with a single round of communication. In particular, given n the number of bits on which values are encoded, we significantly reduce the key size from roughly n(4λ + n) to n(λ + 2n), which is a crucial parameter as the computation time is linear in the key size. 

 We show how function secret sharing can be used in machine learning and provide privacy-preserving implementations of classical layers, including ReLU, MaxPool and BatchNorm, to allow secure evaluation and training of arbitrary models on private data. 

 Last, we provide a GPU implementation and a hardware-accelerated CPU implementation of our private comparison protocol3. As AriaNN is built over PyTorch for other tensor operations, it can run either completely on the GPU or on the CPU. We show its practi-cality both in LAN and WAN settings by running private inference on CIFAR-10 and Tiny Imagenet with models such as AlexNet [KSH12], VGG16 [SZ14] and ResNet18 [HZRS16], and private training on MNIST using models like LeNet. 

Related work 

Related work in privacy-preserving machine learning encompasses SMPC and fully homomorphic encryption (FHE) techniques. 

FHE only needs a single round of interaction but does not support efficient non-linearities. For example, nGraph-HE [BLCW19] and its extensions [BCCW19] build on the SEAL library [SEA19] and provide a framework for secure evaluation that greatly improves on the CryptoNet seminal work [GBDL+16], but it resorts to polynomials (like the square) for activation functions. 

SMPC frameworks usually provide faster implementations using lightweight cryptography. MiniONN [LJLA17], DeepSecure [RRK18] and XONN [RSC+19] use optimized garbled circuits [Yao86] that allow very few communication rounds, but they do not support training and alter the neural network structure to speed up execution. Other frameworks such as ShareMind [BLW08], SecureML [MZ17], SecureNN [WGC19], QUOTIENT [ASSKG19] or more recently FALCON [WTB+21] rely on additive secret sharing and allow secure model evaluation and training. They use simpler and more efficient primitives, but require a large number of rounds of communication, such as 11 in [WGC19] or 5+log2(n) in [WTB+21] (typically 10 with n = 32) for ReLU. ABY [DSZ15], Chameleon [RWT+18] and more recently ABY3 [MR18], CrypTFlow [KRC+20] and [DEK21] mix garbled circuits, additive or binary secret sharing based on what is most efficient for the operations considered. However, conversion between those can be expensive and they do not support training except ABY3. There is a current line of work including BLAZE [PS20], Trident [CRS20] and FLASH [BCPS20] which improves over ABY3 to reduce communication overheads: BLAZE and Trident achieve for example 4 rounds of communication for ReLU. 

Last, works like Gazelle [JVC18] combine FHE and SMPC to make the most of both, but conversion can also be costly. 

Works on trusted execution environments are left out of the scope of this work as they require access to dedicated and expensive hardware [HSS+18]. 

A concurrent work from Boyle et al. [BCG+21] was made public shortly after ours. Their 3The code is available at https://github.com/LaRiffle/AriaNN.

approach also provides improvement over previous algorithms for private comparison using func-tion secret sharing, and their implementation results in the same number of rounds than ours and similar key size (approximately n(λ + n), where n is the number of bits to encode the value, it accounts for correctness and is typically set to 32, and λ is the security parameter and usually equals 128). However, [BCG+21] is not intended for machine learning: they only provide an implementation of ReLU, but not of MaxPool, BatchNorm, Argmax or other classic machine learning components. In addition, as they do not provide experimental benchmarks or an im-plementation of their private comparison, we are not able to compare it to ours in our private ML framework. They avoid the negligible error rate that we study in Section 3, which has no impact in the context of machine learning as we show. 

5.2.2 Background 

Notations. All values are encoded on n bits and live in Z2n . The bit decomposition of any element x of Z2n into a bit string of {0, 1}n is a bijection between Z2n and {0, 1}n. Therefore, bit strings generated by a pseudo random generator G are implicitly mapped to Z2n . In addition, we interpret the most significant bit as a sign bit to map them in [−2n−1, 2n−1 − 1], notably in Algorithms 2, 3, 4, 5, 6, where the modulo operation makes the conversion between n bit strings and signed integers explicit. 

The notation [[x]] denotes 2-party additive secret sharing of x, i.e., [[x]] = ([[x]]0, [[x]]1) where the shares [[x]]j are random in Z2n , are held by distinct parties and verify x = [[x]]0 +[[x]]1 mod 2n. We say indistinctly that [[x]] is private or secret-shared. In return, x[i] refers to the i-th bit of x. The comparison operator ≤ is taken over the natural embedding of Z2n into Z. 

5.2.2.1 Function Secret Sharing 

Unlike classical data secret sharing, where a shared input [[x]] is applied on a public f , func-tion secret sharing applies a public input x on a private shared function [[f ]]. Shares or keys ([[f ]]0, [[f ]]1) of a function f satisfy f(x) = [[f ]]0(x) + [[f ]]1(x) mod 2n and they can be provided by a semi-trusted dealer. Both approaches output a secret shared result. 

Let us take an example: say Alice and Bob respectively have secret shares [[y]]0 and [[y]]1 of a private input [[y]], and they want to compute [[y ≤ 0]]. They first mask their shares using a secret shared random mask [[α]], by computing respectively [[y]]0 +[[α]]0 and [[y]]1 +[[α]]1, and then reveal these values to reconstruct x = y + α. Next, they apply this public x on their function shares [[fα]]j of fα : x→ (x ≤ α), to obtain a secret shared output ([[fα]]0(x), [[fα]]1(x)) = [[fα(y + α)]] = [[(y + α) ≤ α]] = [[y ≤ 0]]. They can then reveal their shares to publicly reconstruct y ≤ 0 or use them as a private input for a subsequent computation. [BGI15, BGI16] have shown the existence of such function shares for comparison which perfectly hide y and the result. From now on, to be consistent with the existing literature, we will denote the function keys (k0, k1) := ([[f ]]0, [[f ]]1). 

Note that for a perfect comparison, the value y + α should not wrap around and become negative. Because typically values of y used in practice in machine learning are small compared to the n-bit encoding amplitude with typically n = 32, the failure rate is less than one comparison in a million, as detailed in Section 5.2.3.2. 

5.2.2.2 2-Party Computation in the Preprocessing Model 

Preprocessing is performed during an offline phase by a trusted third party that builds and distributes the function keys to the 2 parties involved in future computation. This is standard in function secret sharing, and as mentioned by [BGI19], in the absence of such a trusted dealer, the keys can alternatively be generated via an interactive secure protocol that is executed offline, before the inputs are known. This setup can also be found in other privacy-preserving machine learning frameworks including SecureML [MZ17]. This trusted dealer is not active during the

online phase, and he is unaware of the computation the 2 parties intend to execute. In particular, as we are in the honest-but-curious model, it is assumed that no party colludes with the dealer. In practice, such a third party would typically be an institution concerned about its reputation, and it could be easy to check that preprocessed material is correct using a cut-and-choose technique [ZHKS16]. For example, the third party produces n keys for private comparison. The 2 parties willing to do the private computation randomly check some of them: they extract from their keys s0, s1 and also reconstruct α from [[α]]j , j ∈ {0, 1}. They can then derive the computations of KeyGen and verify that the correlated randomness of the keys was correct. They can then use the remaining keys for the private computation. 

5.2.2.3 Security Model of the Function Secret Sharing Protocol 

We consider security against honest-but-curious adversaries, i.e., parties following the protocol but trying to infer as much information as possible about others’ input or function share. This is a standard security model in many SMPC frameworks [BLW08, BELO16, RWT+18, WGC19] and is aligned with our main use case: parties that would not follow the protocol would face major backlash for their reputation if they got caught. The security of our protocols relies on indistinguishability of the function shares, which informally means that the shares received by each party are computationally indistinguishable from random strings. More formally, we introduce the following definitions from [BGI16]. 

Definition 10 (FSS: Syntax). A (2-party) function secret sharing (FSS) scheme is a pair of algorithms (KeyGen, Eval) with the following syntax: 

 KeyGen(1λ, f̂) is a PPT key generation algorithm, which on input 1λ (security parameter) and f̂ ∈ {0, 1}∗, description of a function f : Z2n → Z2n , outputs a pair of keys (k0, k1). 

 Eval(i, ki, x) is a polynomial-time evaluation algorithm, which on input i ∈ {0, 1} (party index), ki (the i-th function key) and x ∈ Z2n , outputs [[f ]]i(x) ∈ Z2n (the i-th share of f(x)). 

Definition 11 (FSS: Correctness and Security). We say that (KeyGen, Eval) as in Definition 10 is a FSS scheme for a family of function F if it satisfies the following requirements: 

 Correctness: For all f : Z2n → Z2n ∈ F , f̂ a description of f , and x ∈ Z2n , if (k0, k1)← KeyGen(1λ, f̂) then Pr[Eval(0, k0, x) + Eval(1, k1, x) = f(x)] = 1. 

 Security: For each i ∈ {0, 1}, there is a PPT algorithm Simi (simulator), such that for every infinite sequence (f̂j)j∈N of descriptions of functions from F and polynomial size input sequence xj for fj , the outputs of the following experiments Real and Ideal are computationally indistinguishable: 

– Realj : (k0, k1)← KeyGen(1λ, f̂j) ; Output ki 

– Idealj : Output Simi(1λ) 

[BGI16] has proved the existence of efficient FSS schemes in particular for equality. Such protocols and the ones that we derive from this work are proved to be secure against semi-honest adversaries, and as mentioned by [BGI19], they could be extended to guarantee security with abort against malicious adversaries using MAC authentication [DPSZ12], which means that the protocol would abort if parties deviated from it.

5.2.2.4 General Security Guarantees and Threats 

The 2-party interaction for private inference, i.e. when the model is already trained, is an example of Encrypted Machine Learning as a Service (EMLaaS). In this scenario, as stated above, even a malicious model owner could not disclose information about the private inputs or predictions. However, it could use a different model where the weights have been modified to make poor or biased predictions. It is difficult for the data owner to realize that the model owner is misbehaving or using a model whose performance is inferior to what it claims, and this is an issue users also have with standard Machine Learning as a Service (MLaaS). Proving that the computation corresponds to a certified given model would require to commit the model and would be costly. On the other hand, the information obtained by the data owner about the model (i.e. the prediction on a given input) is the same as in MLaaS. Model inversion techniques [ZJP+20] can leverage multiple calls to the model to try to build a new model with similar performance. There are not many defenses against this, except limiting access to the model, which is usually the case in MLaaS where data owners are given a quota of requests. Also, attacks like membership inference [SSSS17] or reverse-engineering [FJR15, HAPC17] methods could be used to unveil information about the dataset on which the model was originally trained. Using differential privacy [DR+14, ACG+16] during the initial training of the model can provide some guarantees [RRL+18] against these threats, but it has a trade-off between privacy and utility as differentially private models usually have poorer performance. 

Beyond evaluation, the case of fully-encrypted training can also expose the parties to some threats. The most common one is data poisoning and consists of the data owner undermining the training by providing irrelevant data or labels that are wrong or biased [BVH+20]. This attack however does not affect privacy. In return, if the model owner gets the final model in plaintext at the end of the training, the privacy of the data owner is at risk because the model owner could use the aforementioned techniques to get information about the training data. Using differential privacy during the private training is important to mitigate this privacy leakage, and should also be applied in a n-party training setting. 

All these threats must be taken seriously when building production-ready systems. However, they are independent of the function secret sharing protocol and can be addressed separately by combining our work with differential privacy libraries for deep learning. 

5.2.3 Function Secret Sharing Primitives 

Our algorithms for private equality and comparison are built on top of the work of [BGI16], so the security assumptions are the same as in this article. We first present an algorithm for equality which is very close to the one of [BGI16] but which is used as a basis to build the comparison protocol. We then describe the private comparison protocol, which improves over the work of [BGI16] on Distributed Interval Functions (DIF) by specializing on the operations needed for neural network evaluation or training. In particular, we are able to reduce the function key size from roughly n(4λ + n) to n(λ + 2n). 

5.2.3.1 Equality Test 

We start by describing private equality as introduced by [BGI16], which is slightly simpler than comparison and gives useful hints about how comparison works. The equality test consists in comparing a public input x to a private value α. Evaluating the input using the function keys can be viewed as walking a binary tree of depth n, where n is the number of bits of the input (typically 32). Among all the possible paths, the path from the root down to α is called the special path. Figure 5.2 illustrates this tree and provides a compact representation which is used by our protocol, where we do not detail branches for which all leaves are 0. Evaluation goes as follows: two evaluators are each given a function key which includes a distinct initial random

Figure 5.2: (Left) Binary decision tree with the special path for n = 3. Given an input x = x[1] . . . x[n], at each level i, one should take the path labeled by the value in the square equal to the bit value x[i]. (Right) Flat representation of the tree. 

state (s, t) ∈ {0, 1}λ × {0, 1}. Each evaluator starts from the root, at each step i goes down one node in the tree and updates his state depending on the bit x[i] using a common correction word CW (i) ∈ {0, 1}2(λ+1) from the function key. At the end of the computation, each evaluator outputs t. As long as x[i] = α[i], the evaluators stay on the special path and because the input x is public and common to them, they both follow the same path. If a bit x[i] ̸= α[i] is met, they leave the special path and should output 0 ; else, they stay on it all the way down, which means that x = α and they should output 1. Intuition. The main idea is that while they are on the special path, evaluators should have states (s0, t0) and (s1, t1) respectively, such that s0 and s1 are i.i.d. and t0⊕ t1 = 1. When they leave it, the correction word should act to have s0 = s1 but still indistinguishable from random and t0 = t1, which ensures t0 ⊕ t1 = 0. To reconstruct the result in plaintext, each evaluator should output its tj and the result will be given by t0⊕t1. The formal description of the protocol is given below and is composed of two parts: first, in Algorithm 2, the KeyGen algorithm consists of a preprocessing step to generate the functions keys, and then, in Algorithm 3, Eval is run by two evaluators to perform the equality test. It takes as input the private share held by each evaluator and the function key that they have received. They use G : {0, 1}λ → {0, 1}2(λ+1), a pseudorandom generator (PRG), where the output set is {0, 1}λ+1×{0, 1}λ+1, and operations modulo 2n implicitly convert back and forth n-bit strings into integers. 

Initialisation: Sample random α $← Z2n 

Sample random s (1) j 

$← {0, 1}λ and set t (1) j ← j, for j = 0, 1 

1 for i = 1..n do 2 (sL 

j || tL j , sR 

j || tR j )← G(s(i) 

j ) ∈ {0, 1}λ+1 × {0, 1}λ+1, for j = 0, 1 3 if α[i] then cw(i) ← (0λ || 0, sL 

0 ⊕ sL 1 || 1) else cw(i) ← (sR 

0 ⊕ sR 1 || 1, 0λ || 0) ; 

4 CW (i) ← cw(i) ⊕G(s(i) 0 )⊕G(s(i) 

1 ) ∈ {0, 1}λ+1 × {0, 1}λ+1 

5 statej ← G(s(i) j )⊕ (t(i) 

j · CW (i)) = (statej,0, statej,1), for j = 0, 1 6 Parse s 

(i+1) j || t(i+1) 

j = statej,α[i] ∈ {0, 1}λ+1, for j = 0, 1 7 CW (n+1) ← (−1)t 

(n+1) 1 · (1− s 

(n+1) 0 + s 

(n+1) 1 ) mod 2n 

8 return kj ← [[α]]j || s(1) j || CW (1) || · · · || CW (n+1), for j = 0, 1 

Algorithm 2: KeyGen: function key generation for equality (from [BGI16]) 

Correctness. Intuitively, the correction words CW (i) are built from the expected state of each evaluator on the special path, i.e., the state that each should have at each node i if it is on

Input: (j, kj , [[y]]j) where j ∈ {0, 1} refers to the evaluator id 1 Parse kj as [[α]]j || s(1) || CW (1) || · · · || CW (n+1) 

2 Publish [[α]]j + [[y]]j mod 2n and get revealed x = α + y mod 2n 

3 Let t(1) ← j 4 for i = 1..n do 5 state← G(s(i))⊕ (t(i) · CW (i)) = (state0, state1) 6 Parse s(i+1) || t(i+1) = statex[i] 

7 return [[T ]]j ← (−1)j · ( t(n+1) · CW (n+1) + s(n+1) 

) mod 2n 

Algorithm 3: Eval: evaluation of the function key for the equality test y = 0 (from [BGI16]) 

the special path given some initial state. During evaluation, a correction word is applied by an evaluator only when it has t = 1. Hence, on the special path, the correction is applied only by one evaluator at each bit. If at step i, the evaluator stays on the special path, the correction word compensates the current states of both evaluators by xor-ing them with themselves and re-introduces a pseudorandom value s (either sR 

0 ⊕ sR 1 or sL 

0 ⊕ sL 1), which means the xor of their 

states is now (s, 1) but those states are still indistinguishable from random. On the other hand, if x[i] ̸= α[i], the new state takes the other half of the correction word, 

so that the xor of the two evaluators states is (0, 0). From there, they have the same states and both have either t = 0 or t = 1. They will continue to apply the same corrections at each step and their states will remain the same, meaning that t0 ⊕ t1 = 0. A final computation is performed to obtain a shared [[T ]] modulo 2n of the result bit t = t0 ⊕ t1 ∈ {0, 1}. Security. From the privacy point of view, when the seed s is random, G(s) is indistinguishable from random (this is a pseudorandom bit-string). Each half is used either in the cw or in the next state, but not both. Therefore, the correction words CW (i) do not contain information about the expected states and for j = 0, 1, the output kj is independently uniformly distributed with respect to α and s 

(1) 1−j , in a computational way. As a consequence, at the end of the evaluation, 

for j = 0, 1, [[T ]]j also follows a distribution independent of α. Until the shared values are reconstructed, even a malicious adversary cannot learn anything about α nor the inputs of the other player. Implementation. Function keys should be computed by a third party dealer and sent to the evaluators in advance, which requires one extra communication of the size of the keys. We use the trick of [BGI16] to reduce the size of each correction word in the keys, from 2(1+λ) to (2+λ) by reusing the pseudo-random λ-bit string dedicated to the state used when leaving the special path for the state used for staying onto it, since for the latter state the only constraint is the pseudo-randomness of the bitstring. Regarding the PRG, we use a Matyas-Meyer-Oseas one-way compression function with an AES block cipher, as in [KOS16] or [WYG+17]. We concatenate several fixed key block ciphers to achieve the desired output length: G(x) = Ek1(x)⊕x || Ek2(x)⊕ x || . . . . Using AES helps us to benefit from hardware acceleration: we used the aesni Rust library for CPU execution and the csprng library of PyTorch for GPU. More details about implementation can be found in Appendix A.2.2. 

5.2.3.2 Comparison 

Our main contribution to the function secret sharing scheme is for the comparison function, which is intensively used in neural network to build non-polynomial activation functions like ReLU: we build on the idea of the equality test to provide a synthetic and efficient protocol whose structure is very close to the previous one, and improves upon the former DIF scheme of [BGI16] by significantly reducing the key size.

Figure 5.3: (Left) Binary decision tree with all the paths corresponding to x ≤ α for n=3. (Right) Flat representation of the tree. 

Intuition. Instead of seeing the special path as a simple path, we can see it as a frontier for the zone in the tree where x ≤ α. To evaluate x ≤ α, we could evaluate all the paths on the left of the special path and then sum up the results, but this is highly inefficient as it requires exponentially many evaluations. The key idea here is to evaluate all these paths at the same time, noting that each time one leaves the special path, it either falls on the left side (i.e., x < α) or on the right side (i.e., x > α). Hence, we only need to add an extra step at each node of the evaluation, where depending on the bit value x[i], we output a leaf label which is 1 only if x[i] < α[i] and all previous bits are identical. Only one label between the final label (which corresponds to x = α) and the leaf labels can be equal to one, because only a single path can be taken. Therefore, evaluators will return the sum of all the labels to get the final output. Correctness of the comparison protocol. Consider (k0, k1) generated by KeyGen (Algo-rithm 4) with a random offset α ∈ Z2n . Consider a public input x ∈ Z2n . Let us show that Eval(0, k0, x) + Eval(1, k1, x) = (x ≤ α) mod 2n, where (x ≤ α) ∈ {0, 1}. We add a subscript 0 or 1 to the variables of Algorithm 5 to identify the party to which they belong. 

Consider i ∈ [1, n] such that the evaluators remained on the special path until i (i.e. ∀j < 

i, x[j] = α[j]). In particular, G(s(i) 0 )⊕G(t(i) 

0 ·CW (i))⊕(s(i) 1 )⊕(t(i) 

1 ·CW (i)) = cw(i). Let us study the 4 possible cases and show that 1) (outi,0 + outi,1 mod 2n) ∈ {0, 1}; 2) outi,0 + outi,1 = 1 mod 2n ⇐⇒ x[i] < α[i]; and 3) the evaluators stay on the special path if and only if x[i] = α[i]. 

 If x[i] = 0, we keep the left part of state′ at line 4. 

– If α[i] = 1, we have τ (i+1) 0 ⊕ τ 

(i+1) 1 = 1. Thanks to line 10 of KeyGen, we have outi,0 + 

outi,1 = (τ (i+1) 0 − τ 

(i+1) 1 ) ·CW 

(i) leaf + (σ(i+1) 

0 −σ (i+1) 1 ) = (1−2τ 

(i+1) 1 )(−1)τ 

(i+1) 1 (σ(i+1) 

1 − σ 

(i+1) 0 + 1) + (σ(i+1) 

0 − σ (i+1) 1 ) = 1 mod 2n. We also have t 

(i+1) 0 ⊕ t 

(i+1) 1 = 0 and 

s (i+1) 0 ⊕ s 

(i+1) 1 = 0, so the evaluators leave the special path. 

– If α[i] = 0, we use line 5 of KeyGen to generate cw(i), so σ (i+1) 0 ⊕ σ 

(i+1) 1 = 0 and 

τ (i+1) 0 ⊕τ 

(i+1) 1 = 0. Hence, outi,0+outi,1 = (τ (i+1) 

0 −τ (i+1) 1 )·CW 

(i) leaf +(σ(i+1) 

0 −σ (i+1) 1 ) = 

0 mod 2n. We also have t (i+1) 0 ⊕ t 

(i+1) 1 = 1 and s 

(i+1) 0 , s 

(i+1) 1 stay on the special path. 

 If x[i] = 1, we keep the right part of state′ at line 4. 

– If α[i] = 1, we use line 4 of KeyGen to generate cw(i), so σ (i+1) 0 ⊕ σ 

(i+1) 1 = 0 and 

τ (i+1) 0 ⊕ τ 

(i+1) 1 = 0. Hence, similarly as the case where (x[i], α[i]) = (0, 0), we have 

outi,0 + outi,1 = 0 mod 2n and the evaluators stay on the special path.

– If α[i] = 0, we use line 5 of KeyGen and get cw(i) = ( (sR 

0 ⊕sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0⊕ σL 

1 || 1) ) . We keep the right part of state′ at line 9 of KeyGen for CW 

(i) leaf . We use the 

same right part at line 5 of Eval, so we have τ (i+1) 0 ⊕τ 

(i+1) 1 = 1. Finally, outi,0+outi,1 = 

(τ (i+1) 0 − τ 

(i+1) 1 ) ·CW 

(i) leaf + (σ(i+1) 

0 −σ (i+1) 1 ) = (1− 2τ 

(i+1) 1 )(−1)τ 

(i+1) 1 (σ(i+1) 

1 −σ (i+1) 0 + 

0)+(σ(i+1) 0 −σ 

(i+1) 1 ) = 0 mod 2n. We also have t 

(i+1) 0 ⊕ t 

(i+1) 1 = 0 and the evaluators 

leave the special path. 

If the evaluators leave the special path at step i, their bistrings remain equal until the end of the evaluation: ∀j ∈ [i, n + 1], s 

(j) 0 = s 

(j) 1 and σ 

(j) 0 = σ 

(j) 1 , so ∀j ∈ [i, n + 1], outj,0 + outj,1 = 0 

mod 2n. Finally, if the evaluators never leave the special path (i.e. x = α), we have ∀j ∈ [1, n], outj,0+ 

outj,1 = 0 mod 2n, and outn+1,0 + outn+1,1 = 1. Indeed, step n + 1 is identical to the equality case (Algorithm 3). 

In the end, the sum [[T ]]j of the outi’s is a share of 1 either if outn+1 was a share of 1 (i.e. x = α) or if one of the other outi was a share of 1, which is possible only if α[i] = 1 and x[i] < α[i] (i.e. x < α). Otherwise (i.e. x > α), [[Tj ]] is a share of 0. 

Initialisation: Sample random α $← Z2n 

Sample random s (1) j 

$← {0, 1}λ and set t (1) j ← j, for j = 0, 1 

1 for i = 1..n do 2 for j = 0, 1 do 3 ((sL 

j || tL j , sR 

j || tR j ), (σL 

j || τL j , σR 

j || τR j ))← G(s(i) 

j ) ∈ {0, 1}λ+1 × {0, 1}λ+1 × {0, 1}n+1 × {0, 1}n+1 

4 if α[i] then cw(i) ← ( (0λ || 0, sL 

0 ⊕ sL 1 || 1), (σR 

0 ⊕ σR 1 || 1, 0λ || 0) 

) 5 else cw(i) ← 

( (sR 

0 ⊕ sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0 ⊕ σL 1 || 1) 

) ; 

6 CW (i) ← cw(i) ⊕G(s(i) 0 )⊕G(s(i) 

1 ) 7 for j = 0, 1 do 8 statej ← G(s(i) 

j )⊕ (t(i) j · CW (i)) = ((statej,0, statej,1), (state′ 

j,0, state′ j,1)) 

9 Parse s (i+1) j || t(i+1) 

j = statej,α[i] and σ (i+1) j || τ (i+1) 

j = state′ j,1−α[i] 

10 CW (i) leaf ← (−1)τ 

(i+1) 1 · 

( α[i]− σ 

(i+1) 0 + σ 

(i+1) 1 

) mod 2n 

11 CW (n+1) leaf ← (−1)t 

(n+1) 1 · 

( 1− s 

(n+1) 0 + s 

(n+1) 1 

) mod 2n 

12 return kj ← [[α]]j || s(1) j || (CW (i))i=1..n || (CW 

(i) leaf )i=1..n+1, for j = 0, 1 

Algorithm 4: KeyGen: function key generation for comparison x ≤ α (new) 

Failure rate of the sign protocol. Algorithm 6 details how we build a sign protocol thanks to our comparison primitive (Algorithm 5), following the secret sharing workflow introduced in Section 5.2.2.1. Our sign protocol can fail if y + α wraps around and becomes negative. We cannot act on α because it must be completely random to act as a perfect mask and to make sure the revealed x = y + α mod 2n does not leak any information about y, but the smaller y is, the lower the error probability will be. [BGI19] suggests a method which uses 2 invocations of the protocol to guarantee perfect correctness but because it incurs an important runtime overhead, we rather show that the failure rate of our comparison protocol is very small and is reasonable in contexts that tolerate a few mistakes, as in machine learning. Consider y ∈ [−2n−1, 2n−1− 1], a pair of comparison keys (k0, k1), and note Ŝign(y) := Sign(0, k0, [[y]]0) + Sign(1, k1, [[y]]1) mod 2n 

the reconstructed result of the sign protocol. We have Pr [ Ŝign(y) ̸= ⊮[y ≤ 0] 

] = |y|/2n ≤ Y/2n 

where Y is the maximum amplitude for |y|.

Input: (j, kj , x) where j ∈ {0, 1} refers to the evaluator id 1 Parse kj as [[α]]j || s(1) || (CW (i))i=1..n || (CW 

(i) leaf )i=1..n+1 

2 Let t(1) ← j 3 for i = 1..n do 4 state← G(s(i))⊕ (t(i) · CW (i)) = ((state0, state1), (state′ 

0, state′ 1)) 

5 Parse s(i+1) || t(i+1) = statex[i] and σ(i+1) || τ (i+1) = state′ x[i] 

6 outi ← (−1)j · ( τ (i+1) · CW 

(i) leaf + σ(i+1) 

) mod 2n 

7 outn+1 ← (−1)j · ( t(n+1) · CW 

(n+1) leaf + s(n+1) 

) mod 2n 

8 return [[T ]]j ← ∑ 

i outi mod 2n 

Algorithm 5: Eval: evaluation of the function key for comparison x ≤ α (new) 

Input: (j, kj , [[y]]j) where j ∈ {0, 1} refers to the evaluator id 1 Parse the first n bits of kj as [[α]]j 2 Publish [[α]]j + [[y]]j and get revealed x = α + y mod 2n 

3 return [[T ]]j ← Eval(j, kj , x) 

Algorithm 6: Sign: protocol for sign([[y]]) 

We quantify this failure rate on real world examples, namely on Network-2 and on the 64×64 Tiny Imagenet version of VGG16, with a fixed precision of 3 decimals, and find respective failure rates of 1 in 4 millions comparisons and 1 in 100 millions comparisons, which is low compared to the number of comparisons needed for an evaluation, respectively ∼ 10K and ∼ 1M. In practice, such error rates do not affect the model accuracy, as Table 5.5 shows. Security. We prove the security of the protocol by following the same process than [BGI16]. We first prove that each party’s key kj is pseudorandom. This is done via a sequence of hybrid distributions, where in each step we replace two correction words CW (i) and CW 

(i) leaf within the 

key from being honestly generated to being random. In the initial game, all the correction words are as in the real distribution, and in the last game, they are all random. As every gaps are indis-tinguishable for any polynomially-bounded adversary, the real distribution is indistinguishable from random: this proves the pseudo-randomness of the keys. 

The high-level argument for security will go as follows. Each party j ∈ {0, 1} begins with a share [[α]]j and a random seed s 

(1) j that are completely unknown to the other party. In each level 

of key generation (for i = 1 to n), the parties apply a PRG to their seed s (i) j to generate 8 items: 

namely, 2 seeds sL j , sR 

j , 2 bits tL j , tR 

j , 2 n-bits values σL j , σR 

j and 2 other bits τL j , τR 

j . This process is always done on a seed which appears completely random given the view of the other party. Hence, the security of the PRG guarantees that the 8 resulting values appear similarly random given the view of the other party. The ith level correction word CW (i) will “use up” the secret randomness of 3 of the 4 first pieces: the two bits tL 

j , tR j , and the seed sLose 

j corresponding to the direction exiting the special path i.e. Lose = L if α[i] = 1 and Lose = R if α[i] = 0. However, given this CW (i), the remaining seed sKeep 

j for Keep ̸= Lose is still unpredictable to the other party, as it is kept hidden. Similarly, the ith level correction word CW 

(i) leaf uses up the secret 

randomness of the 4 last pieces, σL j , σR 

j and τL j , τR 

j , and appears random given the view of the other party. The argument is then continued in similar fashion to the next level, which uses sKeep 

j as an input to the PRG. For each i ∈ {0, 1, . . . , n + 1}, we will consider a hybrid distribution Hybi defined roughly as 

follows, for j ∈ {0, 1}:

1. s (1) j 

$← {0, 1}λ chosen at random (honestly), and t (1) j = j. 

2. CW (1), . . . , CW (i) ← {0, 1}2(λ+n+2) and CW (1) leaf , . . . , CW 

(i) leaf ← {0, 1}n chosen at random. 

3. For k < i, s (k+1) j ||t(k+1) 

j , σ (k+1) j ||τ (k+1) 

j computed honestly, as a function of s (0) j || t(0) 

j and CW (1), . . . , CW (k). 

4. For i, the other party’s seed s (i) 1−j ← {0, 1}λ is chosen at random, t 

(i) 1−j = 1−t 

(i) j , σ 

(i) 1−j = σ 

(i) j , 

and τ (i) 1−j = τ 

(i) j . 

5. For k ≥ i: the remaining values s (k+1) j || t 

(k+1) j , s 

(k+1) 1−j || t 

(k+1) 1−j , CW (k), σ 

(k+1) j || τ 

(k+1) j 

, σ (k+1) 1−j || τ 

(k+1) 1−j , CW 

(k) leaf all computed honestly, as a function of the previously chosen 

values. 

6. The output of the experiment is kj := [[α]]j || s(1) j || (CW (i))i=1..n || (CW 

(i) leaf )i=1..n+1. 

Hybi is formally described in Algorithm 7. When i = 0, the algorithm corresponds to the honest key generation, while when i = n + 1, it generates a completely random key. We only need to prove that for any i ∈ {1, . . . n + 1}, Hybi−1 and Hybi are indistinguishable based on the security of our PRG. 

More precisely, let us first consider i ≤ n. Claim 5.2.1. There exists a polynomial p′ such that for any (T, ϵPRG)-secure pseudorandom generator G, then for every i ≤ n, j ∈ {0, 1}, and every non-uniform adversary A running in time T ′ ≤ T − p′(λ), it holds that∣∣P [kj←Hybi−1(1λ, j); c←A(1λ, kj) : c=1] − P [kj←Hybi(1λ, j); c←A(1λ, kj) : c=1] 

∣∣ < ϵPRG 

Proof. Let’s fix i ∈ {1, . . . n}, j ∈ {0, 1}. LetA be a Hyb-distinguishing adversary with advantage ϵ for these values. We use A to construct a corresponding PRG adversary B. Recall that in the PRG challenge for G, the adversary B is given a value r that is either computed by sampling a seed s ← {0, 1}λ and computing r = G(s), or is sampled truly at random r ← {0, 1}2(λ+n+2). Algorithm 8 describes the PRG challenge of B embedded in the Hyb-distinguishing challenge of A. 

Now, consider B’s success in the PRG challenge as a function of A’s success in distinguishing Hybi−1 from Hybi. This means that if A succeeds, then B will succeed at its challenge, which implies Claim 5.2.1. If, in Algorithm 8, r is computed pseudorandomly using the PRG, then it is clear the generated kj is distributed as Hybi−1(1λ, j). 

It remains to show that if r was sampled at random then the generated kj is distributed as Hybi(1λ, j). That is, if r is random, then the corresponding computed values of s 

(i+1) 1−j , CW (i) and 

CW (i) leaf are distributed randomly conditioned on the values of s 

(1) j || t 

(1) j || (CW (i))i=1..i−1 || 

(CW (i) leaf )i=1..i−1, and the value of t 

(i) 1−j is given by 1 − t 

(i) j . Note that all remaining values (for 

k > i) are computed as a function of the values computed up to step i. First, consider CW (i), which is computed as such: 

CW (i) = cw(i) ⊕G(s(i) j )⊕ r 

In particular, when α[i] = 1: 

cw(i) ⊕ r = ( (0λ || 0, sL 

0 ⊕ sL 1 || 1), (σR 

0 ⊕ σR 1 || 1, 0λ || 0) 

) ⊕ ( (sL 

1−j || tL 1−j , sR 

1−j || tR 1−j), (σL 

1−j || τL 1−j , σR 

1−j || τR 1−j) 

) = ( (0λ || 0, sL 

j || 1), (σR j || 1, 0λ || 0) 

) ⊕ ( (sL 

1−j || tL 1−j , sL 

1−j ⊕ sR 1−j || tR 

1−j), (σL 1−j || τL 

1−j , σL 1−j ⊕ σR 

1−j || τR 1−j) 

)

Input: (1λ, i, j) Initialisation: Sample random α $← Z2n 

Sample random s (1) 0 , s 

(1) 1 

$← {0, 1}λ and set t (1) 0 = 0, t 

(1) 1 = 1 

1 for k = 1..n do 2 ((sL 

j || tL j , sR 

j || tR j ), (σL 

j || τL j , σR 

j || τR j ))← G(s(k) 

j ) 3 if k < i then 4 CW (k) $← {0, 1}2(λ+n+2) 

5 else 6 if k = i then s 

(i) 1−j 

$← {0, 1}λ and t (i) 1−j = 1− t 

(i) j ; 

7 ( (sL 

1−j || tL 1−j , sR 

1−j || tR 1−j), (σL 

1−j || τL 1−j , σR 

1−j || τR 1−j) 

) ← G(s(k) 

1−j) 8 if α[k] then 9 cw(k) ← 

( (0λ || 0, sL 

0 ⊕ sL 1 || 1), (σR 

0 ⊕ σR 1 || 1, 0λ || 0) 

) 10 else 11 cw(k) ← 

( (sR 

0 ⊕ sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0 ⊕ σL 1 || 1) 

) 12 CW k ← cw(k) ⊕G(s(k) 

0 )⊕G(s(k) 1 ) 

13 state1−j ← G(s(k) 1−j)⊕ (t(k) 

1−j · CW k) = ((state1−j,0, state1−j,1), (state′ 

1−j,0, state′ 1−j,1)) 

14 Parse s (k+1) 1−j || t(k+1) 

1−j = state1−j,α[k] and σ (k+1) 1−j || τ (k+1) 

1−j = state′ 1−j,1−α[k] 

15 statej ← G(s(k) j )⊕ (t(k) 

j · CW k) = ((statej,0, statej,1), (state′ j,0, state′ 

j,1)) 16 Parse s 

(k+1) j || t(k+1) 

j = statej,α[k] and σ (k+1) j || τ (k+1) 

j = state′ j,1−α[k] 

17 if k < i then 18 CW k 

leaf $← {0, 1}n 

19 else 20 CW k 

leaf ← (−1)τ (k+1) 1 · 

( σ 

(k+1) 1 − σ 

(k+1) 0 + α[k] 

) mod 2n if k < i else {0, 1}n 

21 CW (n+1) leaf ← (−1)t 

(n+1) 1 · 

( 1− s 

(n+1) 0 + s 

(n+1) 1 

) mod 2n if i ≤ n else {0, 1}n 

22 return kj ← [[α]]j || s(1) j || (CW (i))i=1..n || (CW 

(i) leaf )i=1..n+1 

Algorithm 7: Hybi: Hybrid distribution i, in which the first i correction words are sampled completely at random, and the remaining correction words are computed hon-estly.

Input: (1λ, (i, j), r) 1 Sample random α $← Z2n 

2 Sample s (1) j 

$← {0, 1}λ and set t (1) j ← j 

3 for k = 1..i− 1 do 4 CW (k) $← {0, 1}2(λ+n+2) 

5 CW (k) leaf ← {0, 1}n 

6 statej ← G(s(k) j )⊕ (t(k) 

j · CW (k) = ((statej,0, statej,1), (state′ j,0, state′ 

j,1)) 7 Parse s 

(k+1) j || t(k+1) 

j = statej,α[k] and σ (k+1) j || τ (k+1) 

j = state′ j,1−α[k] 

8 Take t (k+1) 1−j = 1− t 

(k+1) j 

9 ((sL j || tL 

j , sR j || tR 

j ), (σL j || τL 

j , σR j || τR 

j ))← G(s(i) j ) 

10 ((sL 1−j || tL 

1−j , sR 1−j || tR 

1−j), (σL 1−j || τL 

1−j , σR 1−j || τR 

1−j))← r ; // The PRG challenge 11 if α[i] then cw(i) ← 

( (0λ || 0, sL 

0 ⊕ sL 1 || 1), (σR 

0 ⊕ σR 1 || 1, 0λ || 0) 

) 12 else cw(i) ← 

( (sR 

0 ⊕ sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0 ⊕ σL 1 || 1) 

) ; 

13 CW (i) ← cw(i) ⊕G(s(i) j )⊕ r 

14 for x = 0, 1 do 15 statex ← G(s(i) 

x )⊕ (t(i) x · CW (i)) if x = j else r ⊕ (t(i) 

x · CW (i)) 16 statex = ((statex,0, statex,1), (state′ 

x,0, state′ x,1)) 

17 Parse s (i+1) x || t(i+1) 

x = statex,α[i] and σ (i+1) x || τ (i+1) 

x = state′ x,1−α[i] 

18 CW (i) leaf ← (−1)τ 

(i+1) 1 · 

( σ 

(i+1) 1 − σ 

(i+1) 0 + α[i] 

) mod 2n 

19 for k = i + 1..n do 20 for x = 0, 1 do 21 ((sL 

x || tL x, sR 

x || tR x), (σL 

x || τL x , σR 

x || τR x ))← G(s(k) 

x ) 22 if α[k] then cw(k) ← 

( (0λ || 0, sL 

0 ⊕ sL 1 || 1), (σR 

0 ⊕ σR 1 || 1, 0λ || 0) 

) 23 else cw(k) ← 

( (sR 

0 ⊕ sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0 ⊕ σL 1 || 1) 

) ; 

24 CW (k) ← cw(k) ⊕G(s(k) 0 )⊕G(s(k) 

1 ) 25 for x = 0, 1 do 26 statex ← G(s(k) 

x )⊕ (t(k) x · CW (k)) = ((statex,0, statex,1), (state′ 

x,0, state′ x,1)) 

27 Parse s (k+1) x || t(k+1) 

x = statex,α[k] and σ (k+1) x || τ (k+1) 

x = state′ x,1−α[k] 

28 CW (k) leaf ← (−1)τ 

(k+1) 1 · 

( σ 

(k+1) 1 − σ 

(k+1) 0 + α[k] 

) mod 2n 

29 CW (n+1) leaf ← (−1)t 

(n+1) 1 · 

( 1− s 

(n+1) 0 + s 

(n+1) 1 

) mod 2n 

30 return kj = [[α]]j || s(1) j || (CW (i))i=1..n || (CW 

(i) leaf )i=1..n+1 

Algorithm 8: PRG Challenge for adversary B

When α[i] = 0: 

cw(i) ⊕ r = ( (sR 

0 ⊕ sR 1 || 1, 0λ || 0), (0λ || 0, σL 

0 ⊕ σL 1 || 1) 

) ⊕ ( (sL 

1−j || tL 1−j , sR 

1−j || tR 1−j), (σL 

1−j || τL 1−j , σR 

1−j || τR 1−j) 

) = ( (sR 

j || 1, 0λ || 0), (0λ || 0, σL j || 1) 

) ⊕ ( (sL 

1−j ⊕ sR 1−j || tL 

1−j , sR 1−j || tR 

1−j), (σL 1−j || τL 

1−j , σL 1−j ⊕ σR 

1−j || τR 1−j) 

) Independently of the value of α[i], when r is random, the right hand side of the ⊕ acts as a perfect one-time pad, and so CW (i) is distributed uniformly. 

Consider now CW (i) leaf , computed as such: 

CW (i) leaf ← (−1)τ 

(i+1) 1 · 

( σ 

(i+1) 1 − σ 

(i+1) 0 + α[i] 

) mod 2n 

Since σ (i+1) 1−j is distributed randomly conditioned on the previous values computed, it acts as a 

one-time pad, which ensures that CW (i) leaf is distributed uniformly. 

Now, condition on CW (i) as well, and consider the value of s (i+1) 1−j . s 

(i+1) 1−j is extracted from 

r⊕t (i) 1−j ·CW (i), see Line 15. If t 

(i) 1−j = 0, s 

(i+1) 1−j is immediately uniformly distributed. If t 

(i) 1−j = 1, 

r⊕(t(i) 1−j ·CW (i)) = r⊕CW (i) = r⊕cw(i)⊕G(s(i) 

j )⊕r = cw(i)⊕G(s(i) j ). When α[i] = 1, the part 

of cw(i) contributing to s (i+1) 1−j is sL 

j ⊕ sL 1−j . sL 

1−j is random and hence acts as a perfect one-time pad, so s 

(i+1) 1−j is uniformly distributed. When α[i] = 0, the same result is derived using sR 

1−j . Finally, consider the value of t 

(i+1) 1−j . We show that t 

(i+1) 1−j = 1− t 

(i) j . By construction, 

t (i+1) 1−j = tKeep 

1−j ⊕ t (i) 1−j · t 

Keep CW 

where Keep = L if α[i] = 0 else R, and where tKeep CW = 1⊕ tKeep 

0 ⊕ tKeep 1 . Furthermore, by noting 

that t (i) 1−j was set to 1− t 

(i) j , 

t (i+1) j ⊕ t 

(i+1) 1−j 

= (tKeep j ⊕ t 

(i) j · t 

Keep CW )⊕ (tKeep 

1−j ⊕ t (i) 1−j · t 

Keep CW ) 

= tKeep j ⊕ tKeep 

1−j ⊕ (t(i) j ⊕ t 

(i) 1−j) · tKeep 

CW ) = tKeep 

j ⊕ tKeep 1−j ⊕ 1 · (1⊕ tKeep 

0 ⊕ tKeep 1 ) 

= 1 Combining these pieces, we have that in the case of a random PRG challenge r, the resulting distribution of kj as generated by B is precisely distributed as is Hybi(1λ, j). Thus, the advantage of B in the PRG challenge experiment is equivalent to the advantage ϵ of A in distinguishing Hybi−1(1λ, j) from Hybi(1λ, j). The runtime of B is equal to the runtime of A plus a fixed polynomial p′(λ). Thus for any T ′ ≤ T − p′(λ), it must be that the distinguishing advantage ϵ of A is bounded by ϵPRG, which concludes the proof of Claim 5.2.1. 

Combining all the steps, for i ∈ {1, . . . n}, we have thus proven that Hyb0(1λ, j) and Hybn(1λ, j) are computationally indistinguishable for any adversary, for j ∈ {0, 1}. On the other hand, we can also prove: Claim 5.2.2. 

Hybn(1λ, j) = Hybn+1(1λ, j) 

Proof. In Hybn+1, CW (n+1) leaf 

$← {0, 1}n. In Hybn, CW (n+1) leaf = (−1)t 

(n+1) 1 ·(1−s 

(n+1) 0 +s 

(n+1) 1 ) mod 

2n, with s (n+1) 1−j distributed randomly conditioned on the previous values computed. s 

(n+1) 1−j acts as 

a one-time pad which perfectly hides other values. Hence, CW (n+1) leaf is also uniformly distributed 

in this case.

This concludes the proof of security of our FSS comparison protocol. 

Implementation and Communication Complexity. In all these computations modulo 2n, the bitstrings s 

(i) j and σ 

(i) j are respectively in {0, 1}λ and {0, 1}n, where we have typically 

λ = 128 and n = 32. The PRG used here is G : {0, 1}λ → {0, 1}2(λ+1)+2(n+1) where the output is seen as a pair of pairs of elements in 

( {0, 1}λ+1 × {0, 1}λ+1 

) × ( {0, 1}n+1 × {0, 1}n+1). For 

the right-hand part, we only need n bits instead of λ bits since the σ(i) deriving from the PRG are not used for anything other than masking the n-bit output. This allows us to use fewer AES block ciphers in our PRG implementation and hence to achieve faster computation. In addition, because our comparison protocol works very similarly to the equality protocol, we can reuse the trick that consists of reusing randomness of the state corresponding of leaving the special area for the state corresponding of staying into it, as it does not compromise the fact that this state only needs to be pseudo-random. Thanks to this, we almost divide by 2 the size of the CW (i) from 2(λ + 1) + 2(n + 1) to λ + 2 + n + 2. Compared to the previous Distributed Interval Function (DIF) protocol of [BGI16], our algorithm is not only much simpler as it does not require inspecting binary trees and searching for paths, but it also reduces significantly the key size from roughly n(4λ+n) to n(λ+2n+4)+λ+2n bits. This allows for faster transmission of keys over the network to the parties doing the evaluation. 

5.2.4 Application to Deep Learning 

We now apply these primitives to a private deep learning setup in which a model owner interacts with a data owner. The data and the model parameters are sensitive and are secret shared to be kept private. The shape of the input and the architecture of the model are however public, which is a standard assumption in secure deep learning [LJLA17, MZ17]. 

5.2.4.1 Additive Sharing Workflow with Preprocessing 

All our operations are modular and follow this additive sharing workflow: inputs are provided secret shared and are masked with random values before being revealed. This disclosed value is then consumed with preprocessed function keys to produce a secret shared output. Each operation is independent of all surrounding operations, which is known as circuit-independent preprocessing [BGI19] and implies that key generation can be fully outsourced without having to know the model architecture. This results in a fast runtime execution with a very efficient online communication, with a single round of communication and a message size equal to the input size for comparison. 

Additionally, values need to be converted from float to fixed point precision before being secret shared. The fixed point representation allows one to store decimal values with some approximation using n-bits integers. For example, when using a fixed precision of 3 in base 10, a decimal value x is stored as 

⌊ x · 103⌋ in Z2n . Fixed precision is used to simplify operations like 

addition because the inputs can be summed up directly in Z2n . 

5.2.4.2 Common Machine Learning Operations 

ReLU activation function is supported as a direct application of our comparison protocol, which we combine with a point wise multiplication. As mentioned in Section 5.2.2, this construction is not exact and is associated with an error rate which is below 1 in a million for typical ML computations. The comparison made in Table 5.5 between fixed point and private evaluation of pre-trained models shows that this error rate does not affect model accuracy. Matrix Multiplication (MatMul), as mentioned by [BGI19], fits in this additive sharing workflow. We use Beaver triples [Bea91] to compute [[z]] = [[x ·y]] from [[x]], [[y]] and using a triple

Input: [[x1]], . . . , [[xm]] Output: arg maxi∈[1,m] xi 

1 for j ∈ [1, m] do 2 [[sj ]]←∑ 

i ̸=j [[xi − xj ≤ 0]] 3 for j ∈ [1, m] do 4 [[δj ]]← [[sj = m− 1]] 5 return [[δ1]], . . . , [[δm]] 

Algorithm 9: Argmax functionality using FSS 

([[a]], [[b]], [[c]] := [[a · b]]), where all values are secret shared in Z2n . The mask is here [[(−a,−b)]] and is used to reveal (δ, ϵ) := (x− a, y − b). The functional keys are the shares of ([[a]], [[b]], [[c]]) and are used to compute δ · [[b]] + ϵ · [[a]] + δ · ϵ + [[c]] = [[z]]. Matrix multiplication is identical but uses matrix Beaver triples [MZ17]. Convolution can also be computed using Beaver triples. Using the previous notations, we can now consider y to be the convolution kernel, and the operation · now stands for the convolution operator. We use this method for the CPU and GPU implementations, which enables us to use the PyTorch Conv2d function to compute the · operation. Note that convolution can also be computed as a matrix multiplication using an unrolling technique as described in [CPS06], but it incurs an overhead in terms of communication because the unrolled matrix is bigger than the original one when the stride is smaller than the kernel size. More details about unrolling can be found in Appendix A.2.2 with Figure A.5. Argmax is used to determine the predicted label for classification tasks (i.e. compute the index of the highest value of the last layer). Algorithm 9 shows how to compute this operator in a constant number of rounds using pairwise comparisons, in a fashion similar to [HKSvdM19]. This algorithm outputs the indices in the one-hot format, meaning that the output vector is of a similar shape to the input, and contains 1 where the maximum was found and 0 elsewhere. This protocol does not guarantee one-hot output: if the last layer outputs two identical maximum values, both will be retrieved. This sounds acceptable for machine learning evaluation as it informs that the model cannot choose between two classes. For training, the output signal only needs to be normalized. Probabilistic techniques are available to break ties, which only require an additional comparison. 

In our algorithm, the first loop (line 2) requires m(m−1) parallel comparisons, and the second loop (line 4) requires m equality checks. Hence, the argmax uses 2 rounds of communication and sends O(m2) values over the network. This is reasonable for a neural network where the number of outputs m does not exceed 100. MaxPool can be implemented by combining the ideas of the unrolling-based convolution and the argmax: the matrix is first unrolled like in Figure A.5 and the argmax of each row is then computed using parallel pairwise comparisons. This argmax is then multiplied with the row to get the maximum value, and the matrix is rolled back. These steps are illustrated in Figure A.6 in Appendix A.2.2 and are formally described in Algorithm 10. It requires 3 rounds of communication, but we also provide an optimization when the kernel size k equals 2, which reduces the computation complexity by a factor 4× but uses an additional round of communication, and is very useful for some deep models such as VGG16. BatchNorm is implemented using Newton’s method as in [WTB+21] to implement the square inverse of the variance, as computing batch normalization exactly in a private way is very costly [WGC19]. Given an input x = (x0, . . . , xm−1) with mean µ and variance σ2, we return γ · θ̂ · (x− µ) + β. Variables γ and β are learnable parameters and θ̂ is the estimate inverse of√ 

σ2 + ϵ with ϵ≪ 1 and is computed iteratively as such:

Input: [[X]] = ([[xi,j ]])i,j=1...m 

Output: [[MaxPool(X, k)]] 1 Set n = ⌊(m− k)/s + 1⌋ 2 Define [[Xunrolled]] of shape n2 × k2 

3 Define [[y]] of size n2 

4 for i, j ∈ [0, s, 2s, . . . , m− k] do 5 [[xunrolled 

i,j ]] = ([[xi,j ]], . . . , [[xi+k,j+k]]) 6 for i ∈ [0, n2 − 1] do 7 [[yi]]← ⟨[[xi]], Argmax([[xi]])⟩ 8 where [[xi]] = [[xi,0]], . . . , [[xi,k2 ]] 9 return y reshaped as a n× n matrix. 

Algorithm 10: MaxPool functionality using FSS. k is the kernel size, the stride is fixed to 2, padding to 0 and dilation to 1. 

θi+1 = θi · (C + 1)− (σ2 + ϵ) · θ2 

i 

C 

Compared to [WTB+21], we do not make any costly initial approximation, therefore instead of C = 2 which corresponds to the classic Newton’s method, we use higher values of C (like C = 6 for the intermediate layers) which can reduce the convergence speed of the method but spares the initialisation cost. 

The requirements on the approximation depend whether we are doing training or evaluation. If we are evaluating a pre-trained secret-shared neural network, having a very precise approxi-mation is crucial, especially if the model is deep like ResNet18. Indeed, the deeper the model is, the more errors in the BatchNorm layers will propagate in the model and make it unusable. However, if the model has a running mean and variance which is the default for PyTorch, we only need to compute once the square inverse of the running variance at the beginning of the computation. 

For training however, we can use less precise approximations, since the goal of the batch normalization layer is to normalize the signal and this does not need to be done exactly as we show. We have found it very useful to reuse the result of the computation on the previous batch as an initial guess for the next batch. Moreover, we observe that for deep networks such as ResNet18, we can reduce the number of iterations of the Newton method from 4 to only 3 compared to [WTB+21], except of the first batch (which does not have a proper initialisation), and for the initial and last BatchNorm layers. For those layers, which either suffer from a too high or too low variance, we increase the number of iterations. For all layers, typical relative error never exceeds 5% and moderately affects learning capabilities, as our analysis on ResNet18 shows in Table 5.2. We train the model on the Hymenoptera binary classification task4 using different approximated BatchNorm layers for which we report the associated number of rounds per layer when computed in a private way. More details about our experiments on ResNet18 can be found in Appendix 5. 

Table 5.3 summarizes the online communication cost of each ML operation presented above, and shows that basic operations such as comparison have very efficient online communication. We also report results from [MR18] and [WTB+21] which achieve good experimental perfor-mance. Note that ReLU has two communication rounds: one for the binary comparison and one for multiplying the comparison with the initial input signal, in order to implement (x ≥ 0) · x. 

4https://download.pytorch.org/tutorial/hymenoptera_data.zip

Table 5.2: Accuracy of training ResNet18 on the Hymenoptera classification task with exact or approximated BatchNorm (BN) 

BatchNorm init. with Nb of Newton Accuracy Average comm. previous batch iterations (%) rounds per BN 

Exact - - 93.59 -Approximate True 3 89.15 9 Approximate False 20 88.24 60 Approximate False 10 84.97 30 Approximate False 3 60.13 9 

Table 5.3: Theoretical online communication complexity of our protocols. Input sizes into brackets are those of the layers’ parameters, where k stands for the kernel size and s for the stride. Communication is given in the number of values transmitted, and should be multiplied by their size (typically 4 bytes). Missing entries mean that data was not available. 

Protocol Input size Rounds Online Communication Ours FALCON ABY3 Ours FALCON ABY3 

[WTB+21] [MR18] [WTB+21] [MR18] Equality m 1 - 2 m - ∼ λm Comparison m 1 7 2 m 2m ∼ λm 

MatMul m1 ×m2, m2 ×m3 1 1 1 m1m2 + m2m3 m1m3 m1m3 Linear m1 ×m2, {m2 ×m3} 1 1 - m1m2 + m2m3 m1m3 -Convolutionm×m, {k, s} 1 1 - ((m− k)/s + 1)2k2 + k2 ∼ m2k2 -ReLU m 2 10 - 3m 4m -Argmax m 2 - - m2 - -MaxPool m×m, {k, s} 3 12(k2 − 1) - ((m− k)/s + 1)2(k4 + 2) ∼ 5m2 -BatchNorm m×m 9 335 - 18m2 ∼ 56m2 -

5.2.4.3 Training Phase using Autograd 

These operations are sufficient to evaluate real world models in a fully private way. To also support private training of these models, we need to perform backpropagation privately. As we overload operations such as convolutions or activation functions, we cannot use the built-in autograd functionality of PyTorch. Therefore, we have used the custom autograd functionality of the PySyft library [RTD+18], where it should be specified how to compute the derivatives of the operations that we have overloaded. Backpropagation also uses the same basic blocks than those used in the forward pass, including our private comparison protocol. Therefore, the training procedure Train described in Algorithm 11 closely follows the steps of plaintext training, except that the interactions between the secret shared data and model parameters use the protocols we have described in Section 5.2.4.2. 

Input: [[x]], [[yreal]], [[θ]] Output: [[θ̂]] 

1 opt = Optim([[θ]]) 2 [[ypred]] = Forward([[θ]], [[x]]) 3 ℓ = L([[ypred]], [[yreal]]) 4 [[∇θ]] = Backward(ℓ, [[θ]]) 5 [[θ]] = opt([[∇θ]], [[θ]]) 6 return [[θ]] 

Algorithm 11: Train procedure that uses data x to update the model θ. Lines 2−5 often run on batches extracted from [[x]] and hence are iterated until [[x]] has been completely used. Optim refers here to the optimizer that implements (stochastic) gradient descent. Forward and Backward are the forward and backward passes of the model θ. L is the loss function (mean square error or cross entropy). 

5.2.5 Extension to Private Federated Learning 

This 2-party protocol between a model owner and a data owner can be extended to an n-party federated learning protocol where several clients contribute their data to a model owned by an orchestrator server. We assume that the clients have the same set of features but have different samples in their data sets. This approach is sometimes called Horizontal Federated Learning and is used widely as in secure aggregation [BIK+17]. The idea is that the server sends a version of the model to all clients, so that all clients start training the same model in parallel using their own data. With a frequency that varies depending on the settings, the server aggregates the models produced by each client and sends back the aggregated version to be further trained by all clients. This way, clients federate their effort to train a global model, without sharing their data. Compared to secure aggregation [BIK+17], we are less concerned with parties dropping before the end of the protocol (we consider institutions rather than phones), and we do not reveal the updated model at each aggregation or at any stage, hence providing better privacy. 

Algorithm 12 shows one possible implementation of fully private federated learning using 2-party function secret sharing. It prevents collusion between at most k out of n clients, the threat being that a client receiving the share of another client during the aggregation phase could collude with the server to help reconstruct the model contributed by this client, and infer information about its private data. This aggregation requires extra communication rounds but this is in practice negligible compared to the training procedure Train initiated between a server and a client. Note that other aggregation mechanisms could be used, including using n-party MPC protocols or homomorphic encryption, but we proposed masking as this is quite in line with the concept of FSS where we mask the private input with α.

Input: Model on the server S, initialized with parameters θ Output: Model trained using the data from the clients (Ci)i=1..n 

1 Initialisation S secret shares θ with the clients. 2 [[θ]]←share θ 3 for i ∈ [1, n] do 4 [[θi]]←copy [[θ]] 5 S stores [[θi]]0 and sends [[θi]]1 to Ci 

6 Training S runs in parallel n training procedures. 7 for i ∈ [1, n] do 8 [[θ̂i]]← Train([[xi]], [[yi]], [[θi]]), where [[xi]] and [[yi]] are the data and corresponding 

labels from Ci 

9 Aggregation All updated models are aggregated with a scheme secure against collusion between the server and k clients. 

10 S computes [[θ̂]]0 := ∑ i=1..n[[θ̂i]]0 

11 C∗ $← (Ci)i=1..n 

12 for i ∈ [1, n] do 13 Ci generates k seeds and sends them to Ci+1 mod n, . . . , Ci+k mod n 

14 Ci receives k seeds from Ci−k mod n, . . . , Ci−1 mod n 

15 Ci derives k random masks (mj)j=1..k from its own seeds 16 Ci derives k random masks (m̂j)j=1..k from the seeds received 17 Ci builds a global mask µi = ∑ 

j=1..k mj − m̂j 

18 Ci sends [[θi]]1 + µi to C∗ 

19 C∗ receives [[θ̂]]1 := ∑ i=1..n[[θi]]1 +∑ 

i=1..n µi = ∑ i=1..n[[θi]]1. 

20 C∗ broadcasts [[θ̂]]1 to all clients. 21 Iterate Training and Aggregation using [[θ̂]] until the training is complete. 22 return [[θ̂]] 

Algorithm 12: Federated Learning algorithm using 2-party Function Secret Sharing 

5.2.6 Experiments 

In order to simplify comparison with existing work, we follow a setup very close to the work of [WTB+21]. The reason why we compare our work to [WTB+21] is that it provides the most extensive experiments of private training and evaluation we are aware of. We are aware that [WTB+21] also provides honest-majority malicious security, but we only report their results in the honest but curious setting (where they obtain the best runtimes). We assess private in-ference of several networks on the datasets MNIST [LC10], CIFAR-10 [KNH14], 64×64 Tiny Imagenet [WZX17, RDS+15] and 224×224 Hymenoptera which is a subset of Imagenet, and we also benchmark private training on MNIST. More details about the datasets used can be found in Appendix A.2.4. More precisely, we assess 6 networks: a 3 layers fully-connected net-work (Network-1), a small convolutional network with maxpool (Network-2), LeNet [LBBH98], AlexNet [KSH12], VGG16 [SZ14] and ResNet18 [HZRS16] which to the best of our knowledge has never been studied before in private deep learning. The description of these networks is available in Appendix A.2.4. 

Our implementation provides a Python interface and is tightly coupled with PyTorch to provide both the ease of use and the expressiveness of this library. To use our protocols that only work in finite groups like Z232 , we convert our input values and model parameters to fixed precision. To do so, we rely on the PySyft library [RTD+18] which extends common deep learning frameworks including PyTorch with a communication layer for federated learning and supports fixed precision. The experiments are run on Amazon EC2 using m5d.4xlarge machines

Table 5.4: Comparison of the inference time between secure frameworks on several popular neural network architectures. FALCON, SecureNN, and ABY3 are 3-party protocols. XONN and Gazelle are 2-party protocols. All protocols are evaluated in the honest-but-curious setting. For each network we report in order the runtime for computing the preprocessing (if any) using CPUs, the runtime for the online phase in LAN using CPUs, the runtime for the online phase in LAN using GPUs, the runtime for the online phase in WAN using CPUs, and the communication needed during the online phase. Runtime is given in seconds and communication in MB. Missing entries mean that data was not available. 

Network-1 Network-2 LeNet LAN LAN LAN WAN LAN LAN LAN WAN LAN LAN LAN WAN 

FrameworkDataset Prep. CPU GPU CPU CommPrep. CPU GPU CPUCommPrep. CPU GPU CPUComm AriaNN MNIST 0.002 0.004 0.002 0.043 0.022 0.028 0.041 0.024 0.133 0.28 0.041 0.055 0.035 0.143 0.43 FALCON MNIST - 0.011 - 0.990 0.012 - 0.009 - 0.760 0.049 - 0.047 - 3.06 0.74 SecureNN MNIST - 0.043 - 2.43 2.1 - 0.130 - 3.93 8.86 - - - - -XONN MNIST - 0.130 - - 4.29 - 0.150 - - 32.1 - - - - -Gazelle MNIST 0 0.030 - - 0.5 0.481 0.330 - - 22.5 - - - - -ABY3 MNIST 0.005 0.003 - - 0.5 - - - - - - - - - -CrypTFlowMNIST - 0.008 - - - - 0.034 - - - - 0.058 - - -

AlexNet VGG16 ResNet18 LAN LAN LAN WAN LAN LAN LAN WAN LAN LAN LAN WAN 

Framework Dataset Prep. CPU GPU CPUComm.Prep. CPU GPU CPUComm.Prep. CPU GPU CPUComm. AriaNN CIFAR-10 0.091 0.15 0.078 0.34 0.95 0.94 1.75 1.55 1.99 12.59 - - - - -FALCON CIFAR-10 - 0.043 - 0.13 1.35 - 0.79 - 1.27 13.51 - - - - -AriaNN 64×64 ImageNet 0.27 0.33 0.20 0.48 1.75 3.42 7.51 6.83 8.00 53.11 - - - - -FALCON 64×64 ImageNet - 1.81 - 2.43 19.21 - 3.15 - 4.67 52.56 - - - - -AriaNN224×224 Hymenoptera - - - - - - - - - - 10.02 19.88 13.90 24.07 148 

for CPU benchmarks and g4dn.4xlarge for GPU, both with 16 cores and 64GB of CPU RAM, and we report our results both in the LAN and in the WAN setting. Latency is of 70ms for the WAN setting and is considered negligible in the LAN setting. Last, all values are encoded on 32 bits. 

5.2.6.1 Inference Time and Communication 

Comparison of experimental runtimes should be taken with caution, as different implementations and hardware may result in significant differences even for the same protocol. We report our online inference runtimes in Table 5.4 and show that they compare favourably with existing work including [LJLA17, MR18, MZ17, WGC19, WTB+21]. For example, our CPU implementation of Network-1 outperforms all other studied frameworks by at least a factor 2× in the LAN setting and even more in the WAN setting. For larger networks such as AlexNet and VGG16, we have an execution time which is slightly higher than [WTB+21]. One reason for this can be that we use a Python interface to serialize messages and communicate between parties, while [WTB+21] uses exclusively C code. However, we are more communication-efficient than [WTB+21] for models starting from LeNet, with a typical gain of 7% to 30% on CIFAR-10. Regarding the high advantage we have on AlexNet and 64×64 Tiny Imagenet, this is explained by the fact that [WTB+21] uses a modified and more complex AlexNet while we use the one from PyTorch. Details about our networks architecture is given in Appendix A.2.4. 

Results are given for a batched evaluation with a default batch size of 128 to amortize the communication cost, as in other works compared here. For larger networks, we reduce the batch size to have the preprocessing material (including the function keys) fitting into RAM, which reduces the benefit of amortization. The exact values chosen are available in Appendix A.2.3. 

We have also added the results of our GPU implementation, which offers a clear speed-up

Table 5.5: Accuracy of pre-trained neural network architectures, evaluated over several datasets in plaintext, fixed precision and privately using FSS. Time for private evaluation in the LAN setting is also reported. 

LAN Accuracy Model Dataset time (h) Private Fix prec. Public Network-1 MNIST 0.01 98.2 98.2 98.2 Network-2 MNIST 0.18 99.0 99.0 99.0 LeNet MNIST 0.24 99.2 99.3 99.3 AlexNet CIFAR-10 0.60 70.3 70.3 70.3 AlexNet 64×64 ImageNet 0.48 38.3 38.6 38.6 VGG16 CIFAR-10 5.19 87.4 87.4 87.4 VGG16 64×64 ImageNet 9.97 55.2 56.0 55.9 ResNet18 Hymenoptera 0.95 94.7 94.7 95.3 

Table 5.6: Accuracy of neural network architectures trained over several datasets in plaintext, fixed precision and privately using FSS. Time for private training in the LAN setting is given in hours per epoch. 

LAN time Accuracy Model Dataset per epoch (h) Private Fix prec. Public Epochs Network-1 MNIST 0.78 98.0 98.0 98.2 15 Network-2 MNIST 2.8 98.3 99.0 99.0 10 LeNet MNIST 4.2 99.2 99.2 99.3 10 

compared to CPU with an execution which is between 10% and 100% faster. While this already shows the usefulness of using GPUs, one could expect a greater speed-up. One reason is that classic GPUs currently offer 16GB of RAM, which is a clear limitation for our work where we store keys in RAM. Storing the keys on the CPU would come at a marginal cost of importing them on the GPU during the online phase but would allow to use bigger batches and hence better amortize the computation. 

5.2.6.2 Test Accuracy 

Thanks to the flexibility of our framework, we can train each of these networks in plaintext and need only one line of code to turn them into private networks where all parameters are secret shared, or to fixed precision networks where all parameters are converted to fixed precision but computation is still in plaintext. Comparing the performance of private models with their fixed precision version helps us to understand if fixed precision by itself reduces the accuracy of the model, and gives an estimate of the loss that is related to using secret shared computation. 

We compare the accuracy of several pre-trained networks in these 3 modes in Table 5.5 by running a private evaluation with FSS, a fixed precision using only PySyft and a public evaluation where the model is not modified. We observe that accuracy is well preserved overall and that converting to fixed precision has no impact on the accuracy of the model. We have a small reduction in accuracy for the two private models evaluated on 64×64 ImageNet but it remains close to the plaintext baseline. This gap can be explained by the fact that PySyft uses a basic and approximate private truncation after multiplication where truncation is directly applied on the shares, and by the error rate of our FSS comparison protocol. The drop in accuracy on ResNet18 is also minor and corresponds to a single mislabeled item. 

If we degrade the encoding precision which by default considers values in Z232 , or the fixed

precision which is by default of 4 decimals, performance degrades as shown in Appendix A.2.1. 

5.2.6.3 Training Accuracy 

We have also assessed the ability of training neural networks from scratch in a private way using AriaNN. Private training is an end-to-end private procedure, which means the model or the gradients are never accessible in plaintext. We use stochastic gradient descent (SGD) with momentum, a simple but popular optimizer, and support several losses such as mean square error (used for Network-1) and cross entropy (used for Network-2 and LeNet). We report the runtime and accuracy obtained by training from scratch and evaluating several networks in Table 5.6, in plaintext, in fixed precision and in a fully private way, just as we did for inference. Note that because of the training setting, accuracy might not match best known results, but the training procedure is the same for all training modes which allows for fair comparison. 

We observe that the training is done almost perfectly both in fixed precision and private mode compared to the plaintext counterpart. The only noticeable difference we observe is for Network-2, where the privately-trained model achieves 98.3% while 99.0% is expected. The fixed-precision accuracy which is 99.0% suggests that our autograd functionality is working properly, so the difference must be explained by the small failure rate of FSS. Training profiles show that the accuracy starts decreasing roughly after 3 epochs, while it is supposed to keep increasing smoothly up to the 10th epoch. Instability caused by some FSS failures could account for this behaviour. However, training on LeNet did not suffer from the same phenomenon. 

Recently, [DEK21] also reports accuracy results when training securely Network-1 on MNIST, using a 3-party semi-honest protocol that mixes [MR18] and [AFL+16]. They achieve 97.8 % of accuracy in 15 epochs with a runtime of only 33.8s per epoch in the LAN setting. However, they do not provide a detailed comparison between the accuracy achieved with private training, and cleartext training. One major difference with our work is that we are more communication efficient. We only require 10.3MB of communication during the online phase while they use 33.8MB per epoch. In addition, they rely on ABY3, which means they use much more interaction rounds, which could be costly in the WAN setting although this is not monitored by this work. 

Training did not complete in reasonable time in our experiments for larger networks such as VGG16, which in practice might be fine-tuned rather than trained from scratch. Note that training time includes the time spent building the preprocessing material, as it is too large to be fully processed and stored in RAM in advance. 

5.2.6.4 Computation and Communication Analysis 

We have provided in Table 5.7 a small analysis of how the compute time can be decomposed. We use AlexNet on the Tiny Imagenet dataset as it is the biggest network on which we could use a batch size higher than 64 both on CPU and GPU and hence amortize the serialization and communication cost. 

Table 5.7: Distribution of the compute time during inference of AlexNet on the Tiny Imagenet dataset using either CPUs or GPUs. 

MatMul and Serialization Processor FSS Convolution and Deser. Other CPU 16% 72% 4% 8% 

53ms 238ms 13ms 26ms GPU 51% 39% 8% 2% 

102ms 78ms 16ms 4ms

Thanks to the efficiency of our Rust implementation, function secret sharing only accounts for 16% for the online runtime when we use CPUs, and most of the time is spent doing matrix multiplications and convolutions. This last part uses the underlying PyTorch functions on integers which are significantly slower than when they run on floats. This motivates us to use GPUs for which such operations are far more efficient. In the GPU setting, the distribution of time is indeed much more balanced, and having function secret sharing directly running on GPUs avoids going back and forth between the CPU and the GPU. 

Regarding the trade-off between computation and communication time, we show in Table 5.8 that in the WAN setting and using CPUs, computation appears to be the main bottleneck especially for bigger models. This also encourages us to further improve the GPU implementa-tion, as any optimization of the computation efficiency will have an important impact on the overall runtime. 

Table 5.8: Proportion of the overall runtime spent on computation versus communication, in the WAN setting using CPUs 

Model Dataset Computation (%) Comm. (%) Network-1 MNIST 9 91 Network-2 MNIST 31 69 LeNet MNIST 38 62 AlexNet CIFAR-10 44 56 AlexNet 64×64 ImageNet 69 31 VGG16 CIFAR-10 88 12 VGG16 64×64 ImageNet 93 7 ResNet18 Hymenoptera 83 17 

5.2.6.5 Discussion 

Regarding experiments on larger networks, we could not use batches of size 128. This is mainly due to the size of the comparison function keys, which is currently proportional to the size of the input tensor, with a multiplicative factor of nλ where n = 32 and λ = 128. Optimizing the function secret sharing protocol to reduce the size of those keys would allow to better amortize batched computations and would also reduce the runtime as we would manipulate smaller arrays during the private comparison. An interesting other improvement would be to run experiments on n = 16 bits instead of 32. Classic ML frameworks like PyTorch or TensorFlow now support 16 bits encoding both on CPU and GPU. 

We have proposed a first implementation of FSS on GPU, which can still be improved to reduce the memory footprint of the keys. Further efforts could be made to decrease it roughly by 50% to match the theoretical key size. In addition, and as the small difference between the LAN and the WAN runtime shows, especially for bigger networks, most of the time is now spent on computation. Therefore, optimizing computation on GPUs will have a direct impact on the overall efficiency of the inference or the training. 

We have shown the relevance of using FSS for private training and evaluation of models in machine learning. Compared to concurrent works like [BCG+21], we have shown that we have very competitive protocols, and that the failure rate of the comparison protocol has little impact for machine learning applications. We have reused this protocol in our work [KZPP+21] where it was applied to the field of medical imaging on chest X-rays.

5.2.7 Conclusion 

In this work, we improve over the best known protocols for private comparison using function secret sharing by reducing the keys size by almost a factor ×4. We show how this new algorithm helps us implement efficient machine learning components and we provide constructions for ReLU and MaxPool with only 2 and 3 rounds of communication. Additionally, we show that AriaNN can implement a large diversity of neural networks, from convolutional networks to ResNet18, which are very competitive in terms of runtime and communication compared to existing work. Last, we provide an implementation of AriaNN which can run both on CPU and GPU, providing promising runtime improvements for the next generation of hardware accelerated privacy-preserving machine learning models.

Chapter 

# 6 Differential Privacy Guarantees for Stochastic Gradient Langevin Dynamics 

This chapter is based on the article [RBP22] (unpublished). 

Chapter content 6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 

6.2 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81 

6.3 Privacy Analysis of Noisy Stochastic Gradient Descent . . . . . . . 81 

6.3.1 Tracing Diffusion for DP-SGLD . . . . . . . . . . . . . . . . . . . . . . . 82 

6.3.2 Privacy Erosion in Tracing (Langevin) Diffusion . . . . . . . . . . . . . 83 

6.3.3 Privacy Guarantee for DP-SGLD . . . . . . . . . . . . . . . . . . . . . . 83 

6.4 Utility Analysis for Noisy Stochastic Gradient Descent . . . . . . . 87 

6.4.1 Fixed Step Size η . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87 

6.4.2 Decreasing Step Size ηk . . . . . . . . . . . . . . . . . . . . . . . . . . . 91 

6.5 Experiments: Application to Logistic Regression . . . . . . . . . . . 95 

6.6 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97 

End-to-end private training using SMPC techniques like function secret sharing is very pow-erful because it allows both the data and the model to stay completely secret until the training completes. However, no matter whether the trained model is published or kept secret after train-ing, it is likely that external users will be granted access to query it and recover the responses in clear text. In this respect, it is as susceptible to black-box attacks as if it had been trained in a non-private way. This is why one might be tempted to add differential privacy during the pri-vate training step. Unlike conventional training with differential privacy, there is one important fact that must be noted in this setting: the intermediate model updates are never released and thus need not be protected. To leverage this interesting characteristic, we build upon a recent framework [CYS21] that uses a similar assumption. We analyze the privacy leakage of noisy stochastic gradient descent by modeling Rényi divergence dynamics with Langevin diffusions. We derive similar desirable properties than [CYS21] but in the stochastic setting which more closely follows machine learning standard practice. In particular, we prove that the privacy loss converges exponentially fast for smooth and strongly convex objectives under constant step size, which is a significant improvement over previous DP-SGD analyzes. We also extend our analysis to arbitrary sequences of varying step sizes and derive new utility bounds. Last, we propose an implementation and our experiments show the practical utility of our approach compared to classical DP-SGD libraries.

6.1 Introduction 

Differential privacy [DMNS06] for machine learning is a promising approach to reduce exposure of training datasets when releasing machine learning models. The privacy leakage from these models can be quantified using Rényi differential privacy [Mir17] which models it through the divergence of the distributions of two models trained on datasets that only differ in one item. The intuition behind is that a model whose behavior is sensitive to the presence or absence of a single individual is likely to memorize information about specific individuals, which can then be uncovered using several types of attacks like membership inference attacks [SSSS17]. 

The most standard approaches to training neural networks with differential privacy are derived from [BST14]’s method of differentially private stochastic gradient descent (DP-SGD) which leverages subsampling to improve privacy bounds. A line of work including [ACG+16, BBG18, WBK19] have provided tighter analyses of the privacy amplification by subsampling. DP-SGD is an attractive method as it closely mimics classic SGD training of neural networks, and applies to almost all architectures. It therefore enjoys easy adoption from data scientists and has been integrated in popular libraries like Opacus [YSS+21]. The privacy leakage modeled through standard (ϵ, δ)-differential privacy grows approximately in 

√ K for high privacy regimes 

[ACG+16, DRV10], where K is the number of iterations, which is a limitation of DP-SGD in real world applications especially for the tasks with slow convergence. 

Another close line of work has explored privacy amplification by iteration [FMTT18, BBGG19], and rely on the hypothesis that the intermediate versions of the model should not be released. In particular, authors of [CYS21] have proposed a novel analysis of the differential privacy dynam-ics of Langevin diffusion and have applied it to a noisy gradient descent algorithm (DP-GLD). This method notably guarantees that under strongly convex and smooth objectives, the privacy leakage can be bounded by a constant, which is particularly suited for slow convergence scenar-ios. However, it only addresses full gradient descent (DP-GLD), which is impractical for large datasets. 

Contributions. We provide a privacy analysis of the stochastic noisy gradient descent algorithm (DP-SGLD), which is also based on Langevin diffusions. We prove that DP-SGLD achieves similar privacy and utility guarantees than DP-GLD, including exponential convergence of the privacy bound, and we extend the analysis to the case where the step size is not constant. More specifically: 

 We introduce DP-SGLD, a stochastic version of the DP-GLD algorithm studied in [CYS21], and we show that it achieves the same privacy guarantees including exponentially fast convergence. 

 We show that DP-SGLD achieves similar utility than DP-GLD up to a term due to using stochastic estimates of the gradient. We also relax assumptions on the step size η in utility theorems of [CYS21] to only verify η ≤ 1 

2β instead of η ≤ λ 2β2 , where β is the smoothness 

constant and λ the strong-convexity parameter, thus obtaining the classical scaling from convex optimization. 

 We extend our analysis of DP-SGLD to non-constant step sizes and derive utility bounds when the step size is parametrized as ηk = 1 

2β+λk/2 , and removes the term due to stochastic training. 

 Last, we provide an implementation of DP-SGLD1 and an experimental evaluation on differentially private logistic regression. We show that DP-SGLD experimentally outper-forms DP-SGD on several tasks, and that it significantly reduces the gap with non-private training. 

1The code is provided in the supplementary material.

Note that authors of [WT11] also analyze this algorithm, but in order to construct samples of the posterior distribution but instead of deriving privacy guarantees. [YS22] provides a concurrent stochastic version and analysis of [CYS21]. 

6.2 Preliminaries Preliminaries including the definition of Rényi differential privacy can be found in the preliminary chapter 2. 

6.3 Privacy Analysis of Noisy Stochastic Gradient Descent We use the same notations as in [CYS21]. Let D = (x1, . . . , xn) be a dataset of size n, with xi ∈ Rp. Let ℓ(θ, x) be the loss function of a learning algorithm parametrized by θ ∈ C on an input x, where C is a closed convex set of Rd. ΠC denotes the orthogonal projection onto C. We denote by LD(θ) the global empirical loss of the model, and by LBk 

(θ) the estimated empirical loss computed on the batch Bk of size |Bk| = m: 

LD(θ) = 1 n 

∑ x∈D 

ℓ(θ, x), LBk (θ) = 1 

m 

∑ x∈Bk 

ℓ(θ, x). 

We analyse the privacy loss of the DP-SGLD algorithm given in Algorithm 13 which implements noisy stochastic gradient descent. 

Initialisation: Dataset D = (x1, . . . , xn), loss function ℓ, step size {ηk}k≥0, noise variance σ2 and initial parameter θ0 ∈ C 

1 for k = 0, . . . , K − 1 do 2 Sample batch Bk from D with replacement 3 Compute ∇LBk 

(θk) = 1 m 

∑ x∈Bk 

∇ℓ(θk, x) 4 θk+1 = ΠC(θk − ηk∇LBk 

(θk) + √ 

2ηk N (0, σ2Id)) 5 return θK 

Algorithm 13: ADP−SGLD: Noisy Stochastic Gradient Descent 

Let θk and θ′ k denote the parameters at the k-th iteration of ADP−SGLD on neighboring 

datasets D and D′, respectively. Stating that D and D′ are neighbors means that they only differ by one xi0 , for some index i0. Batch Bk is sampled with replacement from D, meaning that a subset of size m is chosen at random from D and then replaced at the end of the k-th iteration. Hence, xi0 can only appear once in Bk, with probability m/n. We denote by Θtk 

and Θ′ tk 

the corresponding random variables associated with θk and θ′ k. We abuse notation to 

also denote their probability density functions by Θtk and Θ′ 

tk . Our objective is to model and 

analyze the dynamics of differential privacy of this algorithm, and to compare it to the ones of the DP-GLD algorithm described in [CYS21], which implements full noisy gradient descent. To this aim, we use the theoretical framework and constructions they provide to analyze the privacy loss of releasing the output θK of the algorithm, assuming private internal states (i.e., θ1, . . . , θK−1). 

More precisely, the proof strategy goes as follows: we first model the transition from any step k to the next step k + 1 in DP-SGLD using a diffusion process, and derive the evolution equation of the distribution Θt during k < t < k + 1. We use the theoretical results of [CYS21] to establish the evolution of the Rényi divergence of two distributions based on neighboring datasets during k < t < k + 1. Finally, we compute a bound on the global Rényi divergence for the K-step DP-SGLD process.

6.3.1 Tracing Diffusion for DP-SGLD 

To analyze the privacy loss of DP-SGLD, which is a discrete-time stochastic process, we first interpolate each discrete update from θk to θk+1 with a piecewise continuously differentiable diffusion process. Given step size {ηk}k≥0, variance noise σ2 and initial parameter vector θ0, the k-th discrete update in Algorithm 13 is: 

θk+1 = ΠC(θk − ηk∇LBk (θk) + 

√ 2ηkσ2ZK), with Zk ∼ N (0, Id),Bk 

$← D, (6.1) 

where Bk $← D means that batch Bk is sampled with replacement from D, and where the loss 

LBk (θk) is the estimated empirical loss function over batch Bk. This discrete jump can be 

interpolated with the following random process {Θt}tk≤t≤tk+1 , where tk = ∑k i=1 ηi, 

Θtk = θk 

Θtk+∆t − ( 

Θtk − ηk 

∑m i=1,i ̸=i0 

∇ℓ(Θtk , xi) 

m 

) = −∆t 

∇ℓ(Θtk , xi0) 

m + √ 

2∆t σ2Zk, 0 < ∆t < ηk 

Θtk+1 = ΠC(lim∆t→ηk Θtk+∆t), 0 < ∆t < ηk, 

(6.2) 

where Zk ∼ N (0, Id), Bk is sampled with replacement from D, i0 is chosen as follows: if the data item which differs between D and D′ is part of Bk, then i0 refers to its index, else i0 is chosen at random. 

We can compute from (6.2) lim∆t→ηk Θtk+∆t = θk−ηk∇LBk 

(θk) + √ 

2ηkσ2ZK . Therefore by the update equation (6.1), we see that the random variable Θtk+1 = ΠC(lim∆t→ηk 

Θtk+∆t) has the same distribution as the parameter θk+1 at the (k + 1)th step of DP-SGLD. 

We now differentiate (6.2) over time t for {Θt}tk<t<tk+1 and we derive the following stochastic differential equation 

dΘt = − 1 m∇ℓ(Θtk 

, xi0)dt + √ 

2σ2dWt, (6.3) where dWt ∼ 

√ tN (0, Id) describes the Wiener process on Rd, and i0 is chosen as such:{ 

{xi0} = {xi, xi ∈ Bk, xi /∈ B′ k} if Bk ̸= B′ 

k 

xi0 $← Bk if Bk = B′ 

k, 

where we assume without loss of generality that two neighboring batches Bk and B′ k are indexed 

so as to be equal on all indices but one. This shows that {Θt}tk<t<tk+1 is a diffusion process and we repeat the construction for k = 0, 1, . . . to define a piecewise continuous diffusion process {Θt}t≥0 whose distribution at time t = tk is consistent with θk. We refer to this process as the tracing diffusion for DP-SGLD. Definition 12 (Coupled tracing diffusions [CYS21]). Let Θ0 = Θ′ 

0 be two identically distributed random variables. We refer to the stochastic processes {Θt}t≥0 and {Θ′ 

t}t≥0 defined by (6.2) as coupled tracing diffusions processes for DP-SGLD under loss function ℓ(θ, x) on neighboring datasets D, D′ differing in i0-th data point. 

The Rényi divergence Rα(ΘtK || Θ′ tK 

) reflects the Rényi privacy loss of Algorithm 13 with K steps. Conditioned on observing θk and on sampling Bk from D, the process {Θt}tk<t<tk+1 

is a Langevin diffusion along a constant vector field ∇ℓ(θk, xi0) for duration ηk. Therefore, the conditional probability distribution pt|tk 

(θ|θk) follows the following Fokker-Planck equation, where the notation pt|t′(θ|θ′) represents the conditional probability density function p(Θt = θ|Θt′ = θ′): 

∂pt|tk (θ|θk) 

∂t = ∇ · 

( pt|tk 

(θ|θk) 1 m ∇ℓ(θk, xi0) 

) + σ2∆pt|tk 

(θ|θk). 

By taking expectations over the distribution ptk (θk) on both sides, we get the partial differential 

equation that models the evolution of probability distribution pt(θ) in the tracing diffusion.

Lemma 13. For the SDE (6.3), the equivalent Fokker-Planck equation at time tk < t < tk+1 is 

∂pt(θ) ∂t 

= ∇ · ( pt(θ) E 

θk∼ptk|t 

[ 1 m ∇ℓ(θk, xi0) 

∣∣∣θ,Bk 

]) + σ2∆pt(θ). 

Using this distribution evolution equation, we model the privacy dynamics in the tracing diffusion process. This process is similar to Langevin diffusion under conditionally expected loss function ∇LBk 

(θ) = Eθk∼ptk|t 

[ 1 m∇ℓ(θk, xi0) 

∣∣θ,Bk 

] . 

6.3.2 Privacy Erosion in Tracing (Langevin) Diffusion 

The analysis of the privacy erosion in tracing Langevin diffusion is detailed in [CYS21] but we provide here the key results that we will apply to our algorithm. Privacy erosion refers to the continuous increase of the privacy loss over time as more data is accessed to compute the gradient of the loss in the update equation. Consider a Langevin diffusion process modelled through the following Fokker-Planck equation: 

∂pt(θ) ∂t 

= ∇ · (pt(θ)∇LBk (θ)) + σ2∆pt(θ). 

Definition 14 (Log-Sobolev inequality [Gro75]). The distribution of a variable Θ satisfies the Log-Sobolev Inequality for a constant c, or is c-LSI, if for all functions f : Rd → R with continuous ∇f and E[f(Θ)2] <∞, it satisfies 

E[f(Θ)2log f(Θ)2]−E[f(Θ)2] logE[f(Θ)2]≤ 2 c E[∥∇f(Θ)∥22]. 

Lemma 15 (Dynamics for Rényi privacy loss under c-LSI [CYS21]). Assuming that Θ is c-LSI and Sg is the sensitivity of the loss gradient, the dynamics of the Rényi privacy loss can be modelled as such, where R(α, t) represents the α Rényi divergence Rα(Θt || Θ′ 

t): 

∂R(α, t) ∂t 

≤ 1 γ 

αS2 g 

4σ2 −2(1−γ)σ2c 

[ R(α, t) 

α +(α−1)∂R(α, t) 

∂α 

] , (6.4) 

for some γ which can be arbitrarily fixed. 

The initial privacy loss satisfies R(α, 0) = 0 as Θ0 = Θ′ 0. The solution R(α, t) for this 

equation increases with time t ≥ 0, which models the erosion of Rényi privacy loss in Langevin diffusion. Intuitively, the c-LSI condition which provides the negative dependence ∂R(α,t) 

∂t with respect to R(α, t), can be interpreted as a sufficient condition to ensure that the the Rényi privacy loss is bounded, which is further formalized in Theorem 17. 

6.3.3 Privacy Guarantee for DP-SGLD 

We now extend these results to the tracing diffusion for DP-SGLD. In addition, we do not make the assumption that the step size is constant and use a sequence {ηk}k≥0 instead. We first bound the gradient sensitivity of the conditionally expected loss∇LBk 

(θ) = Eθk∼ptk|t 

[ 1 m∇ℓ(θk, xi0)|θ,Bk 

] . 

Lemma 16 (Sensitivity). Let ℓ(θ, x) be an L-Lipschitz loss function on closed convex set C, then for coupled tracing diffusions {Θt}t≥0 and {Θ′ 

t}t≥0 for DP-SGLD on neighboring datasets D and D′, and noise variance σ2, the gradient sensitivity of conditionally expected loss ∇LBk 

(θ) = Eθk∼ptk|t 

[ 1 m∇ℓ(θk, xi0) 

∣∣ θ,Bk 

] is bounded by: 

∥∥∥ E θk∼ptk|t 

[ 1 m ∇ℓ(θk, xi0) 

∣∣∣θ,Bk 

] − E 

θ′ k 

∼p′ tk|t 

[ 1 m ∇ℓ(θ′ 

k, x′ i0) ∣∣∣θ,Bk 

]∥∥∥ 2 ≤ 2L 

n , 

where n is the size of the dataset D and D′, and m is the size of the batch Bk and B′ k.

Proof. We first distinguish on the events Bk = B′ k and Bk ̸= B′ 

k and then use the triangle inequality: ∥∥∥∥∥Eθk∼ptk|t 

[∇ℓ(θk; xio) m 

|θ,Bk 

] 

− Eθ′ k 

∼p′ tk|t 

[∇ℓ(θ′ k; x′ 

io) m 

|θ,Bk 

] ∥∥∥∥∥ 2 

= P[Bk ̸= B′ k] · 

∥∥∥∥∥E [ 

E θk∼ptk|t 

[∇ℓ(θk; xio) m 

|θ ] 

− E θ′ 

k ∼p′ 

tk|t 

[∇ℓ(θ′ k; x′ 

io) m 

|θ ] | Bk ̸=B′ 

k 

]∥∥∥∥∥ 2 

≤ m 

n · 2L 

m = 2L 

n 

We now substitute the sensitivity Sg with 2L n in equation (6.4) modelling the Rényi privacy 

loss dynamics of tracing diffusion at tk ≤ t < tk+1 under c-LSI condition: 

∂R(α, t) ∂t 

≤ 1 γ 

αL2 

n2σ2−2(1−γ)σ2c 

[ R(α, t) 

α +(α−1)∂R(α, t) 

∂α 

] . (6.5) 

Following the methodology from [CYS21], we solve this PDE under γ = 1 2 and derive the 

RDP guarantee for the DP-SGLD algorithm. 

Theorem 17 (RDP for DP-SGLD under c-LSI). Let ℓ(θ, x) be an L-Lipschitz loss function on a closed convex set C. Let {Θt}t≥0 be the tracing diffusion for ADP−SGLD under loss function ℓ(θ, x) on dataset D. If Θt satisfies c-LSI throughout 0 ≤ t ≤ 

∑K k=1 ηk, then ADP−SGLD satisfies 

(α, ε)-Rényi Differential Privacy for 

ε = 2αL2 

cn2σ4 (1− e−σ2c ∑K 

k=1 ηk). 

Proof. At each step k, the Rényi privacy follows the evolution equation defined in (6.5) (since it is a tracing diffusion) when tk < t < tk+1, where tk = ∑k 

i=1 ηi: 

∂R(α, t) ∂t 

≤ 1 γ 

αL2 

σ2n2−2(1−γ)σ2c 

[ R(α, t) 

α +(α−1)∂R(α, t) 

∂α 

] Let’s a1 = 2(1− γ)σ2c, a2 = 1 

γ αL2 

σ2n2 and 

u(t, y) = 

 R(α,t) 

α − a2 a1 

tk < t < tk+1 R(α,lim 

t→t+ k 

t) 

α − a2 a1 

t = tk 

We can rewrite the evolution equation as such: 

∂u 

∂t + a1u + a1 

∂u 

∂y ≤ 0 , tk < t < tk+1 

with initial condition u(tk, y) = R(α,lim 

t→t+ k 

t) 

α − a2 a1 

. Let now introduce τ = t and z = t − 1 

a1 y and write v(τ, z) = u(t, y). The equation now 

writes: ∂v 

∂τ + a1v < 0

with initial condition v(tk, z) = u(tk,−a1(z − tk)) The solution of this equation is: 

v(τ, z) ≤ v(tk, z)e−a1(τ−tk) 

which also writes u(t, y) ≤ u(tk, y − a1(t− tk))e−a1(t−tk) 

or in terms of R(α, t): 

R(α, t)− a2 a1 

α ≤ (R(α, lim t→t+ 

k 

)− a2 a1 

α)e−a1(t−tk) 

for tk < t < tk+1. Taking the limit t→ t− 

k+1, we have 

R(α, lim t→t− 

k+1 

t)− a2 a1 

α ≤ (R(α, lim t→t+ 

k 

t)− a2 a1 

α)e−a1ηk+1 

In addition, by the tracing diffusion process described in (6.2), we have 

lim t→t+ 

k 

Θt = ϕ(ΠC( lim t→t− 

k 

Θt)) 

lim t→t+ 

k 

Θ′ t = ϕ(ΠC( lim 

t→t− k 

Θ′ t)) 

where ϕ(θ) = θ−η ∑m 

i=1,i ̸=i0 

∇ℓ(θ, xi) m 

is a mapping which is the same for both processes, as the batches Bk for each distribution only differ at most on xi0 . Hence, by post-processing of Rényi divergence, we have 

R(α, lim t→t+ 

k 

t) ≤ R(α, lim t→t− 

k 

t) 

Combining the above two inequalities, we derive the following recursive equation 

R(α, lim t→t− 

k+1 

t)− a2 a1 

α ≤ (R(α, lim t→t− 

k 

)− a2 a1 

α)e−a1ηk+1 

Repeating this step for k = 0, . . . , K − 1 we have 

R(α, lim t→t− 

K 

t)− a2 a1 

α ≤ (R(α, lim t→0− 

t)− a2 a1 

α)e−a1tK 

where tK = ∑K i=1 ηi. Because coupled tracing diffusions have the same start parameter, we 

have R(α, limt→0− t) = 0. Moreover, since projection is a post-processing mapping we have R(α, tK) ≤ R(α, limt→t− 

K t). Putting back the values of a1 and a2 we have: 

R(α, tK) ≤ αL2 

2γ(1− γ)cσ4n2 (1− e−2(1−γ)σ2ctK ) 

Setting γ = 1 2 suffices to prove the Rényi privacy loss bound in the theorem. 

Sketch of proof. We introduce tk = ∑k i=1 ηi for k ≥ 0. The idea of the proof is to bound 

R(α, tK), the Rényi divergence after K updates in DP-SGLD, with a function of R(α, t0). This is first done by considering the k-th update, and proving the following equations for some constants a1, a2: 

R(α, lim t→t− 

k+1 

t)− a2 a1 

α ≤ (R(α, lim t→t+ 

k 

t)− a2 a1 

α)e−a1ηk+1 and R(α, lim t→t+ 

k 

t) ≤ R(α, lim t→t− 

k 

t).

This allows to bound R(α, limt→t− k+1 

t) with a function of R(α, limt→t− k 

t) and the final bound follows by recursivity, by noting that R(α, t− 

0 ) = 0 since coupled tracing diffusions have the same start parameter. 

This theorem guarantees that under the c-LSI condition, the privacy loss converges during the noisy SGD process if limK→∞ 

∑K k=1 ηk =∞. In particular, the case where the step size is 

constant is straightforward: 

Corollary 18 (RDP for DP-SGLD under c-LSI with constant step-size). Let Θt be defined as in Theorem 17. If ADP−SGLD has constant step size η and if Θt satisfies c-LSI throughout 0 ≤ t ≤ ηK, then ADP−SGLD satisfies (α, ε) Rényi Differential Privacy for 

ε = 2αL2 

cn2σ4 (1− e−cσ2ηK). 

In addition, [CYS21] show that the c-LSI condition is satisfied in DP-GLD with constant step size, for loss functions that are Lipschitz-continuous, strongly convex and smooth, with appropriate conditions on the algorithm parameters and initialization. We derive an equivalent lemma for DP-SGLD with varying step size. 

Lemma 19 (LSI for DP-SGLD). If loss function ℓ(θ, x) is λ-strongly convex and β-smooth over a closed convex set C, then the coupled tracing diffusion processes {Θt}t≥0 and {Θ′ 

t}t≥0 for DP-SGLD with step size {ηk}k≥0 satisfying ηk < 1 

β for k ≥ 0, and with initial distribution Θ0 ∼ ΠC(N (0, 2σ2 

λ Id)), satisfy c-LSI for t ≥ 0 with c = λ 2σ2 . 

The proof of this lemma is exactly the same as Lemma 5 in [CYS21], where n needs to be replaced with the batch size m and η with ηk. We immediately derive the following bound on the Rényi privacy loss for DP-SGLD. 

Theorem 20 (Privacy guarantee for DP-SGLD). Let ℓ(θ, x) be an L-Lipschitz, λ-strongly convex and β-smooth loss function on closed convex set C, then ADP−SGLD with start parameter θ0 ∼ ΠC(N (0, 2σ2 

λ Id)) and step-size η < 1 β satisfies (α, ε)-Rényi differential privacy with 

ε = 4αL2 

λn2σ2 (1− e− λ 2 ∑K 

k=1 ηk). 

The case where the step size is constant follows: 

Corollary 21 (Privacy Guarantee for DP-SGLD with constant step-size). With ℓ(θ, x) and ADP−SGLD defined as in Theorem 20, and with constant step size η < 1 

β , ADP−SGLD satisfies (α, ε)-Rényi Differential Privacy with 

ε = 4αL2 

λn2σ2 (1− e−ληK/2). 

The case where the step size decreases as ηk = 1 2β+λk/2 is further analyzed in the next section: 

Corollary 22 (Privacy Guarantee for DP-SGLD with decreasing step-size). With ℓ(θ, x) and ADP−SGLD defined as in Theorem 20, and with step size ηk = 1 

2β+λk/2 , ADP−SGLD satisfies (α, ε)-Rényi Differential Privacy with 

ε = 4αL2 

λσ2n2 (1− e − log(1+ λK 

4β )) = 4αL2 

λn2σ2 λK 

4β + λK .

Discussion. Let us consider η = 1 2β , as set in the utility analysis in the next section. 

In the fast convergence setting, i.e. when K is small compared to β λ , Corollary 21 and Corollary 

22 have equivalent evolutions on ε: 

(21) ε = 4αL2 

λn2σ2 (1− e−λK/4β) ∼ K≪ β 

λ 

αL2K 

βn2σ2 (22) ε = 4αL2 

λn2σ2 λK 

4β + λK ∼ 

K≪ β λ 

αL2K 

βn2σ2 . 

This bound is equivalent (up to a factor 2) to the one in [ACG+16]: ε′ = αL2 

n2σ2 ·ηK = αL2K 2βn2σ2 . 

In the slow convergence regime, i.e. where K is sufficiently large compared to β λ , both 

corollaries converge to the same bound on ε and outperform [ACG+16]: 

ε ∼ K≫ β 

λ 

4αL2 

λn2σ2 . 

As a side note, we notice that we can consider the unconstrained regularized version of the problem: L̃D(θ) = LD(θ) + λ 

2 ∥θ∥ 2 2 and derive equivalent properties. In this scenario, we no 

longer need the strong convexity assumption on LD(θ). In addition we can use the optimality of θ∗ for L̃D to derive two equations: 

LD(θ∗) + λ 

2 ∥θ ∗∥22 ≤ LD(0), c∇LD(θ∗) + λθ∗ = 0. 

Each of these provides a bound on ∥θ∗∥2, by using respectively the positivity of LD and the lipschitzness of LD, 

∥θ∗∥2 ≤ (2LD(0) 

λ 

)1/2 , ∥θ∗∥2 ≤ 

L 

λ , 

which can be used as bounds for the radius of the convex C we project onto, so that we still actually end up solving the unconstrained problem. 

6.4 Utility Analysis for Noisy Stochastic Gradient Descent 

Differential privacy is known for setting a trade-off between privacy and utility. To assess the utility of the noisy stochastic gradient descent algorithm ADP−SGLD, we measure two quantities, the worst case excess empirical risk 

max D∈X n 

E[LD(θK)− LD(θ∗)], 

and the worst case average empirical risk 

max D∈X n 

E[ 1 K 

K∑ k=1 LD(θk)− LD(θ∗)], (6.6) 

where θK is the output of the randomized algorithm ADP−SGLD on D during K iterations, θ∗ 

is the solution to the standard non-noisy GD algorithm and the expectation is taken over the randomness of the algorithm. 

6.4.1 Fixed Step Size η 

We propose a bound on the worst case excess empirical risk when the learning rate is fixed and satisfies η < 1 

2β . 

Lemma 23 (Empirical risk for smooth and strongly convex loss). Let ℓ(θ, x) be an L-Lipschitz, λ-strongly convex and β-smooth loss function on closed convex set C, ADP−SGLD be parameterized

with step-size η < 1 2β and start parameter θ0 ∼ ΠC(N (0, 2σ2 

λ Id)), then the empirical risk of ADP−SGLD is bounded by 

E[LD(θK)− LD(θ∗)] ≤ β 

2 E[∥θ0 − θ∗∥22]e−ληK + βηξ2 

2λ + βdσ2 

λ , (6.7) 

where θ∗ is the minimizer of LD(θ) in C and ξ2 = E[∥∇LBk (θ∗)∥22]. 

Sketch of proof. First, we recursively bound ∥θk+1 − θ∗∥22 as a function of ∥θk − θ∗∥22, using the definition of θk+1. Then, we take the expectation with respect to Bk and use co-coercivity of the gradients, and take the expectation again to derive a recursive relationship between E[∥θk+1 − θ∗∥22] and E[∥θk − θ∗∥22]. Last, we express the empirical risk E[LD(θK)− LD(θ∗)] as a function of E[∥θK − θ∗∥22]. 

Proof. Let’s recall the noisy SGD update equation: 

θk+1 = ΠC(θk − η∇LBk (θk) + 

√ 2ησ2N (0, Id)) 

From the definitions of ΠC(·) and θ∗, we have: 

ΠC(θ∗) = θ∗ 

Combining this facts and using the contractivity of the projection ΠC(·), we derive: 

∥θk+1 − θ∗∥22 = ∥∥∥ΠC(θk−η∇LBk 

(θk)+ √ 

2ησ2N (0, Id))−θ∗ ∥∥∥2 

2 = ∥∥∥ΠC(θk−η∇LBk 

(θk)+ √ 

2ησ2N (0, Id))−ΠC(θ∗) ∥∥∥2 

2 ≤ ∥∥∥θk − η∇LBk 

(θk) + √ 

2ησ2N (0, Id)− θ∗ ∥∥∥2 

2 = ∥∥∥θk − θ∗ − η∇LBk 

(θk) + √ 

2ησ2N (0, Id) ∥∥∥2 

2 = ∥θk − θ∗∥22 + η2 ∥∇LBk 

(θk)∥22 + 2ησ2 ∥N (0, Id)∥22 +2⟨θk − θ∗, 

√ 2ησ2N (0, Id)⟩ 

−2η⟨∇LBk (θk), 

√ 2ησ2N (0, Id)⟩ 

−2η⟨θk − θ∗,∇LBk (θk)⟩ 

We now take the expectation with respect to the random variable Bk sampled from D, and we note that ED[LBk 

(θk)] = LD(θk) since LBk is an unbiased estimate of LD. 

ED[∥θk+1 − θ∗∥22] = ∥θk − θ∗∥22 + η2 ED[∥∇LBk (θk)∥22] 

+2ησ2 ED[∥N (0, Id)∥22] +2⟨θk − θ∗, 

√ 2ησ2N (0, Id)⟩ 

−2η⟨∇LD(θk), √ 

2ησ2N (0, Id)⟩ −2η⟨θk − θ∗,∇LD(θk)⟩ 

Using the classic inequality (a + b)2 ≤ 2(a2 + b2), we derive: 

ED[∥∇LBk (θk)∥22] = ED[∥∇LBk 

(θk)−∇LBk (θ∗) +∇LBk 

(θ∗)∥22] ≤2ED[∥∇LBk 

(θk)−∇LBk (θ∗)∥22]+2ED[∥∇LBk 

(θ∗)∥22] 

Furthermore, by β-smoothness of∇LBk , we can use the property of co-coercivity of the gradients: 

∥∇LBk (θk)−∇LBk 

(θ∗)∥22≤β⟨θk−θ∗,∇LBk (θk)−∇LBk 

(θ∗)⟩ (6.8) Taking expectation over Bk and using optimality of θ∗: 

ED[∥∇LBk (θk)−∇LBk 

(θ∗)∥22] ≤ β⟨θk − θ∗,∇LD(θk)−∇LD(θ∗)⟩ = β⟨θk − θ∗,∇LD(θk)⟩ 

(6.9)

Combining these elements, we derive: 

ED[∥θk+1 − θ∗∥22] = ∥θk − θ∗∥22 + 2η2 ED[∥∇LBk (θk)−∇LBk 

(θ∗)∥22] +2η2 ED[∥∇LBk 

(θ∗)∥22] + 2ησ2 ED[∥N (0, Id)∥22] +2⟨θk − θ∗, 

√ 2ησ2N (0, Id)⟩ 

−2η⟨∇LD(θk), √ 

2ησ2N (0, Id)⟩ −2η⟨θk − θ∗,∇LD(θk)⟩ ≤ ∥θk − θ∗∥22 + 2η(ηβ − 1)⟨θk − θ∗,∇LD(θk)⟩ 

+2η2 ED[∥∇LBk (θ∗)∥22] + 2ησ2 ED[∥N (0, Id)∥22] 

+2⟨θk − θ∗, √ 

2ησ2N (0, Id)⟩ −2η⟨∇LD(θk), 

√ 2ησ2N (0, Id)⟩ 

using (6.8) and (6.9) 

Let’s assume that η ≤ 1 2β . Therefore, 2η(ηβ − 1) ≤ −η. By optimality of θ∗ and strong 

convexity arguments on LD, we deduce the following inequality: 

−⟨θk−θ∗,∇LD(θk)⟩ ≤ LD(θk)−LD(θ∗)+ λ 

2 ∥θk−θ∗∥22 ≤ λ ∥θk − θ∗∥22 

Plugging this together, we have: 

ED[∥θk+1 − θ∗∥22] ≤ (1− ηλ) ∥θk − θ∗∥22 + η2 ED[∥∇LBk (θ∗)∥22] 

+2ησ2 ED[∥N (0, Id)∥22] +2⟨θk − θ∗, 

√ 2ησ2N (0, Id)⟩ 

−2η⟨∇LD(θk), √ 

2ησ2N (0, Id)⟩ 

We take the expectation again: 

E[∥θk+1 − θ∗∥22] ≤ (1− ηλ)E[∥θk − θ∗∥22] (6.10) +η2 E[∥∇LBk 

(θ∗)∥22] + 2ηdσ2 

Now, by β-smoothness of LD(·), we have: 

LD(θK)− LD(θ∗) ≤ ⟨∇LD(θ∗), θK − θ∗⟩+ β 

2 ∥θK − θ∗∥22 

Second, by optimality of θ∗ in C and the fact that θK ∈ C, we have 

⟨∇LD(θ∗), θK − θ∗⟩ = 0 

Combining these two we get: 

E[LD(θK)− LD(θ∗)] ≤ β 

2 E[∥θK − θ∗∥22] 

Using the recursive equation (6.10) repeatedly for k = 0, . . . , K − 1, we have: 

E[LD(θK)− LD(θ∗)] ≤ β 

2 (1− ηλ)K E[∥θ0 − θ∗∥22] 

+β 

2 (η2ξ2 + 2ηdσ2)∑K−1 k=0 (1− ηλ)k 

≤ β 

2 e−ληK E[∥θ0 − θ∗∥22] + βηξ2 

2λ + βdσ2 

λ 

where ξ2 = E[∥∇LBk (θ∗)∥22]

This shows that under Lipschitz smooth strongly convex loss function, the empirical risk of ADP−SGLD decreases as the iterations increase, and reaches a constant factor which is the sum of a term directly related to the variance of the noise σ2 added at each iteration and another term which represents the error due to the SGD process, which decreases with the learning rate η. 

Lemma 24 (Empirical risk for smooth and strongly convex loss, independent of θ). Let ℓ and ADP−SGLD be defined as in Lemma 23, then the empirical risk is bounded by 

E[LD(θK)− LD(θ∗)] ≤ 2βL2 

λ2 e−ληK+ βηξ2 

2λ + βdσ2 

λ , 

where ξ2 = E[∥∇LBk (θ∗)∥22]. 

Proof. Since we have ∥C∥ ≤ 2L λ , we can bound E[∥θ0 − θ∗∥22] ≤ 4L2 

λ2 , as θ0, θ∗ ∈ C. 

Combining now Lemma 24 and Theorem 20, we derive the utility of ADP−SGLD under (α, ε)-Rényi differential privacy. 

Theorem 25 (Utility bound for (α, ε)-Rényi differential privacy). Let ℓ(θ, x) be an L-Lipschitz, λ-strongly convex and β-smooth loss function on closed convex set C, then ADP−SGLD with start parameter θ0 ∼ ΠC(N (0, 2σ2 

λ Id)) and constant step-size η = 1 2β , satisfies (α, ε) Rényi differential 

privacy and 

E[LD(θK)− LD(θ∗)] = O 

( αβdL2 

ελ2n2 

) + ξ2 

4λ , 

where σ2 and K are set as such: 

σ2 = 4αL2 

ελn2 , K = 2β 

λ log ( 

εn2 

αd 

) . 

Proof. First, as θ0, θ∗ ∈ C and ∥C∥2 ≤ 2L λ , we have E[∥θ0 − θ∗∥22] ≤ 4L2 

λ2 . Then, we plug the values of σ2 and K in Lemma 23: 

E[LD(θK)−LD(θ∗)] ≤ β 

2 4L2 

λ2 e−ληK + βdσ2 

λ + βηξ2 

2λ 

≤ 2βL2 

λ2 αd 

εn2 + βd 

λ 

4αL2 

λεn2 + βηξ2 

2λ 

≤ 6αβdL2 

ελ2n2 + ξ2 

4λ with η = 1 

2β 

Theorem 26 (Utility bound for (ϵ, δ)-differential privacy). With the same conditions as is Theorem 25, for ϵ ≤ 2 log(1/δ) and δ > 0, ADP−SGLD satisfies (ϵ, δ) differential privacy and 

E[LD(θK)− LD(θ∗)] = O 

( βdL2 log(1/δ) 

ϵ2λ2n2 

) + ξ2 

4λ , 

where σ2 and K are set as such: 

σ2 = 8L2(ϵ + 2 log(1/δ) ϵ2λn2 

K = 2β 

λ log ( 

ϵ2n2 

4 log(1/δ)d 

) .

Proof. By setting ε = ϵ 2 , we derive from Proposition 3: 

α = 1 + 2 ϵ 

log(1/δ) 

. We use this to rewrite the results from Theorem 25: 

E[LD(θK)−LD(θ∗)] ≤ 6αβdL2 

ελ2n2 + ξ2 

4λ 

= 6βdL2 

λ2n2 1 + 2 

ϵ log(1/δ) ϵ 2 

+ ξ2 

4λ 

= 6βdL2 

λ2n2 2ϵ + 4 log(1/δ) 

ϵ2 + ξ2 

4λ 

≤ 6βdL2 

λ2n2 8 log(1/δ) 

ϵ2 + ξ2 

4λ using ϵ ≤ 2 log(1/δ) 

Similarly, 

σ2 = 4L2α 

λn2ε 

= 4L2 

λn2 1 + 2 

ϵ log(1/δ) ϵ 2 

= 8L2(ϵ + 2 log(1/δ) ϵ2λn2 

K = 2β 

λ log ( 

n2 

d 

ε 

α 

) 

= 2β 

λ log ( 

n2 

d 

ϵ 2 

1 + 2 ϵ log(1/δ) 

) 

= 2β 

λ log ( 

n2 

d 

ϵ2 

2ϵ + 4 log(1/δ) 

) 

≤ 2β 

λ log ( 

ϵ2n2 

4 log(1/δ)d 

) 

As a side note, arguments of the proof of Lemma 23 (like the co-coercivity of the gradients) can be reused to increase the upper bound on η from λ 

2β2 to 1 2β in Theorem 4 on the utility 

of DP-GLD in [CYS21]. We provide experimental evidence in Table 6.4 that this factor β λ is 

non-negligible. 

6.4.2 Decreasing Step Size ηk 

To remove the ξ2 

4λ term which is due to using stochastic gradient descent, we follow the approach from [RSB12] and propose to bound the worst case average empirical risk (6.6) when the step size decreases as such: 

ηk = 1 2β + λk 

2 , k ≥ 0. 

Lemma 27 (Empirical risk for smooth and strongly convex loss with decreasing learning rate). Let ℓ(θ, x) be an L-Lipschitz, λ-strongly convex and β-smooth loss function on closed convex set C, ADP−SGLD be parameterized with decreasing step-size ηk = 1 

2β+λk/2 and start parameter θ0 ∼ ΠC(N (0, 2σ2 

λ Id)), then the average empirical risk of ADP−SGLD is bounded by 

E [ 1 K 

K∑ k=1 LD(θk)− LD(θ∗) 

] ≤ 2β 

K E[∥θ0 − θ∗∥22] + 4ξ2 

Kλ log 

( 1 + λK 

4β 

) + 2dσ2, (6.11)

where θ∗ is the minimizer of LD(θ) in C. 

Proof. We define ηk as such 

ηk = 1 2β + λk 

2 . 

Note that in particular that for k ≥ 0, ηk ≤ 1 2β and hence 2ηk(ηkβ − 1) ≤ −ηk. 

As detailed in the proof of Lemma 23 we have the following: 

ED[∥θk+1−θ∗∥22] ≤ ∥θk − θ∗∥22 + 2ηk+1(ηk+1β − 1)⟨θk − θ∗,∇LD(θk)⟩ +2η2 

k+1 ED[∥∇LBk (θ∗)∥22] + 2ηk+1σ2 ED[∥N (0, Id)∥22] 

+2⟨θk − θ∗, √ 

2ηk+1σ2N (0, Id)⟩ −2ηk+1⟨∇LD(θk), 

√ 2ηk+1σ2N (0, Id)⟩ 

using (6.8) and (6.9) 

By taking expectation again we derive 

E[∥θk+1−θ∗∥22] ≤ E[∥θk − θ∗∥22] +2ηk+1(ηk+1β−1)E[⟨∇LD(θk), θk−θ∗⟩] +2η2 

k+1 E[∥∇LBk (θ∗)∥22] + 2ηk+1σ2d 

≤ E[∥θk − θ∗∥22] −ηk+1 E[⟨∇LD(θk), θk − θ∗⟩] +2ηk+1(ηk+1ξ2 + dσ2) 

By optimality of θ∗ and strong convexity arguments on LD, we have 

−⟨θk−θ∗,∇LD(θk)⟩ ≤ LD(θk)−LD(θ∗)+ λ 

2 ∥θk−θ∗∥22 

Hence we have 

E[∥θk+1−θ∗∥22] ≤ (1− ηk+1λ 

2 )E[∥θk−θ∗∥22] −ηk+1 E[LD(θk)−LD(θ∗)] +2ηk+1(ηk+1ξ2 + dσ2) 

Equivalently, 

E[LD(θk)−LD(θ∗)] ≤ − 1 ηk+1 

E[∥θk+1−θ∗∥22] 

+( 1 ηk+1 

− λ 

2 )E[∥θk−θ∗∥22] 

+2(ηk+1ξ2 + dσ2) 

Plugging in the definition of ηk we have 

E[LD(θk)−LD(θ∗)] ≤ −(2β + λ 

2 (k + 1))E[∥θk+1−θ∗∥22] 

+(2β + λ 

2 k)E[∥θk−θ∗∥22] +2(ηk+1ξ2 + dσ2)

We derive the average empirical risk 

E[ 1 K 

∑K−1 k=0 LD(θk)−LD(θ∗)] 

= 1 K 

∑K−1 k=0 E[LD(θk)−LD(θ∗)] 

= − 1 K 

(2β + λ 

2 K)E[∥θK−θ∗∥22] 

+2β 

K E[∥θ0−θ∗∥22] + 2dσ2 + 2ξ2 

K 

K∑ k=1 

ηk 

≤ 2β 

K E[∥θ0−θ∗∥22] + 2dσ2 + 2ξ2 

K 

K∑ k=1 

1 2β + λk 

2 

≤ 2β 

K E[∥θ0−θ∗∥22] + 2dσ2 + 2ξ2 

K 

∫ K 

0 

1 2β + λt 

2 dt 

≤ 2β 

K E[∥θ0−θ∗∥22] + 2dσ2 + 4ξ2 

Kλ log 

( 1 + λK 

4β 

) 

The stochastic term ξ2 

λ decreases roughly in 1 K log(K). The term dσ2 still appears as in 

Lemma 24 but without the β λ factor. 

We then use this lemma to derive the following utility bound under (α, ε)-Rényi differential privacy: 

Theorem 28 (Utility bound for (α, ε)-Rényi differential privacy with decreasing learning rate). Let ℓ(θ, x) be an L-Lipschitz, λ-strongly convex and β-smooth loss function on closed con-vex set C, then ADP−SGLD with start parameter θ0 ∼ ΠC(N (0, 2σ2 

λ Id)) and decreasing step-size ηk = 1 

2β+λk/2 , satisfies (α, ε) Rényi differential privacy and 

E[ 1 K 

K∑ k=1 LD(θk)− LD(θ∗)] = O 

( αdL2 

ελn2 

) , 

where σ2 and K are set as such: 

σ2 = 4αL2 

ελn2 , K = max 

β 

λ 

εn2 

αd , 

λ 

β 

( εn2 

αd 

)2  . 

Proof. Since θ0, θ∗ ∈ C and ∥C∥2 ≤ 2L λ , we have E[∥θ0 − θ∗∥22] ≤ 4L2 

λ2 . Additionally, by Lips-chitzness of the loss we have ξ2 ≤ L2. We can use this and plug the value of σ2 to rewrite Lemma 27: 

E[ 1 K 

∑K k=1LD(θk)−LD(θ∗)] ≤ 8αdL2 

ελn2 + 8βL2 

Kλ2 

+L2 

β 

4β 

Kλ log(1 + Kλ 

4β ) 

Then, we use the following bound on the logarithmic function from [MV70]: 

∀x > −1, 1 x 

log(1 + x) ≤ 1√ 1 + x 

to derive: L2 

β 

4β 

Kλ log(1 + Kλ 

4β ) ≤ L2 

β 

1√ 1 + Kλ 

4β

We can now plug the value of K. 

E[ 1 K 

∑K k=1 LD(θk)− LD(θ∗)] ≤ 8αdL2 

ελn2 + 8βL2 

Kλ2 

+L2 

β 

√ 4β 

λ 

β 

λ 

( αd 

εn2 

)2 

≤ 18αdL2 

ελn2 

Compared to previous Theorem 25, we improve the utility bound by a factor β λ which is non 

negligible in practice. However, the number of iterations K can now evolve either in n2 or in n4 in the regime where εn2 

αd > (β 

λ 

)2. Typical values from our experiments, which are reported in Table 6.4, show that K evolves in the n2 regime. 

Theorem 29 (Utility bound for (ϵ, δ)-differential privacy with decreasing learning rate). With the same conditions as is Theorem 28, for ϵ ≤ 2 log(1/δ) and δ > 0, ADP−SGLD satisfies (ϵ, δ) differential privacy and 

E[LD(θK)− LD(θ∗)] = O 

( dL2 log(1/δ) 

ϵ2λn2 

) , 

where σ2 and K are set as such: 

σ2 = 8L2(ϵ + 2 log(1/δ) ϵ2λn2 

K = max ( 

β 

λ 

ϵ2n2 

4 log(1/δ)d, λ 

β 

( ϵ2n2 

4 log(1/δ)d 

)2) . 

Proof. By setting ε = ϵ 2 , we derive from Proposition 3: 

α = 1 + 2 ϵ 

log(1/δ) 

. We use this to rewrite the results from Theorem 28: 

E[ 1 K 

∑K k=1LD(θk)− LD(θ∗)] ≤ 18αdL2 

ελn2 

= 18dL2 

λn2 1 + 2 

ϵ log(1/δ) ϵ 2 

= 18dL2 

λn2 2ϵ + 4 log(1/δ) 

ϵ2 

≤ 18dL2 

λn2 8 log(1/δ) 

ϵ2 using ϵ ≤ 2 log(1/δ) 

Similarly, 

σ2 = 4L2α 

λn2ε 

= 4L2 

λn2 1 + 2 

ϵ log(1/δ) ϵ 2 

= 8L2(ϵ + 2 log(1/δ) ϵ2λn2

ϵn2 

αd = n2 

d 

ϵ 2 

1 + 2 ϵ log(1/δ) 

= n2 

d 

ϵ2 

2ϵ + 4 log(1/δ) ≤ ϵ2n2 

4 log(1/δ)d 

K = max 

β 

λ 

ϵn2 

αd , 

λ 

β 

( ϵn2 

αd 

)2  

≤ max 

β 

λ 

ϵ2n2 

4 log(1/δ)d, λ 

β 

( ϵ2n2 

4 log(1/δ)d 

)2  

6.5 Experiments: Application to Logistic Regression 

We now propose an experimental evaluation of DP-SGLD and compare it to DP-SGD on a classification task using logistic regression on two vision datasets, CIFAR10 and Pneumonia, a dataset of chest X-ray images of pediatric pneumonia published in [KGC+18]. Details about the datasets and models are available in Appendix B.2. 

The task consists of pre-training a model (here AlexNet or ResNet18) on a dataset that will be considered public (here we take CIFAR100 and Imagenet). Then, all layers of the model are frozen except for the last one which is retrained from scratch using a softmax loss function on a private dataset (here CIFAR10 or Pneumonia). This corresponds to multinomial logistic regression and some regularization is added to guarantee strong convexity. A formal description of multinomial logistic regression and an analysis of its smoothness and convexity constants are provided in Appendix B.1. Pre-training provides generic feature maps learned on a public dataset which improves the task accuracy without any compromise on privacy. 

We compare our DP-SGLD algorithm with the standard DP-SGD from [ACG+16] imple-mented in Opacus and with the baseline SGD without DP on several vision tasks. In partic-ular, we study the case where the step size is constant η = 1 

2β and where it is decreasing as follows: ηk = 1 

2β+λk/2 . To be able to provide somewhat comparable results, all methods (DP-SGLD, DP-SGD and No-DP) use the same step size, number of training epochs, privacy budget (ϵ, δ) = (1.0, 10−5) when applicable and use no momentum. Other hyperparameters are tuned to provide optimal accuracy for each method and are provided in the source code which is available online2. 

Results are given in Table 6.1 for constant step size and in Table 6.2 for decreasing step size. The model indicated is the feature extraction model, which is pre-trained on CIFAR100 when the task is on CIFAR10 and on Imagenet when the task is on Pneumonia. Only its last layer is re-trained using logistic regression. As the tables show, DP-SGLD outperforms standard DP-SGD for the tasks considered and considerably reduces the gap in accuracy compared to SGD without differential privacy. However, such results need to be taken cautiously before drawing conclusions since this task is strongly convex and smooth while DP-SGD also applies to non-convex tasks. 

To better understand the effect of clamping DP-SGD to smooth and strongly convex tasks, we repeat the first experiment of Table 6.1, but instead of leveraging only the last layer for DP-SGD, we also unfreeze the last and fourth block of the ResNet18 architecture, composed notably of 5 convolutional layers. Results for DP-SGD and SGD without DP provided in Table 6.3 show that while SGD without DP benefits from this fine-tuning and increases accuracy 

2The code is available at: https://github.com/LaRiffle/langevin

Table 6.1: Accuracy (in %) of logistic regression using SGD with a constant learning rate. 

Method Dataset Model Epochs ϵ Accuracy DP-SGLD CIFAR10 Resnet18 30 1.0 70.3± 0.0 DP-SGD CIFAR10 Resnet18 30 1.0 68.0± 0.2 No DP CIFAR10 Resnet18 30 - 70.7± 0.1 DP-SGLD CIFAR10 Alexnet 30 1.0 57.5± 0.1 DP-SGD CIFAR10 Alexnet 30 1.0 56.4± 0.1 No DP CIFAR10 Alexnet 30 - 57.7± 0.1 DP-SGLD Pneumonia Resnet18 50 1.0 58.8± 0.5 DP-SGD Pneumonia Resnet18 50 1.0 58.8± 0.3 No DP Pneumonia Resnet18 50 - 59.3± 0.6 

Table 6.2: Accuracy (in %) of logistic regression using SGD with a decreasing learning rate. 

Method Dataset Model Epochs ϵ Accuracy DP-SGLD CIFAR10 Resnet18 30 1.0 70.1± 0.1 DP-SGD CIFAR10 Resnet18 30 1.0 68.1± 0.2 No DP CIFAR10 Resnet18 30 - 70.2± 0.1 DP-SGLD CIFAR10 Alexnet 30 1.0 57.3± 0.1 DP-SGD CIFAR10 Alexnet 30 1.0 56.4± 0.1 No DP CIFAR10 Alexnet 30 - 57.6± 0.1 DP-SGLD Pneumonia Resnet18 50 1.0 58.8± 0.5 DP-SGD Pneumonia Resnet18 50 1.0 58.8± 0.3 No DP Pneumonia Resnet18 50 - 59.3± 0.6 

from 70.7% to 77.0%, DP-SGD does not improve and accuracy even decreases marginally from 68.0% to 67.8%. Such observation aligns with those from [TB21] in the sense that basic models like logistic regression currently are competitive compared to deeper models when trained with differential privacy, which underlines the importance of studying classical tasks like training smooth and strongly convex objectives. 

Last, we provide in Table 6.4 the experimental value of some parameters, in light with com-ments made after Lemma 27 about the value of β 

λ and after Theorem 28 about the dependence in n2 or n4 of K, depending of the ratio εn2 

αd / (β 

λ 

)2. As we show, this ratio is of magnitude 10−3 

or less which shows that the evolution of K is quadratic in n. 

Table 6.3: Accuracy (in %) when fine-tuning ResNet18. 

Method Dataset Model Epochs ϵ Accuracy DP-SGD CIFAR10 Resnet18 30 1.00 67.8± 0.2 No DP CIFAR10 Resnet18 30 - 77.0± 0.2

Table 6.4: Value of some parameters used for DP-SGLD. 

Dataset Model β β λ 

∣∣∣ εn2 

αd 

/(β λ 

)2 CIFAR10 Resnet18 55 5.5 ×104 3.2 ×10−3 

CIFAR10 Alexnet 259 2.6 ×105 1.5 ×10−4 

Pneumonia Resnet18 354 7.1 ×104 6.8 ×10−5 

6.6 Conclusion We have extended the theoretical framework from [CYS21] to provide a differential privacy anal-ysis of noisy stochastic gradient descent based on Langevin diffusion (DP-SGLD) with arbitrary step size. Although our experiments already show the practical utility of our results, relaxing the smoothness and strong convexity hypothesis remains an open challenge and would pave the way for wide adoption by data scientists. 

This work is one example of the promising interactions between different privacy-preserving methods, and showcases that differential privacy when combined with private computation such as SMPC can deliver more robust guarantees. In a similar spirit, works like [GDD+21, KLS21] explore combinations of differential privacy with federated learning and also discover interesting synergies like the ability to sample contributions from clients to improve privacy guarantees.

Chapter 

# 7 Conclusion 

7.1 Summary of the Results 

We have opened the manuscript with the notion of contextual integrity which proposes a new vision of privacy, based on appropriate information disclosure instead of blind concealment. This notion is a leitmotiv of our work, since the techniques explored fit gently in this paradigm and bring complementary guarantees to privacy of sensitive machine learning tasks. 

In chapter 3, we have first explored design architectures for privacy-preserving machine learning and in particular federated learning. The modularity of the PySyft library allows to easily intertwine remote execution, encryption of secret data and other mechanisms, which makes it a very interesting tool box for researchers at the crossroads of privacy-enhancing technologies. This library has served as a foundation for our implementations in the following chapters, and some of our protocols like AriaNN have been directly integrated into the library. 

Then, in chapter 4, we have proposed a new type of privacy attack by leveraging one common weakness of fully encrypted networks which is that they directly disclose the output signal without applying a filter (like an argmax to only output the predicted class) or any other quantization mechanism that would reduce the information leakage. Since most standard vision datasets only classify on one set of features, we introduced a new dataset which allows to perform classification on two orthogonal sets of features, one being the intended task to perform and the other being private features that should not be exposed. We show that by default models do not respect this orthogonality and that classification on one set informs about the other set of features, a phenomenon that we call collateral learning. We develop adversarial training methods to reduce considerably collateral learning without degrading significantly the accuracy. This attack and the others mentioned in the chapter illustrate that models in machine learning are not neutral and that they can be exploited to reveal more information than expected, either on the training data or on data used at inference time. 

Next, chapter 5 gathers several approaches for fully private inference or training of neural networks. We first leverage a new functional encryption scheme to perform semi-encrypted inference of small networks and we show that these networks are sensitive to the collateral learning attack described in the previous chapter. Then we propose a new function secret sharing protocol for comparison and we show that it allows us to do fully private training and inference for a large variety of neural networks. In particular, we show that this protocol requires less interactions than other MPC alternatives, which makes it very competitive in scenarios where latency between parties is high. We provide an implementation which can run on GPUs and show that models like ResNet18 that perform better than humans on some medical tasks [KZPP+21] can perform private inference in a couple of seconds. 

Last, we analyze in chapter 6 an interesting synergy between differential privacy and en-crypted training, i.e. a setting where the model is not visible to any party until the end of the training. We build upon an existing framework which analyzes the evolution of Rényi divergence using Langevin diffusion, and we propose a new stochastic gradient algorithm for the class of smooth strongly convex functions which notably provides convergence of the privacy loss re-gardless of the number of training iterations. We show on concrete learning tasks that building

good features for differential privacy is key to reaching a good accuracy, but that training deeper networks can be of little interest on vision tasks when a high privacy level is required. This last chapter shows that privacy-enhancing techniques can be combined together and achieve higher guarantees than the sum of the guarantees if taken separately. 

7.2 Applications in Healthcare 

We have been interested in applying privacy-enhancing technologies (PETs) to a concrete do-main, and have chosen healthcare where we believe such techniques could foster collaboration and benefit the largest number. 

Healthcare is indeed a prime example when it comes to illustrating privacy methods, together with finance as well which also appears regularly. Everyone cares about protecting its health data, so much so that this area has not waited for PETs to develop strong regulation that provides a rigorous framework on how medical data should be collected, transformed, stored or reused. Interestingly as well, this area is probably one where the deployment of PETs might be the most complicated. Here are three main barriers that we believe hinders their adoption. 

7.2.1 Technical: Heterogeneity of Healthcare Data 

Let’s distinguish (at least) three main categories of data: images (like MRI, X-rays, CT-scans, etc), structured data (measures, dates, names, etc) and unstructured text (like medical records, prescriptions, etc). 

Images are a special category, since they benefit from longstanding standards among which DICOM that was created back in 1985. Hence, most of the servers hosting medical images are compatible with DICOM, which makes data retrieval easier. Images also have inherently a structured data type, which makes their processing simpler. For example, we have been able to use quite easily the dataset of chest X-ray images of pediatric pneumonia from [KGC+18] in our work [KZPP+21] to experiment encrypted inference using a ResNet18, or also in [RBP22] to benchmark our differential privacy algorithm DP-SGLD. The one but not least challenge with medical images is the size of the data, since one complete exam generates around 1GB of data. As a consequence, image servers can easily be overloaded, which means that building large training datasets without impacting the medical teams’ work is a real challenge. 

The second type of data is structured data, which are typically added into the hospital IT system by the care team using medical software or by sensors that also transmit measurements back to some software. Each medical software stores its data in a proprietary and unique data format, which does not follow any standard practice. This makes it very hard for any data scientist to retrieve the relevant data, since it requires that the user should be granted access to all relevant databases where the data might be siloed, together with sufficient information (or time) to understand the way the data is organized. New initiatives to change this paradigm exist in several countries including in France. They aim to aggregate all the data generated in the hospital in a single standardized data warehouse, so that the hospital recovers full sovereignty on the data it collects and can more easily provide tailored access to data scientists or research studies. Such initiatives rely on longstanding standard formats, like FHIR (2014) that enables the modeling of all medico-administrative data from health care institutions, or OMOP (2009) that is primarily intended for clinical research. Beyond syntaxic standardization, some concepts like medication, treatments or diseases can also be standardized semantically using medical ontologies like ICD-10 (1994), ICD-11 (2022) or SNOMED CT (2007) which was very recently adopted in France. Such standardization of data formats and concepts is very helpful to lower the entry barrier for data scientists in the general setting, but it is a necessary prerequisite for PETs like (horizontal) federated learning that requires a single model to train on several datasets in different hospitals, implying that these datasets should share together the same format and

comparable concepts. Furthermore, for fully encrypted learning where the data is not visible by the analyst, such strong guarantees on the data quality are also necessary as preprocessing capabilities can be very limited. 

Last, unstructured text like medical records. This type of data is probably the most com-plicated to leverage using PETs. Indeed, standard models used in NLP are typically based on Transformer architectures [VSP+17] which are composed of hundred of million of parame-ters, which make them poor candidates both for federated learning as they should be sent over the network multiple times and for encrypted computation, which is significantly slower than plaintext computation, which in turns already requires GPUs to run in a reasonable time. In addition, the specificity of the medical jargon adds substantial difficulty and limits the direct reuse of pretrained models, even in english [LYK+20]. In this situation, prior structuration in clear text by the healthcare facility or a partner can help consolidate and make available im-portant information contained in the medical records, so that they can then be analyzed for different use cases using standard non-NLP learning techniques. 

7.2.2 Regulatory: a Robust but Rigid Framework 

We will address this barrier specifically for France, as we are more familiar with this case. Using or gathering medical data for research purposes is strictly regulated in France. Such regulation, including GDPR (2018) or the recent "Référentiel Entrepôt de Données de Santé (EDS)" (2021) issued by the French National Commission on Informatics and Liberty (CNIL), gives a clear definition on how medical data should be collected, stored and reused. In particular, the Référentiel EDS states that all data to be used for (external) research purpose should be pseudonymized, which can be extremely challenging on unstructured text like medical records for example, where the history of the disease of a patient can provide sufficient details to re-identify the subject. 

Such regulation provides guarantees on the patient’s privacy and sovereignty over its data, and at the same time provides a path for research to be conducted. However, it also limits fundamentally the scope of research and collaboration which can plausibly be attained, because it makes the strong assumption that the data is transmitted through stakeholders 

At least in France, even more established privacy-preserving technologies like federated learn-ing do not have any recognized status, meaning that they should fit in the same frame as non-private approaches. In the case of federated learning, it means that the data should be collected and pseudonymized just like if it were to be disclosed directly to researchers. Note that models, which are actually the only elements directly accessible in federated learning, are also not com-pliant to GDPR according to [CD18]. This is in line with the vulnerability to attacks that we have illustrated in the previous chapters and calls for additional measures including differential privacy. In the case of differential privacy specifically, except for a very small number of exam-ples including its adoption by the US Census Bureau [Abo18], it has not yet received attention from political nor regulatory institutions, and hence does not benefit from the recognition or the convenient framework necessary to encourage its adoption even in very limited areas of health-care like the monitoring of care indicators for example. In a sense, differential privacy still lacks its "Référentiel". 

Several reasons account for this situation. First, such techniques are relatively new and regulation does not follow the pace of technology breakthroughs. This is a very crucial issue since every major breakthrough can potentially benefit from a time frame where no regulation controls the actors that emerge. In this regard, the position that consists of being very conser-vative by default on medical data analysis is easily understandable. The technicality of these breakthroughs and the non negligible probability that they might not actually be exploited is a challenge for lawmakers that should be able to prioritize and understand in depth the topics that will affect most public health. Second, even when a topic is identified as critical and when

appropriate dissemination is available for non-specialists, creating the appropriate regulation can be extremely challenging, because it requires to set the proper frontier between what should be allowed but could also misused through attacks or abuse and what should be prohibited but could also help extending public knowledge and make progress. The example of differential privacy is very illustrative of this, because this technology provides quantitative estimation of the privacy leakage together with the ability to understand the trade-off between privacy and utility, which makes it a very practical tool. However, setting a numerical threshold on the privacy leakage that is acceptable is a responsibility that no regulatory authority is willing to take. On the one hand, everyone has in mind the dramatic impact that would have successful attacks against systems that would have followed a threshold guideline which turns out to be too permissive. On the other hand, thresholds that are too conservative would be impossible to follow for systems that need a high level of utility and have additional constraints like limited access to data. Another characteristic with differential privacy is that data is no longer imper-ishable: once the privacy budget has been spent for a data item, it should not be used anymore. This vision stands in contrast with the long running idea that personal data is a gold mine: in the world of differential privacy, personal data is not a renewable resource. Hence, it must be used wisely, and this raises prominent questions as a user about how I control and give access to my personal data. Setting clear regulation around this and defining a status for depleted data seems also incredibly challenging. 

To sum up on this regulatory aspect, since PETs are inherently more difficult to use (not only because the tooling is not as developed than standard machine learning but also because data is by default not accessible directly) and since they do not benefit from regulatory accommodation, it is unlikely that they should be preferred over standard machine learning, especially in the medical context that is by itself complicated enough, except probably for reputational reasons. 

7.2.3 Cross Domain Expertise 

The last barrier is also very specific to healthcare. To be able to successfully and securely engage into a data analysis in a medical context, one should first have sufficient medical knowledge to be able to have a critical opinion over the data available, since data in a hospital is collected through software that scarcely check its coherence and consistency (it is common to find two conflicting information about the same patient in two different databases in the same hospital). Second, as mentioned above, data is siloed in different databases that all have different formats, so for all institutions which are not yet equipped with data warehouses, one should also be an experienced data analyst. Third, to be able to use PETs wisely, meaning being able to realize that some techniques might be overworked for a given context or conversely that such techniques might not be sufficient, one should be familiar with security and cryptography. Last, and surprisingly least important, one should have basic knowledge of data science, since most of the models are available through very user friendly libraries. 

Providing tools and educational support that reduce the minimal set of knowledge a user should have in these cardinal domains is an important challenge as a community of researchers. In particular, all areas (except the medical one probably) could all become as user friendly as data science, provided that appropriate software or libraries are developed and made open-source. It is one of the goals of the OpenMined community to which we have contributed throughout this thesis. 

Those three barriers illustrate on the specific example of healthcare the difficulties of transi-tioning from theoretical models to real life deployment. At each step of this process, all players should be aware that their domain might not be easily understood by other areas and do their best in facilitating coordination. Researchers can communicate their code and implementations, or provide additional support to onboard new comers on complex topics ; open-source developers

can put a premium on code quality when building implementations; actors that access real life data can try to build benchmark datasets and advertise their use cases; etc. Such awareness and commitment are a crucial factor to accelerate adoption of new technologies by the greatest number and for the best interests. 

7.3 Perspectives We have explored separately several directions for privacy-preserving machine learning and have started to analyze interactions between them in chapter 6 where we combine encrypted compu-tation and differential privacy. This interaction was also studied in other works like [YSMN21]. Recently as well, other interactions have received some attention like the one between differential privacy and federated or decentralized learning [BGTT18, GDD+21], which is very promising since differential privacy needs an order of magnitude more data to keep a good utility / privacy tradeoff [TB21]. The other very interesting interaction which combines federated learning, dif-ferential privacy and a simple version of encrypted computation (only for the secure aggregation phase) was studied in [KLS21]. 

It is likely that these interactions will continue to be increasingly studied as each individual field reaches a certain level of maturity, which is reflected by the emergence of well supported open-source libraries. These libraries, including PySyft [RTD+18], Crypten [KVH+21], Opacus [YSS+21], TensorFlow Privacy or TensorFlow Federated are almost up to date with the major breakthroughs in their respective areas and provide scientists with practical tools to use these technologies and focus on the next privacy challenges. 

Last, as the last section about applications to healthcare suggests, privacy even considered through the prism of contextual integrity is not only a technical issue but also a social, political, legal and even economic one. Finding solutions to such an important challenge, which impacts society as a whole, requires far more cross domain fertilizations in order to share awareness between the different stakeholders who build tomorrow’s privacy standards.

Appendix 

# A Private evaluation and training of neural networks 

A.1 Partially Encrypted Machine Learning using Functional En-cryption 

A.1.1 Our Quadratic Functional Encryption Scheme - Proofs 

Proofs of IND-CPA Security 

To prove security of our scheme, we use the Generic Bilinear Group Model, which captures the fact that no attacks can make use of the representation of group elements. For convenience, we use Maurer’s model [Mau05], where a third party implements the group and gives access to the adversary via handles, providing also equality checking. This is an alternative, but equivalent, formulation of the Generic Group Model, as originally introduced in [Nec94, Sho97]. 

We prove security in two steps: first, we use a master theorem from [BCFG17] that relates the security in the Generic Bilinear Group model to a security in a symbolic model. Second, we prove security in the symbolic model. Let us now explain the symbolic model (the next paragraph is taken verbatim from [ABGW17]). 

In the symbolic model, the third party does not implement an actual group, but keeps track of abstract expressions. For example, consider an experiment where values x, y are sampled from Zp and the adversary gets handles to gx and gy. In the generic model, the third party will choose a group of order p, for example (Zp, +), will sample values x, y ←R Zp and will give handles to x and y. On the other hand, in the symbolic model the sampling will not be performed and the third party will output handles to X and Y , where X and Y are abstract variables. Now, if the adversary asks for equality of the elements associated to the two handles, the answer will be negative in the symbolic model, since abstract variable X is different from abstract variable Y , but there is a small chance the equality check succeeds in the generic model (only when the sampling of x and y coincides). 

To apply the master theorem, we first need to change the distribution of the security game to ensure that the public key, challenge ciphertext, and functional decryption keys only contain group elements whose exponent is a polynomial evaluated on uniformly random values in Zp 

(this is called polynomially induced distributions in [BCFG17, Definition 10], and previously in [BFF+14]). We show that this is possible with only a negligible statistical change in the distribution of the adversary view. 

After applying the master theorem from [BCFG17], we prove the security in the symbolic model (cf. Appendix 31), which simply consists of checking that an algebraic condition on the scheme is satisfied. Theorem 30 (IND-CPA Security in the Generic Bilinear Group Model). For any PPT ad-versary A that performs at most Q group operations against the functional encryption scheme described on 5.1, we have, in the generic bilinear group model: 

AdvFE A (λ) ≤ 12 · (6n + 3 + Q + Q′)2 + 1 

p ,

where Q′ is the number of queries to KeyGen(msk, ·). 

The proof of this result is quite technical and can be found in the dedicated Appendix A.1.3. 

Proof of Correctness 

For all i, j ∈ [n], we have: e(gai 

1 , g bj 

2 ) = g ai·bj 

T = g xiyj−γsitj 

T 

since 

ai · bj = ( 

(W−1)⊤ ( 

xi 

γsi 

))⊤ 

· ( 

W ( 

yj 

−tj 

)) 

= ( 

xi 

γsi 

)⊤ 

W−1W ( 

yj 

−tj 

) = xiyj − γsitj . 

Therefore we have: 

out = e(gγ 1 , g 

q(s,t) 2 ) · 

∏ i,j 

e(gai 1 , gbi 

2 )qi,j = g γq(s,t) T · g 

∑ i,j 

qi,jxiyj−γqi,jsitj 

T 

= g γq(s,t) T · gq(x,y)−γq(s,t) 

T = g q(x,y) T . 

Proof of Complexity 

The complexity can be inferred from the decryption phase as detailed in Figure 5.1 and we compare this with previous quadratic FE schemes in Figure A.1. 

FE scheme ct dkf Dec Assumption [BCFG17, Sec. 3] G6n+1 

1 ×G6n+1 2 G1 ×G2 6n2(E1 + P ) + 2P SXDH, 3PDDH 

[BCFG17, Sec. 4] G2n+1 1 ×G2n+1 

2 G2 1 3n2(E1 + P ) + 2P GGM 

Ours G2n+1 1 ×G2n 

2 G2 2n2(E1 + P ) + P GGM 

Figure A.1: Performance comparison of FE for quadratic polynomials. E1 and P denote exponentiation in G1 and pairing evaluation, respectively. Decryption additionally requires solving a discrete logarithm but this computational overhead is the same for all schemes and is therefore omitted here. 

Detailed Equivalence of the FE Scheme with a Neural Network 

Proof of Linear Homomorphism For all (x, y) ∈ Zn 

p×Zn p , and (u, v) ∈ Zn 

p×Zn p , given an encryption of (x, y) under the public 

key pk := (gs 1, gt 

2), one can efficiently compute an encryption of (u⊤x, v⊤y) under the public key pk′ := (gu⊤s 

1 , gv⊤t 2 ). Indeed, given 

Enc(pk, (x, y)) := (gγ 1 , {gai 

1 , gbi 2 }i∈[n]), 

and u, v ∈ Zn p , one can efficiently compute: 

(gγ 1 , g 

∑ i∈[n] ui·ai 

1 , g 

∑ i∈[n] vi·bi 

2 ),

which is Enc(pk′, (u⊤x, v⊤y)), since: 

∑ i∈[n] 

ui · ai = ∑ i∈[n] 

ui · (W−1)⊤ ( 

xi 

γsi 

) = (W−1)⊤ 

( ∑ i∈[n] ui · xi 

γ ∑ 

i∈[n] ui · si 

) 

= (W−1)⊤ ( 

u⊤x γu⊤s 

) . 

Similarly, we have: 

∑ i∈[n] 

vi · bi = ∑ i∈[n] 

vi ·W ( 

yi 

−ti 

) = W 

( v⊤y −v⊤t 

) . 

A.1.2 Additional Results 

Influence of Weight Compression on the Network Performance 

We show here that we can manage to compress significantly the network weights in order to have a very fast discrete logarithm without modifying the results and conclusions made throughout the article. The main and collateral model follow the same CNN structure as stated above, and the collateral accuracy is reported after 10 epochs of training. 

Main accuracy with compression 97.72± 0.30 % Collateral accuracy with compression 55.27± 0.41 % 

Table A.1: Impact of weight compression on the main and collateral accuracies 

Influence of α during Adversarial Training 

To choose the best value for α, we have chosen an output size of 4 which allows us to keep a very high main accuracy while significantly reducing the collateral one, as shown in Figure 4.4. We observe that the semi-adversarial training does not affect significantly the main accuracy for a large range of values for α, while its impact on the collateral accuracy is decisive. Figure A.2 illustrates the role of α and justify our choice of α = 1.7. For this experiment, we have chosen for both networks a simple feed forward with a hidden layer of 32 neurons. 

Figure A.2: Trade-off between the main and collateral tasks accuracies as a function of α

Exp1(1λ,A): KeyGen(msk, f): (G1,G2, p, g1, g2, e)← GGen(1λ), s, t $← Zn 

p return (gf(s,t) 2 , f). 

a, b, c, d $← Zp, set PG := (G1,G2, p, gad−bc 1 , g2, e) 

msk := (s, t), pk := ( PG, g 

(ad−bc)s 1 , gt 

2 

) ( (x(0), y(0)), (x(1), y(1)) 

) ← AKeyGen(msk,·)(pk) 

β $← {0, 1}, γ $← Zp 

for all i ∈ [n], ai := ( 

d −c −b a 

)( x 

(β) i 

γsi 

) , bi := 

( a b c d 

)( y 

(β) i 

−tj 

) ct =: 

( g 

γ(ad−bc) 1 , {gai 

1 , gbi 2 }i∈[n] 

) β′ ← AKeyGen(msk,·)(pk, ct) Return 1 if β′ = β and for all queried f , f(x(0), y(0)) = f(x(1), y(1)). 

Figure A.3: Experiment Exp1, for the proof of Theorem 30. 

A.1.3 Security Proof of our FE Scheme 

Proof. For any experiment Exp, adversaryA, and security parameter λ ∈ N, we use the notation: AdvExp(A) := Pr[1 ← Exp(1λ,A)], where the probability is taken over the random coins of Exp and A. 

While we want to prove the security result in the real experiment Exp0, in which the adversary has to guess β, we slightly modify it into the hybrid experiment Exp1, described in A.3: we write 

the matrix W $← GL2 used in the challenge ciphertext as W := ( 

a b c d 

) , chosen from the 

beginning. Then W−1 = 1 ad−bc 

( d −b −c a 

) . 

The only difference with the IND-CPA security game as defined in Appendix 5.1.1.3, is that we change the generator g1 

$← G∗ 1 into gad−bc 

1 for a, b, c, d $← Zp, which only changes the distribution of the game by a statistical distance of at most 3 

p (this is obtained by computing the probability that ad− bc = 0 when a, b, c, d $← Zp). Thus, 

AdvFE A (λ) = Adv0(A) ≤ Adv1(A) + 3 

p . 

Note that in Exp1, the public key, the challenge ciphertext and the functional decryption keys only contain group elements whose exponents are polynomials evaluated on random inputs (as opposed to gW−1 

1 , for instance). This is going to be helpful for the next step of the proof, which uses the generic bilinear group model. 

Next, we make the generic bilinear group model assumption, which intuitively says that no PPT adversary can exploit the structure of the bilinear group to perform better attacks than generic adversaries. That is, we have (with Exp2 defined in A.4): 

max PPT A 

( Adv1(A) 

) = max 

PPT A 

( Adv2(A) 

) . 

In this experiment, we denote by ∅ the empty list, by append(L, x) the addition of an element x to the list L, and for any i ∈ N, we denote by L[i] the i’th element of the list L if it exists (lists are indexed from index 1 on), or ⊥ otherwise. 

Thus, it suffices to show that for any PPT adversary A, Adv2(A) is negligible in λ. The experiment Exp2 defined in Figure A.4 falls into the general class of simple interactive decisional problems from [BCFG17, Definition 14]. Thus, we can use their master theorem [BCFG17,

Exp2(1λ,A): L1 = L2 = LT := ∅, Qsk := ∅, s, t $← Zn 

p , a, b, c, d $← Zp, append(L1, (ad − bc) · s), append(L2, t), β $← {0, 1}( (x(0), y(0)), (x(1), y(1)) 

) ← AOadd,Opair,Osk,Oeq(1λ, p) 

Ochal ( (x(0), y(0)), (x(1), y(1)) 

) β′ ← AOadd,Opair,Osk,Oeq(1λ, p) If β = β′, and for all f ∈ Qsk, f(x(0), y(0)) = f(x(1), y(1)), output 1. Otherwise, output 0. 

Oadd(s ∈ {1, 2, T}, i, j ∈ N): append(Ls, Ls[i] + Ls[j]). 

Opair(i, j ∈ N): append(LT , L1[i] · L2[j]). 

Ochal ( (x(0), y(0)), (x(1), y(1)) 

) : 

γ $← Zp, append(L1, γ(ad− bc)) 

for all i ∈ [n], ai := ( 

d −c −b a 

)( x 

(β) i 

γsi 

) , append(L1, ai), bi := 

( a b c d 

)( y 

(β) i 

−ti 

) , 

append(L2, bi). 

Osk(f ∈ Fn,Bx,By ,Bf ): 

append(L2, f(s, t)), Qsk := Qsk ∪ {f}. 

Oeq(s ∈ {1, 2, T}, i, j ∈ N): Output 1 if Ls[i] = Ls[j], 0 otherwise 

Figure A.4: Experiment Exp2. Wlog. we assume no query contains indices i, j ∈ N that exceed the size of the involved lists.

Theorem 7], which, for our particular case (setting the public key size N := 2n + 2, the key size c = 1, the ciphertext size c∗ := 4n + 1, and degree d = 6 in [BCFG17, Theorem 7]) states that: 

Adv2(A) ≤ 12 · (6n + 3 + Q + Q′)2 

p , 

where Q′ is the number of queries to Osk, and Q is the number of group operations, that is, the number of calls to oracles Oadd and Opair, provided the following algebraic condition is satisfied: 

{M ∈ Z(3n+2)×(3n+Q′+1) p : Eq0(M)} 

= {M ∈ Z(3n+2)×(3n+Q′+1) p : Eq1(M)}, 

where for all M, b ∈ {0, 1}, 

Eqb(M) : 

 1 

(AD −BC)S (AD −BC)Γ Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 1 T 

Ay(b) −BT 

Cy(b) −DT (f(S, T ))f∈Qsk 

 = 0, 

where the equality is taken in the ring Zp[S, T , A, B, C, D, Γ ], and 0 denotes the zero polynomial. Intuitively, this condition captures the security at a symbolic level: it holds for schemes that are not trivially broken. The latter means that computing a linear combination in the exponents of target group elements that can be obtained from pk, the challenge ciphertext, and functional decryption keys, does not break the security of the scheme. We prove this condition is satisfied in 31 below. 

Lemma 31 (Symbolic Security). For any (x(0), y(0)), (x(1), y(1)) ∈ Z2n p , and any set Qsk ⊆ 

Fn,Bx,By ,Bf such that for all f ∈ Qsk, f(x(0), y(0)) = f(x(1), y(1)), we have: 

{M ∈ Z(3n+2)×(3n+Q′+1) p : Eq0(M)} 

= {M ∈ Z(3n+2)×(3n+Q′+1) p : Eq1(M)}, 

where for all M, b ∈ {0, 1}, 

Eqb(M) : 

 1 

(AD −BC)S (AD −BC)Γ Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 1 T 

Ay(b) −BT 

Cy(b) −DT (f(S, T ))f∈Qsk 

 = 0, 

where the equality is taken in the ring Zp[S, T , A, B, C, D, Γ ], and 0 denotes the zero polynomial. 

Proof. Let b ∈ {0, 1}, and M ∈ Z(3n+2)×(3n+Q′+1) p that satisfies Eqb(M). We prove it also 

satisfies Eq1−b(M). To do so, we use the following rules: 

Rule 1 : for all P, Q, R ∈ Zp[S, T , A, B, C, D, Γ ], with deg(P ) ≥ 1, if P · Q + R = 0 and R is not a multiple of P , then Q = 0 and R = 0. 

Rule 2 : for all P ∈ Zp[S, T , A, B, C, D, Γ ], any variable X among the set {S, T , A, B, C, D, Γ}, and any x ∈ Zp, P = 0 implies P (X := x) = 0, where P (X := x) denotes the polynomial P evaluated on X = x.

Evaluating Eqb(M) on B = D = 0 (using Rule 2), then using Rule 1 on P = CΓSiTj for all i, j ∈ [n], we obtain that: 

Mn+2+i 

 0 T 0 0 

(f(S, T ))f∈Qsk 

 = 0, 

where Mn+2+i denotes the n + 2 + i’th row of M. Similarly, using Rule 1 on P = ΓASiTj for all i, j ∈ [n], we obtain that: 

M2n+2+i 

 0 T 0 0 

(f(S, T ))f∈Qsk 

 = 0. 

Thus, we have: 

∀β ∈ {0, 1} : 

 0 0 0 

Dx(β) − ΓCS 

−Bx(β) + ΓAS 

 

⊤ 

M 

 0 T 0 0 

(f(S, T ))f∈Qsk 

 = 0. (A.1) 

Using Rule 1 on P = (AD − BC)SiBTj for all i, j ∈ [n] in the equation Eqb(M), we get that the coefficient Mi+1,n+1+j = 0 for all i, j ∈ [n]. Similarly, using Rule 1 on P = (AD − BC)SiDTj for all i, j ∈ [n], we get Mi+1,2n+1+j = 0 for all i, j ∈ [n]. Then, using Rule 1 on P = (AD −BC)ΓBTj for all j ∈ [n], we get Mn+2,n+1+j = 0 for all j ∈ [n]. Finally, using Rule 1 on P = (AD−BC)ΓDTj for all j ∈ [n], we get Mn+2,2n+1+j = 0 for all j ∈ [n]. Overall, we obtain: 

∀β ∈ {0, 1} : 

 0 

(AD −BC)S (AD −BC)Γ 

0 0 

 ⊤ 

M 

 0 0 

Ay(β) −BT 

Cy(β) −DT 0 

 = 0. (A.2) 

We write:  0 0 0 

Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 0 0 

Ay(b) −BT 

Cy(b) −DT 0 

 = 

∑ i,j∈[n] 

( Dx 

(b) i − ΓCSi 

−Bx (b) i + ΓASi 

)⊤ 

× ( 

m (1) i,j 

( 1 0 0 1 

) + m 

(2) i,j 

( 1 0 0 0 

) + m 

(3) i,j 

( 0 0 1 0 

) + m 

(4) i,j 

( 0 1 0 0 

)) 

× ( 

Ay (b) j −BTj 

Cy (b) j −DTj 

)

Evaluating the equation Eqb(M) on C = D = 0 (by Rule 2), then using Rule 1 on P = ΓABSiTj for all i, j ∈ [n], we obtain m 

(3) i,j = 0 for all i, j ∈ [n]. Evaluating the equation 

Eqb(M) on A = B = 0 (by Rule 2), then using Rule 1 on P = ΓCDSiTj for all i, j ∈ [n], we obtain m 

(4) i,j = 0 for all i, j ∈ [n]. Evaluating the equation Eqb(M) on A = B = C = D = 1 (using 

Rule 2), then using Rule 1 on P = ΓSiTj for all i, j ∈ [n], using the fact that m (3) i,j = m 

(4) i,j = 0 

and (A.1), we obtain m (2) i,j = 0 for all i, j ∈ [n]. Using Rule 1 on P = Γ (AD −BC)SiTj for all 

i, j ∈ [n] in the equation Eqb(M), we obtain that for all i, j ∈ [n], 

m (1) i,j = Mn+2 

 0 0 0 0 

(fi,j)f∈Qsk 

 , 

where Mn+2 is the n + 2’th row of M. Putting everything together, can write 

0 0 0 

Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 0 0 

Ay(b) −BT 

Cy(b) −DT 0 

 as 

(AD −BC)Mn+2 

 0 0 0 0( 

f(x(b), y(b))− Γf(s, t) ) 

f∈Qsk 

 

= (AD −BC)Mn+2 

 0 0 0 0( 

f(x(1−b), y(1−b))− Γf(s, t) ) 

f∈Qsk 

 

= 

 0 0 0 

Dx(1−b) − ΓCS 

−Bx(1−b) + ΓAS 

 

⊤ 

M 

 0 0 

Ay(b) −BT 

Cy(b) −DT 0 

 (A.3) 

where we use the fact that for all f ∈ Qsk, we have the equality f(x(b), y(b)) = f(x(1−b), y(1−b)). Evaluating equation Eqb(M) on A = B = D = 0 (by Rule 2), then using Rule 1 on ΓSiC 

for all i ∈ [n], and using (A.1) and (A.3), we obtain that the coefficient Mn+2+i,1 = 0 for all i ∈ [n]. Evaluating Eqb(M) on B = C = D = 0 (by Rule 2), then using Rule 1 on ΓSiA for all i ∈ [n], and using (A.1) and (A.3), we obtain that the coefficient M2n+2+i,1 = 0 for all i ∈ [n]. Thus, we have: 

∀β ∈ {0, 1} : 

 0 0 0 

Dx(β) − ΓCS 

−Bx(β) + ΓAS 

 

⊤ 

M 

 1 0 0 0 0 

 = 0. (A.4)

Evaluating equation Eqb(M) on A = C = D = 0 (by Rule 2), then using Rule 1 on BTj 

for all i ∈ [n], and using (A.3), we obtain that the coefficient M1,n+1+j = 0 for all j ∈ [n]. Evaluating Eqb(M) on A = B = C = 0 (by Rule 2), then using Rule 1 on DTj for all j ∈ [n], and using (A.3), we obtain that the coefficient M1,2n+1+j = 0 for all j ∈ [n]. Thus, we have: 

∀β ∈ {0, 1} : 

 1 0 0 0 0 

 ⊤ 

M 

 0 0 

Ay(β) −BT 

Cy(β) −DT 0 

 = 0. (A.5) 

Overall, we have: 

Eqb(M) : 

 1 

(AD −BC)S (AD −BC)Γ Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 1 T 

Ay(b) −BT 

Cy(b) −DT (f(S, T ))f∈Qsk 

 = 0 

which implies the following relation, under (A.1),(A.2),(A.4),(A.5) 1 

(AD −BC)S (AD −BC)Γ 

0 0 

 ⊤ 

M 

 1 T 0 0 

(f(S, T ))f∈Qsk 

 

+ 

 0 0 0 

Dx(b) − ΓCS 

−Bx(b) + ΓAS 

 

⊤ 

M 

 0 0 

Ay(b) −BT 

Cy(b) −DT 0 

 = 0 

and then, under (A.3) 1 

(AD −BC)S (AD −BC)Γ 

0 0 

 ⊤ 

M 

 1 T 0 0 

(f(S, T ))f∈Qsk 

 

+ 

 0 0 0 

Dx(1−b) − ΓCS 

−Bx(1−b) + ΓAS 

 

⊤ 

M 

 0 0 

Ay(1−b) −BT 

Cy(1−b) −DT 0 

 = 0. 

Under (A.1),(A.2),(A.4),(A.5), this implies 

Eq1−b(M) : 

 1 

(AD −BC)S (AD −BC)Γ 

Dx(1−b) − ΓCS 

−Bx(1−b) + ΓAS 

 

⊤ 

M 

 1 T 

Ay(1−b) −BT 

Cy(1−b) −DT (f(S, T ))f∈Qsk 

 = 0

A.2 AriaNN: Low-Interaction Privacy-Preserving Deep Learn-ing via Function Secret Sharing 

A.2.1 Encoding Precision 

We have studied the impact of lowering the encoding space of the input to our function secret sharing protocol from Z232 to Z2k with k < 32. Finding the lowest k guaranteeing good perfor-mance is an interesting challenge as the function keys size is directly proportional to it. This has to be done together with reducing fixed precision from 3 decimals down to 1 decimal to ensure private values are not too big, which would result in higher failure rate in our private comparison protocol. We have reported in Table A.2 our findings on Network-1, which is pre-trained and then evaluated in a private fashion. 

Decimals Z212 Z216 Z220 Z224 Z228 Z232 

1 - - - - - 9.5 2 69.4 96.0 97.9 98.1 98.0 98.1 3 10.4 76.2 96.9 98.1 98.2 98.1 4 9.7 14.3 83.5 97.4 98.1 98.2 

Table A.2: Accuracy (in %) of Network-1 given different precision and encoding spaces 

What we observe is that 3 decimals of precision is the most appropriate setting to have an optimal precision while allowing to slightly reduce the encoding space down to Z224 or Z228 . Because this is not a massive gain and in order to keep the failure rate in comparison very low, we have kept Z232 for all our experiments. 

A.2.2 Implementation Details 

Pseudo-Random Generator 

The PRG is implemented using a Matyas-Meyer-Oseas one-way compression function as in [WYG+17], with an AES block cipher. We concatenate several fixed key block ciphers to achieve the desired output length: G(x) = Ek1(x)⊕ x || Ek2(x)⊕ x || . . . . Those keys are fixed and hard-coded. We set λ = 127 to be able to use only 2 blocks for equality and 4 blocks for comparison. Note that for comparison we would theoretically only need 3 blocks, although our current implementation uses 4. 

Unrolling Convolutions 

Figure A.5 illustrates how to transform a convolution operation into a single matrix multiplica-tion. 

MaxPool and Optimisation 

Figure A.6 illustrates how MaxPool uses ideas from matrix unrolling and argmax computation. Notations present in the figure are consistent with the explanation of argmax using pairwise comparison in Section 5.2.4.2. The m × m matrix is first unrolled to a roughly (m/s)2 × k2 

matrix. It is then expanded on k2 layers, each of which is shifted by a step of 1. Next, (m/s)2k2(k2 − 1) pairwise comparisons are then applied simultaneously between the first layer and the other ones, and for each xi we sum the result of its k − 1 comparison and check if it equals k − 1. We multiply this boolean by xi and sum up along a line (like x0 to x3 in the figure). Last, we restructure the matrix back to its initial structure.

Figure A.5: Illustration of unrolling a convolution with kernel size k = 2 and stride s = 2. 

Figure A.6: Illustration of MaxPool with kernel size k = 2 and stride s = 2. 

In addition, when the kernel size k is 2, rows are only of length 4 and it can be more efficient to use a binary tree approach instead, i.e. compute the maximum of columns 0 and 1, 2 and 3 and the max of the result: it requires 2 log2(k2) = 4 rounds of communication but only approximately (k2 − 1)(m/s)2 private comparisons, compared to a fixed 3 rounds and approximately k4(m/s)2. We found in practice that this 4× speed-up factor in computation is worth an additional communication round. 

Interestingly, average pooling can be computed locally on the shares without interaction because it only includes mean operations, but we did not replace MaxPool operations with average pooling to avoid distorting existing neural networks architecture. 

Breaking Ties in Argmax 

Algorithm 14 provides a probabilistic method to break ties in the argmax output, which can be used on secret shared input as well. 

BatchNorm Approximation 

The BatchNorm layer is the only one in our implementation which requires a polynomial ap-proximation during training. We have therefore experimented how this approximation can alter the behaviour of a deep network such as ResNet18 on a simple dataset like the hymenoptera dataset1. We follow the PyTorch transfer learning tutorial2 and use a pretrained version of ResNet18. We retrain all the layers for 25 epochs, but we replace the BatchNorm layers with our approximated version which behaves as such: as a general rule the inverse for the variance 

1https://download.pytorch.org/tutorial/hymenoptera_data.zip 2https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html

Input: δ = (δ1, . . . , δm), with ∀i, δi ∈ {0, 1} Output: δj with j $← {i, δi = 1} 

1 x = CumSum(δ) 2 r $← [0, x[−1][ 3 c = x > r 4 Compute c≫ by shifting c by one number on the right and padding with 0 5 return c− c≫ 

Algorithm 14: BreakTies algorithm to guarantee one-hot output 

is computed using 3 iterations of the Newton methods and we use the result of the previous batch as an initial approximation. For the first batch of the epoch where no approximation is available, we use instead 50 iterations. For the first BatchNorm layer, since the variance can change significantly because of the input diversity, we systematically use more iterations, up to 60. For the last layer, as the variance is very small, its inverse can have a large amplitude. Therefore we do not use the result of the previous batch and perform 10 iterations instead. We report in Figure A.7 the evolution of the error as the model train on more batches. As one can see, the error dramatically shrinks after 10 batches, which shows how beneficial it is to use previous batch computations. It almost stays below 5%, except for the error of the first layer, for which we would need even more iterations to have significant improvements. The average error per layer is reported in Figure A.8, and is around 2%. 

Figure A.7: BatchNorm relative error as training goes on 

This is of course an experimental result, but it shows that the BatchNorm approximation can be tailored for specific models to allow for efficient training with little round overhead. Table 5.2 shows that we can indeed achieve a high accuracy, especially using the initial guess of the previous batch, although it remains below the accuracy of a model trained with an exact BatchNorm. 

A.2.3 Extended Results about Private Inference 

We provide additional results about our inference experiment in Table A.3.

Figure A.8: Relative error of the BatchNorm layers across the model 

Table A.3: Comparison of the inference time between secure frameworks on several popular neural network architectures. For each network we report in order the batch size used and the size of the preprocessing material in MB for the CPU setting. 

Network-1 Network-2 LeNet Batch Size Preprocessing Batch Size Preprocessing Batch Size Preprocessing 

FrameworkDataset CPU GPU Comm. (MB) CPU GPU Comm. (MB) CPU GPU Comm. (MB) AriaNN MNIST 128 128 0.36 128 128 9.98 128 128 14.7 

AlexNet VGG16 ResNet18 Batch Size Preprocessing Batch Size Preprocessing Batch Size Preprocessing 

Framework Dataset CPU GPU Comm. (MB) CPU GPU Comm. (MB) CPU GPU Comm. (MB) AriaNN CIFAR-10 128 128 24.6 64 14 277 - - -AriaNN 64×64 ImageNet 128 64 88.4 16 3 1124 - - -AriaNN224×224 Hymenoptera - - - - - - 8 1 3254 

A.2.4 Datasets and Networks Architecture 

Datasets 

This section is taken almost verbatim from [WTB+21]. We select 4 datasets popularly used for training image classification models: MNIST [LC10], 

CIFAR-10 [KNH14], 64×64 Tiny Imagenet [WZX17] and Hymenoptera, a subset of the Imagenet dataset [RDS+15] composed 224×224 pixel images. 

MNIST MNIST [LC10] is a collection of handwritten digits dataset. It consists of 60,000 images in the training set and 10,000 in the test set. Each image is a 28×28 pixel image of a handwritten digit along wit a label between 0 and 9. We evaluate Network-1, Network-2, and the LeNet network on this dataset. 

CIFAR-10 CIFAR-10 [KNH14] consists of 50,000 images in the training set and 10,000 in the test set. It is composed of 10 different classes (such as airplanes, dogs, horses, etc.) and there are 6,000 images of each class with each image consisting of a colored 32×32 image. We perform private training of AlexNet and inference of VGG16 on this dataset. 

Tiny ImageNet Tiny ImageNet [WZX17] consists of two datasets of 100,000 training sam-ples and 10,000 test samples with 200 different classes. The first dataset is composed of colored 64×64 images and we use it with AlexNet and VGG16. The second is composed of colored 224×224 images and is used with ResNet18. 

Hymenoptera Hymenoptera is a dataset extracted from the ImageNet database. It is

composed of 245 training and 153 test colored 224×224 images, and was first proposed as a transfer learning task. 

Model Description 

We have selected 6 models for our experimentations. Description on the first 5 models is taken verbatim from [WTB+21]. 

Network-1 A 3-layered fully-connected network with ReLU used in SecureML [MZ17]. Network-2 A 4-layered network selected in MiniONN [LJLA17] with 2 convolutional and 2 

fully-connected layers, which uses MaxPool in addition to ReLU activation. LeNet This network, first proposed by LeCun et al. [LBBH98], was used in automated 

detection of zip codes and digit recognition. The network contains 2 convolutional layers and 2 fully connected layers. 

AlexNet AlexNet is the famous winner of the 2012 ImageNet ILSVRC-2012 competition [KSH12]. It has 5 convolutional layers and 3 fully connected layers and it can use batch nor-malization layers for stability and efficient training. 

VGG16 VGG16 is the runner-up of the ILSVRC-2014 competition [SZ14]. VGG16 has 16 layers and has about 138M parameters. 

ResNet18 ResNet18 [HZRS16] is the runner-up of the ILSVRC-2015 competition. It is a convolutional neural network that is 18 layers deep, and has 11.7M parameters. It uses batch normalisation and we are the first private deep learning framework to evaluate this network. 

Models Architecture 

Unless otherwise specified, our models follow their standard architecture as provided by the torchvision library (version 0.5), except for smaller models such as Network-1, Network-2 and LeNet which are respectively detailed in [MZ17], [LJLA17] and [LBBH98]. 

For the CIFAR-10 version of AlexNet, we follow the architecture of [WTB+21] which includes BatchNorm layers and is available on the FALCON GitHub. For the 64×64 Tiny Imagenet version of AlexNet however, we used the standard architecture from PyTorch since it allows us to have a pretrained network and the version of FALCON seemed non-standard. 

We have adapted the classifier parts of AlexNet, VGG16 and ResNet18 to the different datasets we use. 

 For AlexNet on Tiny Imagenet, we use 3 fully connected layers with respectively 1024, 1024 and 200 neurons, and ReLU activations between them. 

 For VGG16 we use 3 fully connected layers with respectively 4096, 4096 and 10 or 200 neurons for the last layer depending on the dataset used. We also use ReLU activations between them. 

 For ResNet18, we use a single fully connected layer to map the 512 output logits to the appropriate number of classes. 

Note also that we permute ReLU and Maxpool where applicable like in [WTB+21], as this is strictly equivalent in terms of output for the network and reduces the number of comparisons. More generally, we do not proceed to any alteration of the network behaviour except with the approximation on BatchNorm. This improves the usability of our framework as it allows us to use pre-trained neural networks from standard deep learning libraries like PyTorch and to encrypt them with a single line of code.

Appendix 

# B Differential Privacy Guarantees for Stochastic Gradient Langevin Dynamics 

B.1 Smoothness and Convexity of Multinomial Logistic Regres-sion 

For clarity, we replace the generic parameter θ with the single matrix W that it represents for multinomial logistic regression. 

The loss with regularization writes ℓ(W, x) = log ( σ(Wx) 

) y +λ ∥W∥22 where C is the number 

of classes, y ∈ [1, C] is the label of sample x, W ∈ RC×p and σ : RC 7→ RC is the sigmoid function (not to be confused with the noise variance σ): 

( σ(z) 

) i 

= ezi∑C j=1 ezj 

, ∀i = 1, .., C , z ∈ RC . 

Lemma 32 (Convexity and smoothness constants for regularized multinomial logistic regres-sion). Let ℓ(W, x) be defined as above. Then ℓ is λ-strongly convex and β-smooth, with 

β = 1 2λmax 

( 1 n 

n∑ i=1 

xix⊤ i 

) + λ 

where λmax refers to the maximum eigenvalue. 

Proof. By plugging in the definition of the sigmoid, the loss ℓ also writes: 

ℓ(W, x) = log exp 

( (Wx)y 

)∑C i=1 exp 

( (Wx)i 

) + λ ∥W∥22 , 

where W ∈ RC×p also writes [w⊤ 1 , . . . , w⊤ 

C ]⊤. Let’s define for i = 1, . . . , C 

pi = P (yi = 1|x, W) = exp 

( (Wx)i 

)∑C c=1 exp 

( (Wx)c 

) = exp(w⊤ 

i x)∑C c=1 exp(w⊤ 

c x) 

We can rewrite the loss ℓ as such 

ℓ(W, x) = log C∏ 

i=1 pyi 

i + λ ∥W∥22 

where the label y is now one-hot encoded: y = (y0, . . . , yC).

Following the work of [Böh92], we have: ∇2ℓ(W, x) = (D(p)− pp⊤)⊗ xx⊤ + λIC 

where D(p) = ICp. We derive 

∇2LD(W) = 1 n 

n∑ j=1 

(D(pj)− pjp⊤ j )⊗ xjx⊤ 

j + λIC 

where pj corresponds to p conditioned with xj . As shown in [KCFH05], ∇2LD(W) satisfies the following 

λIC ⪯ ∇2LD(W) ⪯ 1 2 ( IC − 

1 C 

1C1⊤ C 

) ⊗ 1 

n XX⊤ + λIC 

where X = [x1, . . . , xn]⊤ ∈ Rn×d. In particular, we deduce: β = λmax(∇2LD(W)) 

≤ λmax 

(1 2 ( IC − 

1 C 

1C1⊤ C 

) ⊗ 1 

n XX⊤+ 

) + λ 

= max λeig,λ′ 

eig 

λeig 

(1 2 ( IC − 

1 C 

1C1⊤ C 

)) λ′ 

eig 

( 1 n 

XX⊤ ) 

+ λ 

≤ 1 2n 

λmax ( XX⊤ 

) + λ 

B.2 Datasets and Models 

Datasets 

We have selected for our experiments two datasets commonly used for training image classifi-cation models: CIFAR-10 and CIFAR-100 [KNH14], and also a dataset with healthcare data which can more closely mimic a scenario where we care about training a model on sensitive data: Pneumonia [KGC+18]. 

CIFAR CIFAR-10 and CIFAR-100 [KNH14] both consist of 50,000 images in the training set and 10,000 in the test set. They are respectively composed of 10 and 100 different balanced classes (such as airplanes, dogs, horses, etc.) and each image consists of a colored 32×32 image. The datasets are disjoints, which allows us to pretrain our models AlexNet and Resnet18 on CIFAR-100 and consider it public pre-training before performing logistic regression on CIFAR10. 

Pneumonia Pneumonia is a dataset of chest X-ray images of pediatric pneumonia that was published by [KGC+18]. It is composed of 5163 training and 624 test non-colored images of varying sizes. Images are divided in 3 classes: bacterial (26%), normal (48%) and viral (26%). It provides an interesting use case as it is a relatively small dataset and is composed of healthcare data. 

Models 

We have selected 2 models for our experimentations. AlexNet AlexNet is the famous winner of the 2012 ImageNet ILSVRC-2012 competition 

[KSH12]. It has 5 convolutional layers and 3 fully connected layers and it can use batch nor-malization layers for stability and efficient training. 

ResNet18 ResNet18 [HZRS16] is the runner-up of the ILSVRC-2015 competition. It is a convolutional neural network that is 18 layers deep, and has 11.7M parameters. It uses batch normalisation layers, but as only the last layer is retrained with differential privacy, we need not replace those layers with group normalisation.

# Bibliography 

[ABDP15] Michel Abdalla, Florian Bourse, Angelo De Caro, and David Pointcheval. Sim-ple functional encryption schemes for inner products. In Jonathan Katz, ed-itor, PKC 2015, volume 9020 of LNCS, pages 733–751. Springer, Heidelberg, March / April 2015. Cited on page 48. 

[ABGW17] Miguel Ambrona, Gilles Barthe, Romain Gay, and Hoeteck Wee. Attribute-based encryption in the generic group model: Automated proofs and new constructions. In Bhavani M. Thuraisingham, David Evans, Tal Malkin, and Dongyan Xu, ed-itors, ACM CCS 2017, pages 647–664. ACM Press, October / November 2017. Cited on page 105. 

[Abo18] John M Abowd. The us census bureau adopts differential privacy. In Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, pages 2867–2867, 2018. Cited on page 101. 

[ACG+16] Martin Abadi, Andy Chu, Ian Goodfellow, H Brendan McMahan, Ilya Mironov, Kunal Talwar, and Li Zhang. Deep learning with differential privacy. In Pro-ceedings of the 2016 ACM SIGSAC conference on computer and communications security, pages 308–318, 2016. Cited on pages 5, 8, 21, 26, 58, 80, 87, and 95. 

[AFL+16] Toshinori Araki, Jun Furukawa, Yehuda Lindell, Ariel Nof, and Kazuma Ohara. High-throughput semi-honest secure three-party computation with an honest ma-jority. In Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security, pages 805–817, 2016. Cited on page 76. 

[AGM+13] Joseph A. Akinyele, Christina Garman, Ian Miers, Matthew W. Pagano, Michael Rushanan, Matthew Green, and Aviel D. Rubin. Charm: a framework for rapidly prototyping cryptosystems. Journal of Cryptographic Engineering, 3(2):111–128, 2013. Cited on page 53. 

[AL10] Yonatan Aumann and Yehuda Lindell. Security against covert adversaries: Ef-ficient protocols for realistic adversaries. Journal of Cryptology, 23(2):281–343, 2010. Cited on page 13. 

[ALS16] Shweta Agrawal, Benoît Libert, and Damien Stehlé. Fully secure functional en-cryption for inner products, from standard assumptions. In Matthew Robshaw and Jonathan Katz, editors, CRYPTO 2016, Part III, volume 9816 of LNCS, pages 333–362. Springer, Heidelberg, August 2016. Cited on page 48. 

[AMD20] Shakkeel Ahmed, Ravi S. Mula, and Soma S. Dhavala. A framework for democ-ratizing ai. ArXiv, abs/2001.00818, 2020. Cited on page 33. 

[AMIA21] Muhammad Asad, Ahmed Moustafa, Takayuki Ito, and Muhammad Aslam. Eval-uating the communication efficiency in federated learning algorithms. In 2021

IEEE 24th International Conference on Computer Supported Cooperative Work in Design (CSCWD), pages 552–557. IEEE, 2021. Cited on page 33. 

[ARC19] Mohammad Al-Rubaie and J. Morris Chang. Privacy-preserving machine learning: Threats and solutions. IEEE Security & Privacy, 17(2):49–58, 2019. Cited on page 54. 

[ASSKG19] Nitin Agrawal, Ali Shahin Shamsabadi, Matt J Kusner, and Adrià Gascón. Quo-tient: two-party secure neural network training and prediction. In Proceedings of the 2019 ACM SIGSAC Conference on Computer and Communications Security, pages 1231–1247, 2019. Cited on page 55. 

[BBG18] Borja Balle, Gilles Barthe, and Marco Gaboardi. Privacy amplification by sub-sampling: Tight analyses via couplings and divergences. Advances in Neural In-formation Processing Systems, 31, 2018. Cited on page 80. 

[BBGG19] Borja Balle, Gilles Barthe, Marco Gaboardi, and Joseph Geumlek. Privacy am-plification by mixing and diffusion mechanisms. Advances in neural information processing systems, 32, 2019. Cited on page 80. 

[BCCW19] Fabian Boemer, Anamaria Costache, Rosario Cammarota, and Casimir Wierzyn-ski. nGraph-HE2: A high-throughput framework for neural network inference on encrypted data. In Proceedings of the 7th ACM Workshop on Encrypted Comput-ing & Applied Homomorphic Cryptography, pages 45–56, 2019. Cited on page 55. 

[BCD+20] Fabian Boemer, Rosario Cammarota, Daniel Demmler, Thomas Schneider, and Hossein Yalame. Mp2ml: A mixed-protocol machine learning framework for pri-vate inference. In Proceedings of the 15th International Conference on Availability, Reliability and Security, pages 1–10, 2020. Cited on page 33. 

[BCFG17] Carmen Elisabetta Zaira Baltico, Dario Catalano, Dario Fiore, and Romain Gay. Practical functional encryption for quadratic functions with applications to predi-cate encryption. In Jonathan Katz and Hovav Shacham, editors, CRYPTO 2017, Part I, volume 10401 of LNCS, pages 67–98. Springer, Heidelberg, August 2017. Cited on pages 48, 49, 51, 105, 106, 108, and 110. 

[BCG+21] Elette Boyle, Nishanth Chandran, Niv Gilboa, Divya Gupta, Yuval Ishai, Nishant Kumar, and Mayank Rathee. Function secret sharing for mixed-mode and fixed-point secure computation. In Annual International Conference on the Theory and Applications of Cryptographic Techniques, pages 871–900. Springer, 2021. Cited on pages 55, 56, and 77. 

[BCL+18] Ahmad Al Badawi, Jin Chao, Jie Lin, Chan Fook Mun, Jun Jie Sim, Benjamin Hong Meng Tan, Xiao Nan, Khin Mi Mi Aung, and Vijay Ramaseshan Chan-drasekhar. The alexnet moment for homomorphic encryption: Hcnn, the first homomorphic cnn on encrypted data with gpus. Cryptology ePrint Archive, Re-port 2018/1056, 2018. Cited on page 40. 

[BCPS20] Megha Byali, Harsh Chaudhari, Arpita Patra, and Ajith Suresh. Flash: fast and robust framework for privacy-preserving machine learning. Proceedings on Privacy Enhancing Technologies, 2020(2):459–480, 2020. Cited on page 55.

[Bea91] Donald Beaver. Efficient multiparty protocols using circuit randomization. In Annual International Cryptology Conference, pages 420–432. Springer, 1991. Cited on pages 19 and 68. 

[BEG+19] Keith Bonawitz, Hubert Eichner, Wolfgang Grieskamp, Dzmitry Huba, Alex In-german, Vladimir Ivanov, Chloe Kiddon, Jakub Konečnỳ, Stefano Mazzocchi, Brendan McMahan, et al. Towards federated learning at scale: System design. Proceedings of Machine Learning and Systems, 1:374–388, 2019. Cited on page 54. 

[BELO16] Aner Ben-Efraim, Yehuda Lindell, and Eran Omri. Optimizing semi-honest secure multiparty computation for the internet. In Proceedings of the Conference on Computer and Communications Security, pages 578–590, 2016. Cited on page 57. 

[BF01] Dan Boneh and Matt Franklin. Identity-based encryption from the weil pairing. In Annual international cryptology conference, pages 213–229. Springer, 2001. Cited on page 16. 

[BF03] Dan Boneh and Matthew K. Franklin. Identity based encryption from the Weil pairing. SIAM Journal on Computing, 32(3):586–615, 2003. Cited on page 50. 

[BFF+14] Gilles Barthe, Edvard Fagerholm, Dario Fiore, John C. Mitchell, Andre Sce-drov, and Benedikt Schmidt. Automated analysis of cryptographic assump-tions in generic group models. In Juan A. Garay and Rosario Gennaro, editors, CRYPTO 2014, Part I, volume 8616 of LNCS, pages 95–112. Springer, Heidel-berg, August 2014. Cited on page 105. 

[BFL+11] Mauro Barni, Pierluigi Failla, Riccardo Lazzeretti, Ahmad-Reza Sadeghi, and Thomas Schneider. Privacy-preserving ecg classification with branching programs and neural networks. IEEE Transactions on Information Forensics and Security, 6(2):452–468, 2011. Cited on page 48. 

[BGI+01] Boaz Barak, Oded Goldreich, Russell Impagliazzo, Steven Rudich, Amit Sahai, Salil P. Vadhan, and Ke Yang. On the (im)possibility of obfuscating programs. In Joe Kilian, editor, CRYPTO 2001, volume 2139 of LNCS, pages 1–18. Springer, Heidelberg, August 2001. Cited on page 48. 

[BGI15] Elette Boyle, Niv Gilboa, and Yuval Ishai. Function secret sharing. In Annual International Conference on the Theory and Applications of Cryptographic Tech-niques, pages 337–367. Springer, 2015. Cited on pages 6, 8, 54, 55, and 56. 

[BGI16] Elette Boyle, Niv Gilboa, and Yuval Ishai. Function secret sharing: Improvements and extensions. In Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security, pages 1292–1303, 2016. Cited on pages 8, 55, 56, 57, 58, 59, 60, 63, and 68. 

[BGI19] Elette Boyle, Niv Gilboa, and Yuval Ishai. Secure computation with preprocessing via function secret sharing. In Theory of Cryptography Conference, pages 341–371. Springer, 2019. Cited on pages 19, 56, 57, 62, and 68. 

[BGTT18] Aurélien Bellet, Rachid Guerraoui, Mahsa Taziki, and Marc Tommasi. Personal-ized and private peer-to-peer machine learning. In International Conference on Artificial Intelligence and Statistics, pages 473–481. PMLR, 2018. Cited on page 103.

[BHN18] Solon Barocas, Moritz Hardt, and Arvind Narayanan. Fairness and Machine Learning. fairmlbook.org, 2018. Cited on page 41. 

[BIK+17] Keith Bonawitz, Vladimir Ivanov, Ben Kreuter, Antonio Marcedone, H. Brendan McMahan, Sarvar Patel, Daniel Ramage, Aaron Segal, and Karn Seth. Practical secure aggregation for privacy-preserving machine learning. In Proceedings of the Conference on Computer and Communications Security, pages 1175–1191, 2017. Cited on page 72. 

[BLCW19] Fabian Boemer, Yixing Lao, Rosario Cammarota, and Casimir Wierzynski. nGraph-HE: a graph compiler for deep learning on homomorphically encrypted data. In Proceedings of the ACM International Conference on Computing Fron-tiers, pages 3–13, 2019. Cited on page 55. 

[BLW08] Dan Bogdanov, Sven Laur, and Jan Willemson. Sharemind: A framework for fast privacy-preserving computations. In European Symposium on Research in Computer Security, pages 192–206. Springer, 2008. Cited on pages 55 and 57. 

[BMMP18] Florian Bourse, Michele Minelli, Matthias Minihold, and Pascal Paillier. Fast homomorphic evaluation of deep discretized neural networks. In Advances in Cryptology - CRYPTO 2018 - 38th Annual International Cryptology Conference, Santa Barbara, CA, USA, August 19-23, 2018, Proceedings, Part III, pages 483– 512, 2018. Cited on pages 40 and 48. 

[BN06] Christopher M Bishop and Nasser M Nasrabadi. Pattern recognition and machine learning, volume 4. Springer, 2006. Cited on pages 16 and 17. 

[Böh92] Dankmar Böhning. Multinomial logistic regression algorithm. Annals of the in-stitute of Statistical Mathematics, 44(1):197–200, 1992. Cited on page 120. 

[BPTG15] Raphael Bost, Raluca Ada Popa, Stephen Tu, and Shafi Goldwasser. Machine learning classification over encrypted data. In NDSS, volume 4324, page 4325, 2015. Cited on page 48. 

[BST14] Raef Bassily, Adam Smith, and Abhradeep Thakurta. Private empirical risk mini-mization: Efficient algorithms and tight error bounds. In 2014 IEEE 55th Annual Symposium on Foundations of Computer Science, pages 464–473. IEEE, 2014. Cited on page 80. 

[BSW11] Dan Boneh, Amit Sahai, and Brent Waters. Functional encryption: Definitions and challenges. In Theory of Cryptography Conference, pages 253–273. Springer, 2011. Cited on pages 6, 39, 48, and 49. 

[BT97] Dimitri Bertsekas and John Tsitsiklis. Parallel and distributed computation: nu-merical methods. Athena Scientific, 1997. Cited on page 3. 

[BTM+20] Daniel J. Beutel, Taner Topal, Akhil Mathur, Xinchi Qiu, Titouan Parcollet, and Nicholas D. Lane. Flower: A friendly federated learning research framework, 2020. Cited on page 33.

[BV11] Z. Brakerski and V. Vaikuntanathan. Efficient fully homomorphic encryption from (standard) lwe. In 2011 IEEE 52nd Annual Symposium on Foundations of Computer Science, pages 97–106, Oct 2011. Cited on page 50. 

[BVH+20] Eugene Bagdasaryan, Andreas Veit, Yiqing Hua, Deborah Estrin, and Vitaly Shmatikov. How to backdoor federated learning. In International Conference on Artificial Intelligence and Statistics, pages 2938–2948. PMLR, 2020. Cited on pages 37 and 58. 

[CCN+22] Nicholas Carlini, Steve Chien, Milad Nasr, Shuang Song, Andreas Terzis, and Florian Tramer. Membership inference attacks from first principles. In Symposium on Security and Privacy (SP). IEEE, 2022. Cited on page 38. 

[CD18] Rachel Cummings and Deven Desai. The role of differential privacy in gdpr com-pliance. In FAT’18: Proceedings of the Conference on Fairness, Accountability, and Transparency, 2018. Cited on pages 20 and 101. 

[CFLS18] Sergiu Carpov, Caroline Fontaine, Damien Ligier, and Renaud Sirdey. Illuminat-ing the dark or how to recover what should not be seen. IACR Cryptology ePrint Archive, 2018:1001, 2018. Cited on page 41. 

[CGGI16] Ilaria Chillotti, Nicolas Gama, Mariya Georgieva, and Malika Izabachène. Faster fully homomorphic encryption: Bootstrapping in less than 0.1 seconds. In Jung Hee Cheon and Tsuyoshi Takagi, editors, Advances in Cryptology – ASI-ACRYPT 2016, pages 3–33, Berlin, Heidelberg, 2016. Springer Berlin Heidelberg. Cited on pages 6, 40, 48, and 54. 

[Cha20] Amit Chaulwar. Private dataset generation using privacy preserving collaborative learning. ArXiv, abs/2004.13598, 2020. Cited on page 34. 

[CPS06] Kumar Chellapilla, Sidd Puri, and Patrice Simard. High performance convolu-tional neural networks for document processing. In International Workshop on Frontiers in Handwriting Recognition, 2006. Cited on page 69. 

[CRS20] Harsh Chaudhari, Rahul Rachuri, and Ajith Suresh. Trident: Efficient 4pc frame-work for privacy preserving machine learning. In 27th Annual Network and Dis-tributed System Security Symposium, NDSS, pages 23–26, 2020. Cited on page 55. 

[CXC+21] Shaoqi Chen, Dongyu Xue, Guohui Chuai, Qiang Yang, and Qi Liu. Fl-qsar: a federated learning-based qsar prototype for collaborative drug discovery. Bioin-formatics, 36(22-23):5492–5498, 2021. Cited on page 34. 

[CYS21] Rishav Chourasia, Jiayuan Ye, and Reza Shokri. Differential privacy dynamics of langevin diffusion and noisy gradient descent. Advances in Neural Information Processing Systems, 2021. Cited on pages 8, 79, 80, 81, 82, 83, 84, 86, 91, and 97. 

[DB19] Anirban Das and Thomas Brunschwiler. Privacy is what we care about: Experi-mental investigation of federated learning on edge devices. In Proceedings of the First International Workshop on Challenges in Artificial Intelligence and Machine Learning for Internet of Things, pages 39–42, 2019. Cited on page 34.

[DDS+09] Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. Imagenet: A large-scale hierarchical image database. In 2009 IEEE conference on computer vision and pattern recognition, pages 248–255. Ieee, 2009. Cited on page 2. 

[DEK21] Anders Dalskov, Daniel Escudero, and Marcel Keller. Fantastic four: Honest-majority four-party secure computation with malicious security. In 30th USENIX Security Symposium (USENIX Security 21), pages 2183–2200, 2021. Cited on pages 55 and 76. 

[DGBL+16] Nathan Dowlin, Ran Gilad-Bachrach, Kim Laine, Kristin Lauter, Michael Naehrig, and John Wernsing. Cryptonets: Applying neural networks to encrypted data with high throughput and accuracy. Technical report, February 2016. Cited on page 40. 

[DKM+06] Cynthia Dwork, Krishnaram Kenthapadi, Frank McSherry, Ilya Mironov, and Moni Naor. Our data, ourselves: Privacy via distributed noise generation. In Annual International Conference on the Theory and Applications of Cryptographic Techniques, pages 486–503. Springer, 2006. Cited on page 20. 

[DMNS06] Cynthia Dwork, Frank McSherry, Kobbi Nissim, and Adam Smith. Calibrating noise to sensitivity in private data analysis. In Theory of cryptography conference, pages 265–284. Springer, 2006. Cited on pages 4 and 80. 

[DPSZ12] Ivan Damgård, Valerio Pastro, Nigel Smart, and Sarah Zakarias. Multiparty computation from somewhat homomorphic encryption. In Reihaneh Safavi-Naini and Ran Canetti, editors, Advances in Cryptology – CRYPTO 2012, pages 643– 662, Berlin, Heidelberg, 2012. Springer Berlin Heidelberg. Cited on pages 19, 31, 32, 48, 54, and 57. 

[DR+14] Cynthia Dwork, Aaron Roth, et al. The algorithmic foundations of differential privacy. Foundations and Trends in Theoretical Computer Science, 9(3-4):211– 407, 2014. Cited on pages 20 and 58. 

[DRV10] Cynthia Dwork, Guy N Rothblum, and Salil Vadhan. Boosting and differential privacy. In 2010 IEEE 51st Annual Symposium on Foundations of Computer Science, pages 51–60. IEEE, 2010. Cited on pages 21, 22, and 80. 

[DSZ15] Daniel Demmler, Thomas Schneider, and Michael Zohner. Aby-a framework for efficient mixed-protocol secure two-party computation. In NDSS, 2015. Cited on page 55. 

[DZ16] Tamara Dugan and Xukai Zou. A survey of secure multiparty computation pro-tocols for privacy preserving genetic tests. In International Conference on Con-nected Health: Applications, Systems and Engineering Technologies (CHASE), pages 173–182. IEEE, 2016. Cited on page 54. 

[EEF+18] Kevin Eykholt, Ivan Evtimov, Earlence Fernandes, Bo Li, Amir Rahmati, Chaowei Xiao, Atul Prakash, Tadayoshi Kohno, and Dawn Song. Robust physical-world attacks on deep learning visual classification. In Proceedings of the IEEE confer-ence on computer vision and pattern recognition, pages 1625–1634, 2018. Cited on page 26. 

[ElG85] Taher ElGamal. A public key cryptosystem and a signature scheme based on discrete logarithms. IEEE transactions on information theory, 31(4):469–472, 1985. Cited on page 14.

[FH19] Stéphane Foucart and Stéphane Horel. Données de santé : conflit d’intérêts au cœur de la nouvelle plate-forme. Le Monde, 2019. Cited on page 2. 

[FJR15] Matt Fredrikson, Somesh Jha, and Thomas Ristenpart. Model inversion attacks that exploit confidence information and basic countermeasures. In Proceedings of the 22nd ACM SIGSAC conference on computer and communications security, pages 1322–1333, 2015. Cited on pages 4, 37, 38, 54, and 58. 

[FMTT18] Vitaly Feldman, Ilya Mironov, Kunal Talwar, and Abhradeep Thakurta. Privacy amplification by iteration. In 2018 IEEE 59th Annual Symposium on Foundations of Computer Science (FOCS), pages 521–532. IEEE, 2018. Cited on page 80. 

[FYS+20] Angelo Feraudo, Poonam Yadav, Vadim Safronov, Diana Andreea Popescu, Richard Mortier, Shiqiang Wang, Paolo Bellavista, and Jon Crowcroft. Colearn: enabling federated learning in mud-compliant iot edge networks. In Proceedings of the Third ACM International Workshop on Edge Systems, Analytics and Net-working, pages 25–30, 2020. Cited on page 34. 

[GBDL+16] Ran Gilad-Bachrach, Nathan Dowlin, Kim Laine, Kristin Lauter, Michael Naehrig, and John Wernsing. Cryptonets: Applying neural networks to encrypted data with high throughput and accuracy. In International Conference on Machine Learning, pages 201–210, 2016. Cited on page 55. 

[GBDM20] Jonas Geiping, Hartmut Bauermeister, Hannah Dröge, and Michael Moeller. In-verting gradients-how easy is it to break privacy in federated learning? Advances in Neural Information Processing Systems, 33:16937–16947, 2020. Cited on page 39. 

[GDD+21] Antonious Girgis, Deepesh Data, Suhas Diggavi, Peter Kairouz, and Ananda Theertha Suresh. Shuffled model of differential privacy in federated learn-ing. In International Conference on Artificial Intelligence and Statistics, pages 2521–2529. PMLR, 2021. Cited on pages 97 and 103. 

[Gen09] Craig Gentry. Fully homomorphic encryption using ideal lattices. In Proceedings of the forty-first annual ACM symposium on Theory of computing, pages 169–178, 2009. Cited on pages 5 and 6. 

[GGH+13] Sanjam Garg, Craig Gentry, Shai Halevi, Mariana Raykova, Amit Sahai, and Brent Waters. Candidate indistinguishability obfuscation and functional encryp-tion for all circuits. In 54th FOCS, pages 40–49. IEEE Computer Society Press, October 2013. Cited on page 48. 

[GJW+19] Dashan Gao, Ce Ju, Xiguang Wei, Yang Liu, Tianjian Chen, and Qiang Yang. Hhhfl: Hierarchical heterogeneous horizontal federated learning for electroen-cephalography. ArXiv, abs/1909.05784, 2019. Cited on page 34. 

[GM84] Shafi Goldwasser and Silvio Micali. Probabilistic encryption. Journal of Computer and System Sciences, 28(2):270–299, 1984. Cited on page 50. 

[GMW87] Oded Goldreich, Silvio Micali, and Avi Wigderson. How to play any mental game. In Proceedings of the Nineteenth ACM Symp. on Theory of Computing, STOC, pages 218–229. ACM, 1987. Cited on page 6.

[Gol09] Oded Goldreich. Foundations of cryptography: volume 2, basic applications. Cam-bridge university press, 2009. Cited on pages 12 and 54. 

[Gro75] Leonard Gross. Logarithmic Sobolev inequalities. American Journal of Mathe-matics, 97(4):1061–1083, 1975. Cited on page 83. 

[GSW13] Craig Gentry, Amit Sahai, and Brent Waters. Homomorphic encryption from learning with errors: Conceptually-simpler, asymptotically-faster, attribute-based. In Ran Canetti and Juan A. Garay, editors, CRYPTO 2013, Part I, volume 8042 of LNCS, pages 75–92. Springer, Heidelberg, August 2013. Cited on page 50. 

[HAA20] Chaoyang He, Murali Annavaram, and Salman Avestimehr. Fednas: Federated deep learning via neural architecture search, 2020. Cited on page 34. 

[HAPC17] Briland Hitaj, Giuseppe Ateniese, and Fernando Perez-Cruz. Deep models under the gan: information leakage from collaborative deep learning. In Proceedings of the 2017 ACM SIGSAC Conference on Computer and Communications Security, pages 603–618, 2017. Cited on pages 54 and 58. 

[HJC+21] Adam James Hall, Madhava Jay, Tudor Cebere, Bogdan Cebere, Koen Lennart van der Veen, George Muraru, Tongye Xu, Patrick Cason, William Abramson, Ayoub Benaissa, et al. Syft 0.5: A platform for universally deployable structured transparency. arXiv preprint arXiv:2104.12385, 2021. Cited on pages 7, 8, and 23. 

[HKSvdM19] Awni Hannun, Brian Knott, Shubho Sengupta, and Laurens van der Maaten. Privacy-preserving contextual bandits. arXiv preprint arXiv:1910.05299, 2019. Cited on page 69. 

[HLL+20] Sixu Hu, Yuan Li, Xu Liu, Qinbin Li, Zhaomin Wu, and Bingsheng He. The oarf benchmark suite: Characterization and implications for federated learning systems, 2020. Cited on page 33. 

[HLS+20] Chaoyang He, Songze Li, Jinhyun So, Mi Zhang, Hongyi Wang, Xiaoyang Wang, Praneeth Vepakomma, Abhishek Singh, Hang Qiu, Li Shen, Peilin Zhao, Yan Kang, Yang Liu, Ramesh Raskar, Qiang Yang, Murali Annavaram, and Salman Avestimehr. Fedml: A research library and benchmark for federated machine learning, 2020. Cited on page 33. 

[Hop82] John J Hopfield. Neural networks and physical systems with emergent collec-tive computational abilities. Proceedings of the national academy of sciences, 79(8):2554–2558, 1982. Cited on page 1. 

[HSJ+17] Grant Ho, Aashish Sharma, Mobin Javed, Vern Paxson, and David Wagner. De-tecting credential spearphishing in enterprise settings. In 26th USENIX Security Symposium (USENIX Security 17), pages 469–485. USENIX, 2017. Cited on page 38. 

[HSKS20] Thomas Hiessl, Daniel Schall, Jana Kemnitz, and Stefan Schulte. Industrial fed-erated learning–requirements and system design. In International Conference on Practical Applications of Agents and Multi-Agent Systems, pages 42–53. Springer, 2020. Cited on page 35.

[HSS+18] Tyler Hunt, Congzheng Song, Reza Shokri, Vitaly Shmatikov, and Emmett Witchel. Chiron: Privacy-preserving machine learning as a service. arXiv preprint arXiv:1803.05961, 2018. Cited on page 55. 

[HZRS16] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. In Proceedings of the Conference on Computer Vision and Pattern Recognition, pages 770–778, 2016. Cited on pages 16, 55, 73, 118, and 120. 

[IVF19] Selim Ickin, Konstantinos Vandikas, and Markus Fiedler. Privacy preserving qoe modeling using collaborative learning. In Proceedings of the 4th Internet-QoE Workshop on QoE-Based Analysis and Management of Data Communication Net-works, pages 13–18, 2019. Cited on page 33. 

[JA19] Madeleine Jansson and Måns Axelsson. Federated learning used to detect credit card fraud. Master’s thesis, 2020-06-19. Cited on page 35. 

[Jou04] Antoine Joux. A one round protocol for tripartite Diffie-Hellman. Journal of Cryptology, 17(4):263–276, September 2004. Cited on page 50. 

[JVC18] Chiraag Juvekar, Vinod Vaikuntanathan, and Anantha Chandrakasan. {GAZELLE}: A low latency framework for secure neural network inference. In USENIX Security Symposium 18, pages 1651–1669, 2018. Cited on page 55. 

[KCFH05] Balaji Krishnapuram, Lawrence Carin, Mário AT Figueiredo, and Alexander J Hartemink. Sparse multinomial logistic regression: Fast algorithms and general-ization bounds. IEEE Transactions on Pattern Analysis and Machine Intelligence, 27(6):957–968, 2005. Cited on page 120. 

[KGC+18] Daniel S Kermany, Michael Goldbaum, Wenjia Cai, Carolina CS Valentim, Huiy-ing Liang, Sally L Baxter, Alex McKeown, Ge Yang, Xiaokang Wu, Fangbing Yan, et al. Identifying medical diagnoses and treatable diseases by image-based deep learning. Cell, 172(5):1122–1131, 2018. Cited on pages 95, 100, and 120. 

[KKB18] Harmanjeet Kaur, Neeraj Kumar, and Shalini Batra. An efficient multi-party scheme for privacy preserving collaborative filtering for healthcare recommender system. Future Generation Computer Systems, 86:297–307, 2018. Cited on page 54. 

[KL14] Jonathan Katz and Yehuda Lindell. Introduction to Modern Cryptography (2nd ed.). CRC press, 2014. Cited on pages 14, 15, 17, and 18. 

[KLM+18] Sam Kim, Kevin Lewi, Avradip Mandal, Hart Montgomery, Arnab Roy, and David J. Wu. Function-hiding inner product encryption is practical. In Dario Catalano and Roberto De Prisco, editors, SCN 18, volume 11035 of LNCS, pages 544–562. Springer, Heidelberg, September 2018. Cited on page 51. 

[KLS21] Peter Kairouz, Ziyu Liu, and Thomas Steinke. The distributed discrete gaussian mechanism for federated learning with secure aggregation. In International Con-ference on Machine Learning, pages 5201–5212. PMLR, 2021. Cited on pages 97 and 103. 

[KMA+19] Peter Kairouz, H. Brendan McMahan, Brendan Avent, Aurélien Bellet, Mehdi Bennis, Arjun Nitin Bhagoji, Keith Bonawitz, Zachary Charles, Graham Cor-mode, Rachel Cummings, Rafael G. L. D’Oliveira, Salim El Rouayheb, David

Evans, Josh Gardner, Zachary Garrett, Adrià Gascón, Badih Ghazi, Phillip B. Gibbons, Marco Gruteser, Zaid Harchaoui, Chaoyang He, Lie He, Zhouyuan Huo, Ben Hutchinson, Justin Hsu, Martin Jaggi, Tara Javidi, Gauri Joshi, Mikhail Khodak, Jakub Konečný, Aleksandra Korolova, Farinaz Koushanfar, Sanmi Koyejo, Tancrède Lepoint, Yang Liu, Prateek Mittal, Mehryar Mohri, Richard Nock, Ayfer Özgür, Rasmus Pagh, Mariana Raykova, Hang Qi, Daniel Ramage, Ramesh Raskar, Dawn Song, Weikang Song, Sebastian U. Stich, Ziteng Sun, Ananda Theertha Suresh, Florian Tramèr, Praneeth Vepakomma, Jianyu Wang, Li Xiong, Zheng Xu, Qiang Yang, Felix X. Yu, Han Yu, and Sen Zhao. Advances and Open Problems in Federated Learning. arXiv:1912.04977 [cs, stat], December 2019. arXiv: 1912.04977. Cited on page 25. 

[KMRB20] Georgios A Kaissis, Marcus R Makowski, Daniel Rückert, and Rickmer F Braren. Secure, privacy-preserving and federated machine learning in medical imaging. Nature Machine Intelligence, pages 1–7, 2020. Cited on page 34. 

[KMY+16] Jakub Konečnỳ, H Brendan McMahan, Felix X. Yu, Peter Richtárik, Ananda Theertha Suresh, and Dave Bacon. Federated learning: Strategies for im-proving communication efficiency. arXiv preprint arXiv:1610.05492, 2016. Cited on page 54. 

[KNH14] Alex Krizhevsky, Vinod Nair, and Geoffrey Hinton. The CIFAR-10 dataset. online: http://www. cs. toronto. edu/kriz/cifar. html, 55, 2014. Cited on pages 73, 117, and 120. 

[KOS16] Marcel Keller, Emmanuela Orsini, and Peter Scholl. Mascot: faster malicious arithmetic secure computation with oblivious transfer. In Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security, pages 830–842, 2016. Cited on page 60. 

[KPN+19] Deep Kawa, Sunaina Punyani, Priya Nayak, Arpita Karkera, and Varshapriya Jyotinagar. Credit risk assessment from combined bank records using federated learning. International Research Journal of Engineering and Technology (IRJET), 6(4):1355–1358, 2019. Cited on page 35. 

[KPR18] Marcel Keller, Valerio Pastro, and Dragos Rotaru. Overdrive: making spdz great again. In Annual International Conference on the Theory and Applications of Cryptographic Techniques, pages 158–189. Springer, 2018. Cited on page 54. 

[KRC+20] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Ras-togi, and Rahul Sharma. Cryptflow: Secure tensorflow inference. In 2020 IEEE Symposium on Security and Privacy (SP), pages 336–353. IEEE, 2020. Cited on page 55. 

[Kri12] Alex Krizhevsky. Learning multiple layers of features from tiny images. University of Toronto, 05 2012. Cited on page 40. 

[KSH12] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E. Hinton. Imagenet classification with deep convolutional neural networks. In Advances in Neural Information Processing Systems, pages 1097–1105, 2012. Cited on pages 55, 73, 118, and 120. 

[KVH+21] Brian Knott, Shobha Venkataraman, Awni Hannun, Shubho Sengupta, Mark Ibrahim, and Laurens van der Maaten. Crypten: Secure multi-party computa-tion meets machine learning. Advances in Neural Information Processing Systems, 2021. Cited on page 103.

[KXJ+20] Jiawen Kang, Zehui Xiong, Chunxiao Jiang, Yi Liu, Song Guo, Yang Zhang, Dusit Niyato, Cyril Leung, and Chunyan Miao. Scalable and communication-efficient decentralized federated edge learning with multi-blockchain framework, 2020. Cited on page 34. 

[KZPP+21] Georgios Kaissis, Alexander Ziller, Jonathan Passerat-Palmbach, Théo Ryffel, Dmitrii Usynin, Andrew Trask, Ionésio Lima, Jason Mancuso, Friederike Jung-mann, Marc-Matthias Steinborn, et al. End-to-end privacy preserving deep learn-ing on multi-institutional medical imaging. Nature Machine Intelligence, pages 1–12, 2021. Cited on pages 77, 99, and 100. 

[LBBH98] Yann LeCun, Léon Bottou, Yoshua Bengio, and Patrick Haffner. Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11):2278– 2324, 1998. Cited on pages 16, 73, and 118. 

[LC10] Yann LeCun and Corinna Cortes. MNIST handwritten digit database. 2010. Cited on pages 49, 73, and 117. 

[LGN+20] Yi Liu, Sahil Garg, Jiangtian Nie, Yang Zhang, Zehui Xiong, Jiawen Kang, and M. Shamim Hossain. Deep anomaly detection for time-series data in industrial iot: A communication-efficient on-device federated learning approach. IEEE Internet of Things Journal, page 1–1, 2020. Cited on page 35. 

[LJLA17] Jian Liu, Mika Juuti, Yao Lu, and Nadarajah Asokan. Oblivious neural network predictions via minionn transformations. In Proceedings of the Conference on Computer and Communications Security, pages 619–631, 2017. Cited on pages 55, 68, 74, and 118. 

[LKC17] Gilles Louppe, Michael Kagan, and Kyle Cranmer. Learning to pivot with ad-versarial networks. Advances in neural information processing systems, 30, 2017. Cited on page 43. 

[LLH+20] Wei Yang Bryan Lim, Nguyen Cong Luong, Dinh Thai Hoang, Yutao Jiao, Ying-Chang Liang, Qiang Yang, Dusit Niyato, and Chunyan Miao. Federated learning in mobile edge networks: A comprehensive survey. IEEE Communications Surveys & Tutorials, 22(3):2031–2063, 2020. Cited on pages 33 and 34. 

[LSSS14] Roi Livni, Shai Shalev-Shwartz, and Ohad Shamir. On the computational effi-ciency of training neural networks. Advances in neural information processing systems, 27, 2014. Cited on page 40. 

[LWH19] Qinbin Li, Zeyi Wen, and Bingsheng He. Federated learning systems: Vision, hype and reality for data privacy and protection. ArXiv, abs/1907.09693, 2019. Cited on pages 33 and 34. 

[LYK+20] Jinhyuk Lee, Wonjin Yoon, Sungdong Kim, Donghyeon Kim, Sunkyu Kim, Chan Ho So, and Jaewoo Kang. Biobert: a pre-trained biomedical language rep-resentation model for biomedical text mining. Bioinformatics, 36(4):1234–1240, 2020. Cited on page 101. 

[Mau05] Ueli M. Maurer. Abstract models of computation in cryptography (invited paper). In Nigel P. Smart, editor, 10th IMA International Conference on Cryptography and Coding, volume 3796 of LNCS, pages 1–12. Springer, Heidelberg, December 2005. Cited on page 105.

[Mir17] Ilya Mironov. Rényi differential privacy. In 2017 IEEE 30th computer security foundations symposium (CSF), pages 263–275. IEEE, 2017. Cited on pages 20 and 80. 

[MJ20] Ruben Mayer and Hans-Arno Jacobsen. Scalable deep learning on distributed infrastructures: Challenges, techniques, and tools. ACM Comput. Surv., 53(1), February 2020. Cited on page 33. 

[MMR+17] Brendan McMahan, Eider Moore, Daniel Ramage, Seth Hampson, and Blaise Aguera y Arcas. Communication-efficient learning of deep networks from decentralized data. In Artificial intelligence and statistics, pages 1273–1282. PMLR, 2017. Cited on page 3. 

[MR03] Ciamac C Moallemi and Benjamin Roy. Distributed optimization in adaptive networks. Advances in Neural Information Processing Systems, 16, 2003. Cited on page 3. 

[MR18] Payman Mohassel and Peter Rindal. Aby3: A mixed protocol framework for machine learning. In Proceedings of the Conference on Computer and Communi-cations Security, pages 35–52, 2018. Cited on pages 13, 55, 70, 71, 74, and 76. 

[MV70] Dragoslav S. Mitrinovic and Petar M. Vasic. Analytic Inequalities, volume 1. Springer, 1970. Cited on page 93. 

[MZ17] Payman Mohassel and Yupeng Zhang. Secureml: A system for scalable privacy-preserving machine learning. In Symposium on Security and Privacy (SP), pages 19–38. IEEE, 2017. Cited on pages 55, 56, 68, 69, 74, and 118. 

[Nec94] V. I. Nechaev. Complexity of a determinate algorithm for the discrete logarithm. Mathematical Notes, 55(2):165–172, 1994. Cited on page 105. 

[Nis04] Helen Nissenbaum. Privacy as contextual integrity. Wash. L. Rev., 79:119, 2004. Cited on page 2. 

[O’N10] Adam O’Neill. Definitional issues in functional encryption. Cryptology ePrint Archive, Report 2010/556, 2010. Cited on pages 39, 48, and 49. 

[Pai99] Pascal Paillier. Public-key cryptosystems based on composite degree residuosity classes. In International conference on the theory and applications of cryptographic techniques, pages 223–238. Springer, 1999. Cited on page 5. 

[Pol78] John M Pollard. Monte carlo methods for index computation (mod p). Mathe-matics of computation, 32(143):918–924, 1978. Cited on page 15. 

[PPFM+19] Jonathan Passerat-Palmbach, Tyler Farnan, Robert Miller, Marielle S Gross, Heather Leigh Flannery, and Bill Gleim. A blockchain-orchestrated federated learning architecture for healthcare consortia. arXiv preprint arXiv:1910.12603, 2019. Cited on page 34. 

[PS20] Arpita Patra and Ajith Suresh. Blaze: Blazing fast privacy-preserving machine learning. arXiv preprint arXiv:2005.09042, 2020. Cited on page 55. 

[PU19] Alexandre Piquard and Martin Untersinger. Données de santé : la plate-forme de la discorde. Le Monde, 2019. Cited on page 2.

[PVG+11] F. Pedregosa, G. Varoquaux, A. Gramfort, V. Michel, B. Thirion, O. Grisel, M. Blondel, P. Prettenhofer, R. Weiss, V. Dubourg, J. Vanderplas, A. Passos, D. Cournapeau, M. Brucher, M. Perrot, and E. Duchesnay. Scikit-learn: Machine learning in Python. Journal of Machine Learning Research, 12:2825–2830, 2011. Cited on page 44. 

[QQBAF20] Adnan Qayyum, Junaid Qadir, Muhammad Bilal, and Ala Al-Fuqaha. Secure and robust machine learning for healthcare: A survey. IEEE Reviews in Biomedical Engineering, 14:156–180, 2020. Cited on pages 33 and 34. 

[RBP22] Théo Ryffel, Francis Bach, and David Pointcheval. Differential privacy guarantees for stochastic gradient langevin dynamics, 2022. Cited on pages 8, 79, and 100. 

[RBSJL+20] Nuria Rodríguez-Barroso, Goran Stipcich, Daniel Jiménez-López, José Anto-nio Ruiz-Millán, Eugenio Martínez-Cámara, Gerardo González-Seco, M. Victo-ria Luzón, Miguel Angel Veganzones, and Francisco Herrera. Federated learning and differential privacy: Software tools analysis, the sherpa.ai fl framework and methodological guidelines for preserving data privacy. Information Fusion, 64:270 – 292, 2020. Cited on page 34. 

[RDS+15] Olga Russakovsky, Jia Deng, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, and Michael Bernstein. Imagenet large scale visual recognition challenge. International Journal of Com-puter Vision, 115(3):211–252, 2015. Cited on pages 73 and 117. 

[RG20] Maria Rigaki and Sebastian Garcia. A survey of privacy attacks in machine learn-ing. arXiv preprint arXiv:2007.07646, 2020. Cited on page 40. 

[RHW86] David E Rumelhart, Geoffrey E Hinton, and Ronald J Williams. Learning repre-sentations by back-propagating errors. nature, 323(6088):533–536, 1986. Cited on page 1. 

[RPB+19] Théo Ryffel, David Pointcheval, Francis Bach, Edouard Dufour-Sans, and Romain Gay. Partially encrypted deep learning using functional encryption. Advances in Neural Information Processing Systems, 32, 2019. Cited on pages 7, 8, 37, 39, and 47. 

[RRK18] Bita Darvish Rouhani, M. Sadegh Riazi, and Farinaz Koushanfar. Deepsecure: Scalable provably-secure deep learning. In Proceedings of the 55th Annual Design Automation Conference, pages 1–6, 2018. Cited on page 55. 

[RRL+18] Md Atiqur Rahman, Tanzila Rahman, Robert Laganière, Noman Mohammed, and Yang Wang. Membership inference attack against differentially private deep learning model. Trans. Data Priv., 11(1):61–79, 2018. Cited on page 58. 

[RSB12] Nicolas Roux, Mark Schmidt, and Francis Bach. A stochastic gradient method with an exponential convergence rate for finite training sets. In Advances in Neural Information Processing Systems, pages 3167–3175, 2012. Cited on page 91. 

[RSC+19] M Sadegh Riazi, Mohammad Samragh, Hao Chen, Kim Laine, Kristin Lauter, and Farinaz Koushanfar. {XONN}: Xnor-based oblivious deep neural network inference. In 28th {USENIX} Security Symposium ({USENIX} Security 19), pages 1501–1518, 2019. Cited on page 55.

[RTD+18] Theo Ryffel, Andrew Trask, Morten Dahl, Bobby Wagner, Jason Mancuso, Daniel Rueckert, and Jonathan Passerat-Palmbach. A generic framework for privacy preserving deep learning. In NeurIPS 2018 Workshop Privacy-Preserving Machine Learning, 2018. Cited on pages 7, 8, 23, 48, 72, 73, and 103. 

[RTPB22] Théo Ryffel, Pierre Tholoniat, David Pointcheval, and Francis Bach. Ariann: Low-interaction privacy-preserving deep learning via function secret sharing. Pro-ceedings on Privacy Enhancing Technologies, 2022. Cited on pages 7, 8, 31, 34, and 47. 

[RWT+18] M. Sadegh Riazi, Christian Weinert, Oleksandr Tkachenko, Ebrahim M. Songhori, Thomas Schneider, and Farinaz Koushanfar. Chameleon: A hybrid secure com-putation framework for machine learning applications. In Proceedings of the 2018 on Asia Conference on Computer and Communications Security, ASIACCS ’18, pages 707–721, New York, NY, USA, 2018. ACM. Cited on pages 48, 55, and 57. 

[SBPB21] Shubham Singh, Shantanu Bhardwaj, Hemlatha Pandey, and Gunjan Beniwal. Anomaly Detection Using Federated Learning. In Poonam Bansal, Meena Tushir, Valentina Emilia Balas, and Rajeev Srivastava, editors, Proceedings of Interna-tional Conference on Artificial Intelligence and Applications, volume 1164, pages 141–148. Springer Singapore, Singapore, 2021. Cited on page 35. 

[SEA19] Microsoft SEAL (release 3.2). https://github.com/Microsoft/SEAL, February 2019. Microsoft Research, Redmond, WA. Cited on pages 48 and 55. 

[Sha79] Adi Shamir. How to share a secret. Communications of the ACM, 22(11):612–613, 1979. Cited on pages 6 and 18. 

[Sho97] Victor Shoup. Lower bounds for discrete logarithms and related problems. In Walter Fumy, editor, EUROCRYPT’97, volume 1233 of LNCS, pages 256–266. Springer, Heidelberg, May 1997. Cited on page 105. 

[SS15] Reza Shokri and Vitaly Shmatikov. Privacy-preserving deep learning. In Pro-ceedings of the Conference on Computer and Communications Security, pages 1310–1321, 2015. Cited on page 54. 

[SS19] Congzheng Song and Vitaly Shmatikov. Auditing data provenance in text-generation models. In Proceedings of the 25th ACM SIGKDD International Con-ference on Knowledge Discovery & Data Mining, pages 196–206, 2019. Cited on page 38. 

[SŞ20] Ahmet Ali SÜZEN and Mehmet Ali ŞİMŞEK. A novel approach to machine learning application to protection privacy data in healthcare: Federated learning. Namık Kemal Tıp Dergisi, 8(1):22–30, 2020. Cited on pages 33 and 34. 

[SSSS17] Reza Shokri, Marco Stronati, Congzheng Song, and Vitaly Shmatikov. Member-ship inference attacks against machine learning models. In 2017 IEEE Symposium on Security and Privacy (SP), pages 3–18. IEEE, 2017. Cited on pages 4, 37, 38, 58, and 80. 

[SZ14] Karen Simonyan and Andrew Zisserman. Very deep convolutional networks for large-scale image recognition. arXiv preprint arXiv:1409.1556, 2014. Cited on pages 55, 73, and 118.

[TB21] Florian Tramèr and Dan Boneh. Differentially private learning needs better fea-tures (or much more data). In 9th International Conference on Learning Repre-sentations, ICLR, 2021. Cited on pages 96 and 103. 

[THL+19] Fengyi Tang, Jialu Hao, Jian Liu, Huimei Wang, and Ming Xian. Pfdlis: privacy-preserving and fair deep learning inference service under publicly verifiable covert security setting. Electronics, 8(12):1488, 2019. Cited on page 35. 

[TZJ+16] Florian Tramèr, Fan Zhang, Ari Juels, Michael K Reiter, and Thomas Ristenpart. Stealing machine learning models via prediction apis. In 25th {USENIX} Security Symposium ({USENIX} Security 16), pages 601–618, 2016. Cited on page 37. 

[VBT17] Paul Vanhaesebrouck, Aurélien Bellet, and Marc Tommasi. Decentralized collab-orative learning of personalized models over networks. In Artificial Intelligence and Statistics, pages 509–517. PMLR, 2017. Cited on page 3. 

[VLBM08] Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol. Extracting and composing robust features with denoising autoencoders. In Pro-ceedings of the 25th International Conference on Machine Learning, ICML ’08, pages 1096–1103, New York, NY, USA, 2008. ACM. Cited on page 42. 

[VSP+17] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Lukasz Kaiser, and Illia Polosukhin. Attention is all you need. In Advances in neural information processing systems, pages 5998–6008, 2017. Cited on page 101. 

[War65] Stanley L Warner. Randomized response: A survey technique for eliminating evasive answer bias. Journal of the American Statistical Association, 60(309):63– 69, 1965. Cited on page 4. 

[WBK19] Yu-Xiang Wang, Borja Balle, and Shiva Prasad Kasiviswanathan. Subsampled rényi differential privacy and analytical moments accountant. In The 22nd In-ternational Conference on Artificial Intelligence and Statistics, pages 1226–1235. PMLR, 2019. Cited on page 80. 

[WGC19] Sameer Wagh, Divya Gupta, and Nishanth Chandran. Securenn: Efficient and private neural network training. (PETS 2019), February 2019. Cited on pages 27, 31, 48, 55, 57, 69, and 74. 

[WNK20] Alexander Wood, Kayvan Najarian, and Delaram Kahrobaei. Homomorphic en-cryption for machine learning in medicine and bioinformatics. ACM Computing Surveys (CSUR), 53(4):1–35, 2020. Cited on page 33. 

[WSZ+19] Zhibo Wang, Mengkai Song, Zhifei Zhang, Yang Song, Qian Wang, and Hairong Qi. Beyond inferring class representatives: User-level privacy leakage from fed-erated learning. In IEEE INFOCOM 2019-IEEE Conference on Computer Com-munications, pages 2512–2520. IEEE, 2019. Cited on page 25. 

[WT11] Max Welling and Yee W Teh. Bayesian learning via stochastic gradient Langevin dynamics. In Proceedings of the International conference on machine learning, pages 681–688. Citeseer, 2011. Cited on page 81.

[WTB+21] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mit-tal, and Tal Rabin. FALCON: Honest-Majority Maliciously Secure Framework for Private Deep Learning. Proceedings on Privacy Enhancing Technologies, 2021. Cited on pages 13, 28, 55, 69, 70, 71, 73, 74, 117, and 118. 

[WYG+17] Frank Wang, Catherine Yun, Shafi Goldwasser, Vinod Vaikuntanathan, and Matei Zaharia. Splinter: Practical private queries on public data. In 14th {USENIX} Symposium on Networked Systems Design and Implementation ({NSDI} 17), pages 299–313, 2017. Cited on pages 60 and 114. 

[WZX17] Jiayu Wu, Qixiang Zhang, and Guoxi Xu. Tiny imagenet challenge. Technical report, Available: http://cs231n.stanford.edu/reports/2017/pdfs/930.pdf, 2017. Cited on pages 73 and 117. 

[Yao86] Andrew Chi-Chih Yao. How to generate and exchange secrets. In Annual Sympo-sium on Foundations of Computer Science, pages 162–167, 1986. Cited on page 55. 

[YHZL19] Xiaoyong Yuan, Pan He, Qile Zhu, and Xiaolin Li. Adversarial examples: Attacks and defenses for deep learning. IEEE transactions on neural networks and learning systems, 30(9):2805–2824, 2019. Cited on page 37. 

[YLC+19] Qiang Yang, Yang Liu, Yong Cheng, Yan Kang, Tianjian Chen, and Han Yu. Fed-erated learning. Synthesis Lectures on Artificial Intelligence and Machine Learn-ing, 13(3):1–207, 2019. Cited on page 33. 

[YS22] Jiayuan Ye and Reza Shokri. Differentially private learning needs hidden state (or much faster convergence). arXiv preprint arXiv:2203.05363, 2022. Cited on page 81. 

[YSMN21] Sen Yuan, Milan Shen, Ilya Mironov, and Anderson Nascimento. Label private deep learning training based on secure multiparty computation and differential privacy. In NeurIPS 2021 Workshop Privacy in Machine Learning, 2021. Cited on page 103. 

[YSS+21] A. Yousefpour, I. Shilov, A. Sablayrolles, D. Testuggine, K. Prasad, M. Malek, J. Nguyen, S. Ghosh, A. Bharadwaj, J. Zhao, G. Cormode, and I. Mironov. Opacus: User-friendly differential privacy library in pytorch. arXiv preprint arXiv:2109.12298, 2021. Cited on pages 21, 26, 80, and 103. 

[ZHKS16] Ruiyu Zhu, Yan Huang, Jonathan Katz, and Abhi Shelat. The cut-and-choose game and its application to cryptographic protocols. In USENIX Security Sym-posium Security 16, pages 1085–1100, 2016. Cited on page 57. 

[ZJP+20] Yuheng Zhang, Ruoxi Jia, Hengzhi Pei, Wenxiao Wang, Bo Li, and Dawn Song. The secret revealer: generative model-inversion attacks against deep neural net-works. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 253–261, 2020. Cited on page 58. 

[ZPPR+20] Alexander Ziller, Jonathan Passerat-Palmbach, Théo Ryffel, Dmitrii Usynin, An-drew Trask, Ionésio Da Lima Costa Junior, Jason Mancuso, Marcus Makowski, Daniel Rueckert, Rickmer Braren, et al. Privacy-preserving medical image analy-sis. arXiv preprint arXiv:2012.06354, 2020. Cited on page 35.

[ZTL+21] Alexander Ziller, Andrew Trask, Antonio Lopardo, Benjamin Szymkow, Bobby Wagner, Emma Bluemke, Jean-Mickael Nounahon, Jonathan Passerat-Palmbach, Kritika Prakash, Nick Rose, et al. Pysyft: A library for easy federated learning. In Federated Learning Systems, pages 111–139. Springer, 2021. Cited on pages 7, 8, and 23.

MOTS CLÉS 

Intelligence Artificielle, Apprentissage Fédéré, Chiffrement Fonctionnel, Calculs Multipartites, Partage de Secret Fonctionnel, Confidentialité Différentielle, Intégrité Contextuelle 

RÉSUMÉ 

L’usage sans précédent du machine learning (ML) ou apprentissage automatique, motivé par les possibilités qu’il apporte dans un grand nombre de secteurs, interroge de plus en plus en raison du caractère sensible des données qui doivent être utilisées et du manque de transparence sur la façon dont ces données sont collectées, croisées ou partagées. Aussi, un certain nombre de méthodes se développent pour réduire son intrusivité sur notre vie privée, afin d’en rendre son usage plus acceptable notamment dans des domaines tels que la santé, où son potentiel est encore très largement sous-exploité. Cette thèse explore différentes méthodes issues de la cryptographie ou plus largement du monde de la sécurité et les applique au machine learning afin d’établir des garanties de confidentialité nouvelles pour les données utilisées et les modèles de ML. Notre première contribution est le développement d’un socle technique pour implémenter et expérimenter de nouvelles approches au travers d’une librairie open-source nommée PySyft. Nous proposons une architecture modulaire qui facilite l’utilisation des briques de confidentialité ainsi que le développement et l’intégration de nouvelles briques. Ce socle sert de base à l’ensemble des implémentations proposées dans cette thèse. Notre seconde contribution consiste à mettre en lumière la vulnérabilité des modèles de ML en proposant une attaque qui exploite un modèle entraîné et permet de révéler des attributs confidentiels d’un individu. Cette attaque pourrait par exemple détourner un modèle qui reconnaît le sport fait par une personne à partir d’une image, pour détecter les origines raciales de cette personne. Nous proposons des pistes pour limiter l’impact de cette attaque. Dans un troisième temps, nous nous intéressons à certains protocoles de cryptographie qui permettent de faire des calculs sur des données chiffrées. Nous proposons un protocole de chiffrement fonctionnel qui permet de réaliser des prédictions sur des données chiffrées et de ne rendre public que la prédiction. Par ailleurs, nous optimisons un protocole de partage de secret fonctionnel, qui permet d’entraîner ou d’évaluer un modèle de ML sur des données de façon privée, c’est à dire sans révéler à quiconque ni le modèle ni les données. Ce protocole offre des performances suffisantes pour la réalisation de tâches non triviales comme la détection de pathologies dans les radiographies de poumons. Enfin, nous intéressons à la confidentialité différentielle qui permet de limiter la vulnérabilité des modèles de ML et donc l’exposition des données utilisées lors de l’entraînement, en introduisant une perturbation contrôlée. Nous proposons un protocole qui offre notamment la possibilité d’entraîner un modèle lisse et fortement convexe en garantissant un niveau de confidentialité indépendant du nombre d’accès aux données sensibles lors de l’entraînement. 

ABSTRACT 

The ever growing use of machine learning (ML), motivated by the possibilities it brings to a large number of sectors, is increasingly raising questions because of the sensitive nature of the data that must be used and the lack of transparency on the way these data are collected, combined or shared. Therefore, a number of methods are being developed to reduce its impact on our privacy and make its use more acceptable, especially in areas such as healthcare where its potential is still largely under-exploited. This thesis explores different methods from the fields of cryptography and security, and applies them to machine learning in order to establish new confidentiality guarantees for the data used and the ML models. Our first contribution is the development of a technical foundation to facilitate experimentation of new approaches, through an open-source library named PySyft. We propose a modular architecture that facilitates the use of privacy blocks, or the development and integration of new blocks. This library is reused in all the implementations proposed in this thesis. Our second contribution consists in highlighting the vulnerability of ML models by proposing an attack that exploits a trained model to reveal confidential data. This attack could, for example, subvert a model that recognizes a person’s sport from an image, to detect the person’s racial origins. We propose solutions to limit the impact of this attack. In a third step, we focus on some cryptographic protocols that allow us to perform computations on encrypted data. A first study proposes a functional encryption protocol that allows to make predictions using a small ML model over encrypted data and to only make the predictions public. A second study focuses on optimizing a functional secret sharing protocol, which allows an ML model to be trained or evaluated on data privately, i.e. without revealing either the model or the data to anyone. This protocol provides sufficient performance to use models that have practical utility in non-trivial tasks such as pathology detection in lung X-rays. Our final contribution is in differential privacy, a technique that limits the vulnerability of ML models and thus the exposure of the data used in training by introducing a controlled perturbation. We propose a new protocol and show that it offers the possibility to train a smooth and strongly convex model with a bounded privacy loss regardless of the number of calls to sensitive data during training. 

KEYWORDS 

Artificial Intelligence, Federated Learning, Functional Encryption, Multi-Party Computation, Function Secret 