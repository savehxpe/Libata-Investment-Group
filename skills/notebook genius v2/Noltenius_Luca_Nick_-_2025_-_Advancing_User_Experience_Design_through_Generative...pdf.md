# Noltenius Luca Nick - 2025 - Advancing User Experience Design through Generative...pdf

Advancing User Experience Design through Generative AI 

### A Healthy Habits App Case Study 

### MASTERARBEIT 

zur Erlangung des akademischen Grades 

### Master of Science 

im Rahmen des Studiums 

Business Informatics 

eingereicht von 

B.Sc. Luca Nick Noltenius Matrikelnummer 12229248 

an der Fakultät für Visual Computing and Human-Centered Technology 

der Technischen Universität Wien 

Betreuung: Univ.Prof. Dipl.-Inf. Dr.sc.techn. Florian Michahelles 

Wien, 27. August 2025 Luca Nick Noltenius Florian Michahelles 

Technische Universität Wien 

Advancing User Experience Design through GenAI 

### A Healthy Habits App Case Study 

### MASTER’S THESIS 

submitted in partial fulfillment of the requirements for the degree of 

### Master of Science 

in 

Business Informatics 

by 

B.Sc. Luca Nick Noltenius Registration Number 12229248 

to the Faculty of Visual Computing and Human-Centered Technology 

at the TU Wien 

Advisor: Univ.Prof. Dipl.-Inf. Dr.sc.techn. Florian Michahelles 

Vienna, August 27, 2025 Luca Nick Noltenius Florian Michahelles 

Technische Universität Wien 

# Erklärung zur Verfassung der Arbeit 

B.Sc. Luca Nick Noltenius 

Hiermit erkläre ich, dass ich diese Arbeit selbständig verfasst habe, dass ich die verwen-deten Quellen und Hilfsmittel vollständig angegeben habe und dass ich die Stellen der Arbeit – einschließlich Tabellen, Karten und Abbildungen –, die anderen Werken oder dem Internet im Wortlaut oder dem Sinn nach entnommen sind, auf jeden Fall unter Angabe der Quelle als Entlehnung kenntlich gemacht habe. Ich erkläre weiters, dass ich mich generativer KI-Tools lediglich als Hilfsmittel bedient habe und in der vorliegenden Arbeit mein gestalterischer Einfluss überwiegt. Im Anhang „Übersicht verwendeter Hilfsmittel“ habe ich alle generativen KI-Tools gelistet, die verwendet wurden, und angegeben, wo und wie sie verwendet wurden. Für Textpassagen, die ohne substantielle Änderungen übernommen wurden, haben ich jeweils die von mir formulierten Eingaben (Prompts) und die verwendete IT- Anwendung mit ihrem Produktnamen und Versionsnummer/Datum angegeben. 

Wien, 27. August 2025 Luca Nick Noltenius 

v

# Danksagung 

Zunächst einmal möchte ich meinem Betreuer Prof. Florian Michahelles danken, der nach langem Suchen meinerseits an dieses Thema geglaubt und mich stets bei der Konzeption und Durchführung dieser Studie unterstützt hat. Durch sein Feedback, die Verbesserungsvorschläge und zahlreiche Iterationen hat diese Arbeit eine Qualität erreicht, auf die ich stolz bin. 

Ich möchte meinen Eltern Thomas und Irina danken, dafür dass sie mich immer unterstützt und mir Vieles mit auf den Weg gegeben haben, ohne das mir mein Abschluss sicherlich schwerer gefallen wäre. Ihr seid toll, und ich bin sehr dankbar, dass ich immer auf euch zählen kann, wenn ich einen Rat oder Aufmunterung in Form eines Dad-Jokes brauche. 

Ein besonderer Dank gilt meiner Freundin Eva, die mich zum Einem stets an die Weiterarbeit an meiner Thesis erinnert hat und während dieser nicht immer leichten Zeit jederzeit für mich da war. Ich bin froh, dich an meiner Seite zu haben. 

Abschließend bedanke ich mich bei allen Interviewpartner:innen, die mir sehr detailliert über ihre Arbeit und Tools erzählt und mir mit diesen Erkenntnissen das Fundament für meine Arbeit geliefert haben. 

vii

# Acknowledgements 

Firstly, I want to thank my supervisor Prof. Florian Michahelles, who took on this topic after a lengthy search of mine and continuously supported me with the concept and execution of this study. Through his feedback, recommendations and several iterations this thesis was shaped into what it is now - a work that I am proud of. 

I want to thank my parents Thomas and Irina for always supporting my in my endeavors. You are great, and I am very happy that I can always rely on you when it comes to an advice or moral boost with one of your Dad Jokes. 

A special thank goes to my girlfriend Eva, that kept reminding me to work on my thesis and who was always there for me during this time. I happy you are by my side. 

Lastly, I want to thank all interviewees for taking the time to share details about their daily work and the tools they use. You provided me with insights that built the foundation of my thesis. 

ix

# Kurzfassung 

User Experience (UX) Design ist essentiell für die Konzeption und Gestaltung von nutzer:innen-orientierten digitalen Produkten. Etablierte UX Methoden und Prozesse sind jedoch mit hohem Aufwand und Kosten verbunden. Die Adoption von Generative Artificial Intelligence (GenAI) kann diese Praktiken unterstützen, führt allerdings auch zu neuen Risiken und Herausforderungen. Wie kann GenAI bestmöglich in UX Design Prozesse integriert werden? Um diese Frage zu beantworten, wurden in dieser Studie Interviews mit fünf UX Expert:innen über deren Nutzung von GenAI bei ihrer täglichen Arbeit durchgeführt. Basierend auf diesen Erkenntnissen wurde der GenAI-gestützten Design-Prozess eines UX Prototypen durchgeführt, reflektiert und sieben Best-Practices definiert, die UX Designer:innen bei der Erstellung von UX Artefakten unterstützen und Metriken wie Iterationsgeschwindigkeit, Kreative Diversität und Anforderungsabdeckung verbessern. 

Diese Studie hat gezeigt, dass: 1) sich GenAI am besten für text-basierte Aufgaben eignet, wie die Erstellung von Interviewleitfäden und Analyse von Transkripten während der User Research. 2) laut UX Experten GenAI großes Potential als Inspirationswerkzeug hat, welches kreative Blockaden umgehen, visuelle Referenzen erstellen, und in der Ideenfindung unterstützen kann. 3) während der Action Research die Verwendung von präziser und leichter Sprache in Prompts, die Aufteilung von komplexen Aufgaben in kleine Schritte, und das Testen verschiedener GenAI Modelle und Parameter einen großen Einfluss auf die Qualität von GenAI-generierten Inhalten hat. 4) GenAI starke Limitation in der Diversität, Nutzer:innen-Orientierung und Konsistent bei Aufgaben zeigt, die ein hohes Maß an kritischem Denken erfordern, wie dem Wireframing und Usability Testing. 5) GenAI Modelle kein Ersatz für manuelle Arbeit sind, und die Rolle von GenAI eher als Mitgestalter geeignet ist, mit dem UX Expert:innen Daten analysieren, einfache Aufgaben automatisieren und verschiedene Design-Ideen testen können. 

xi

# Abstract 

UX practices are crucial for conceptualizing and designing user-centric products. However, established methods are time-consuming and resource-intensive. GenAI has the potential to aid in UX design, but also presents new risks and challenges. How can GenAI technology be optimally integrated into current UX design practices? This study explored this question by interviewing five UX professionals about their use of GenAI and introspecting the GenAI-assisted design process of an UX prototype. Based on this introspection, seven best practice guidelines were defined that guide UX professionals in using GenAI by improving iteration speed, ideation diversity, and requirements coverage when creating UX artifacts. 

This study found that: 1) GenAI is best suited for text-based tasks, such as creating questionnaires or analyzing interview transcripts during user research. 2) UX professionals underlined the potential of GenAI to serve as an inspirational tool, generating visual references to overcome creative blocks and assist with problem ideation. 3) The action research revealed the importance of using simple and precise language in prompts, breaking down large tasks into small steps, and testing GenAI models and parameters to optimize AI-generated output. 4) During UX prototype design, GenAI faced significant limitations regarding diversity, user-centricity, and consistency with tasks that require a high degree of critical thinking, such as wireframing and usability testing. 5) GenAI tools are not a replacement for designers, and the role of GenAI is best suited as a design companion for UX professionals to analyze data, automate simple tasks, and explore the design space. 

xiii

# Contents 

Kurzfassung xi 

Abstract xiii 

Contents xv 

1 Introduction 1 1.1 Motivation and problem statement . . . . . . . . . . . . . . . . . . . . 1 1.2 Research gap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 1.3 Aim of the work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 1.4 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 1.5 Thesis outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 

2 Background and Related Work 5 2.1 Theoretical background . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2.2 Related work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.3 Limitations and concerns with GenAI . . . . . . . . . . . . . . . . . . 13 

3 Methodology 19 3.1 The Design Science framework . . . . . . . . . . . . . . . . . . . . . . 19 3.2 Literature review . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 3.3 Expert interviews . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21 3.4 Action research . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 

4 Results 25 4.1 Expert interviews . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 4.2 Action research . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 

5 Discussion 71 5.1 Best practice guidelines for the effective use of GenAI in UX design . . 71 

6 Conclusion 75 6.1 Limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 6.2 Future work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 

xv

7 Overview of Generative AI Tools Used 77 

A Appendices 79 A.1 Expert Interview questionnaire . . . . . . . . . . . . . . . . . . . . . . 79 A.2 Interview results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81 A.3 GenAI use cases . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 A.4 GenAI tools output . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86 A.5 Interviews transcripts . . . . . . . . . . . . . . . . . . . . . . . . . . . 94 

List of Figures 123 

List of Tables 125 

Acronyms 127 

Bibliography 129

CHAPTER 1 

# Introduction 

1.1 Motivation and problem statement The rise of GenAI is revolutionizing the digital world. A recent study has shown that companies view GenAI as the most transformative technology of this decade, with 90% of the companies surveyed increasing their investments in GenAI [53]. This trend is particularly applicable to the creative industry, with UX professionals beginning to adopt GenAI in their design processes [37]. There is a need to improve effectiveness, as UX design is a time- and resource-intensive practice, reliant not only on creative design but also on translating user needs into functionality [46]. Performing this practice well is crucial, as 32% of users stop interacting with a brand they love after just one bad UX experience [33]. GenAI has the potential to improve user experience and support UX professionals in all stages of design [22]. The introduction of GenAI into existing practices can assist in tasks such as UX writing, wireframes, data synthesis, rapid prototyping, and user testing to develop more user-centric solutions [46, 22]. 

However, there are significant limitations and ethical concerns regarding the use of GenAI in UX design [44]. UX professionals face limitations in AI-generated outputs regarding quality, reliability, and innovation [39, 29, 8]. In addition, GenAI presents potential threats, such as copyright negligence, skill degradation, and job replacement. [34, 48, 31, 21, 44, 13, 22, 51, 46]. 

This twofold implication of GenAI use raises the following question: How can GenAI technology be optimally integrated into current UX design practices? 

To answer this question, five UX professionals were interviewed about their use of GenAI and the associated challenges and limitations they faced. These findings were consolidated into concrete GenAI use cases with respective tools and design tasks. an UX prototype was designed employing these use cases, and the impacts of GenAI on the design process were reflected upon. From these reflections, seven best practice guidelines were defined 

1

1. Introduction 

that explain when, how, and with what tools GenAI should or should not be used in UX design processes from the designer’s perspective. 

1.2 Research gap Several studies have investigated how UX professionals currently use GenAI in their design processes and the challenges they face [44, 20, 37, 22, 46]. Rodriguez et al. mentioned concrete GenAI use cases in the healthcare industry, highlighting the role of ChatGPT in creating user personas and information flows [34]. Lentez et al. focused on the use of GenAI for writing-based tasks, describing its potential to increase speed and personalization in writing and changing UX texts [21]. Namoun et al. evaluated the role of GenAI in designing and testing mobile applications specifically, with tools such as Uizard, Galileo AI, Maze, and Visily being able to assist prototyping and user testing [29]. However, no studies were found that measure the feasibility of GenAI use cases in UX design in terms of concrete metrics. This study goes beyond these results by conducting a detailed qualitative assessment on how GenAI adoption affects UX design processes from the designer’s perspective, measuring iteration speed, ideation diversity, and requirement coverage. Furthermore, the findings were mapped to actionable best practice guidelines that guide UX professionals in the effective use of GenAI regarding the stated metrics. 

1.3 Aim of the work To provide a solution to the problem statement and fill the gap in current research, the following research questions are proposed: 

 RQ 1: How can an UX prototype, using the example of healthy habits, be effectively designed with GenAI in terms of iteration speed, ideation diversity, and requirement coverage? 

 RQ 2: What best practices can be derived that guide UX professionals to effectively use GenAI to improve iteration speed, ideation diversity, and requirement coverage when designing UX artifacts? 

These questions aim at gathering an overview over state of the art of GenAI usage in UX design both in literature and industry, using identified GenAI use cases in designing a healthy habits UX prototype, and documenting observations and reflections to derive a set of best practice guidelines for UX professionals. 

1.4 Contributions The defined practice guidelines, as outcome of this study, serve as a reference point on how to use GenAI effectively in UX design, with a focus on improving iteration speed, 

2

1.5. Thesis outline 

ideation diversity, and requirement coverage of UX artifacts. These guidelines discuss what GenAI tools can be used for which design tasks, how they benefit the design process, and what limitations should be considered. They further recommend employing GenAI as a design companion, collaborating with professionals for design tasks, but not replacing for manual work. Lastly, these guidelines describe the importance of prompt engineering and tool choice to optimize AI-generated output. 

1.5 Thesis outline The structure of this thesis is divided into six chapters. 

In chapter 2, the theoretical foundations of Artificial Intelligence (AI) technology and UX design are covered. Furthermore, it presents GenAI use cases, tool and technologies and its associated challenges and limitations from the literature. 

In chapter 3, the overarching methodology for conducting this thesis, Design Science Research (DSR), and the various methods utilized within it are explained. In particular, approaches for data collection, analysis, and evaluation are justified. 

In chapter 4, the results of the experts interviews regarding GenAI use cases in the industry are presented, as well as observations and experiences from the action research. 

In chapter 5, the best-practice guidelines derived for the effective use of GenAI in UX design are discussed, guiding professionals to utilize GenAI to its maximum potential and improve project metrics to design user-centric solutions. 

In chapter 6, a conclusion is given on the results, limitations, and further research directions. 

3

CHAPTER 2 

# Background and Related Work 

This chapter provides an overview of the relevant theoretical background and relevant literature. Section 2.1.1 explains traditional and generative AI technology, and mentions their applications. Section 2.1.2 explains UX design and the Design Thinking methodology. In section 2.2.1, current uses of GenAI in UX design with respective tools, associated benefits, and limitations are presented. 

2.1 Theoretical background 2.1.1 AI, GenAI, and their applications The term AI was first mentioned at the Dartmouth Conference in 1956, describing its ability to imitate the intelligence traditionally inherent in humans to perform complex human tasks, make decisions, and solve problems [50, 40, 15]. However, the term intelligence is much debated, as it suggests that machines are able to have original thought and could draw conclusions like humans, a statement that is not universally supported by studies [40]. 

As AI experienced a steady surge in popularity and importance over the last decade, a particular approach within it exploded at the end of 2022: the field of GenAI [9]. Tools such as ChatGPT, Dall-E, and Midjourney have made the generation of AI content in the form of text, imagery, and audio accessible to end-users. 

GenAI can generally be described by its ability to produce new and previously unseen information depending on the data on which it was trained [9]. In this study, tools will be classified as GenAI if they non-deterministically produce textual, visual, or auditory content based on prompts and thus go beyond the capabilities of traditional AI models that rely on predefined rules and classification tasks. This working definition is important to test various GenAI tools on their ability to produce creative content, a foundational requirement for UX design processes. 

5

2. Background and Related Work 

Large Language Models (LLMs) such as ChatGPT, Claude, and DeepSeek are a prime example of tools that fall under this definition. They work by predicting the next word that would naturally appear in a sentence based on patterns observed from large amounts of training data [47]. LLMs typically feature billions of parameters that are tweaked during training to achieve more accurate predictions. Special techniques, such as transformers, are used to keep track of context while generating longer passages of text to improve predictions and logically connect different parts of the output [12]. 

Another relevant use case for GenAI is image generation. To perform this task, tools such as Midjourney, Stable Diffusion, and Adobe Firefly use techniques such as Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), and Diffusion Models. A VAE works by first converting an image into a simpler, smaller representation that captures important features and then decoding it to generate the original image. A GAN consists of two networks, a generator that creates the image and a discriminator that compares the generated output against real-world images to assess and improve quality. Diffusion models generate images by creating and refining random noise into coherent visuals [42]. Both LLMs and image generation models utilize neural networks in generating output by learning complex patterns from large amounts of data. 

This ability revolutionized the digital world and the way individuals and organizations work [24]. GenAI tools and platforms have become an indispensable part of business organizations in various industries such as education [19], medicine [57], music [2], marketing [28], and IT [26]. Their speed, availability, and versatility in producing different kinds of content made previously tedious and labor-intensive tasks a matter of minutes, giving professionals the freedom to focus on other tasks while reducing labor costs for organizations. One industry in particular is expected to profit enormously from the introduction of GenAI: the field of UX design [23, 22, 31]. 

2.1.2 UX, UX design, and Design Thinking UX is a concept designed to explain how a user feels about an artifact such as an interface on a website, program, or app when using it in the real world [35]. It describes user emotions, beliefs, perceptions, physical and psychological responses, and behaviors that occur before, during, and after interaction. [3]. UX design revolves around the practice of using defined, often agile methods to create a positive user experience through joy, excitement, fun, emotions, and other added values when the user interacts with a digital product [1]. UX design is a naturally interdisciplinary practice and may cover the entire life cycle of a product, from planning, conceptualizing, defining requirements, designing, implementing, and testing. 

There are many methods and approaches used in UX design, and Design Thinking is one of the most well-established ones to create user-centric products [6]. Design Thinking was initially mentioned by Herbert A. Simon [41] in 1969 in an attempt to bring the field of design within the objective of rational sciences and thus make design scientific. In practice, a typical Design Thinking process generally encompasses five distinct design 

6

2.2. Related work 

phases: emphasize, define, ideate, prototype, and test [30]. These phases do not have to be followed in order and can be skipped or repeated iteratively, enabling a user-centric and agile design of UX artifacts. 

2.2 Related work 2.2.1 Utilization of GenAI in UX design along Design Thinking GenAI is currently used for numerous design tasks and is represented in all Design Thinking phases. An overview of these tasks with associated GenAI tools, workflows, and issues can be seen in figure 2.1. 

Figure 2.1: Overview on GenAI use cases, workflows, tools, and issues from the literature 

2.2.1.1 Emphasize 

The main objective of this phase is to determine the characteristics of the user group for which a digital product or service is designed. A problem statement is defined 

7

2. Background and Related Work 

by analyzing the needs and expectations of (potential) users and understanding the technical and market conditions of the product to be designed [54]. This data collection and analysis is usually done by conducting secondary research, behavior observations, interviews, surveys, or market analyses. 

LLMs such as ChatGPT or Google Gemini can aid the user research process by generating interview questionnaires and filling data gaps with simulated user information on relevant target groups, countries, and regions [20, 39, 46, 43, 22, 13, 13, 31]. In addition, GenAI tools can structure research documents and automate the analysis of user interactions, interviews, surveys, feedback, behavior, and repeating patterns [16, 13, 48, 31]. 

Use Case Description Tools References 

Handling data Organizing and gathering documents, statistical data and information 

Google Gemini, ChatGPT, Brandwatch, Heap Analytics, Amplitude AI 

[20, 39, 46, 43, 22, 13] 

Collecting User Needs 

Assisting in questionnaire design and simulating user behavior 

Google Gemini, ChatGPT, QoQo.ai 

[20, 13, 39, 31, 43] 

Analyzing User Needs 

Extracting key insigths from qualitative research 

Brandwatch, Heap Analytics, Amplitude AI 

[16, 13, 48, 31] 

Table 2.1: GenAI use cases for the design phase Emphasize 

2.2.1.2 Define 

In this phase, the project team typically performs a data synthesis of insights collected and analyzed from user research to define the problem statement and determine requirements and scope. A design brief should contain specific goals that will have to be met by the finished product [54]. Suitable data synthesis methods are user stories, user personas, and customer journeys. 

LLMs such as ChatGPT or Google Gemini can generate possible problem statements from background and user research, helping UX professionals define problem space while addressing potential biases and fairness [20, 13]. They can further communicate the design 

8

2.2. Related work 

challenges and implications associated with specific problem statements and provide alternatives to explore more potential design directions [13, 48, 43]. Lastly, GenAI tools can generate various UX artifacts such as user personas, user journey maps, and UX texts based on given prompts or predefined templates [16, 44, 34, 39, 31, 21, 46, 8]. 

Use Case Description Tools References 

Framing problem statements 

Gathering data about possible problem statements from different perspectives 

Google Gemini, ChatGPT 

[20, 13] 

Exploring design directions 

Highlighting design challenges and provide ideas for design exploration 

Google Gemini, ChatGPT 

[13, 48, 43] 

Generating texts and UX artifacts 

Generating UX artifacts based on provided input 

Google Gemini, ChatGPT, QoQo.ai 

[16, 44, 34, 39, 31, 21, 46, 8] 

Table 2.2: GenAI use cases for the design phase Define 

2.2.1.3 Ideate 

During this phase, different ideas (even improbable ones) are brainstormed and iterated to develop a suitable solution to the defined problem statement [52]. The design team can explore design choices and directions, evaluating and selecting the ideas that best fit the problem at hand to lay the foundation for prototype development [54]. Commonly used methods for brainstorming are mindmaps, sketching sessions, Thinking-Aloud, and Worst-Possible Idea. 

GenAI tools can assist in this phase by generating and reshaping visuals, texts, de-sign concepts, and patterns based on predefined inputs or prompts, and recommending alternative design variations [16, 13, 48, 21, 46, 22, 44, 34, 17]. They can offer sugges-tions for potential solutions to technical requirements and challenges, especially helping inexperienced designers come up with new ideas to tackle existing problems [44, 43]. 

9

2. Background and Related Work 

Use Case Description Tools References 

Brainstorming concepts and visuals 

Creating and adjusting design concepts and visual references 

Google Gemini, ChatGPT, relume.io, Brandmark, Midjourney 

[16, 13, 48, 21, 46] 

Providing problem solutions 

Suggesting solutions to technical requirements and problem statements 

Google Gemini, ChatGPT 

[44, 43] 

Visualizing ideas 

Providing design variations by suggesting or automatically adapting layouts and designs 

DesignScape, ReDraw 

[22, 44, 34, 13, 17] 

Table 2.3: GenAI use cases for the design phase Ideate 

2.2.1.4 Prototype 

The design directions settled on during ideation are prototyped in different ways to visualize possible solutions to the identified problem [52]. These visualizations give the design team the opportunity to evaluate, test, and settle on a layout, design, and navigation [54]. Typically, multiple prototypes for a digital product with different levels of fidelity (commonly low, mid, and high) are created in the process. This allows prototypes to be tested and refined before the design team works on the next level of fidelity. 

Numerous GenAI tools such as Uizard, Figma AI, Visily, and Midjourney can generate visual references, wireframes, and fully functional prototypes for specific design challenges and problem statements [22, 16, 44, 48, 39, 29, 46, 8]. These tools can provide suggestions that enable UX professionals to explore design alternatives of initial concepts, sketches, drafts, and wireframes. [44, 20, 51]. They can further create various components for design libraries, such as layouts, typefaces, icons, and images, used as inspiration or ready-to-use design elements [22, 17, 46]. These prototypes can then be automatically converted to code and stylesheets with LLMs such as ChatGPT or use case-specific tools such as Sketch2React that focus on front-end development [16, 44, 34, 39, 8]. 

10

2.2. Related work 

Use Case Description Tools References 

Generating prototypes 

Generating wireframes and functional prototypes 

Uizard, GamePlanner.AI, Bing image generator, Visily, Midjourney, Figma AI Plugins, Framer, Marvel, Framer, ProtoPie, taskade, Leonardo.ai 

[22, 16, 44, 48, 39, 29, 46, 8] 

Suggesting alternative designs 

Providing for design alternatives of UX artifacts 

Google Gemini, ChatGPT, Midjourney, Stable Diffusion, ReDraw 

[44, 20, 51] 

Defining design components 

Generating design components as inspiration or final versions for UIs 

Midjourney, Stable Diffusion 

[22, 17, 46] 

Generating code 

Generating HTML and CSS from low-fidelity mockups 

ChatGPT, GitHub Copilot, Sketch2React, Hugging Face 

[16, 44, 34, 39, 8] 

Table 2.4: GenAI use cases for the design phase Prototype 

2.2.1.5 Test 

The prototypes created can be tested with potential users to gather feedback on likes, dislikes, and potential issues. At this stage, the main objective is to validate whether the designed solution fits user needs in a real environment [54]. This phase is crucial to identify necessary changes to the prototype. Testing and prototyping are closely connected and are commonly repeated iteratively to create a highly user-centric product 

11

2. Background and Related Work 

that accommodates user needs. 

GenAI tools such as UserTesting and Userpilot can assist the user testing process by automatically analyzing test results and highlighting key issues regarding usability and accessibility with prototypes [22, 39, 29]. In addition, they can fill data gaps by simulating a wide range of personas and use cases to reveal further potential issues and areas of improvement [16, 44, 13, 39, 43]. 

Use Case Description Tools References 

Testing usability and accessibility 

Assisting standard usability and accessibility tests of prototypes 

UserTesting, Userpilot, Optimizely, Mixpanel 

[22, 39, 29] 

Simulating user interactions 

Simulating user interactions and filling data gaps 

Google Gemini, ChatGPT 

[16, 44, 13, 39, 43] 

Table 2.5: GenAI use cases for the design phase Test 

2.2.2 Across design phases The following GenAI use cases do not belong to specific design tasks and mention specific tools, but instead influence workflows across all design phases. The literature recommends employing GenAI in UX design as a design companion, working alongside designers to perform tasks such as creating user personas, problem solutions, and prototypes [44, 34, 31]. It is important to note that GenAI does not replace manual work, and UX professionals remain in control over all final design decisions. 

Use Case Description Tools References 

Collaborating with designers 

Facilitating human-AI collaboration by establishing GenAI as a co-creation companion 

No specific tools [44, 34, 31] 

12

2.3. Limitations and concerns with GenAI 

Use Case Description Tools References 

Table 2.6: GenAI use cases across design phases 

2.3 Limitations and concerns with GenAI The use of GenAI in UX design has many applications across design phases but faces significant limitations and concerns. UX professionals express uncertainty about the quality, user-centricity, truthfulness, reliability, diversity, and innovative nature of AI output that is required to perform complex design tasks appropriately [22, 48, 39, 29, 46, 8, 31, 44, 13, 21]. As the source of training data for LLMs is typically unknown, there are ethical concerns about potential copyright violations when using AI-generated content. [34, 48, 31, 21]. When collecting or handling user-specific data, UX professionals reported biases of GenAI models against ethnic background, gender, age, and profession [34, 29]. Another issue is the strong need for prompt engineering and human supervision to obtain output of sufficient quality and adherence to the design task at hand from GenAI tools [22, 20, 46, 8, 44, 34]. In addition, the adoption of GenAI tools in existing workflows can have negative implications for UX professionals and organizations. Organizations are concerned about a lack of creative diversity and employee motivation, as well as a strong reliance on GenAI tools to perform design tasks [22]. UX professionals report a loss of control over design decisions with heavy involvement of GenAI and are concerned about skill degradation and job replacement [44, 13, 22, 51, 46]. Lastly, GenAI tools have a tendency to disregard UX fundamentals such as user-centricity, accessibility, simplicity, and consistency in their outputs, raising the need for designers to heavily refine AI-generated output [44, 29]. 

These challenges make the adoption of GenAI practices in existing UX design workflows challenging and thus raise the need to establish concrete best practices that guide professionals in using GenAI effectively, highlighting its strengths and solving associated issues. The concrete limitations and concerns with GenAI and potential solutions to mitigate these issues can be seen in table 2.7. 

13

2. Background and Related Work 

Concern Description Recommendation References 

Low quality and biases 

Concerns about text accuracy, image resolution, errors, biases and overall quality in AI-generated content 

Supplementing AI-generated outputs with insights from user research, domain expertise, and training data while reviewing and refining generated outputs 

[22, 48, 39, 29, 46, 8] 

Lack of variety and innovation 

Challenges in creating varied and innovative design solutions with AI-generated output 

Diversification of inspiration from a diverse range of sources, prompts, and AI models to ensure creativity and innovation in designs 

[31] 

Insufficient user-centricity 

Difficulty for AI to effectively understand and meet specific user needs or goals due to lack of empathy and contextual understanding 

Involving real users in the process and critically evaluate AI-generated content and consider its relevance for addressing the problem at hand 

[22, 44, 46] 

Reliability issues 

Concerns about the reliability, authenticity, and potential misinformation from AI-generated content 

Involving real input data in prompts and providing transparency about where and how GenAI tools were used 

[13, 39, 21] 

14

2.3. Limitations and concerns with GenAI 

Concern Description Recommendation References 

Privacy issues Issues with privacy regarding the input of sensitive user data into AI models and copyright when using AI-generated content 

Making sensitive input data anonymous and exercising caution in choosing when to use GenAI assistance 

[34, 48, 31, 21] 

Ethical concerns 

Challenges in maintaining ethical standards and fairness while mitigating potential biases in AI-generated outputs 

Reviewing and refining AI-output manually to ensure alignment with ethical guidelines and values, establishing a governance and building onto the key human-centered design principles 

[34, 29] 

Need for prompt engineering 

Output quality of AI heavily influenced by the effectiveness of prompts provided by UX professionals 

Upskilling designers to acquire specialized technical skills to effectively utilize AI tools 

[22, 20, 46, 8] 

Reliance on human input and supervision 

Significant reliance on human input for validating and refining AI-generated content 

Using GenAI for repetitive and simple tasks, and manually working on complex tasks that require critical thinking 

[22, 44, 34, 46] 

15

2. Background and Related Work 

Concern Description Recommendation References 

Implications on UX professionals and organizations 

Lack of creativity and motivation of professionals, concerned with the development of becoming editors rather than creators due to extensive reliance on GenAI 

Using GenAI to create initial drafts and automate tasks, reserving creative work for designers 

[22] 

Loss of control over design decisions through heavy involvement of AI 

Evolvement of GenAI tools into intuitive, visually oriented, and collaborative systems that work alongside professionals, which will retain their decision capabilities 

[44, 13] 

Concern about gradual skill degradation and job replacement among designers, especially concerning junior employees 

No recommendations found 

[22, 51, 46] 

Limiting the creative diversity in organizations through increased use of GenAI 

Utilizing GenAI for creating initial drafts, and using professionals for decision-making, further adaptations and refinement 

[22] 

16

2.3. Limitations and concerns with GenAI 

Concern Description Recommendation References 

Disregard towards UX guidelines and fundamentals 

Challenges in connecting AI outputs with creative design ideation and adherence to UX best practices 

Provide training on how professionals can utilize GenAI, covering prompt writing, assessment and understanding of AI-generated output, and awareness about GenAI tools and technologies 

[44, 29] 

Overly expressed focus on visual novelty and UI design instead of core UX design principles such as user-centric design and usability dimensions 

No recommendations found 

[29] 

Table 2.7: Challenges and concerns about GenAI usage across design phases 

17

CHAPTER 3 

# Methodology 

This chapter explains the methodology for conducting this study. Section 3.1 presents the DSR framework that is used to design and evaluate a solution to the problem statement. Within this framework, several research methods are used. Section 3.2 presents the literature review and explains the selection criteria, the screening process, and data collection methods. Section 3.3 outlines the interview details and the questionnaire used. In section 3.4, the action research steps and the evaluation method are described. 

3.1 The Design Science framework 

The purpose of this methodology, as outlined by Hevner et al. [14], is to develop and evaluate artifacts that address practical problems and their application in real-world contexts. DSR aims to create innovative solutions using rigorous research methods to design, implement, and evaluate artifacts [32]. These methods can be iterated when necessary. The concrete process for DSR can be seen in figure 3.1. 

Figure 3.1: Application of DSR for this study, adapted from Hevner et al. (2004) 

19

3. Methodology 

To define the problem statement, the scope of the study, and review the state of the art, a systematic literature review and expert interviews were conducted. To design and develop an appropriate solution, action research was employed, in which the researcher themselves represented the test subject. During this research, an UX prototype for a potential habit-tracking application was designed, utilizing identified GenAI use cases from the state of the art. The observations and reflections during this process were documented, building the foundation for evaluating the created artifact. The final outcome of this study is a set of best practice guidelines regarding the utilization, or non-utilization, of GenAI in UX design. 

3.2 Literature review A systematic review of the literature provides a complete summary of the current literature relevant to the stated research questions [18]. This type of review follows a clearly defined scientific process that can be replicated and has the purpose of minimizing reviewer bias in decisions, procedures, and conclusions [3]. 

The following protocol for selecting suitable studies was used for the literature review: 

 Inclusion criteria: Articles in English, published latest 2020, that explicitly focus on the integration of GenAI into the UX design process or identify and discuss perceived benefits, challenges, and limitations regarding the adoption of GenAI in UX workflows. 

 Exclusion criteria: Articles in languages other than English, published before 2020, that are irrelevant to the topic and research questions at hand, or are non-peer-reviewed articles, opinion pieces, and editorials. 

 Databases: Google Scholar, Emerald, ResearchGate, ScienceDirect 

 Search string: "Generative" AND ("AI" OR "Artificial Intelligence") AND ("User Experience" OR "UX") AND "Design" 

Relevant studies were selected over two evaluation phases. Initially, the titles and abstracts of the articles found were screened to determine their relevance to the previously defined criteria. Studies that passed this screening were later subjected to full-text analysis to validate their relevance to research questions and selection for data extraction. 

A large number of studies had to be discarded due to their focus on the usage of UX practices for AI products and features, in contrast to how GenAI can assist UX design processes, which was the problem at hand. The concrete literature screening process can be seen in figure 3.2. 

20

3.3. Expert interviews 

Figure 3.2: The literature screening process and results 

Following the literature screening, a data extraction form was defined to capture relevant information from the selected studies. These data points consisted of the study objectives, research methodology, and GenAI use cases with respect to potential benefits, concerns, and limitations. These findings were clustered and categorized to collect insights on the state of the art of GenAI usage in UX design, which served as the basis for defining the interview questionnaire. 

3.3 Expert interviews 

Conducting expert interviews is an effective way to answer research questions about practical problem domains, facilitating the elicitation of detailed knowledge from domain experts while ensuring the completeness and precision of the results [55, 4]. 

To answer the first research question, a total of five UX professionals were interviewed to gather information on the current usage of GenAI for UX design in the industry. The interviews were semi-structured and lasted between 30 and 60 minutes. An overview of the interviewees can be seen in table 3.1 

Country Gender Role Experience Company Size 

Austria Female UX/UI Designer 5 Years 1.000 - 5.000 

Austria Female Accessibility Designer 9 Years 10 - 50 

India Male UX/UI Designer 2 Years 10 - 50 

Germany Female UX/UI Designer 2 Years 10.000 - 50.000 

Netherlands Male Director of Product Experience 

15 Years 100 - 500 

Table 3.1: Demographic overview of interviewed UX experts 

21

3. Methodology 

The semi-structured interview questionnaire can be seen in appendix A.1. The ques-tionnaire was divided into seven focus areas. The interviews started with a series of introductory questions about the interviewee and their role. Interviewees were further asked how and which GenAI tools they use for different design phases, workflows, and tasks. In addition, the impacts of GenAI on individuals and organizations were discussed. The interviews continued with questions about potential benefits, concerns, and limita-tions that professionals have experienced with the use of GenAI. In case GenAI was not utilized or only to a very small extent, interviewees were asked about the underlying reasons. The interviews concluded with several questions about best practices that individuals or organizations follow (if any) and the future development of GenAI in UX design. 

The interview questionnaire served mainly as a guide, meaning that the questions were prioritized, changed, or replaced based on the flow of conversation. 

3.4 Action research Action research focuses on the cyclical process of planning, acting, observing, and reflecting to bring about change and improvement in real-world domains [7]. This methodology places emphasis on problem solving and follows an iterative and reflective how-to approach [56]. This structure of the action research is proposed as follows: 

 Identifying the Problem: The problem domain was identified through secondary research, literature review, and expert interviews, revealing insights about current utilization and associated limitations of using GenAI in UX design in both literature and practice. 

 Planning and implementing the action: To evaluate the impact of using GenAI from the designer’s perspective, an UX prototype was designed based on the findings from the state-of-the-art research. The prototype focuses on encouraging the establishment of healthy habits and was designed following the Design Thinking methodology. This method has been proven to facilitate the design of user-centric products by engaging designers in ideation diversity and developing innovative solutions by democratizing the design through various stages of prototyping and testing [30, 6]. This approach provides a clear structure in the design process to employ and evaluate identified GenAI use cases. 

 Observing and documenting: During action research, the experiences, lessons learned, and observed impacts of the utilization or non-utilization of GenAI were continuously documented from the designer’s perspective. 

 Reflecting: Observations were interpreted by their impact on the effective design of UX artifacts. The effective use was measured by evaluating three key metrics: Ideation diversity describes the amount of different design choices and directions 

22

3.4. Action research 

that are explored across all design phases. Iteration speed describes the amount of time that it takes to create or adjust UX artifacts. Lastly, requirement coverage describes the percentage of previously defined requirements that were successfully included or considered in the design of a specific UX artifact. Based on these reflections, several recommendations on the appropriate use of GenAI are given. 

3.4.1 Evaluation These recommendations were mapped to best practice guidelines that assist UX pro-fessionals in using GenAI effectively to create user-centric products. The mapping was done by analyzing the implications of various GenAI tools for respective design tasks and phases, testing their limitations, and comparing AI-generated output with manual results in terms of accuracy, consistency, and user-centricity. These resulting guidelines cover GenAI use cases, recommended tools, associated benefits, and limitations in detail. 

23

CHAPTER 4 

# Results 

This chapter presents the results of this study. Section 4.1.1 outlines the main themes identified during the expert interviews. Section 4.1.2 presents the clustering of these themes into concrete GenAI use cases with associated design phases and tools that were used in the UX prototype design. Section 4.2.1 documents the design process with GenAI tools and prompts used, as well as observations, reflections, and recommendations made. In section 4.2.2, these recommendations were mapped to best practice guidelines that guide UX professionals to use GenAI effectively. 

4.1 Expert interviews 4.1.1 Current use of GenAI in UX design practices A high-level overview of recurring themes identified during the expert interviews can be seen in figure 4.1. A detailed list of themes with respective quotes can be seen in appendix A.2. 

25

4. Results 

Figure 4.1: Overview of themes identified from the expert interviews 

The interviewees universally highlighted the importance of GenAI for content creation, being able to quickly generate textual and visual output in the form of interview question-naires, initial document drafts, blog posts, sitemaps, research flows, and visual elements such as images, icons, and vectors. Interviewee #1 specifically uses Figma AI for UX writing and organizing design files by automatically renaming layers, saving a significant amount of time on these previously labor-intensive tasks. 

Interviewee #1: I use it [Figma AI] mainly for writing, creating icons, or renaming layers. 

Interviewee #2: I use GenAI [ChatGPT] commonly for research, e.g., for creating interview questionnaires or concept drafts. Sometimes I use it to create a rough outline for my deliverables. 

Interviewee #3: This [Stable Diffusion 3 & FLUX.1] allows me to quickly populate prototypes with relevant visuals instead of searching stock photo sites. 

26

4.1. Expert interviews 

Interviewees #1, #2, and #5 mentioned the reshaping of textual input as another significant use case for GenAI. LLMs such as ChatGPT are used to adjust the tonality of texts or simplify texts to lower language levels for different user audiences. Furthermore, they can translate texts while keeping track of contextual information such as target groups and their goals. However, manual quality checks and punctual refinements are necessary to ensure that UX artifacts fit the design problem at hand. 

Interviewee #2: I am aware that some people use AI to simplify language, e.g., rewriting texts or lowering the language level to B2. 

Interviewee #5: ChatGPT does a very good job at translating, but also understanding the context, nuance, and tonality of the text. 

Interviewee #5 mentions Dovetail as a suitable tool to greatly speed up the user re-search process by generating custom insights from large numbers of user transcripts via prompting. This was previously a very time-intensive process, and with GenAI assistance, designers can now dedicate more time to tasks that require a higher degree of critical thinking, such as prototyping and user testing. 

Interviewee #5: Dovetail is a program we use for recording and transcribing user interviews. That now does some pretty impressive automatic tagging, which previously was quite a mundane effort. 

Interviewee #3 mentions LLMs such as ChatGPT and Claude to assist in defining problem statements and potential solutions. ChatGPT is used to validate whether a defined problem statement is relevant and requires a solution or needs to be adjusted. Once a problem statement is defined, various LLMs such as ChatGPT or Claude are used to check digital products of competitors on the market and identify whether they faced similar issues and how they solved them. 

Interviewee #3: Once I determine that it’s a real problem, I use ChatGPT or Claude to check if other products have encountered similar issues. 

Interviewees #2, #3, and #5 described the function of LLMs such as ChatGPT and image generation models such as Stable Diffusion 3 and FLUX.1 as inspirational tools that are used to quickly generate visual references and initial concepts. Although these tools typically produce output that faces significant issues with consistency and user-centricity, and thus cannot be used as a foundation for UX prototypes, they help explore various design directions with little effort. 

27

4. Results 

Interviewee #2: AI is a powerful tool for ideation and initial con-ceptualization. 

Interviewee #3: I use tools like Stable Diffusion and FLUX.1 for generating visual references quickly. 

Interviewee #2 uses the Stark testing tool to validate the accessibility of designs. This tool reveals potential issues and areas of improvement, and provides a set of recommendations on how to fix them. Designers can choose which, if any, recommendations to apply, and Stark does not interfere with the design process. Interviewee #5 mentions that testing tools provide suitable recommendations, but do not typically recognize every issue and perform generally worse than professionals. 

Interviewee #2: We use tools like Stark to validate designs. The Stark sidekick provides suggestions for improving designs without changing something on its own. 

Interviewee #2 also used the plugin Figma to HTML to automatically generate HTML and CSS from Figma prototype screens. However, the quality of output is highly dependent on the specific use case at hand. Although the generated HTML is typically accurate, the CSS almost always has to be manually refined to a large degree. The interviewee mentioned that doing this task manually is usually faster than fixing prompts and refining AI-generated output. 

Interviewee #2: HTML code is mostly usable, but CSS almost always has to be manually refined. It depends largely on the use case. 

Interviewees #2 and #5 view the role of GenAI as a design companion that works alongside UX professionals, assisting mainly with simple tasks such as data analysis and refinement of documents or texts, and typically requires several iterations with designers to provide consistent output. Interviewee #2 specifically mentioned that the role of manual work remains crucial in creating user-centric products and cannot be replaced by GenAI. 

Interviewee #2: Another important note: AI should be viewed as a support tool, not a replacement for manual work. 

Interviewee #5: It really does take some back-and-forth collaboration with the tool to get it there [generate consistent output]. 

All interviewees faced several limitations when using GenAI tools. AI-generated content is often subject to bias, and completeness, diversity, and customization in outputs are not 

28

4.1. Expert interviews 

guaranteed. With regard to image generation tools especially, designers face challenges in telling GenAI tools exactly what to do via prompts, and often, even with multiple iterations of prompts, the results do not improve. Furthermore, GenAI tools typically do not adhere to established UX or organizational guidelines that must be met, such as the level of accessibility. Interviewee #5 uses a custom-built GPT with selected training data to avoid this problem. Especially for design phases that require a large degree of critical thinking, such as prototyping and user testing, GenAI outputs lack customization, meaning designers have to build these UX artifacts manually. 

Interviewee #2: A big challenge is bias. AI-generated content is often generic, and it is easy to lose your personal touch. Another issue is the quality of information - wrong or incomplete results are common. 

Interviewee #3: Figma AI plugins generate basic layouts, but they lack customization. Instead, I use Miro or UX Pilot for early-stage wireframing. 

Interviewee #5: We don’t use image generation. Whether it’s ChatGPT or Midjourney or any of those things. Just because, well, it doesn’t do the kind of stuff that we want. 

The Interviewees further faced ethical concerns with the adoption of GenAI into UX design practices. The rapid development of GenAI tools and their capabilities causes designers to express concerns about job replacement and skill degradation. Interviewee #4 mentioned a loss of control over design decisions by outsourcing an increasing number of design tasks to GenAI. Interviewee #1 reports resistance to the adoption of GenAI by some professionals and organizations, which struggle to accept this new technology as part of their daily work. This resistance is founded on uncertainty about how to use these tools, what outputs they produce, and an unwillingness to change established workflows. In contrast, users may also notice the use of AI-generated output in digital products, especially with visual content, negatively affecting their user experience and retention to the product. 

Interviewee #1: In my last job, many people demonized it [GenAI] and said: "No, we’ve always done it this way". But I believe that we can achieve a mindshift regarding AI. 

Interviewee #4: Talking about the ethical standpoint, do we really want that AI makes everything for us? I think it’s a powerful technology, but we need to use it as a tool. It doesn’t produce final results, it’s not an employee, so we shouldn’t use it as one. 

Interviewee #5: They [designers] need to make it the best project they’ve ever done because it might be the last one. Because AI might be doing it better than us any day now. 

29

4. Results 

4.1.2 Mapping of identified themes to GenAI use cases 

The expert interviews revealed ten recurring themes on the current use of GenAI in UX design. To further elaborate on current industry practices and prepare for the UX prototype design, a set of concrete GenAI use cases were defined that mention associated design phases and tools. In order to define these use cases, a mapping of the previously identified themes was done. 

An overview of these use cases and their mapping can be seen in figure 4.2. A detailed list of all use cases can be found in appendix A.3. 

Figure 4.2: Overview of mapped GenAI use cases with associated design phase and tools 

30

4.2. Action research 

4.2 Action research 

4.2.1 UX prototype design 

To evaluate the implications of GenAI use, an UX prototype was designed employing the GenAI use cases presented in figure 4.2. During the design process, observations from the designer’s perspective were documented and reflected upon. The UX prototype revolves around the promotion of healthy habits for potential users and provides features such as habit-tracking, automatic habit suggestions, dashboards, user and community interactions, and gamification elements. The example of healthy habits was chosen as it represents a rather niche use case, which tests the limits of current GenAI tools and available training data. The UX prototype was designed iteratively following the Design Thinking methodology. A visual reference of the prototype can be seen in figure 4.3. 

Figure 4.3: Screens of the UX prototype generated with Figma AI 

31

4. Results 

4.2.1.1 Emphasize 

Developing a research plan 

Developing a research plan marks the first step for the UX prototype design. This plan is a crucial document for structuring the research process and collecting important information about the problem at hand, potential users, and expected results. This information serves as the foundation for all subsequent design phases and tasks. For this and the following tasks, ChatGPT was used. Other LLMs such as DeepSeek and Claude were also tested but produced similar results and faced similar issues. 

ChatGPT prompt: I plan to design an UX prototype for a new app that aims to establish healthy habits in the daily lives of users. Could you create an in-depth research plan to gather information about this topic as a basis for the further design process? 

The resulting output can be seen in appendix A.4 

The resulting research plan missed several important sections, such as expected results and potential hypotheses. Another prompt was written to extend the output by including these sections and provide more detail about the research process. 

ChatGPT prompt (extend research plan): Could you add some expected results of the research results and potential hypotheses that can be validated? 

The resulting output can be seen in appendix A.5 

Conducting background research and defining an initial problem statement 

The generated research plan marks background research as the first step in gaining an overview of the problem space. The highlighted topic areas include mental health, personal well-being, self-improvement, and habit tracking. Based on these insights, an initial problem statement can be defined that guides the user research process. 

ChatGPT prompt: Regarding this research plan, could you conduct secondary research that shows the importance of the topic, identifies a potential problem statement, and presents features that could poten-tially solve those problems? 

The resulting output can be seen in appendix A.4.3 

32

4.2. Action research 

Conducting a market analysis For the next step in the research process, ChatGPT mentions a market analysis of existing habit-tracking solutions. These solutions should be analyzed in terms of their strengths, weaknesses, user pain points, and features to identify potential gaps for a new UX solution. 

ChatGPT prompt: Could you perform a market analysis that compares the features and shortcomings of the most relevant existing habit-tracking solutions on the market? 

The resulting output can be seen in appendix A.6 

Setting up the interview questionnaire The research plan recommends the use of interviews to assess the issues and goals of potential users. This is a crucial step for user emphasis and will guide the remainder of the design process towards user-centricity. 

ChatGPT prompt: Could you set up an interview questionnaire suitable for remote interviews of about 20 - 30 minutes in length, covering the key topic areas mentioned above to gather information about the user’s background, goals, pain points, and needs? 

The resulting output can be seen in appendix A.7 

Analyzing the interview results A total of six users, interested in the topic of mental health and healthy habits, were interviewed. The participants are between the ages of 22 and 30 with varying backgrounds ranging from technical to social sciences. Dovetail was used to summarize and analyze the interview results in terms of user pain points, goals, and personal motivation. This tool provides the option to upload transcripts or recordings and automatically generates specific insights via prompting. 

Dovetail Prompt #1: What pain points do users have in tracking and maintaining healthy habits, or have experienced with existing solutions? 

Dovetail Prompt #2: What personal goals regarding healthy habits are users trying to achieve? 

Dovetail Prompt #3: What motivates users to track, maintain, and change habits? 

The resulting outputs can be seen in figures 4.4, 4.5, and 4.6. 

33

4. Results 

Figure 4.4: Insights regarding pain points generated with Dovetail 

Figure 4.5: Insights regarding personal goals generated with Dovetail 

34

4.2. Action research 

Figure 4.6: Insights regarding motivational factors generated with Dovetail 

All interviewees reported that conscious and unconscious habits play an important role in their daily lives. They underlined the importance of maintaining positive habits and the need to change negative habits. Participants have universally worked with either digital or manual solutions to keep track of their habits before. However, four of them have given up on those solutions after several months of using them. 

The interviewees expressed their desire to form healthy habits for personal growth, a more structured daily routine, and better emotional health. In addition, the participants hoped to improve their exercise, diet, and sleep by establishing these habits. To keep users engaged in maintaining habits long-term, motivational systems that provide rewards for positive behavior play an important role. Personalization is crucial in adjusting a solution to the individual’s daily routine and personal preferences. 

All participants faced significant challenges in adopting and maintaining new habits or changing existing ones. A big obstacle is the lack of motivation or external support to form or maintain healthy habits. Existing solutions commonly do not provide rewards or incentives, or give users the feeling of responsibility, causing them to lose interest. Furthermore, interviewees reported that digital solutions in particular often sent too many notifications, were not intuitive to understand, lacked personalization, and locked important features behind a premium subscription. In addition, the interviewees tended to track a large number of habits at once when they started using a new solution, making them feel overwhelmed. Some participants reported feeling uncomfortable writing down bad habits and expressed worry that other, unauthorized people might see their data. 

The participants expressed a number of needs to address these challenges. A high degree of personalization plays a crucial role, allowing users to decide which habits to track 

35

4. Results 

and when to receive reminders. Gamification elements, in the shape of a score system, a progress bar, or visual feedback (e.g., a growing plant), are crucial to keep users engaged. The participants mentioned the importance of social factors, such as the possibility to share personal goals and achievements with friends and family. A successful solution needs to have a simple design with clear navigation, a relatively small number of notifications, and a way to enter data easily and quickly. AI features were seen as useful for giving individual suggestions for forming new habits (e.g., diet plans) or changing existing ones based on historical user data. Lastly, users reported the importance of choosing to keep information private and limit how their data are used. 

Observations 

ChatGPT generates a structured research plan that, at first sight, seems plausible to follow. However, the extent and depth of the research plan were rather small and felt generic in parts. This plan could be used with little adjustments for other use cases at a surface-level. Important topics typically represented in research plans, such as expected outcomes and hypotheses, were not covered initially [49, 27]. Upon changing the prompt, ChatGPT extends the research plan but does not provide the sources on which the output was based. Furthermore, there are some minor inconsistencies with research objectives that were later abandoned in the research plan (e.g., Investigate the role of technology in habit formation). ChatGPT mentioned sources from websites, health communities, and scientific papers, which caused the quality and scientific nature of these sources to differ significantly. Furthermore, it does not adhere to the evaluation of books and reports by health-related organizations as described in the research plan. 

In the competitor analysis, ChatGPT highlights several competitors for healthy habits but leaves out several established solutions (e.g., Habitify) and includes lesser-known ones (e.g., Fabulous). Some shortcomings being mentioned (e.g., Streaks being developed solely for iOS) are irrelevant at this stage of research. 

ChatGPT generates a structured interview questionnaire with relevant questions for each previously identified topic area. Most questions are framed openly, although there are some that provoke short or one-word answers (e.g., Are there specific triggers or reminders that help you stay consistent?). During the interviews, it became apparent that certain questions were not described precisely enough and partly confused the interviewees, requiring the interviewer to intervene and adjust the question (e.g., How do habits play a role in your daily life?, Would you prefer an app that is highly structured or one that is more flexible? Why?). Furthermore, the extent of 19 open and semi-open questions was too large for 20 - 30 minutes of interview without heavily prioritizing questions and adjusting the flow of conversation. 

Dovetail was able to accurately collect findings from the interview transcripts provided (recordings are also supported) that match the quality and scope of a manual analysis. The generated results match the given prompt and are intuitive to derive from one or more interview quotes. Some findings identified during manual analysis only appear in altered forms (e.g., personal growth) in the generated results, and instead Dovetail 

36

4.2. Action research 

did identify a few issues that were not covered in detail during manual analysis (e.g., long-term engagement). 

Reflection 

Figure 4.7: Overview of tested GenAI tools with associated implications in the design phase Emphasize 

Various tasks in this design phase, such as creating questionnaires or conducting back-ground research, are based on repeating patterns, and methods used do not change fundamentally between different use cases. The abundance of training data increases the quality of AI-generated output, which professionals can use as a design foundation rather than creating it from scratch. Using ChatGPT for this matter, or similar LLMs such as Claude and DeepSeek, greatly increases iteration speed. 

However, several quality issues become apparent with AI-generated output. The validity of sources for secondary research is partly inconsistent and some questions on the interview questionnaire feel unnatural and confusing when used in a real-world setting with interviewees. These issues can be solved with manual review and critical thinking rather quickly. In conclusion, GenAI is a useful tool in this design phase to generate a solid foundation but requires manual quality assurance to achieve the best results. 

For collecting insights from the expert interviews, Dovetail offers a significant improvement in iteration speed over manual analysis. Especially for a high number of interviews, manual analysis would take hours to days, depending on the use case. Prompts and associated AI-outputs can be created in minutes. Time saved in this way can be directed towards tasks that require a higher degree of critical thinking, such as ideation or prototyping. Since Dovetail relies on prompting, new insights, such as user goals and pain points, can be quickly generated when the problem statement or design directions change during the project. This provides additional flexibility in user research and results in increased ideation diversity. At this stage of design, requirement coverage was not affected as no requirements have been defined yet. 

37

4. Results 

Recommendation #1: Use GenAI as a research foundation and for data analysis, and use critical thinking to interview and emphasize users. 

4.2.1.2 Define 

Defining user personas 

The next step in the design process is to synthesize the interview findings into UX artifacts that facilitate deeper user emphasis. User personas are an important tool to represent potential target groups, summarizing their personal backgrounds, goals, pain points, and motivational factors that the UX prototype is aimed to accommodate. 

ChatGPT prompt: Could you take the following findings from the inter-view transcripts [insert results from 4.4, 4.5, and 4.6] and consolidate them into two user personas with the following attributes: Name, age, profession, location, a short user bio, their goals, and pain points? In addition, introduce a section with motivational factors and rate their importance to the persona on a scale of 1 - 10. 

The resulting outputs can be seen in figures 4.8 and 4.8. 

38

4.2. Action research 

Figure 4.8: First user persona generated with ChatGPT (only textual output) 

39

4. Results 

Figure 4.9: Second user persona generated with ChatGPT (only textual output) 

40

4.2. Action research 

Defining the problem statement 

With the generated user personas, the initial problem statement, seen in appendix A.4.3, can be revisited and reframed in a user-centric way. By concretely mentioning the issues of potential users and existing solutions, the problem statement provides a clear design direction for upcoming design tasks. 

ChatGPT prompt: Based on the secondary research [insert results from 4.4, 4.5, and 4.6] and in particular, the user personas [insert results from 4.8 and 4.9], could you derive a short and concrete problem statement that the UX prototype should aim to solve? 

The resulting output can be seen in figure 4.10. 

Figure 4.10: Problem statement generated with ChatGPT (only textual output) 

Brainstorming user stories 

User stories are another suitable way of user emphasis and were used to complement the user personas generated previously. They describe daily situations that potential users might experience, and mention pain points and possible solutions. They set the ground for brainstorming ideas and features of the UX prototype in the later design phases. 

ChatGPT prompt: Based on the user personas [insert results from 4.8 and 4.9] and the defined problem statement [insert results from 4.10], could you come up with two user stories that describe how potential users would interact with the solution in their daily life, emphasize their pain points, and how the solution can help solve them? 

The resulting output can be seen in appendix A.4.6. 

41

4. Results 

Observations 

The two user personas generated with ChatGPT relate to the findings of the interviews and summarize them in a suitable way. However, both personas are quite similar, seeming like they represent two individuals from the same user group instead of two different groups or two facets of the same group. This might hinder further design work by focusing on a rather one-dimensional user perspective early in the process. Some motivational aspects of those personas are very specific in parts (e.g., Privacy & Data Control), while other important factors (e.g., time and comfort) mentioned extensively in interviews are neglected. 

Similarly to the user personas, factors of time and comfort do not appear in the problem statement. While it generally captures the issues and goals of users, it does not follow a typical 5 W’s approach (who, what, where, when, why) and ends up being rather long and imprecise. Furthermore, it already provides a solution to the problem, which is not part of an UX problem statement [11, 5]. Thus, manual refinement is required to accurately capture the issue so that it can guide the further design process. 

The generated stories seem very generic in describing potential user issues and providing appropriate suggestions to solve them. Some steps are not described precisely and leave some confusion about the details (what is a Pause & Reflect session?, when is a notification considered non-intrusive?). Both stories feel very disconnected from previous research and lack clear descriptions (how can users choose a healthier alternative to smoking?). 

Reflections 

Figure 4.11: Overview of tested GenAI tools with associated implications in the design phase Define 

When provided with input data and a template, ChatGPT rephrased inputs collected from 

42

4.2. Action research 

user emphasis into two suitable user personas, since data consolidation typically follows repeated patterns that are easy for GenAI to capture. As this is a rather time-intensive effort that provides little benefit when done manually, there are significant improvements in iteration speed. However, manual refinement is necessary to ensure that no critical insights (e.g., aspects of time and comfort) get lost in the process. As this task revolves around data synthesis, ideation diversity, and requirement coverage were not affected. 

In contrast, using GenAI for defining an accurate problem statement carries additional risks. The problem statement is crucial in shaping the direction of further design phases, and requires critical thinking and deep understanding of the user’s problems. This task is difficult for GenAI to execute properly. In particular, ChatGPT tends to generate paragraphs of text that were not requested in the given prompt, such as mentioning a solution approach. This caused the problem statement to become saturated with information and imprecise. 

The user stories generated with ChatGPT lack in terms of accuracy and comprehensive-ness, making it difficult for designers to use them as a starting point to define user flows and brainstorm ideas for layout and functionality. Several steps described in the user stories remain imprecise and require refinement, which might take longer than defining user stories manually. In addition, it seems that ChatGPT describes two users using two different solutions, instead of the different users using the same one. Thus, these different ideas must be consolidated into one final idea first. 

Recommendation #2: Review AI-generated output to ensure that it contains truthful, unbiased, and diverse information and fits the problem at hand. 

Recommendation #3: Use GenAI for data consolidation and synthesis, and use critical thinking to create user flows and refine AI-generated output. 

4.2.1.3 Ideate 

Generating sitemaps, wireframes, and color schemes 

To start gathering initial ideas and deciding on appropriate design choices for layout, colors, and navigation, relume.io was used to generate a basic sitemap representing a potential structure of the UX prototype. relume.io further generated some landing page wireframes and a color scheme. 

relume.io prompt: Could you generate a sitemap for an UX prototype that focuses on promoting healthy habits and assisting users with tracking habits, reports & dashboards, notifications & reminders, AI suggestions for new habits, and gamification elements? 

The resulting outputs can be seen in figures 4.12, 4.13, and 4.14. 

43

4. Results 

Figure 4.12: A basic sitemap for the UX prototype generated with relume.io 

44

4.2. Action research 

Figure 4.13: Basic wireframes for the UX prototype generated with relume.io 

Figure 4.14: Basic color scheme for the UX prototype generated with relume.io 

45

4. Results 

Generating a landing page 

To gather additional inputs for a potential design direction, Blaze was used. This tool is primarily used for social media content creation but provides features for generating various screens, such as landing pages and mission statements. Blaze compiled a text document with images that introduce the user to the topic and solution and presented multiple sections describing the benefits, features, and unique selling points of the solution. 

Blaze prompt: Could you generate a landing page for an app focusing on promoting healthy habits and helping users with tracking habits, reports & dashboards, notifications & reminders, AI suggestions for new habits, and gamification elements? 

The resulting output can be seen in appendix A.1. 

Defining the user flow 

Taking inspiration from the output generated with relume.io and Blaze, a high-level user flow was defined manually that represents the main features and navigation of the UX prototype. 

When a user interacts with the solution for the first time, they will complete a personal-ization test that adjusts predefined settings and AI-suggested habits for tracking. The main navigation is split into five pages: A landing page providing an overview of the current progress, quick-action buttons leading to the various features of the UX prototype, and AI-driven suggestions for new or existing habits. Users will be able to add, delete, check off, and edit habits for tracking. They can view visual statistics and insights from a dashboard. Users will be able to add friends, share their personal achievements, and challenge other users to keep track. Lastly, users will be given customizable settings for notifications and privacy. The graphic showing the concrete user flow can be seen in figure 4.15. 

46

4.2. Action research 

Figure 4.15: Manually defined high-level user flow for the UX prototype 

Generating visual references and inspiration 

After the user flow was defined, Stable Diffusion and FLUX.1 were used to generate several potential design ideas and variations of the UX prototype. 

Stable Diffusion 3 & FLUX.1 prompts: Could you generate some designs for a mobile app that tracks healthy habits? The home screen should show today’s progress (progress bar or streak), upcoming daily tasks, quick action buttons for habit tracking, and AI-driven habit suggestions. A screen displaying a list of all tracked habits with their statuses and options to complete them. There should be buttons for creating and editing habits, and an option for adding notes to habits. Lastly, a screen that displays a dashboard with various visual statistics about the app usage and provides some habit recommendations based on the data. Make it visually clean, user-friendly, and engaging for Gen Z and Y users. 

The resulting outputs can be seen in figures 4.16, 4.17, and 4.18. 

47

4. Results 

Figure 4.16: General design variations generated with Stable Diffusion 3 

Figure 4.17: Dashboard design variations generated with Stable Diffusion 3 

48

4.2. Action research 

Figure 4.18: Design variations generated with FLUX.1 

49

4. Results 

Observations 

The sitemap generated with relume.io is very generic and only considers the given prompt in parts (mainly in the Features section). This tool was tested for other use cases (e.g., e-commerce site, retail shoe store) and produced nearly identical results. Furthermore, the tool heavily prioritized the inputs given in the prompt. Some features, such as dashboard and reminders, were given their own section, while elements such as gamification were mentioned only once. 

Similarly, the generated wireframes remain surface-level and the main navigation seems unfit for the given use case. The dashboard and reports feature were supposed to be merged into a single screen but were separated into different sections. Instead, the suggestions feature was placed in its own section instead of being integrated into the home screen as requested in the prompt. The suggested color scheme is very narrow, with a single neutrals scale and two colors for highlights. In addition, these colors do not conform to healthy habits, for which green, blue, or yellow tones are commonly used in reference products. 

Blaze is able to capture important features better and since it is mainly a tool for marketing and social media, it explains the overall benefit of the UX prototype well. However, the described features remain rather generic and imprecise. Strong emphasis is placed on product sales quotes, not on the content that will be provided. These limitations negatively affect the output quality and its usefulness for UX writing and driving user flows. Thus, the resulting user flow had to be defined mostly manually. 

The image generation tools Stable Diffusion 3 and the AI model FLUX.1 produced outputs of significantly varying quality. Image-generation models have the tendency to produce unreadable text and confusing icons, which reduces the clarity of the design. As seen in figure 4.16, representing a potential home screen for the app, AI-generated outputs become significantly less accurate the more features are requested within a single screen. 

Additionally, the factor of randomness in image generation plays an important role, the same prompt and execution can produce vastly different results. As seen in figure 4.17, the left screen captures the user requirements quite well by following a clear layout and presenting a mix of textual statistics and visual graphics. However, the right screen does not nearly display these qualities to the same extent. 

The model FLUX.1 generally produced more accurate results that closely match the visual appearance of existing user interfaces and thus are a better fit for this use case, as seen in figure 4.18. In terms of actual content, both models tend to mix up clues given in the prompt and consolidate them into a single screen in a seemingly random manner. 

50

4.2. Action research 

Reflections 

Figure 4.19: Overview of tested GenAI tools with associated implications in the design phase Ideate 

Both relume.io and Blaze provide results that are not usable without manual refinement, causing only minor improvements in iteration speed and ideation diversity. The tools have had a negative impact on requirement coverage, as some features and goals (e.g., gamification) clearly defined in early steps were discarded or given very little attention. A contributing factor here is that these tools were not optimized for UX design but rather for websites and social media. Thus, the output generated was only viable as an initial inspiration for possible layouts and UX writing. Ideation typically requires a significant amount of critical thinking and open exploration, factors that are difficult for GenAI to appropriately replicate, as they are trained on already existing content and repeating patterns. As a result, generated outputs require significant manual adjustments to fit the problem statement at hand and the targeted user groups. 

Generating visual references after defining the user flow with Stable Diffusion 3 and FLUX.1 proves to be an appropriate way of exploring the design space and supports ideation diversity. However, the randomness factor plays an important role, meaning that trying various prompts and iterations is crucial to generate suitable references for different design directions. However, these images face issues with consistency and alignment with previously defined user needs, which causes them to have a negative effect on requirement coverage. Since these images strongly replicate user interfaces in existing products, a more fitting example can typically be looked up manually just as fast, leaving no improvement for iteration speed. 

Recommendation #4: Test various GenAI tools and find the best fit to the given use case, as shortcomings of these tools are usually not communicated. In particular, use image generation tools to generate visual references, and avoid using tools for creating layouts and UX writing. 

51

4. Results 

Recommendation #5: Collaborate with GenAI to visualize new ideas. A possible workflow is to define an initial prompt based on results from the user emphasis and problem statement, use GenAI to generate visual references, analyze their fit to the user’s needs, adjust the prompt to new design directions if applicable, and iterate. 

4.2.1.4 Prototype 

Generating wireframes with Wireframe Builder 

Based on the previously defined user flow and outlined navigation, the Figma plugin Wireframe Builder was used to automatically generate basic wireframes. 

Wireframe Builder prompt: Could you generate wireframes for an UX prototype inspired by healthy habits? The home screen should display a daily progress bar or streak, an encouraging message, quick-action buttons to add and change habits, and suggestions of new habits. Furthermore, add the following screens: A calendar view of all tracked habits, with options to check off, edit, and add notes or reflections. A dashboard with visual statistics (streaks, progress over time) and AI-generated habit suggestions. A feature in which users can share achievements and challenge friends to maintain habits. Lastly, include options to personalize notifications, adjust privacy settings, and modify suggestions. The onboarding flow includes a sign-up page, a personalization survey, and a login screen before reaching the home screen. These features should be accessible from the navigation bar at the bottom. 

The resulting output can be seen in figure 4.20. 

52

4.2. Action research 

Figure 4.20: Wireframes generated with the Figma plugin Wireframe Builder 

53

4. Results 

Generating wireframes with Uizard 

Another GenAI tool mentioned in the expert interviews is Uizard, an AI-assisted auto-designer that generates UX wireframes and mockups based on prompts, screenshots, and predefined templates. Uizard did not support prompts longer than 300 characters, which means that inputs had to be kept precise. 

Uizard prompt: Generate a wireframe for an UX prototype to track healthy habits. A home screen with daily progress & tasks, a calendar view of all tracked habits with options to check, edit, and add notes, a dashboard with visual stats and AI-generated suggestions, a friends & social sharing feature, and a screen with personal settings. 

Uizard prompt (describing style): Design a clean, modern, and mini-malistic UI with soft, calming colors. Use rounded edges, ample white space, and intuitive layouts. Prioritize accessibility with clear typogra-phy and engaging but non-overwhelming visuals, suitable for Gen Z and Y users. 

Uizard Prompt (adding personalization survey): Could you generate a personalization survey that is shown when the user logs in for the first time, presenting them with a series of questions about personal, mental health, and habit-related information used to adjust settings, preferences, and habit suggestions? 

The resulting output can be seen in figure 4.21. 

54

4.2. Action research 

Figure 4.21: Wireframes and design alternatives generated with Uizard 

To test the screenshot scanning feature of Uizard, a series of low-fidelity paper mockups representing the main screens of the UX prototype were created. Scans of these paper screens were uploaded to Uizard and used as a foundation for wireframe generation. 

55

4. Results 

Figure 4.22: Paper mockups and resulting digital wireframes 

56

4.2. Action research 

Generate wireframes with UX Pilot and Figma AI 

UX Pilot and Figma AI prompts: Could you generate multiple screens for an UX prototype to track mental health habits? The home screen should display the progress of today (e.g., by a progress bar or streak), the daily habits to do, quick-action buttons for adding and editing habits, and AI-driven habit suggestions. Include the following main sections: A screen showing all tracked habits with options to check, edit, and add notes. A dashboard with visual statistics (e.g., streaks, progress over time) and AI-generated habit suggestions. A screen where users can share achievements and challenge friends to maintain habits. A screen with options to personalize notifications and adjust privacy settings. The onboarding flow includes a sign-up page, a personalization survey, and a login screen before reaching the home screen. The navigation should be intuitive, using a bottom tab bar for quick access to core features. Make it visually clean, user-friendly, and engaging for Gen Z and Y users. 

The resulting outputs can be seen in figures 4.23 and 4.24. 

57

4. Results 

Figure 4.23: Wireframes generated with UX Pilot 

58

4.2. Action research 

Figure 4.24: Wireframes generated with Figma AI, the two on the left for the use case of healthy habits, the right one for food delivery as comparison 

During further experimentation with Figma AI, the prompt was modified to describe the desired style and content in more detail to evaluate possible effects on output quality. 

Figma AI prompt (adjusted): Could you generate a wireframe for a healthy habits UX prototype that features three sections? Firstly, a progress bar that shows the days of the week in which the app has been used, and on the right, a box with the number of days representing the current streak and an icon. Secondly, a list of today’s habits, where each element has an icon, some text, and an option to check off. Add quick-action buttons to add and edit habits. Lastly, a section 

59

4. Results 

with a header that features some suggestions for new habits. These suggestions should employ an UI card design with an image, text, and a tag that describes their category. Choose a calming color scheme and readable font, and follow a minimalistic yet appealing design. 

The resulting output can be seen in figure 4.25. 

Figure 4.25: Wireframes generated with the new prompt with Figma AI 

60

4.2. Action research 

Generating vectors with Recraft Recraft is a tool for generating various types of images through prompting and specializes in vector art. The generation can be modified by adjusting settings for the image background, color palette, and artistic style. 

Recraft prompt (mascot): Could you generate an image of a friendly vegetable buddy for a healthy habits app? 

Recraft prompt (background image): Could you generate an image of a calming forest scene for a healthy habits app? 

Recraft prompt (logos): Could you generate a simplistic logo for a healthy habits and mental health app? 

The resulting output can be seen in figure 4.26. 

Figure 4.26: Vector graphics and logo ideas generated with Recraft 

61

4. Results 

Generating and adjusting texts with ChatGPT As mentioned in the expert interviews, LLMs such as ChatGPT are used to generate placeholder and finished texts for UX prototypes or to change the tonality and simplicity of existing texts. 

ChatGPT prompt: Could you generate a quick UX text describing how to track daily habits of the user in a healthy habits app? 

The resulting output can be seen in figure 4.27. 

Figure 4.27: Descriptive UX prototype text generated with ChatGPT (only textual output) 

ChatGPT prompt (first adjustment): Could you change the tonality of this text to be a bit more playful? 

The resulting output can be seen in figure 4.28. 

Figure 4.28: Descriptive UX prototype text generated with ChatGPT (only textual output) 

62

4.2. Action research 

ChatGPT prompt (second adjustment): Could you keep it playful but make the phrasing sound a bit more natural? 

The resulting output can be seen in figure 4.29. 

Figure 4.29: Descriptive UX prototype text generated with ChatGPT (only textual output) 

ChatGPT prompt (third adjustment): Could you rephrase this text into simple language, understandable for users with B1 level? 

The resulting output can be seen in figure 4.30. 

Figure 4.30: Descriptive UX prototype text generated with ChatGPT (only textual output) 

Observations 

The generated wireframes face a number of issues. As Wireframe Builder does not provide placeholder images, it is unclear what some sections of the wireframe are supposed to represent (e.g., Your Progress Today on the home screen), causing the overall layout to 

63

4. Results 

appear confusing. The section Suggestions is presented twice with varying designs, once as icons with text, and once as UI cards with images and respective tags. On the Home screen, the user’s streaks (how many days the app was used in succession) were split into two sections for daily and weekly use, with the latter placed at the bottom, instead of at the top, as requested in the given prompt. The encouraging message is underrepresented and appears solely as a small paragraph Let’s build healthy habits below the user’s icon. Several other screens face similar consistency issues. They feature a row of buttons with icons and single-worded descriptions (e.g., in the screens Habit Tracking and Friends & Social), which leads to confusion about their purpose. The section for daily tasks is repeated on the screen for Habit Tracking and Friends & Social, serving no appar-ent benefit. The screens Personalization Survey and Settings generally fit the given prompt but are kept short and imprecise, not offering much customization to the user, as was clearly requested. Lastly, the taskbar at the bottom is very inconsistent, appear-ing with alternating icons and text, and is missing altogether on the Habit Tracking screen. 

Via prompting, Uizard generated a variety of screens for the requested UX prototype and provided some design variations with it. However, the quality and user-centricity of the produced screens are clearly lacking. The screens were generated with the High Precision setting of Uizard, and they mostly had the appearance of first drafts rather than medium- or high-fidelity wireframes. Several screens, such as Sign Up and Settings, appeared confusing because the title and description did not match the content of the screen. It seems that unrelated inputs given in the prompt, in this case calendar view and sign-up, got mixed up and merged into the same screen. Furthermore, the prototype faces numerous consistency issues. The screen widths are consistent, but the length differs as content is simply being added without an option to scroll. The tabs present in the bottom navigation do not fit the generated screens, making navigation unintuitive. Some screens, such as Friends & Social, were requested on the prompt but neglected in the initial output. This screen had to be manually added later by another prompt. On the contrary, the screen Notifications appears in the output but were never mentioned in the prompts, leading to the assumption that some parts of the UX prototype were hallucinated by AI. In addition, output quality differs significantly between screens. More standardized layouts, such as the calendar and notifications, look polished, are intuitive to understand, and are suitable for this use case. Screens such as Dashboard and Settings appear both visually and contextually confusing, with the description and purpose of the presented buttons remaining imprecise and unclear. This is the case for the personalization survey in particular, which has a seemingly random selection of incoherent questions, unclear navigation, and visually unappealing design, greatly compromising its ability to collect insightful preferences from the user. It seems like these screens were generated one by one, with no overarching theme or design direction that guides the entire prototype design. Thus, the overall navigation and functionality of the prototype simply do not work for the given use case. 

64

4.2. Action research 

However, the design alternatives feature was helpful to explore design directions a bit further, and for the Settings screen, a clear improvement was made both visually and contextually. 

Lastly, since Uizard has a 300-character limitation on its prompts, it was impossible to give more detailed context right from the start. Instead, new screens had to be periodically added to the project where features could be described in more detail. 

With screenshot scanning, Uizard achieves partly better results. The layout of Home was accurately recreated, with images and fitting text placed in the correct spots. However, several buttons present in the paper mockups were entirely neglected during wireframe generation, raising the need to manually refine the produced screens. There were similar problems for the Dashboard, several buttons and icons were missing, and the calendar layout at the top was faulty. 

Although screenshot generation generally seems to provide more accurate results than prompting, it requires critical thinking and manual work to create paper mockups. GenAI struggles to assist with this task. 

Compared to the previous tools, UX Pilot and Figma AI produced the most accurate output yet. The screens in figure 4.24 initially generated by UX Pilot capture several user requirements, such as habit suggestions and a simple color scheme, while maintaining a clear and intuitive layout. However, the content and design choices do not go into much depth, simply following a simple purple and white color palette with a few icons and visual elements. The AI suggestions are described solely by text, whereas Figma AI presents them in boxes with icons and a more detailed description, as seen in figure 4.23. Design-wise, Figma AI seems to take a lot of inspiration from existing user interfaces and templates, as content does not vary much for different executions using the same prompt. However, the use case described in the prompt causes notable changes. As seen in figure 4.24, the generated screen for a food delivery app has a much more polished look and features content at detail level (e.g., star rating, price range, and distance for restaurants). For more niche use cases, such as healthy habits, Figma AI faces numerous issues in producing consistent and intuitive screens. Buttons are unorganized, sometimes appear twice (e.g., add habit) and do not fit the screen width. 

After the prompt had been adjusted several times, Figma AI was able to generate a more fitting and visually appealing design, producing a clear layout with UI card designs and contextual buttons (e.g., Expore All), as seen in figure 4.25. It appears that Figma AI closely follows predefined templates when generating wireframes, as the same design patterns (e.g., UI cards, lists) appear with minimal changes over multiple prompt executions. This enables the accurate generation of simple design elements, but it is nearly impossible to have Figma AI generate more complex sections that go beyond standard layouts. For instance, the timeline at the top of the rightmost screen was not accurately reproduced. It was supposed to highlight the days of the week in which the app has been opened and display a number with the current streak. 

The exemplary vector graphics generated with Recraft are accurate depictions of the 

65

4. Results 

given prompts and fit the theme of healthy habits quite well. Recraft provides some alternatives when an image is generated, most of which are very similar with only minor changes. 

The generated logos are less suitable for the given use case. They appear quite generic and nearly all design variations contained leaves and the silhouette of a person, which were not mentioned in the prompts. Changing the prompt to display different objects instead only had a minor impact on the output. The logos generated with exemplary text appeared to be more refined but did not follow the simplistic requirement given in the prompt to the desired extent. 

The text generated with ChatGPT sounds intuitive to understand and fits the use case of healthy habits. Different aspects of the text can easily be modified, as seen with the stated prompts. Several iterations of prompts may be necessary to obtain text passages that fit the given use case and sound natural to human readers. Manual analysis and the tool Text Inspector by Weblingua show that the simplified text achieves a higher readability score compared to the previous texts due to a lower usage of academic words and words of language level B1 or higher, shorter sentences, and active phrasing. 

Reflections 

Figure 4.31: Overview of tested GenAI tools with associated implications in the design phase Prototype 

Both Wireframe Builder and Uizard produced screens that resembled early drafts or low-fidelity wireframes. Figma AI failed to meet some of the user needs defined previously 

66

4.2. Action research 

(e.g., progress bar, quick-action buttons) and faced problems with consistency and visual appeal, resulting in poor performance in requirement coverage. UX Pilot was able to capture these requirements better, providing small but noticeable improvement. In addition, the output quality depends largely on the given use case. Commonly used solutions such as travel and delivery apps seem to be much more present in GenAI training data and thus are replicated much more accurately than more niche use cases such as healthy habits. For this use case, most of the screens produced are only suitable as a means of inspiration for manual design. 

The vector graphics generated with Recraft can be used as placeholder images and as a means of inspiration to get an idea of how the final design might look and feel, resulting in a minor improvement in iteration speed and ideation diversity. However, these graphics are not suitable to be used in refined prototypes without manual editing due to a lack of quality and customization. 

ChatGPT is a suitable tool to generate and change UX texts in prototypes. Due to its flexibility in adjusting the length, tonality, and complexity of texts, LLMs can greatly improve iteration speed. Prompt engineering is crucial to achieve more natural-sounding texts, especially when working with playful or quirky tonalities. If used for texts in finished prototypes, manual quality assurance is a necessary step to validate whether the generated texts fit the use case and appeal to potential users. 

For all GenAI tools tested, it became apparent that prompt engineering is a crucial factor in obtaining valuable results. Typically, several iterations of prompting are necessary to generate screens that are, to some extent, usable as means of inspiration or first drafts. This process takes time and, due to hallucinations and the factor of randomness, useful results are not guaranteed. Especially for mid- or high-fidelity designs and detailed vector graphics, the majority of AI-output does not have the level of quality to be used as a foundation for further design, and screens have to be almost always built from scratch. Thus, AI-generated wireframes do not have a positive impact on iteration speed, and in some cases, writing the most fitting prompt took longer than constructing a low-fidelity wireframe manually. These tools seem to rely on a rather restricted pool of training data, which heavily restricts ideation diversity. With a detailed prompt, more complex designs can occasionally be created but require designers to know exactly how the final design should look. 

Recommendation #6: Formulate prompts in simple language and provide as much detail about the task as possible. Repeat prompts that yield promising results at least once to view different output variations and find potentially better results. 

Recommendation #7: Utilize visual GenAI output, such as reference images, logos, and vector graphics, during the design process. Present text-based output, such as UX texts, and manual work in final UX prototypes. 

Recommendation #8: Use GenAI as inspiration to quickly explore design directions and alternatives, and use critical thinking to settle on a direction and create fitting wireframes. 

67

4. Results 

4.2.1.5 Test 

Accessibility testing and suggestions 

Testing is the next crucial step in evaluating whether the designed prototypes fit the defined user needs and design guidelines. Stark is a testing tool that works directly as a plugin within Figma. Specifically, it focuses on accessibility and provides suggestions to automatically fix identified issues. The following screens were originally created with Figma AI and used for accessibility testing with Stark. 

Figure 4.32: Wireframes before and after adjustments for accessibility with Stark 

Stark provides several features for testing accessibility, including contrast, typography, touch targets, and various vision impairments. This tool can automatically scan screens in Figma for accessibility issues and areas of improvement, and provides a selection of suggestions as potential fixes. These suggestions have to be manually chosen and are not applied automatically, allowing designers to improve their designs without being invasive. 

Observations As seen in figure 4.32, Stark improved contrast ratios and text size, making the design more readable and the different sections more distinguishable, while having no effect on overall layout and design choices. However, there are limitations to this tool. Stark does not understand the context of the content provided in the selected wireframes. Thus, suggestions are made that solely fix accessibility issues but might not fit the overall design and purpose of the given use case. For instance, the grayed-out text below habits, indicating a completed status, was recolored into pure black, causing 

68

4.2. Action research 

this contextual information to be lost. Thus, manually reviewing these suggestions is required to keep all the necessary information. Reflections 

Figure 4.33: Overview of tested GenAI tools with associated implications in the design phase Test 

While Stark fixes accessibility issues fairly consistently, it appears to be rather a surface-level tool. Suggestions are minor, and several times multiple suggestions for the same issue have to be applied to get the desired results. This is counterintuitive, as occasionally the tool disagreed with the fixes it made previously, causing confusion for the designer. In addition, issues highlighted by Stark can easily be spotted by a designer manually, resulting in only a minor improvement in iteration speed. Ideation diversity and requirement coverage were not affected. Recommendation #9: GenAI may provide very surface-level solutions, use manual reviews for tasks that require emphasis with users. Recommendation #10: Do not assume that GenAI works correctly or provides compre-hensive results, but perform manual quality assurance. 

4.2.2 Mapping of recommendations to best practice guidelines Specific recommendations have been defined that guide the use of GenAI in UX design for all phases of Design Thinking. To further elaborate on them, best practice guidelines were defined that explain the implications of GenAI use in more detail and support designers in developing user-centric products by optimizing iteration speed, ideation diversity, and requirements coverage. In order to define these guidelines, a mapping of the previously stated recommendations was done. Some guidelines, such as Manual work for critical tasks, were derived from several recommendations that describe the importance of manual refinement and the limitations of GenAI. Other guidelines, such as Test tools and models and Prompt engineering were mapped from a single recommendation. Several recommendations, such as Test of ideas and collaboration and Text and visual output impacted multiple guidelines each. The concrete mapping can be seen in figure 4.34. 

69

4. Results 

Figure 4.34: Mapping of recommendations to best practice guidelines 

70

CHAPTER 5 

# Discussion 

GenAI tools have shown numerous applications to aid in the design of user-centric products. This technology can improve existing design workflows and UX project metrics. However, there are limitations to these benefits. When employing GenAI in UX design practices, several technological, social, and ethical aspects must be considered. 

5.1 Best practice guidelines for the effective use of GenAI in UX design 

Seven guidelines were defined that guide UX professionals in using GenAI effectively to improve iteration speed, ideation diversity, and requirements coverage when designing UX artifacts. These guidelines specifically consider the limitations and concerns associated with GenAI. 

Guideline #1: Employ GenAI tools as companions guiding design, not replacements for manual work. 

GenAI tools can assist through the entire UX design process and collaborate with professionals. This collaboration requires a classification of design tasks into tasks that can be mostly automated by GenAI, tasks that almost entirely rely on manual work, and tasks that are best done with a combination of GenAI and human output. Mostly automatable tasks include the creation of user research plans, interview questionnaires, background research, data analysis, and data synthesis, in which the role of designers lies primarily in manual supervision and refinement. In contrast, tasks associated with a higher degree of critical thinking, such as creating problem statements, user flows, and wireframes, and conducting accessibility tests, typically require a level of human reasoning that is currently almost impossible for a GenAI model to accurately replicate. 

71

5. Discussion 

Collecting inspiration and exploring design directions and alternatives is a task best done by designers and GenAI. GenAI tools can generate visual references quickly, which designers can assess in terms of fit to the problem at hand, make potential adjustments to prompts, and iterate to eventually settle on a design direction. 

It is important to note that, since GenAI tools do not guarantee quality, accuracy, or consistency in their output, human oversight remains crucial for designing user-centered products, regardless of the design task at hand. Human oversight includes checking whether AI-generated key findings are present in the given input data, or validating whether an AI-generated UX prototype fits the problem at hand and addresses user needs. The complex nature of user behavior typically requires personal emphasis and usually does not follow clearly defined patterns on which GenAI tools were trained. Replacing manual work and relying entirely on GenAI output for specific design tasks could greatly compromise design quality. 

Guideline #2: Conduct prompt engineering to optimize AI-generated output. 

GenAI tools generally perform better when provided with as much relevant context about the problem at hand and user goals, issues, and needs as possible. To further optimize AI-generated output, prompts should be written in simple and concrete language. Complex textual structures, such as long sentences, subordinate clauses, or a large number of commas, dashes, and semicolons, should be avoided, as they can negatively influence the understanding of the GenAI tools for the required task. Prompts should not contain information that serves no benefit in explaining the requested task, as unnecessary details can promote GenAI hallucination. Longer tasks should be broken down into smaller, more manageable pieces that GenAI tools can execute sequentially to better understand the given task and keep track of context. 

Since GenAI tools produce results non-deterministically, executing the same prompt and settings several times may produce more suitable results. Some GenAI tools, as is the case with most image generation models, provide additional parameters, such as artistic style, visual intensity, and color palettes, that can be tweaked to adjust the output. Trying different combinations and evaluating their effect on output quality and fit is important to achieve the best results. However, optimization of prompts and AI-generated output should not take longer than manually creating output of similar quality. 

Common best practices for prompt engineering include techniques such as Few-Shot Learning, in which demonstrations about the task and desired results are provided in the prompt to achieve better AI-outputs [25]. Another technique is Chain-of-Thought Prompting, suitable for tasks that require intensive reasoning before a response can be made. In this technique, GenAI tools are given exemplary tasks, desired results, and intermediate reasoning steps to provide them with a reference point on how to solve the task in a structured way [38]. 

72

5.1. Best practice guidelines for the effective use of GenAI in UX design 

Guideline #3: Use GenAI tools to redirect manual efforts toward more complex tasks. Do not employ GenAI tools as a default for all stages of design. 

GenAI can significantly improve project metrics, particularly in the design phases Empha-size, Define, and Iterate. This is especially true for tasks that follow defined methodologies and repeating patterns, as discussed in Guideline #1. By using GenAI to quickly generate a foundation for UX artifacts such as user personas, designers can dedicate more time to tasks that require a higher degree of critical thinking, such as defining user flows or creating high-fidelity prototypes. This represents a significant benefit of GenAI in UX design, in giving designers more time to focus on critical tasks that otherwise would be done at surface-level or left out completely, as commonly done with user testing. For these tasks, prompt engineering and manual refinement of AI-generated output may not provide suitable results and take more time than manually designing from scratch. This shows that the use of GenAI tools is not yet suitable for all design tasks and phases, and manual work is an irreplaceable part of UX design. 

Guideline #4: Test different GenAI tools and models to find the best fit to the design problem at hand. 

GenAI tools and models are typically optimized for specific tasks and a certain type of output (e.g., ChatGPT for scientific writing, Blaze for social media content). They might provide accurate results but are not guaranteed to be a good fit for the given use case. This is especially true for niche use cases, such as healthy habits discussed in this study. There are numerous GenAI tools available on the market, which were tested for a real-life problem statement to determine which one is the best fit. This study recommends the use of LLMs such as ChatGPT for researching and UX writing, Blaze for social media writing, Dovetail for user insight analysis, Stable Diffusion 3 and FLUX.1 for generating visual references, and Figma AI and UX Pilot for prototype inspiration. These tools and use cases are further discussed in Guideline #5, #6, and #7. When no GenAI tool is capable of accurately assisting a specific design task, manual work is recommended, as mentioned in Guideline #3. 

Guideline #5: Use GenAI tools to speed up the research process, especially to generate insights from user interviews. 

During the typically standardized user research process, LLMs such as ChatGPT or Claude are recommended to quickly generate research plans, background and competitor analyses, and interview questionnaires, as they rely on methodologically defined patterns that are easy for GenAI tools to capture and adapt to the problem at hand. Dovetail is recommended to quickly extract key user insights from interview transcripts and recordings via prompting due to its accuracy in results and low risk of hallucination. 

73

5. Discussion 

Guideline #6: Use GenAI tools to generate and adjust UX texts by changing complexity and tonality. 

LLMs such as ChatGPT or Claude offer a high degree of flexibility in generating UX texts for specific screens, functions, or notifications in UX prototypes. Various text metrics such as length, tonality, and complexity can be easily adjusted via prompting. Providing context on the problem statement and user needs helps to ensure precision in AI-generated output. To achieve more naturally sounding paragraphs, prompt engineering as presented in Guideline #2 is recommended. 

Guideline #7: Use GenAI tools as inspiration to explore different design directions and design choices. Employ manual work to critically reflect, refine, and implement them. 

Image generation tools with available GenAI models, such as Stable Diffusion 3 and FLUX.1, can generate images of prototypes, moodboards, and design patterns in seconds. Although the quality and accuracy of these outputs are usually lacking, they present designers with, sometimes unusual, design choices that would not have been explored otherwise. During ideating, where finding the perfect solution is not an immediate goal, AI-generated inputs have the potential to drive innovation with little investment of timely resources. 

74

CHAPTER 6 

# Conclusion 

This study investigated how GenAI tools can be used effectively in UX design to improve iteration speed, ideation diversity, and requirements coverage when designing UX artifacts. Two research questions guided this study, stated in section 1.3. These questions were answered by first conducting a literature review and expert interviews to determine how professionals currently use GenAI for UX design practices. Secondly, an UX prototype was designed applying the identified GenAI use cases and experiences were documented along the way. Lastly, best practices on GenAI use were derived based on the documented observations, reflections, and recommendations during the design process. 

GenAI has proved its potential to assist designers in creating digital products, mainly by automating previously labor-intensive tasks and serving as a means of inspiration across different design phases. In particular, this study found that ChatGPT is beneficial for the research process and UX writing, Blaze for social media writing, Dovetail for user insight analysis, Stable Diffusion 3 and FLUX.1 for generating visual references, and Figma AI and UX Pilot for prototype inspiration. To further optimize AI-generated output, prompt engineering should be employed by giving GenAI tools context, using simple and precise language, and breaking down large tasks into smaller subtasks. 

For tasks that require a high degree of critical thinking, as seen in prototyping and user testing, AI-generated outputs are typically not user-centric enough and rather serve as early drafts or inspiration. For these tasks, manual work and critical thinking are recommended. 

In addition, it was found that the role of GenAI is best suited as a design companion, not as a replacement for manual work. They can serve as a medium to create drafts, perform data analysis, or generate ideas, moodboards, or visual references. An element of human touch remains crucial to ensure that UX artifacts fit the defined problem statement, accommodate user needs, and are consistent, accessible, and visually appealing. 

75

6. Conclusion 

6.1 Limitations This study followed a qualitative and exploratory approach based on action research to answer the stated research questions. As there is one test subject (the researcher themselves), an inherent limitation of this methodology is the factor of subjectivity, bias, and limited generalizability in the documented observations and reflections. The reflections are based on the chosen UX project metrics of iteration speed, ideation diversity, and requirements coverage, and results may change if different metrics are being measured for the effective design of UX prototypes. In addition, the GenAI use cases identified through the expert interview were tested under the example of healthy habits, which means that the findings may not be fully representative for other use cases. 

6.2 Future work For future research, it would be recommended to evaluate GenAI best practices for other use cases beyond healthy habits and measure the impact of GenAI use on established scales such as NASA-TLX, PEOU, and UEQ, also including real users in the evaluation process. In addition, this study provides a foundation for conducting action research in which multiple designers compete to create UX artifacts with and without GenAI assistance, and quantify potential performance increases. Furthermore, this study facil-itates further research in the form of literature reviews that compare these guidelines with recommendations for the use of GenAI in other studies to reveal overlaps. 

76

CHAPTER 7 

# Overview of Generative AI Tools 

# Used 

As described in chapter 3, several GenAI tools were used to carry out this study. The results of the following tools are presented in chapter 4: ChatGPT, Uizard, UX Pilot, Figma AI (including Wireframe Builder plugin), Recraft, Blaze, relume.io, and Stark. The exact prompts used for producing these outputs were mentioned in the previous paragraph. In addition, TurboScribe was used to automatically transcribe video recordings of the expert interviews. To ensure accuracy and mitigate hallucinations, manual quality checks were done. The Overleaf plugin Writefull was used to make small adjustments to the choice and order of words for some paragraphs, sparingly used within the thesis. The initial text was always written by hand. 

77

APPENDIX A 

# Appendices 

A.1 Expert Interview questionnaire 

Topic Area Question 

Participant Background 

What is your current role / area / expertise within the company? 

How many years of experience do you have in your field? 

Are you in a leadership position or an individual contributor? If being a leader, for how many employees? 

If individual: How large is your team? 

Usage of AI Are you currently using GenAI in the UX design process? If so, for which tasks / in which design phases? 

Do you utilize <use case> in the phase <name phase> or for task <name task>? 

What GenAI tools or technologies are you currently using for UX design tasks? 

Did the introduction of generative AI change existing UX workflows? If so, how? 

How does collaboration between generative AI and professionals in your team work? 

79

A. Appendices 

Topic Area Question 

Can you provide concrete examples of how and which generative AI tools were used in recent projects? 

Benefits What benefits (e.g., UX project metric improvements) have you noticed when using GenAI from a designer and user perspective? 

Can you provide concrete examples of how and where generative AI improved project metrics or provided other benefits? 

Risks and Challenges 

What challenges and risks (technical, personal and organizational) have you encountered when using GenAI from the designer’s and user’s perspective? 

How do you deal with potential risks when using GenAI (e.g., personal data in prompts)? 

Did you notice any observable negative impacts that the use of generative AI has had on your team and the organization as a whole? 

Do clients and customers notice the usage of GenAI in UX deliverables? If so, how do they perceive them? 

Can you provide concrete examples where the integration / usage of generative AI posed a challenge or introduced a problem? 

Non-utilization If generative AI is not utilized, what are the reasons? 

What limitations have you encountered when trying to integrate or use GenAI in UX design? 

Can you provide concrete examples where generative AI could not be used or was decided against its usage? 

Best Practices Are there any team-related / organizational guidelines on the appropriate usage of GenAI in UX design? 

80

A.2. Interview results 

Topic Area Question 

What are best practices / key factors for utilizing generative AI in UX projects to its fullest potential? 

Future Outlook What changes would need to occur for you to consider utilizing generative AI in the future? 

What plans do you, your team, or the organization have for GenAI in the future? 

What potential GenAI use cases, benefits, and challenges do you foresee? 

Conclusion Is there anything else you would like to add? 

Table A.1: Semi-structured questionnaire for the expert interviews 

A.2 Interview results 

Identified Theme Quotes 

Creating Content Interviewee #1: I use it [Figma AI] mainly for writing, creating icons, or renaming layers. 

Interviewee #2: I use generative AI commonly for research, e.g., for creating interview questionnaires or concept drafts. Sometimes I use it to create a rough outline for my deliverables. 

Interviewee #2: I use Blaze for content creation such as social media or blog posts. The tool can be fed with your own source material so that its output matches your style and does not feel generic. 

Interviewee #2: relume.io has a sitemap generator. Via prompting, it can provide you with a rough structure of how a website could look like. 

81

A. Appendices 

Identified Theme Quotes 

Interviewee #3: I explain the problem to it [ChatGPT] step by step. Based on that, I receive an UX research flow or documentation, which makes it easier to present to stakeholders. 

Interviewee #3: This [Stable Diffusion & FLUX.1] allows me to quickly populate prototypes with relevant visuals instead of searching stock photo sites. 

Interviewee #4: I’m using Recraft which helps you create pictures, placeholders, and vectors. 

Reshaping Content Interviewee #1: It should be possible for ChatGPT to refine my content, so that I just have to do some quality assurance. 

Interviewee #2: I am aware that some people use AI to simplify language, e.g., rewriting texts and or bringing the language level down to B2. 

Interviewee #2: I did accessibility audits and needed a simple and intuitive description for the identified problems. 

Interviewee #5: However, ChatGPT does a very good job at translating, but also understanding the context, nuance, and tonality of the text. 

Researching Interviewee #4: However, if I have a lot of files, it’s also possible to have ChatGPT process them automatically and generate a lot of insights. 

Interviewee #5: Dovetail is a program we use for recording and transcribing user interviews. That now does some pretty impressive automatic tagging, which previously was quite a mundane effort. 

Framing problems Interviewee #3: If I receive a problem statement, then I will use ChatGPT or Claude to validate whether it actually needs a solution or not. 

82

A.2. Interview results 

Identified Theme Quotes 

Interviewee #3: Once I determine that it’s a real problem, I use ChatGPT or Claude to check if other products have encountered similar issues. 

Gathering inspiration Interviewee #2: AI is a powerful tool for ideation and initial conceptualization. 

Interviewee #3: However, I do use tools like Stable Diffusion and FLUX.1 for generating visual references quickly. 

Interviewee #5: For example, Vercel v0 does pretty cool front-end stuff. It’s a remarkable tool. 

Testing Interviewee #2: Generative AI is used in the area of accessibility optimization. Some tools can validate, how accessible a design is and provide recommendations. 

Interviewee #2: We use tools like Stark to validate designs. The Stark sidekick provides suggestions for improving designs without changing something on its own. 

Generating code Interviewee #2: HTML code is mostly usable, but CSS almost always has be to manually refined. It depends largely on the use case. 

Human-AI collaboration 

Interviewee #2: Another important note: AI should be viewed as a support tool, not a replacement for manual work. 

Interviewee #5: It really does take some back and forth collaboration with the tool to get it there [generate consistent output]. 

83

A. Appendices 

Identified Theme Quotes 

Limitations Interviewee #2: A big challenge is bias. AI-generated content is often times generic, and it is easy to lose your personal touch. Another issue is the quality of information - wrong or incomplete results are common. 

Interviewee #2: The are many guidelines that have to be met, and AI tools are not yet able to adhere to them reliably. 

Interviewee #2: You provide detailed prompts yet AI still neglects some information. This has caused me to spend more time on fixing prompts than to do it [the task] by myself. 

Interviewee #3: Figma AI plugins generate basic layouts, but they lack customization. Instead, I use Miro or UX Pilot for early-stage wireframing. 

Interviewee #5: So, we don’t use image generation. So, like whether it’s ChatGPT or Midjourney or any of those things. Just because, well, it doesn’t do the kind of stuff that we want. 

Interviewee #5: But again, as with so many things, it [Vercel v0] is very surface. It’s very what a junior would do on their first try. 

Concerns Interviewee #2: There is skepticism [about AI], especially with generated images. For text-based content or wireframes, the usage of AI tends to be less apparent and thus, is questioned less critically by people. 

Interviewee #4: Talking about the ethical standpoint, do we really want that AI makes everything for us? I think it’s a powerful technology, but we need to use it as a tool. It doesn’t produce final results, it’s not an employee, so we shouldn’t use it as one. 

84

A.3. GenAI use cases 

Identified Theme Quotes 

Interviewee #5: They [Designers] need to make it the best project they’ve ever done because it might be the last one. Because AI might be doing it better than us any day now. 

Table A.2: Results from the expert interviews 

A.3 GenAI use cases 

Design Phase GenAI Use Case Tools 

Emphasize Generating research plans and performing background research to facilitate the user research process 

ChatGPT, DeepSeek, Claude, Microsoft Copilot, Google Gemini, Duck.ai 

Generating and editing interview concepts and questionnaires to asses user issues and needs 

ChatGPT, DeepSeek, Claude, Microsoft Copilot, Google Gemini, Duck.ai 

Analyzing user interviews and extracting key insights 

Dovetail, WhisperUI 

Define Assisting in data synthesis such as user personas and user stories, and defining accurate problem statements 

ChatGPT, DeepSeek, Claude 

Ideate Generating sitemaps from webpages as a foundation to define user flows 

relume.io 

85

A. Appendices 

Design Phase GenAI Use Case Tools 

Creating content and generating website landing pages 

Blaze 

Generating visual references for UIs, design variations, and custom images 

Stable Diffusion 3, FLUX.1 

Prototype Generating placeholder and finished UX texts 

ChatGPT, DeepSeek, Claude 

Generating and changing UX texts into simple or accessible language and adjusting tone and formality 

ChatGPT, DeepSeek, Claude 

Generating wireframes and UI elements such as icons and images 

Figma AI, Wireframe Builder (Figma Plugin), Uizard, UX Pilot, Recraft 

Test Testing and adjusting prototype usability and accessibility based on design suggestions 

Stark 

Table A.3: Derived GenAI use cases from the expert interviews 

A.4 GenAI tools output A.4.1 Research plan 

Topic Description 

Research Objectives 

Identify effective strategies and triggers that help users stay consistent 

86

A.4. GenAI tools output 

Topic Description 

Explore existing solutions of competitors with their strengths and weaknesses 

Discover motivational factors that drive behavior change 

Investigate the role of technology in habit formation 

Secondary Research and Market Analysis 

Review behavioral psychology theories (e.g., BJ Fogg’s Behavior Model, James Clear’s Atomic Habits, Charles Duhigg’s Habit Loop) 

Review reports from WHO, CDC, or mental health organizations on habit-related health outcomes 

Review reports from WHO, CDC, or mental health organizations on habit-related health outcomes 

Analyze existing habit-tracking and self-improvement apps to identify their strengths, weaknesses, user pain points, and features 

User Interviews Target: 5–7 participants (a mix of successful and struggling habit-builders) 

Duration: 20–30 minutes 

Key topic areas: 

 Participant Background and Context 

 Habit Formation and Challenges 

 Motivation and Triggers 

 Experience with existing solutions 

 Ideal Habit-Building Solution 

Data Synthesis Identify common pain points and user needs 

Extract key behavioral patterns and triggers 

Define opportunities for AI and UX design to support habit formation 

87

A. Appendices 

Topic Description 

Develop user personas and journey maps to guide the prototype design 

Table A.4: Research plan generated with ChatGPT 

A.4.2 Research plan extended 

Topic Description 

Expected Results Common challenges such as lack of motivation, difficulty maintaining consistency, and external distractions will emerge as primary barriers to habit formation 

Personalization will be a key requirement, as users often abandon one-size-fits-all solutions 

Social and accountability features (e.g., peer support, streak tracking) will be valued but not universally effective 

Potential Hypotheses 

Users who receive personalized habit-building recommendations will exhibit higher habit adherence than those using generic habit-tracking features 

Social accountability (e.g., group challenges, shared progress) will significantly improve habit retention for users who seek external motivation 

Users are more likely to continue using a habit-tracking app if it adapts to their routine and provides contextual nudges rather than static reminders 

Table A.5: Research plan extension generated with ChatGPT 

88

A.4. GenAI tools output 

A.4.3 Motivation and problem statement Developing and maintaining healthy habits is crucial for mental and physical well-being. Studies indicate that consistent routines improve productivity, reduce stress, and promote long-term health. 

Healthy habits are crucial to improving overall well-being and preventing various health issues. The integration of technology, particularly mobile applications, has become a critical tool to promote and sustain these habits [45]. 

A study demonstrated that app-guided habit formation significantly reduces motivational impairments, leading to improved learning behaviors among students [10]. 

Mobile applications designed to educate young people on healthy habits have shown promise in improving health literacy and quality of life. These applications serve as accessible resources, especially when traditional educational methods face limitations [36]. 

However, many people struggle to form and maintain beneficial habits due to lack of motivation, poor planning, or inadequate support systems. 

A.4.4 Market analysis 

Solution Key Features Shortcomings 

Habitica Gamifies habit formation by turning tasks into role-playing game elements 

May be overly complex for users not interested in gaming mechanics 

Streaks Focuses on building consecutive days of habit completion with a clean interface 

Limited customization options, primarily designed for iOS users 

Fabulous Provides guided habit programs with a focus on holistic well-being 

Subscription-based model may deter some users, some find the app’s approach too prescriptive 

HabitBull Offers detailed tracking and reminders for multiple habits 

Interface can be perceived as outdated, free version includes ads that may disrupt user experience 

89

A. Appendices 

Solution Key Features Shortcomings 

Productive Features customizable habit lists and progress tracking 

Lacks social features for community support, some advanced features locked behind a paywall 

Table A.6: Market analysis of existing habit-tracking solutions generated with ChatGPT 

A.4.5 Interview questionnaire 

Topic Area Questions 

Participant Background 

Can you tell me a little about yourself (age, occupation, daily routine)? 

How do habits play a role in your daily life? 

Have you ever consciously tried to form or change a habit? If so, what was the habit? 

Habit Formation and Challenges 

What habits have you successfully built or struggled with? 

What challenges do you face when trying to establish a new habit? 

What typically leads you to abandon a habit you were trying to develop? 

Motivation and Triggers 

What motivates you to start a new habit? 

Are there specific triggers or reminders that help you stay consistent? 

How do external factors (e.g., social support, accountability, rewards) influence your habit formation? 

90

A.4. GenAI tools output 

Topic Area Questions 

Experience with Existing Solutions 

Have you used any apps or tools to track or build habits? Which ones? 

What did you like about those solutions? 

What didn’t work for you or felt frustrating about them? 

If you stopped using them, what was the main reason? 

Ideal Habit-Building Solution 

If you could design your ideal habit-building tool, what features would it have? 

Would you prefer an app that is highly structured or one that is more flexible? Why? 

How important is personalization in a habit-forming tool for you? 

What role do you think AI or automation could play in helping you build habits? 

Is there anything else you wish habit-building apps did differently? 

Closing Is there anything we haven’t covered that you think is important for habit formation? 

Table A.7: Interview questionnaire generated with ChatGPT 

A.4.6 User Stories 

User Story 1: Lisa 

1. Lisa wakes up groggy and immediately reaches for her phone, tempted to scroll on social media. 

91

A. Appendices 

2. The habit app sends a gentle notification: "Good morning, Lisa! Let’s start the day with a quick energy boost - take three deep breaths and drink a glass of water!" 

3. Lisa follows through and logs her progress in the app, receiving positive reinforce-ment through a growing streak meter. 

4. She checks her habit dashboard, where a intelligent AI suggestion recommends a short 5-minute stretching routine based on her activity levels. 

5. Motivated by her habit streak and small progress wins, Lisa feels energized and starts her day on a positive note. 

User Story 2: Daniel 

1. Daniel finishes work and lounges on the couch, absentmindedly using his e-cigarette. 

2. The app detects his usual smoking time and prompts a mindful check-in: "How are you feeling right now? Would you like to swap this habit for a short deep-breathing exercise?" 

3. He chooses a "Pause & Reflect" session and logs his craving level, noticing how often he reaches for his e-cigarette unconsciously. 

4. As a reward for choosing a healthier alternative, his habit progress bar fills up, reinforcing his positive action. 

5. Later, the app reminds him to log his habits before bed with a customized notification that avoids feeling intrusive. 

92

A.4. GenAI tools output 

A.4.7 Landing page 

Figure A.1: Landing Page and UX writing generated with Blaze 

93

A. Appendices 

A.5 Interviews transcripts A.5.1 Interview #1 [The first part of the interview is not available] 

[Interviewer] Wie stellst du dir, vielleicht das Team oder **Unternehmen**, in Zukunft vor, wie sich GenAI entwickeln wird und was für Pläne ihr damit habt, das zu verwenden im UX Design? 

[Interviewee #1] Naja, ich hoffe zumindest mal mehr, dass wir es allgemein mehr verwenden. Ja, ich denke auch, dass es irgendwann einmal diesen Shift geben muss, dass man Expertenmeinungen mehr annimmt, weil wir bewegen uns ja trotzdem noch im Spektrum Design. 

Und da ist halt sehr viel persönliche Meinung auch noch inbegriffen. Und wenn du sagst, dass das jetzt nicht accessible ist, ist es dann aber auch mal so, ja, aber meine Frau mag’s. Und das ist halt leider in hierarchischen Unternehmen sehr oft so. 

Also, ich glaube schon, dass da AI auch diesen Mindshift hinbekommen könnte. Und sonst, uh, schwierig, ja. Also, ich hätte auch gerne irgendwann einmal dieses Tool. 

Ich bekomme oft mal Content und ich habe natürlich schon meine Design Library, die ich mir aufgebaut habe und so weiter. Und das, was dann ja absolut keinen Spaß macht, ist, dass ich dann diesen Content bekomme und dann halt meine Blogs quasi, also meine ganze Design Library dann zusammenstücken muss. Weil das ist für mich jetzt nicht so die spannendste Aufgabe. 

Und ich hoffe, dass das vielleicht auch irgendwann einmal möglich ist, dass ich quasi diese E-Mail nur an ChatGPT weiterleiten muss und dem sagen kann, so, hey, das ist der Content, mach den jetzt gescheit, bitte in eine Seite, und dass ich dann nur mehr noch Qualitätssicherung machen muss. Also, ich hoffe, dass sich das ein bisschen ändert. Ansonsten muss ich sagen, ich bin jetzt gerade in einem sehr jungen Team, wo jeder ChatGPT verwendet. 

Also, ich kann mich da jetzt auch wirklich nicht beschweren. Im letzten Job habe ich mich schon beschwert, weil viele das verteufelt haben und gesagt haben, nein, wir haben es immer so gemacht. Das hat auch funktioniert. 

Genau. Also, ich kann mich eigentlich über den Einsatz von GenAI gar nicht beschweren. 

[Interviewer] Wie groß ist euer UX Team, wo du aktuell bist? 

[Interviewee #1] Sechs Personen, ja. 

[Interviewer] So, ich muss sagen, wir liegen eigentlich ganz gut in der Zeit auch. Ich habe soweit eigentlich die wichtigen Fragen gestellt. Hast du abschließend noch Informationen, die du mir mitgeben möchtest? 

[Interviewee #1] Habe ich Informationen? Ich glaube nicht, nein. 

94

A.5. Interviews transcripts 

[Interviewer] Wie hieß das Figma-Plugin, was du für ganz verschiedene Tasks verwend-est? 

[Interviewee #1] Magician for Figma. Da hast du wirklich in den Komponenten selber gewisse Dinge machen können. Also du hast irgendwie zaubern können und so Sachen klicken können. 

[Interviewer] Also mit dem Plugin werde ich mich auf jeden Fall noch genau auseinan-dersetzen. Das ist, glaube ich, ein sehr wichtiger Use Case, den du mir dann mitgegeben hast. Ich habe es mitbekommen, du benutzt es größtenteils für Writing, für Erstellung von Icons, Texten. 

[Interviewee #1] Und die Umbenennung von Layern. 

[Interviewer] Vielen Dank dir. Danke dir. Ich finde, du hast mir sehr weitergeholfen und du hast viele wichtige Punkte dabei, die ich mir jetzt im Detail nochmal anschauen würde. 

[Interviewee #1] Ja, stimmt. Ja, cool. Alles klar, super. 

[Interviewer] Vielen, vielen Dank dir, ja. 

A.5.2 Interview #2 [Interviewer] Bevor wir jetzt anfangen, ich würde noch einen kleinen Disclaimer geben. Und zwar würde ich Gen AI jetzt im Kontext von meiner Masterarbeit wirklich betrachten unter der Erstellung von konkreten Content. Das heißt z.B. Text, Bild, vielleicht eventuell auch schon Audio. Und weniger jetzt AI im klassischen Sinne betrachten. Also z.B. in welche Maschinen, Learning, Algorithmen, die dann für Datenanalyse oder Statistik eingesetzt werden. Das ist weniger Fokus, sondern wirklich mehr die Erstellung von konkreten Content jeglicher Art. 

Genau. Gibt es soweit schon Fragen von deiner Seite? Nein. 

Alles klar. Dann würde ich sagen, starten wir direkt rein. Mit ein paar Fragen zu deiner Person, zu deiner Rolle. 

Was sind so aktuell deine Verantwortlichkeiten, deine Tasks bei dir im Unternehmen? 

[Interviewee #2] Ich bin, also derzeit in den größten Massenprojekten bin ich, also in einem Projekt bin ich Accessibility Lead. Also ich verantworte die Leitung von, wie Barrierefreiheit in Designs, in Development und weiteren Elementen eingesetzt werden kann. Und nebenbei mache ich für einzelne andere Projekte, also User-Recherche und Wireframing für Software-as-a-Service-Tools. 

Meistens im IT-Bereich. Genau. Und bin da eben bei beiden Dingen einfach der Leiter von den Entscheidungen. 

[Interviewer] Hast du selber auch Führungsverantwortung? Bist du dann, hast du ein eigenes Team oder? 

95

A. Appendices 

[Interviewee #2] Also in dem Fall, ja. Also wenn ich in andere Teams reinkomme, dann schon. In einem anderen Team leite ich eben das Team von 30 Designern. 

Okay. Genau. Also da bin ich einfach, also Co-Lead eigentlich, weil es sind zwar andere Lead, aber ich habe ein Lead für meinen Bereich. 

[Interviewer] Okay. Wie viele Jahre Berufserfahrung bringst du schon mit? 

[Interviewee #2] Jetzt neun. Neun Jahre. 

[Interviewer] Alles klar. Okay. Sehr gut. 

Dann würde ich direkt inhaltlich einsteigen mit einer meiner Hauptfragen und zwar, wie ist da aktuell der Stand bei euch? Verwendet ihr GenAI schon für UX Prozesse? Für welche Prozesse verwendet ihr es und welche Tools verwendet ihr so? 

[Interviewee #2] Also generell muss man da glaube ich auch differenzieren, wie ich es persönlich verwende als meine eigenen Recherchedinge, also sowas, was halt die Unternehmen verwenden. Für meine eigenen Prozesse verwende ich es sehr, sehr oft für Research im Sinne von zur Erstellung von Interview-Fragebögen oder generell Konzeption. Also einfach nur, okay, gibt mir so eine grobe Outline für den Ablauf oder eben auch das Core-Gerüst, wenn noch keine Tablets vorhanden sind zum Beispiel. 

AI dann noch, also als Content Creation. Ich weiß, dass einige Personen und Unternehmen es verwenden, um zum Beispiel die Sprache zu verleichtern. Um halt Texten zu formulieren oder auch auf eine gewisse, ein B2-Level zum Beispiel runterzubrechen. 

Das wird sehr gut. Für User Flows, also wirklich jetzt in Figments zum Beispiel oder so, habe ich es noch nicht gesehen, also zumindest noch nicht, dass sie es aktiv verwenden. 

Ja, ich habe schon ein paar Dinge ausprobiert, aber aktiv verwenden tue ich es nicht, weil ich nicht zufrieden bin. 

[Interviewer] Okay, das ist nämlich schon ein interessanter Punkt. Darf ich dich fragen, warum du damit noch nicht zufrieden bist? 

[Interviewee #2] Also früher habe ich zum Beispiel mal mit relume.io gearbeitet. relume.io hat so einen Sitemap-Generator. Wenn du einen Core-Prompt gibst, okay, wie könnte die Sitemap ausschauen, und dann auch so ein bisschen ein Core-Gerüst, wie könnte die Struktur von gewissen Seiten ausschauen, wenn du wirklich jetzt im Website-Bereich arbeitest. 

Ja. Und ich fand das halt, man hat einfach gemerkt, das ist einfach für eine gewisse Webseite funktional, was in dem Fall halt Startups waren. Obwohl es für einen anderen Use-Case vermarktet worden sind. 

Und das Ding konnte halt nicht mehr, außer halt eins zu eins dieselben Dinge rauss-chmeißen. Und natürlich war es wahrscheinlich erst am Anfang und so, aber das war halt nicht meine Expectation. Also ich habe mir ein bisschen mehr Support gewünscht, als, okay, mein Ziel ist eigentlich B2C und nicht B2B. 

96

A.5. Interviews transcripts 

Also, ja. 

[Interviewer] Okay, mhm. 

[Interviewee #2] Also mit Content-Prompts, also wirklich so für Struktur- übernehme ich es eigentlich sehr gerne. 

[Interviewer] Okay. Also eher so für die ersten Draft, oder die initiale Gestaltungsphase. Okay. 

Hast du darüber hinaus noch mit anderen Tools, Technologien experimentiert, oder verwendest du die aktiv? 

[Interviewee #2] Ich meine, Blaze bin ich eigentlich ein Fan davon. Ich nehme mal auch an, dass es zwar auf der Jury fungiert, ich weiß es aber nicht genau. Verwende ich eigentlich selbst persönlich für Content-Creation, also wirklich für Social-Media-Sachen, aber auch für Blog-Posts oder solche Dinge, weil ich halt das Gefühl habe, dass du kannst dem Ding Source-Material vorbeistellen, und das, was am Ende rauskommt, entspricht halt auch dem, deiner Sprache. 

Und halt nicht einfach nur einem sehr generischen Prompt. 

[Interviewer] Okay, mhm. 

[Interviewee #2] Und das finde ich eigentlich recht cool. Ansonsten kenne ich AI eher, kenne ich, also, generativer AI, das kommt drauf an, ob das jetzt darunter fällt oder nicht. Ich kenne es noch aus den Bereichen von Accessibility, Modification, da gibt es natürlich die, die was halt einfach nur überprüfen, wie barrierefrei ist es im Hinblick von AI, aber auch die, die was versuchen, mit AI Dinge zu fixen. 

Und das weiß ich nicht genau, ob das für dich jetzt in generativer AI fallen würde. 

[Interviewer] Also quasi, dass man ein Layout hat, das dann überprüft wird auf Accessibility und eventuell schon Anpassungen daran vornimmt. 

[Interviewee #2] Genau. 

[Interviewer] Das würde auf jeden Fall in den Kontext meiner Arbeit fallen. Das wäre unter meiner Definition auf jeden Fall generativer AI. Auch ein ziemlich wichtiger Punkt, das hätte ich sonst nämlich auch mal angesprochen, auch vielleicht ein bisschen als Vorbereitung auf das User-Testing, dass man da schon mal vielleicht ein paar Testläufe macht und quasi so ein bisschen auch User-Verhalten oder Feedback schon mal vorläufig simulieren könnte. 

Okay, also das ist durchaus auch ein Case, der angewendet wird. Das ist ein sehr interessanter Punkt. 

[Interviewee #2] Also ich habe es ausprobiert und ich kenne Unternehmen, die es machen. Ob ich ein Fan davon bin, ist eine andere Sache. Aber ja, ich kenne es auf jeden Fall und ich habe es probiert. 

97

A. Appendices 

Also aktiv arbeiten dürfte man aber nicht. 

[Interviewer] Kurze Frage, arbeitet ihr mit Figma oder anderen Tools? 

[Interviewee #2] Also alles, was wir halt in AI machen, ist halt dann wirklich in Figma. Es gibt natürlich, wir arbeiten mit einigen Tools, wie zum Beispiel Stark oder so, die uns helfen, das Design zu überprüfen, anhand von gewissen Richtlinien. Es gibt natürlich, also ich meine, der Sidekick von Stark ist eigentlich eh schon recht gut, um halt für Accessibility, aber auch für allgemeine Design Patterns Vorschläge zu machen, was man verbessern könnte. 

Das ist eigentlich recht cool, weil es halt wirklich noch an der Core-Essenz arbeitet und nicht irgendwie versucht, etwas drüber zu packen, sondern einfach nur Vorschläge gibt. 

[Interviewer] Ja. 

[Interviewee #2] Genau, das ist echt cool. 

[Interviewer] Okay, basierend auf AI. 

[Interviewee #2] Genau, basierend auf AI, ja. 

[Interviewer] Okay. Was sind so aus deiner Sicht die größten Challenges und auch Limitationen, die GenAI aktuell so mit sich bringt? 

[Interviewee #2] Es kommt sehr stark darauf an, was du verwendest für dein Tooling und auch, wofür das Tool gemacht worden ist, würde ich mal sagen. Die biggest Challenges, wie ich es eben verwende, sehe, ist einerseits Bias. Es ist definitiv ein Bias drinnen, in dem was, ja, die Elemente zurückgeben. 

Es wird manchmal sehr generisch. Also ich glaube, dass halt die eigene persönliche Note verloren geht, wenn man nicht darauf aufpasst. Und ich sehe halt auch, dass zumindest Dinge, die ich versucht habe und getestet habe, dass sie einfach nicht korrekt sind. 

Und da ist halt die Gefahr halt recht hoch, dass Leute das halt als Endresultat sehen, weil das hat die AI gesagt, das muss stimmen, zumindest wenn es aus Quellen kommt von einer AI, die du halt kennst und die halt auch bekannt ist. Dann ist aber falsche Information drin und auch falsche Dinge, die zwar eh disclaimed sind unten, aber ich kann mir sehr gut vorstellen, dass es leicht dazu kommen kann, dass Leute das halt fragen und denken, das ist die richtige Antwort. Das ist zumindest vor allem im Thema Accessibility noch ein Riesenthema. 

Also da merke ich ziemlich stark, dass die Information einfach falsch ist. 

[Interviewer] Wie sieht in dem Zusammenhang so dein persönlicher Workflow mit der Verwendung von AI aus, beziehungsweise hast du selber oder vielleicht auch eure Organisation bestimmte Richtlinien oder Best Practice des Guidelines, wie man mit GenAI umgehen sollte? 

[Interviewee #2] Also ich habe für mich selbst Richtlinien im Sinne von, wie schreibe ich halt gute Prompts, damit was Gescheites rauskommt. Und welche AIs sind da besser 

98

A.5. Interviews transcripts 

versus nicht so performant in dem Fall. Und ich gehe das meistens einfach so an, für mich ist AI ein riesengutes Tool für Ideation, also wirklich für Ideation und das erste Konzept. 

Für alles danach ist es mir eher nur vielleicht noch zur Überprüfung relevant. Ich würde es aber nie verwenden, wirklich aktiv für mich was zu erstellen, weil da kenne ich einfach schon viel zu viele Cases, wo Copyright einfach ein Riesenthema geworden ist. Wo Künstler einfach auskommen werden, das tut mir ein bisschen weh. 

Aber so für den Initial Draft finde ich super, noch generell Brainstorming ist so ein richtiger, du hast einfach einen, ja, es kommt einfach mehr raus, als wenn du es selbst machen würdest. Und das ist schon sehr cool. 

[Interviewer] Okay, also du benutzt das quasi als Konzept-Tool, was du dann selber nochmal refinest und gegebenenfalls nochmal validierst. 

[Interviewee #2] Genau, also ich validiere es immer. Ich verwende es einfach als Prompt und es kommt einfach oft vor, dass ich einfach mehrere Prompts dann hinzufüge, um halt das rauszukommen, was ich will. Also Refinement ist ein Riesenthema und auch generell Quality Assurance, weil ich versuche halt Dinge abzufragen, die ich eigentlich selbst auch kenne, zumindest als Core-Prinzip. 

Das heißt, ich kann da auch dann verifizieren, hey, passt das oder passt das nicht. 

[Interviewer] Okay, verstanden. Ein Punkt, der mich persönlich auch immer sehr interessiert ist, hat sich so im Team von der Art, wie gearbeitet wird und vielleicht auch von der Einstellung maßgeblich was verändert, seitdem GenAI verwendet wird? 

[Interviewee #2] Ich glaube, in dem Team selbst noch nicht. Also ich glaube, es ist ein bisschen gesplittert von welche Person, oder zumindest welche Rolle diese Person hat, weil es ist immer so der Switch zwischen wir sollen das Unternehmen AI verwenden, weil das ist das neue Trend-Ding versus wirklich. Das heißt, ob sich aktiv an dem Flow was geändert hat, nicht wirklich, nein. 

Der Flow ist immer noch gleich geblieben. Es ist einfach nur so, dass gewisse Dinge vielleicht weniger Zeit brauchen. Potenziell. 

Aber der Flow selbst ist immer noch genau gleich. 

[Interviewer] Okay. Interessant. Hast du ein paar Einblicke, wie das auf Kundenseite wahrgenommen wird, dass man jetzt eben immer stärker GenAI verwendet für digitale Produkte zum Beispiel? 

[Interviewee #2] Also zumindest, was ich aus Kundenseite mitbekomme, und auch weiß aus Recherche, also generell aus Nachfrage und Co., ist, dass Kunden, also, es ist so ein Mixtur zwischen, man kann nicht alles mit AI ablösen, und ich glaube, das ist ein Case, wo man vielleicht reinläuft. Für GenAI ist es einfach, viele Leute werden es nicht merken. Ich glaube, da ist es ein Case von, wie wende ich GenAI an, damit da wirklich auch am Ende das rauskommt, was nicht auffällt, würde ich mal sagen. 

99

A. Appendices 

Es gibt aber halt einen gewissen Bias aus Consumersicht GenAI gegenüber. Vor allem, wenn man weniger Richtung Texting, sondern eher Richtung Image Creation und solche Sachen, da ist definitiv ein Bias da. Und ich glaube, da ist es auch wichtig, dass man dann sagt, hey, das wurde halt von einer AI erstellt, weil der Bias da ein bisschen höher ist. 

Bei Content und Wireframing oder wie auch immer, fällt das manchmal einfach nicht auf. Und ich glaube, da wird es auch nicht wirklich wahrgenommen, weil wenn es nicht gemerkt wird, dann ja. 

[Interviewer] Ich kann dir sehr gut folgen. Stichwort Wireframing. Ich hatte das auch aus anderen Interviews gehört, dass es auch dafür selbst in Figma was gibt oder auch externen Tools, UISA, das ist glaube ich auch eins, was auch automatisch schon wirklich halbfertige Wireframes, Prototypen, Designs bauen kann. 

Wird das auch in irgendeiner Form verwendet oder noch nicht? 

[Interviewee #2] Nein, wird bei uns nicht verwendet. Das ist aus dem Grund, dass das Team einfach ja, ich glaube, kurze Antwort nein. Längere Antwort wahrscheinlich einfach, dass das nicht das Bedürfnis im Unternehmen ist, weil sie einfach viele Business-Kriterien haben, die da matchen müssen und nicht sicher sind, ob die eine wirklich was Gescheites liefert. 

[Interviewer] Okay. Ich denke mal wahrscheinlich auch wieder an den Punkt, den du schon genannt hast, dass der Output recht generisch ist und nicht auf die spezifischen Anforderungen die man hat. 

[Interviewee #2] Und das ist so für kleine Start-ups, also für Start-ups sicher super oder auch für kleine Unternehmen, aber halt für Konzerne oder so halt bisschen tricky, weil da sind halt sehr, sehr viele Richtlinien, die man halt befolgen müsste und wo man halt auch aufpassen muss, hey passt das wirklich? 

[Interviewer] Ja. Verstehe ich. Wenn wir jetzt ein bisschen in die Zukunft vielleicht schauen, was müsste sich ja zum Beispiel an der Gen-I oder am Umfeld generell erändern, dass man Gen-I mehr verwendet und zum Beispiel auch für Tasks und Wireframes etc.? 

[Interviewee #2] Mhm. Ich glaube, es ist generell dieses es muss halt irgendwie möglich sein von diesem Generischen ein bisschen wegzukommen. Generisch ist halt gut und schön und das ist für viele Dinge auch total wichtig. 

Also ich meine, ich werde jetzt nicht 300 verschiedene Interview Fragebogen schreiben, weil die werden alle gleich auch schauen, nur halt die Fragen sind ein bisschen anders. Für Wireframing aber so, dass es einfach mehr möglich ist Source-Material oder Backstories einzufügen, die halt zu einem klaren Ergebnis kommen. Weil wenn ich halt hier baue meine Website für einen Marketing-Dienstleister oder so, dann ja, ich hätte gerne einfach ein bisschen mehr Möglichkeit Source-Material einzubauen, um es halt an die Marke anzupassen. 

100

A.5. Interviews transcripts 

Und der andere Wunsch, also eher ein persönlicher Wunsch ist glaube ich einfach, dass ich würde mir einfach wünschen, dass Leute generell mehr als Support-Tool sehen und nicht als Replacement für irgendetwas. Weil das kommt natürlich dann oft von was nicht Management oder wie auch immer. Und dann fahrst du halt sehr schnell in dieses, das DI kann das eh machen, da braucht man niemanden mehr hiren dafür. 

Und da geht dann einfach wirklich stark die Quality Assurance unter. Es gibt halt einfach niemanden, der da drüber schaut. Und ich glaube, das muss man halt wirklich achten. 

Und das gehört auch glaube ich im Marketing ein bisschen adaptiert, dass da halt natürlich ich kann Dinge ersetzen, aber nicht alles. Und ich glaube, das ist so ein Thema von, es wird immer noch Quality Assurance brauchen. Und das würde ich mir einfach wünschen, dass das ja, ich glaube, wenn das gegeben ist, dann würde ich sicher generell verwenden. 

Und auch wenn ich weiß, was mit der Daten passiert, auch, ich meine im Konzern ist das auch ein Riesenthema mit, ich kann halt keine, also ich muss halt uraufpassen mit Daten, die ich reingebe. Und auch, dass ich keine Business Secrets reintue oder auch keine Dinge, die halt zu prägnant sind, weil es dann aber keine Close Days gibt, weil es natürlich immer noch zum Trainieren verwendet wird. Und ich glaube, da wird es sicher in der Zukunft Möglichkeiten geben müssen, nicht müssen, aber wäre halt schon cool, die halt eher abgekapselter sind, damit solche Thematiken ein bisschen weniger im Fokus stehen. 

[Interviewer] Mhm. Dann ja, sehe ich die Punkte. Habt ihr als Organisation schon vielleicht Pläne für die Zukunft, wie ihr den AI da einsetzen wollt, jetzt in übergeordneter Sicht? 

[Interviewee #2] Das Unternehmen selbst hat noch keine Richtlinien dafür. Nein. Also da haben sie noch keine Pläne gemacht und ist bei ihnen noch nicht der Fokus derzeit. 

[Interviewer] Okay. 

[Interviewee #2] Weil vieles, was sie machen, offline, also natürlich wird das ein Bereich, der digital funktioniert, aber es gibt auch viele, die ganzen Business Thematiken sind einfach offline. Und ja, da haben sie einfach nicht beschäftigt, wie das funktionieren könnte. 

[Interviewer] Okay. Eine Sache, die ich noch in der Recherche gefunden habe, ist quasi dieser Einsatz, vielleicht noch nicht jetzt sofort, aber so in den nächsten paar Jahren, dass man GenAI quasi auch wenn das von der Qualität und Individualität vielleicht mal etwas besser wird, dass man das als Art als eine Art Design Collaborator auch verwendet, dass man das verwendet, um gegenseitig natürlich mit echten Designen Ideen, mit Herzenwerfen vielleicht zusammen an Layouts oder an Personas etc. 

arbeitet. Und eventuell sogar auch das mit reinholt, wenn man zum Beispiel Workmeetings hat im Team, wo man zusammen brainstormt, dass eben auch die GenAI dabei ist und quasi mit brainstormt, dass man das wirklich integriert, als wäre es wirklich ein Teil des 

101

A. Appendices 

Teams, was natürlich dann nochmal reviewt wird etc., aber dass man so quasi diesen Workflow hat. 

[Interviewee #2] Finde ich prinzipiell eine coole Idee. Also zumindest auch für kleinere Teams stelle ich mir das super sinnvoll vor, weil du als Designer ja immer einen Gegenpart dir wünschst und sie hat definitiv den Benefit darin, dass du einfach auf mehr Ideen kommst, weil du einfach ein Feedback hast und ein bisschen einfach prompt dich dazu zwingen, Dinge von einer anderen Perspektive zu sehen. Das ist ein ziemlich cooler Case. 

Kann ich mir auf jeden Fall vorstellen. 

[Interviewer] Okay. Hast du vielleicht noch einmal so ein konkretes Beispiel vielleicht, wo du GenAI in irgendwelchen UX Prozessen verwendet hast und wo es maßgeblich bestimmte Mehrwerte für das Projekt oder für deinen Workflow mit sich gebracht hat? 

[Interviewee #2] Ich habe es letztens erst verwendet für einen Report. 

[Interviewer] Ganz kurz, dazu auch gerne welches Tool, falls du mir das sagen möchtest, welches Tool du dafür verwendet hast? 

[Interviewee #2] In dem Fall war es ChatGPT. Da ging es darum, dass ich ein Accessibility Audit gemacht habe und da ging es darum, diese Issues, die ich gefunden habe, in einer einverstandenen Sprache eben zu formulieren und ich habe eben den Input gegeben von wegen, die Struktur, die ich haben möchte, hier ist der Outcome und das ist so die, ja, wie ich es bis jetzt formuliert habe und das eben reingebracht und prinzipiell hat mir das Ding einfach geholfen, in einer kürzeren Art, also in einer kürzeren Zeitspanne die korrekten Issues alle zu beschreiben, nachdem ich einfach nicht die Worte aufgeschrieben hatte und dann musste ich nachher einfach nur mal drüber gehen und schauen, okay, passt die Satzstellung, ist es korrekt und muss nicht alles von vorne schreiben und das war schon sehr praktisch. 

[Interviewer] Das glaube ich dir. Ich habe auch so generell mitgenommen, dass AI besonders eben für diese einfachen repetitiven Aufgaben, wo jetzt nicht so viel kritisches Denken erforderlich, besonders einsetzbar ist. 

[Interviewee #2] Voll, stimme ich 100%. Also generell alles, was so wiederkehrend ist oder auch einfach eine gewisse Struktur verfolgt, die sich immer nicht verändert, da ist es ziemlich gut. 

[Interviewer] Mhm. 

[Interviewee #2] Warum geht Kontext zu inkludieren? Ja, da kann man mal einfach Blödsinn oder was? 

[Interviewer] Ja, wie ist das, wenn man, man hat ja nun natürlich auch die Möglichkeit, ja, dem Algorithmus in den Prompts zum Beispiel recht viel Kontext dazuzugeben, wie wirkt sich das dann auf, was die Ergebnisse? 

[Interviewee #2] Also für Blaze macht das sehr gut, also ich finde, Blaze hat da eine ziemlich gute, ja, eine ziemlich gute Möglichkeit. ChatGPT finde ich da einfach ein 

102

A.5. Interviews transcripts 

bisschen meh, manchmal, weil es einfach den Prompt ignoriert oder auch den Kontext und du bist so auf, ich habe dir das gerade gesagt, warum verwendest du das nicht? Und dann dauert es ewig, bis du auf das Ergebnis kommst und dann, es gab schon Punkte, wo ich dann einfach aufgehört habe, irgendwie das zu verwenden, weil ich war so mit, ich brauche mehr Zeit, dieses Ding zu fixen, als es eigentlich selbst zu machen, das bringt sich nichts mehr. 

Und dann gibt es einfach so eine Zeitspanne, wo ich gewillt bin, das zu machen und dann, sobald ich merke, es kommt nichts raus, bin ich so mit nein, passt, dann mache ich es selber. 

[Interviewer] Ja, klar, dann hat man auch keinen Benefit mehr. Okay, verstehe ich, Ja, damit hast du eigentlich meine nächste Frage schon ein bisschen vorweggenommen, und zwar ein konkretes Beispiel, wo du es eben verwendet hast und wo es ein Problem mit sich gebracht hat oder es eben nicht so genau funktioniert hat. So einmal das Erste. 

[Interviewee #2] Genau, es ist also, Beispielcases sind, da gibt es dann ein Codesnippet und du fragst, hey, kannst du das bitte mit dieser Funktion ergänzen, und es kommt einfach irgendwas raus, was nicht korrekt ist, anderes Thema, was war das andere, genau, ich wollte eine Einleitung haben für einen Jira-Task, da ging es darum, da ging es eigentlich eh was ganz ganz Simples, da ging es um eine inklusive Sprache, und da wollte ich einfach nur einen Einleitungstext haben, auf Basis Dokuments, und der war einfach so furchtbar, und nach mehreren Prompts ist es nicht besser geworden, weil er hat mich immer nur selber hingeworfen, ein bisschen adaptiert, in einer so schlechten Sprache, die nicht inklusiv war, dass ich mir einfach gedacht habe, okay, wurscht, nein, ich mache was anderes, ich mache das selbst. 

Also, ja, so zwei Cases, die mir einfallen. 

[Interviewer] Ja. Manchmal hat man das Gefühl, das Gerät in so ein Loch, wo es dann nicht mehr rauskommt, und nur noch Quatsch erzählt. 

[Interviewee #2] Genau. 

[Interviewer] Okay, das heißt, du bewegst dich bei deiner Arbeit auch teilweise schon in der Code-Ebene. 

[Interviewee #2] Ja, also generell als Accessibility-Expertin muss ich das auch machen. Ist auch mein Background, also ich habe auch Online-Development gemacht, und für manche Sachen schaue ich dann einfach Code an, aber ich verwende kaum mehr AI, um das zu verifizieren, weil ich weiß, wie ich es fixen muss, und da brauche ich keine AI. Genau. 

[Interviewer] Ja. Benutzt du auch auf der anderen Seite quasi, es gibt ja auch schon Features, womit man Layouts oder Wireframes schon zu HTML-Code konvertieren kann, jetzt als Beispiel. Ist das auch schon ein Case? 

[Interviewee #2] Also habe ich für manche Sachen schon probiert, also für Design-Systeme zum Beispiel. Design-Systeme halt in React-Code oder HTML oder was auch 

103

A. Appendices 

immer. Oder halt CSS einfach rausspielen aus Figma. 

Hat so-so funktioniert. Für manche Dinge eigentlich recht gut, für manche Dinge eher so suboptimal. Ich glaube, es kommt auf den Use-Case an. 

Für einzelne Komponenten war es okay, wenn die Sprache halt verfügbar war. Das CSS war selten korrekt, aber der HTML-Code war richtig. Solange der mal passt, kann ich den Rest adaptieren. 

[Interviewer] Dafür hast du welches Tool verwendet? 

[Interviewee #2] Ich glaube, Figma to HTML. 

[Interviewer] Alles klar. Sehr gut. Ich glaube, wir liegen eigentlich auch ganz gut in der Zeit. 

Ich würde abschließend einfach nur nochmal fragen, ob du noch irgendwelche zusätzlichen Infos hast, die du mir gerne mitgeben würdest, wenn nicht ist auch völlig in Ordnung. 

[Interviewee #2] Nein, ich glaube, ich habe alles schon gesagt. 

[Interviewer] Okay. Passt. Alles klar. Vielen Dank nochmal für deine Zeit. 

Du hast mir viel Input mitgegeben. Das würde mir auf jeden Fall weiterhelfen. Vielen, vielen Dank. 

[Interviewee #2] Danke. Hat mich sehr gefreut. 

[Interviewer] Ebenso. Dann wünsche ich dir noch einen schönen Tag. Mach’s gut. 

[Interviewee #2] Ciao. 

A.5.3 Interview #3 [Interviewer] Great. Then let’s just go right ahead. I’ll start with some questions about your person to begin with. 

What’s your current role, your responsibilities at work? And are you self employed? Or you work with a company? 

[Interviewee #3] I work for a company. Basically, it’s a product that provides services to localize their content, generally. So if, if it is based in India, like, for example, the company is based in India, but the service they provide is localize their content. 

For example, if you prefer a video content for YouTube, or maybe you can write a book. But if you want to publish in through all over the world, then you have to localize that book. For example, if it is Europe, then maybe Spanish, Germany, Italian. 

So like this, the seller or the user want to localize their content to reach globally. So that’s the basic in that our product actually developing. So based on LLM and Google translation, like what, but today, but this year, we will focus on how to implement that 

104

A.5. Interviews transcripts 

a path with UX that enhance the experience of the product to localize throughout the world. 

So basically, it uses the AML process to translate the local content to reach globally, globally. 

[Interviewer] Yeah. Okay, that’s, that’s interesting. It’s an interesting use case. 

How’s your role? How would you describe your role at the company? 

[Interviewee #3] My day to day is UX research. Yeah, actually, I’m a product designer. So from the start to end, like from UX research to wireframing prototyping, and the final UI to developers, end to end process, I will handle. 

[Interviewer] Okay. How many years of experience do you have doing that work? 

[Interviewee #3] Almost two years. By this, by this June, I will complete two years, starting my stepping into. 

[Interviewer] Okay, how large is your UX team or product design team at your company? 

[Interviewee #3] Actually, it’s a startup company. So I am the only person who handled all processes currently. 

[Interviewer] Okay, I see. Yeah, I see. 

[Interviewee #3] Many, I think many of the startup companies don’t have a specific UX researcher, UX designer, UI designer, UI developer. Most of the startup companies, I think in India, they may be one or two persons who handle more than multiple works. So actually, I started as a graphic designer initially two years back. 

So after that, I shifted to design UX and product design. 

[Interviewer] Ah, I see. Yeah, yeah. Okay. 

So if we dive into the topic right now, when you’re doing UX design tasks, how are you using Gen AI and which tools are using? 

[Interviewee #3] Yeah, this whenever I receive any problem or any statement to solve, first of all, I just want to clarify, actually, it is a problem or not. Because if it is not a problem, then there is no need to research and search for a solution. So first of all, I just get the problem statement, then I will search for it’s actually need a solution or not. 

So after that, I will go to ChatGPT or Cloud. So basically, I just get what are the some products that have these issues or any other products also saving, having the same issues like that. So once I noted this all things, basically, I will just list out what are the key elements or features that enhance this problem. 

So after that, I just even ChatGPT just given a prompt, like this is the issue. So I need I maybe I found a solution like that. So I will detaily explain step one, this is the problem. 

Step two, step three, step three, like otherwise, what are the steps that I mentioned will give to the ChatGPT. So based on that, I will receive the flow, UX flow, research flow. 

105

A. Appendices 

So that why I become asking ChatGPT, it’s easy for me to documentation to view to the stakeholders. 

So initially, I just overview the problem statement and find a solution and then go use ChatGPT or somewhat any LLM based chat based interface to get overall documentation. Then I will again refine it with my own thought, what are the any other issues is there like that. So after that, I will hand over to the stakeholder. 

And again, I have the meeting with the stakeholder and the developers to enhance whether is this solution is valid or not like that. So once I again receive their feedback, their feedback, and again, I once iterate the problem with the solutions. So like this, I will start at the initial, but it will change in between. 

[Interviewer] Okay, I’m following. So in this more early research process, you mainly use ChatGPT as like an assistance? 

[Interviewee #3] Yeah, because initially, ChatGPT or DeepSeek or Cloud doesn’t have a search feature. If you ask any questions, we will receive only response in text format. But nowadays, recently, DeepSeek, Cloud and the ChatGPT introduced their new feature like web search. 

So it’s more easy. I can easily get the references also, references from web. So it’s easy to go analysis the results fast, very fast and I can use it for any time. 

So that’s the process. But I think in 2023, in somewhat, I started a design career. During that time, ChatGPT don’t have this familiar this year. 

So they just introduced their product like around recently only. So before that, I have Google only. So we basically search in Google, what are the companies that similar to these features, then again, note down what the problem they’re solving, what problem are we trying to solve like that previously. 

But today, now in 2025, it’s too much easy to get the insights very faster, much faster than like. 

[Interviewer] Yeah, yeah, I feel you. Yeah, back then it was a little bit more work. But how do you feel though about the output that ChatGPT gives you? 

Are you satisfied with the quality or do you need to adjust a lot to make it valuable? 

[Interviewee #3] No, no, no. Actually, the results given by ChatGPT or any LLM model is not the final in the results or somewhat. So it’s just helped me to get the first part of first phase of the view very quickly. 

But after that, I have to manually check whether it is true from like any community like Medium or Quora. I have to verify whether this is the right or wrong statement like that. So it’s most of the time, the ChatGPT and other tools will help like once I’ve done the project, then OK, the flow will be done. 

I need to document. So it’s difficult for me manually. These are the flow from this screen to this screen. 

106

A.5. Interviews transcripts 

I have some issues for that. I use ChatGPT like I did. I given the exact what the problem I have identified and what solution I driven. 

So I just need the context one step by step. For that, ChatGPT is easy. I don’t need to verify because I already given the exact problem and the solution. 

But initially, ChatGPT or any other LLMs are not 100% used in my daily workflow. I have to verify step by step. 

[Interviewer] Okay, yeah. If we go along in the design phase, so let’s say you’ve done the research. Are you using any other tools or maybe also ChatGPT if you create like user personas, if you create stories, if you design wireframes, for instance? 

[Interviewee #3] Like most of the UI or UX flow generating LLMs are basically generated from pre-default templates. Like for ChatGPT, the results coming from the data. If the result is not in the data, then we won’t get answers from any LLM. 

So any GenAI platform will give results based on the data itself. So if I am asking one data, like I want to solve this user issue in this platform, if it is not in the data of the LLM or any GenAI tools, it don’t give the answer exactly what I am needing. So most, actually the company I’m working for is developing a SaaS product. 

So most of the GenAI platform won’t cover this in their data sets. So this is the issues with the LLMs or GenAI, but throughout the process, it will, I think, find a solution. Most of the time I use like image generations model, like stable diffusion, Flux 1 or Flux 2, for visually creating any ideas for social media or any website designs. 

So I am stuck with the iterate the designs part. But using these GenAI tools, like stable diffusion or Flux anything, I can easily get reference within seconds, like 10 or 20 references. Previously, I have to think on just a wireframe with paper or sketch. 

But in that scenario, I can only create one or two variations. But through GenAI, I can create initially some blueprint, initially one. I just give to the LLMs or any GenAI tools, this is the base. 

I need more variations on this, then I get quickly 10 or 20, whatever the variations I can get. So for that, GenAI tools literally help me every day in my task. 

[Interviewer] Okay, this is an interesting point. Do you have any specifics, like specific tools you use for doing this task? 

[Interviewee #3] Yeah, mostly I use Flux. Recently, Flux FLUX.1. You can search it. 

[Interviewer] What is the name? 

[Interviewee #3] Flux FLUX.1. Actually, you can just try it in a game phase. There are three models, I think, Flux general, Flux dev, and Flux pro. 

Actually, I used first stable diffusion. It is the base model, I think. First of all, it is like a GAN model like that. 

107

A. Appendices 

But recently, I use Flux because the results I get is too accurate and fast, faster than ever. So I use those models for quickly generating visual references. It’s very really useful to visualize the ideas very fast. It may be any graphics or somewhat like designing any UIs for app or designing any UIs for websites like that. [Interviewer] Yeah, and you’re using this specifically for ideation, for coming up with ideas on how to design the platform or like a screen in particular? [Interviewee #3] Yeah, I basically use it for visual references. Basically, in previous, we use a print rest or prepick or any Behance dribble for UA references we use mostly. But nowadays, we can actually create the references nowadays with the GenAI tools, like image generation models. But from starting, like I’m saying, you know it’s stable diffusion. [Interviewer] Okay, yeah, I see. About the other tool, Flux UI, could you put it in the chat because I couldn’t find it. I was just looking for it. [Interviewee #3] Yeah, just a minute. I will share the link exactly. [Interviewer] Okay, yeah, that would be nice. [Interviewee #3] I shared the advanced model, but there are some other models also there. Yeah, you can try it. I actually shared the Hugging Face link. Actually, the model is hosted on the Hugging Face platform. But usually in my workplace, I already installed the model locally on my system. So there is no need for hosting. I already hosted in my local workspace. So I can generate numerous number of variations. So there is no limitations at all to get ideas. Because in Hugging Face, you have a limit, like you can generate images, only for some seconds with the three GPUs. Once it’s done, you can again restore the next day only. So for this reason only, I local hosted in my own personal computer. [Interviewer] Do you have an example prompt you would ask like this tool to generate something? [Interviewee #3] Yeah. For example, I want to design a book selling ecommerce mobile app. Yeah, so then I just go to this image generation models. So simply I type, generate a book ecommerce platform homepage with numerous number of books like that. So I initially get the overall idea. Sometimes I can use it for like, if I design any UI’s in Figma, for example, let me take I design for any food delivery platform. [Interviewer] Yeah. [Interviewee #3] So at initially I don’t have the exact food images from the customer, from the client. So I go to this image generation models. So simply type coffee with on the table. 

108

A.5. Interviews transcripts 

Like that, so I can get the images fast so I can use it in my works. Like, instead of going to free pick or any like Shutterstock or Pinterest like that, I go to this models and use this models to generate the images. So I use that images in my projects or any commercial or public projects because I don’t even to attribute those images somewhat. 

It’s free because I generated it. But previously we have some issues with, we have to attribute that assets are somewhat, but nowadays there is no issues with that. 

[Interviewer] Yeah, I see. 

[Interviewee #3] And one more thing is I can localize the image content also. For example, if you sell any book in your area, like in Europe, you can use any images like a European person on the book cover means, on the book cover. But if you want to sell in India or South Africa or any ethnic city, you can simply generate those ethnicity people easily. 

So these are very helpful to localize the contents also. The models are very intelligent than before. So I can simply give you a prompt like a Russian person using a computer on a workspace. 

Then I can get a workspace with the Russian person. If I want to sell to the Indian ethnicity, then I can simply change the Russian text to Indian. Then I will get the person like Indian ethnicity. 

[Interviewer] I see. Yeah. So I guess we use a really quick way to populate your prototype with images like on demand. 

[Interviewee #3] Yeah. Yeah. 

[Interviewer] And when we talk about the generation of wireframes as well, are you using any tools? Because I know that like some tools like Figma AI plugins, that do this on their own. You give a prompt and then they generate like a layout, like a wireframe. 

They also put some pictures automatically sometimes. Are you using those tools, any of them? 

[Interviewee #3] Actually, I don’t really use Figma really now. Mostly you can try Miro, M-I-R-O. There are some tools there specifically to, just a minute, I will share. 

[Interviewer] UX pilot. I shared the LinkedIn chat. I see. 

Okay. So this is a tool that you would commonly use? 

[Interviewee #3] Yeah. Yeah. But I rarely use, mostly these tools cover very basic prompts. 

If it is a SaaS product, we focus on any enterprises. We just focus on any specific enterprise client. So the need is different for different clients. 

Okay. So we can’t get in these tools because the data is limited to generate the wireframes. So I can’t get the exact results with these tools. 

109

A. Appendices 

Basically, I can get the overall view, the basic structure of the wireframe or the UI I can get. But in that, we can’t use these AI tools at full stage because we need that human touching at any some point. 

[Interviewer] Okay. So AI can provide a good foundation, but then you have to do manual work to really make it fit. 

[Interviewee #3] Yeah, exactly. 

[Interviewer] Okay. Yeah. I see. 

Yeah. You already told me quite a lot of tools, so that’s really nice. Maybe to conclude, are you also doing user testing regularly for your products and your company? 

[Interviewee #3] Actually not, no, because we are at the early stage. So we don’t have much users currently. But maybe this year or next year, once the user onboard is increased, then I have to do A-B testing or all these tests I have to take and optimize their experience. 

Currently, I’m not well about those testings, user testing. 

[Interviewer] Okay. Okay. Yeah, no, I feel that. 

Then this question doesn’t really apply here. Let me think. No, I think you already told me most of the stuff I wanted to know. 

One question about the future outlook. Do you foresee how GenAI and how the work for UX design with GenAI is changing in the next future and then how it would be changing? 

[Interviewee #3] Actually, it’s already changed, I think. It’s too fast. We initially started with the term GenAI. 

But that term is moved on to the next step called agentic AI. I’m asking you, do you know GenAI? 

[Interviewer] I didn’t understand it. I think my connection was just lost. Yeah, I know GenAI. 

I’m asking specifically about GenAI. 

[Interviewee #3] Yeah, but the term actually evolved to the next step. It’s called agentic AI. You know? 

Agentic AI? Yeah, agentic AI. Okay, I don’t know. 

[Interviewer] Maybe put in the chat. Maybe I misunderstood, but I think I don’t know. 

[Interviewee #3] Like agentic AI. 

[Interviewer] Ah, okay. No, I don’t know about this. 

[Interviewee #3] Okay, then the term UX also turned to a new term called agentic experience. This term, you know? 

110

A.5. Interviews transcripts 

[Interviewer] No, I don’t. [Interviewee #3] Agentic experience. Now you call UX. It just changed to agentic experience. [Interviewer] Oh, okay. That’s interesting. I will look into that, but I wasn’t aware of this before. [Interviewee #3] Yeah, actually it’s like, you see many products now integrated like chat-like interfaces, like chat-GPT. We just go and type and just enter. We get the results like that. So it’s totally changing the industry very fast. Even the Duolingo previously, I think previous week, they just rebranding the term like UX changed to PX, product experience. So most of the products nowadays have to implement the AI in their product. So now every, I think most of the software companies focus on AI. How to implement their AI in their daily task or the product that they have the users. So in previous, we have like mostly, for example, we take Amazon or Flipkart or Spotify, anything. We just have some pre-default data or like if you take Spotify, we have just the musics from different journals or different artists like that. But nowadays, maybe in future, it’s all gone. Like the way being, the way we integrate, speaking with the technology is changing very fast. So it’s like, it’s totally all about how we integrate AI in our product. It may be software product or anything. How we integrate in our daily life is changing. So that’s what it’s agentic experience. It means like we’re integrating AI in the experience. So if you use chatGPT, you go just type, you get results from the AI. So it’s totally changing. Nowadays, most of the products have like a chat interface. In previous, the chatbots are pre-default questions. It will answer only to the pre-default questions. Like when will my order will be delivered means, it will go to the database and check the details and give the information. That’s it. It’s the previous flow. But nowadays, the conversation with the app is changing. So basically, we integrated with the AI or any data sets. So once we ask any questions, it’s not from the pre-default questions. The answer we get from is not from the pre-default answers. We get the results from real-time thinking from the AI. So the product, so the day-to-day life, we’re creating an experience with the AI, sorry, agentic experience. So I told you everything. [Interviewer] That’s interesting, thank you a lot. [Interviewer] Thank you. 

111

A. Appendices 

A.5.4 Interview #4 [Interviewer] Okay, great. So let’s get started. Let’s start with some, just some basic questions about your person. 

So what’s your role and profession right now? And where are you working or studying? 

[Interviewee #4] Yes, I’m in Germany doing my dual studies in UX design. 

Before I studied product or industrial design in Argentina, and have always been interested in UX. 

I started in UX when we don’t have any AI tools. So yes, it’s quite interesting to see how the process evolve. And right now at work, we don’t make a lot of user research. 

I use a lot of tools like ChatGPT or Gemini or Copilot to process information or to help me with the writing in general. Also, yeah, to resume data, to create like the information that I should be using the website or yes, a little bit to modulate the process. 

[Interviewer] I’m asking about the whole process, like end to end. So it starts with like a research plan, research with like maybe even before that, it goes to prototyping, testing, all that. So any input is helpful for me. 

[Interviewee #4] Yeah, yeah, it’s true. But yes, we don’t do a lot of user research. That is the point that I wanted to clarify. 

In general, we use the best practice and I use the tools to have a base somehow. And starting with that base, I start to create things. And when I move into the process, like after define some things, it’s like, it’s never only with ChatGPT or whatever, it’s always like a mix. 

It’s like an hybrid between what the program says and what we think as a team. And it’s like, yeah, we process the program, process information and we also process to choose what the program says because sometimes they don’t say correct things. But yeah, for that stage, we use it like this. 

And then when we move forward for the UI part, we use maybe for some wording for buttons or for some sections or maybe Figma has a lot of tools now to create information, like to fill up fields with standard information or like also for the buttons or for different options for wording in, I don’t know, cards and different components. 

[Interviewer] Yeah. 

[Interviewee #4] Yes, I don’t know for what else. And then maybe to create some things, but it’s more related with graphic design. 

[Interviewer] Okay. I assume we were talking about the Figma AI features that you are using that are not integrated in Figma. 

[Interviewee #4] Yes, but I use that for the UI part, not for generate icons or these kinds of things. 

112

A.5. Interviews transcripts 

[Interviewer] Okay. So those you do so by hand without AI assistance? 

[Interviewee #4] No, in general, I use like the standard kits that you find, but there is also tools for that. I think Google has a tool that you write an icon and they make it good. 

[Interviewer] Ah, yeah. Are you using these tools for the purpose of creating icons and such? 

[Interviewee #4] Yeah. No, I never used, but I know that exists. I don’t use it because I don’t know, I think it’s a lot of time to waste on creating icons where there is a bunch of icons in internet. 

But if you want to create icons, you can also use that. And I know some people that use that too. 

[Interviewer] Okay. That’s interesting. When we talk about, let’s say, creating first drafts or creating wireframes, are you using either Figma’s AI features or other tools for that purpose? 

[Interviewee #4] Yes, there is also a Figma tool to creates high fidelity wireframes, but I use it only when I don’t know in what direction should I go. But yes, in general, I still do that manually. 

But there is also a webpage that you can use to create those. I still have to change because I’m in like in the middle. I’m interested in changing some things and use artificial intelligence for different things. 

But I still like to do the process by my own. And it’s better to understand it than start to standardize. 

[Interviewer] Yeah. How do you feel about the quality of AI-generated output? 

[Interviewee #4] Depends on what kind of information, but you always need to check. It’s not that I will generate something that is ready to use. You always need to edit some things. 

And even with text, you have to maybe make it shorter or delete some words. And if you create a picture, you also have to edit the picture. Yeah, I think that we are not in this stage of living the game, make the things alone. 

And I’m not sure if we will make it to that point because yes, you only need to see it before publishing or make it live. I think, I’m not sure in what direction we are going, but I think that is the right way. 

[Interviewer] Mm-hmm. Okay. So it’s kind of unclear how the future outlook for you and for your organization is right now in terms of using GenAI tools. 

[Interviewee #4] I’m not sure if it’s related with my organization. I think it’s more related with what we want as humans. Talking about the ethical standpoint, do we really want that AI makes everything for us? 

113

A. Appendices 

I think it’s a powerful technology, but we need to use it as a tool. It doesn’t produce final results, it’s not an employee, so we shouldn’t use it as one. 

[Interviewer] And do you personally or your organization or the way you work, do we have guidelines and when it comes to working with AI? 

[Interviewee #4] No, I’m not sure about the developers because they have more instructions about everything, especially with security things, but no, I don’t have any guidelines. I’m thinking like, no, I mean, generally it’s to try out everything and see what it works. Yeah, of course we have to create a lot of things, like when I, well, because sometimes I have to make graphic design things and I create some assets with CAI and yeah, I have to curate them and work very further on them. 

[Interviewer] And when you’re creating these graphic design elements, what tools are you using in specific? 

[Interviewee #4] I’m using one that is called Recraft and it helps you create vectors. Yeah, it’s super interesting because if you, there is not many tools with these options. So yeah, I prefer that one for almost everything, but yeah, maybe sometimes if I have to create like pictures, I use ChatGPT, like pictures, like placeholders or something like that, or yeah. 

[Interviewer] Yeah, okay. We talked a little bit of the UI part. Before you talked about more like the research part, I didn’t quite get it, but for what task there have you been using AI? 

[Interviewee #4] In general, if I have a search or for the best practice, or if I have to process information, for example, I have to create a login process and I collect all the information and I ask for resume or paths or different things that I need to create my final design. But it’s only for that reason, since we don’t make user research, the best way to use, yeah, KIs within these fields to resume and search for the best practice. 

[Interviewer] Okay, and for these tasks, you mainly use ChatGPT, I’ve heard. 

[Interviewee #4] Yeah, but I never use only one tool. I try to use few tools together to see if, what they say, because I don’t trust 100% in ChatGPT, like I trust in some things, but when it’s related to work or something important, I need to check that. And I think that it’s better to check it with different tools, not always with the same. 

So maybe I copy the same things in different programs and I see what they say. 

[Interviewer] Okay, do you have some examples besides ChatGPT? 

[Interviewee #4] Yeah, I use sometimes Gemini and Copilot. I think it’s DuckAI, it’s with the Duck logo. I don’t know what else, because I try different. 

[Interviewer] Okay, got it, yeah. 

[Interviewee #4] These are the only tools that I use for this research part. However, if I have a lot of files, it’s also possible to have ChatGPT process them automatically and generate a lot of insights. 

114

A.5. Interviews transcripts 

[Interviewer] Let’s say when you did some research and then maybe you wanna ideate something, you wanna explore the design space a little bit before you start prototyping, do you use any tools for these tasks? 

[Interviewee #4] No, in general, I don’t have that step because I received the information super process already. And furthermore, I can say that I don’t have that stage. But I think that, yeah, I love that part of the process. 

So I think if I have to make it, I will do it first and then I will ask ChatGPT just for the fun of making that process because I enjoy that part. 

[Interviewer] Yeah, okay. 

[Interviewee #4] And I don’t know, sometimes it’s nicer if you can brainstorm it with people. Yeah, I would prefer always with persons instead with AI. I’m not sure how my bosses do that part, but I hope they can make it maybe. 

[Interviewer] Okay, that’s good to know. And one last topic I wanna cover. Do you do user testing for your products? 

[Interviewee #4] No, I asked about that, but no, it’s not possible because it’s a small company and they can afford that right now or they are not interested, I’m not sure. But yeah, it’s not possible yet. In general, the user testing is like internally with a small group of stakeholders, but we don’t test it with a real user. 

[Interviewer] Okay, and if you do these tests internally, do you use any tool assistance for that? Yeah. 

[Interviewee #4] No, I never made it like this when I was in university. I used to make user testing, but we made it everything like in a not technological way. It feels like I’m super old, but no, because we didn’t have these tools like it was a few years ago. 

[Interviewer] Yeah, I’m sure that they have only been around for like three years right now, four maybe. 

[Interviewee #4] Yeah. 

[Interviewer] It’s true. Okay, I think we’re done actually with all the questions. Do you have anything to add? 

Wanna tell me that you haven’t so far? 

[Interviewee #4] No, I think no. I would like to know more about your project, but maybe I have to wait till you finish it and see the results. Yeah. 

[Interviewer] Okay, thank you. 

A.5.5 Interview #5 [Interviewer] Let’s jump in. Okay, let’s do it. So first question is a little bit about your personal background. 

115

A. Appendices 

So what’s your current role, profession and your responsibilities? 

[Interviewee #5] Yeah, so I’m the director of product experience for an online travel agency. So we have 40 websites, we sell airplane tickets basically. So my role as the product experience director, I manage a team of UX designers or product designers, UI designers and custom experience research. 

And at the director level, I work strategically with two other product directors, a data director to define strategy roadmaps, then through research identify opportunities and inform those roadmaps. And then the actual discovery definition delivery, that’s my team. And I also help steer that. 

And then we iterate, we do a lot of A-B testing for pretty much everything. Yeah, and I’m sure we’ll get into some more details as we go. But I think that gives you a pretty good picture. 

[Interviewer] Okay, great. So during your daily work, what AI tools are you using for which processes? 

[Interviewee #5] Yeah, so with a lot of these questions, I think I’m going to answer for myself and for my team. Yeah. So primarily ChatGPT. 

ChatGPT is the kind of standard baseline that we use for a lot of stuff. There are a few other ones we use that I’ll mention. But day to day, we all use it many times every day. 

Some of the other tools that we use, well, a lot of features now have AI embedded. For example, one of the... I’ll list some. 

Dovetail is a program we use for recording and transcribing user interviews. That now does some pretty impressive automatic tagging, which previously was quite a mundane effort. Another tool, Airtable, was a part of our repository, is now introducing some pretty nice AI tools to help us with similar kind of work for tagging and organizing and adding structure. 

We experiment with different tools all the time. So we came across a tool once that we thought could do a really good job of collating quantitative data from unmoderated user tests. So we would do, for example, a Useberry or Usability Hub or usertesting.com, different types of testing, usability testing, preference testing, task testing, whatever. And we’ve recently done some projects at quite a big scale, where we had hundreds of participants interacting with prototypes for a test. Typically, we use those methods for qualitative research, which, of course, in this case, we did do. But in this case, we also were experimenting with more quantitative through scale. 

So then through these usability tests, we would uncover metrics like time on task, engagement areas, satisfaction, comprehension, all sorts of different scores. So we had tried with a tool, the name of it doesn’t come to mind right now, I’ll try and remember, that we hoped would do a better job than ChatGPT was at the time of organizing and structuring that data. So the hope was that we could give it raw CSVs or Excel 

116

A.5. Interviews transcripts 

spreadsheets with the metric data, and it would collect it and come back to us and say, okay, here are the trends, here are the patterns. 

I did some maths and see there’s a deviation score over here. And what we found, and I think this is a trend that continues to happen, but happens less and less all the time across tools, is the output looked really good. It looks legitimate, it seems like, yeah, this makes sense. 

But when we investigate deeper to validate that we find that it’s not the case. So what it was doing was using existing knowledge it had, about what it expected would be the trends and patterns, and communicating that in a story, instead of actually analyzing and understanding the raw data. So that tool, we tried a couple of times and it wasn’t working. 

But that does speak to a use case that we now use it for in a limited capacity with ChatGPT. So the ChatGPT data analysis tools have become quite good. So what we’ll also do is when we have insights at scale, whether that’s from moderated interviews or any type of research really, when we’ve got a lot of it, we have one customer experience researcher, so his capacity is spread very thin across a lot of different things. 

And a big portion of this process is in the synthesis, well, the analysis as well, but we don’t let the AI do that, but in the synthesis of that data. So as I mentioned earlier, we want to be able to feed it some raw information, and it can help do the structure and do a lot of the manual tagging stuff. But what we’ve learned to do and how to use it for those things is, it’s not as we would hope, we just throw the raw stuff in and expect good things out. 

It really does take some back and forth in collaboration with the tool to get it there. So we and our team have a lot of different custom GPTs that we’ve built for very specific types of tasks, so that we can get reliable and consistent outputs. So the just standard 4.5 model or whatever the standard models are, that we do use for some things, and I’ll speak a little bit to that. But for more specific things, one I just mentioned, we create custom GPTs and we find that effective. We also then can share those instructions so we can have consistency across the teams. Some of the other use cases for the custom GPTs, that’s similar. 

We as a company get a lot of reviews on Trustpilot, Google reviews, and these essentially look like a five-star rating together with a comment. There’s some other metadata, but those are the things we really care about. It used to be a really big effort, like it would take a couple of weeks to extract key insights, sentiment analysis, understand most of our problems here, those kinds of things. 

We tried about a year ago to automate it to some degree with ChatGPT, and it just wasn’t doing it. We could make it work, but the effort was high. It was still easier than doing it manually, but it wasn’t reliable enough that we would just trust to do it. 

However, now, or as of a couple of months ago, we try again and we try a different approach, but also the tool’s gotten a lot smarter. Now we’ve got it working really well 

117

A. Appendices 

also with the custom GPT. We can upload the CSVs to the knowledge base. 

We’ve instructed it on what to look for, how to format it, and now we can get consistent and reliable results where I can just upload the new one and say, hey, check this, check that. We still, because we’ve been using it so frequently, we know that it’s easy to trust it because it seems legitimate, so we still have some processes in place for extra validation. Sometimes we also use AI to help validate AI, so we might use ChaptGPT or even another tool like Gemini or Claude to help validate it. 

The way we do that is we do chunks. We’ll ask it to validate a small portion of the data we give it and a small portion of the data output we get. That way, it’s less likely to hallucinate because it’s very focused, whereas what we’re testing is at scale. 

If we do that a few times and we find that it’s consistent together with us manually reviewing it, then we’re quite confident. However, if the severity of getting it wrong is really high, if it’s wrong, it’s going to be a problem, or if our confidence in the output, even after some automatic validation, isn’t high, then we might just avoid using it altogether. However, for a lot of things, and I think this is a trend in a lot of the work that we do with ChaptGPT, it helps us a lot with the kind of work we might otherwise not do because of how intensive the manual effort would be. 

So, very helpful. I would love to have this. Maybe I could get three interns to work on it because it’s kind of simple, but menial and time-consuming. 

So, we use it a lot for those kinds of tasks, tag this, categorize that. Yeah. So, I think on the research data organization, I think that covers kind of what we’re doing. 

I’ll move on to some other topics unless you have some questions about what I just told you. Yeah. 

[Interviewer] Okay. You can go just ahead. Yeah. 

[Interviewee #5] Okay, cool. While you’re at it. 

[Interviewer] You’re giving me a lot of very important details, so that’s great. 

[Interviewee #5] Oh, I’m so glad. Okay, great. So, one of the other things that we use it for is to help with our UX copywriting. 

So, we recently had a new brand refresh for one of our major direct market brands, which means that we have tone of voice guidelines for the brand, but there’s also a difference between marketing copy and UX copy. So, again, we have a custom GPT that we’ve trained, and when I train, what I mean is not like an LLM training where we, what I mean instead is when we create a custom GPT, we have a lot that’ll take us a few days, maybe even a couple of weeks of trying it, experimenting, seeing the outcome, and then adjusting the instructions over and over until we’re getting it to produce what we want. So, with the UX copywriting one, what we’ve got now is really clear instructions on what our brand tone of voice looks like, some essential UX copywriting basic guidelines. 

118

A.5. Interviews transcripts 

We then also mapped, well, as a part of the UX guidelines, we’ve also informed it of different types of copy we want. So, when to be purely informative and transactional, or when to be persuasive, or, for example, is this an error message, in which case we want to not have any humor or be edgy, we want to be very clear and direct. Or sometimes in our German market, we might shift to less informal register, but it also depends on the market that we’re in. 

And then what we can do once that’s now set up and working quite well, again, everyone on the team has access to the same instructions, and we use it in lots of different ways. One of the easiest things that we can do that often yields good results is we can literally just take a screenshot of a design or a flow, throw it into that custom GPT, and at a minimum, just put it in there and say, what do you think? And it will assess and give us feedback. 

Oh, this is good, you’re doing this well, this isn’t really on brand. And we can ignore or not. So, the designer would look at it and go, yeah, that’s smart, now that you mention it, or no, no, no, no, no. 

So, it’s a sounding board for those things. We could also, you have a question? 

[Interviewer] Yes. Good observation. The feedback you’re getting from this tool is purely textual? 

[Interviewee #5] Yes. 

[Interviewer] Or does it give visual feedback, clues, improvements? 

[Interviewee #5] I’ll tell you a little bit about that in a moment, though, because I do have something to say about that. So, for the UX copywriting, we use it for reviewing copy. We also use it to help with translations. 

So, we use a translating agency. All my teams speak English, so we produce copy in English, and then it goes to an agency that does the translation. And we’ve recently discovered that those translations are not great for a lot of things. 

They’re missing context and nuance. However, the GPT does a very good job at translating, but also understanding the context and the nuance and the brand tone of voice. So, it can output for us translations, but also, for example, in the German market, if the register needs to be a bit different, it can do that. 

Another thing is some languages, Dutch, for example, tends to be a bit longer than English. So, the agency might translate button copy. That should be one word, and now it’s like five. 

So, we can also use it to quickly test and see, okay, how is this going to work with a different language? Then, on to your question about the visual stuff. I think that is the one area that we don’t use it. 

119

A. Appendices 

We try. We keep trying every now and then just to see how it’s doing, and it’s it’s just very shallow. If someone who’s not an UX designer wanted some advice, it would be able to help. 

It will tell you very basic heuristic stuff, but it’s very basic. Yeah. I think any UX professional, if you’re a professional, it shouldn’t tell you anything that’s not obvious right away to you. 

So, we’ve never yet got any really helpful insight in a review of a design. What it does help with that’s kind of related but not super visual is things like information architecture. So, I’ll give you a specific example. 

We were redesigning the flight cards on the search results page. You search for a flight, and you see a listing of possible flights and filters and everything. We wanted to know, well, what should go on the flight cards because we need a balance overwhelming people with finding exactly the kind of key decision-making data points that they’d like. 

So, we did some user testing, research, card sorting with a bunch of people to see from all the metadata available, flight duration, airline, does it have seat reclining, all the things. Through that research, we found out, well, what are the things that people care about most now or later, so on and so forth. So, now we have a prioritized list of what it seems people want. 

What we could then do with that list is bounce it back and forth to chatGBT to try and find the line of which things should be visible at a glance versus something behind a tooltip or some progressive disclosure to reveal some extra information or in a separate modal. It got us to a starting point very quickly. So, rather than taking this mass of now-prioritized by us items and going, I wonder where, how, we asked chatGBT and it did a really good job of suggesting what would be at a glance or behind progressive disclosure. 

We then had a really good starting point. So, of course, we adjusted it based on our own insight, but I have to say it got us 60% of the way there in two minutes once we had done that work already. So, that’s a nice example of where it’s definitely saved us time. 

Previously, it would have either taken us more time or if it’s very time sensitive, we probably wouldn’t have done as good a job in figuring that stuff out. It would have been a lot more based on our intuition than, yeah, pretty good insights that chatGBT was able to deliver for that information architecture. But, yeah, visual stuff, no. 

Otherwise, information architecture for our design system, it was quite useful. So, we had a legacy system when I arrived a couple of years ago, which wasn’t a system so much as a component library. There was no system to it. 

It was just a mess of components. So, organizing that, like 130 plus components into meaningful categories, a better naming convention, that saved us a lot of time. It is aware of best practice for Atomic Design and naming conventions and React libraries and all these things. 

120

A.5. Interviews transcripts 

So, all we had to do was feed it the list of components, many of which had really confusing names from previous designers or developers that weren’t clear. We had five buttons. We now have one with properties, but we had primary, secondary, tertiary, quaternary, quinerary. 

It was weird. So, we just pumped all of that in. We also, where it was confused, which was often, would just give it a screenshot quickly of what the component was. 

And then it would understand, oh, you mean a stepper, not a snake navigation. Or, oh, you mean this. It then compiled it into really clear categories. 

It introduced a naming convention that made a lot of sense for the designers and developers. And what we had told it or asked it in order to get there is we explained who the audience is, the purpose of the good naming convention so that people in different disciplines, PMs, POs, designers, developers, can very quickly find the things. Because one of the problems that we were addressing is people are creating new components because they didn’t know it existed because they didn’t know how to find it. 

So, after explaining the problem statements and the goals, it then achieved that really, really well for us. I think if you take a step back a way to think about how we collaborate with the AI tools is either to kind of help diverge thinking or converge thinking. So, early on, like in a brainstorm, hey, give me, here’s a problem. 

What do you think? And say, oh, well, here are 30 directions. And then we can go, oh, okay, let’s take these further. 

Or we might go to it and do the other way around and say, hey, here are 30 things. What do you think? And it can help refine that to, oh, these are the key things and for these reasons. 

So, yeah, I think that’s a good way to think about it is it gets us out or in, but never both in one go. It might trick you into thinking it’s done that well, but it totally loses context and then it’ll just defer to textbook best practice, like basic UX stuff instead of understanding the nuance that we really need to massage out of it. Yeah. 

What else? I wrote down some things. Yeah, I think another big thing that it helps with is documentation. 

So, for example, when I was introducing a new design process, and that included templates or project management tools, and it was just a lot of stuff that I needed to document, previously, it would have taken me a very long time to think carefully about how to word it and structure it. And now with ChattyBT, and I’m speaking very much more for myself than my designers as they’re not writing as much stuff, I can just word vomit, like it’s in here, and I can put it out there kind of messy, and it will then, yeah, clean it up, make it well structured. We can go back and forth a little bit to get it right. 

But effectively, it means that a document that would have taken me a week or two to refine, I do in an hour or two, because all I have to think about is giving it the right information, not about the structure and format so much. It handles that, which I think 

121

A. Appendices 

of as like the, again, the dumb but hard work part of the job. So, I can just do the creative thinking and move on to the next thing a lot faster. 

Yeah. Let’s see what else I wrote down. I think I’ve kind of, yeah, I mean, some of the other stuff I mentioned with the idea of the convergence and divergent thinking, but just as a thinking partner, an aspiring partner, a lot of quick, hey, what do you think of this? 

Like, oh, shit, I didn’t think of that. Because ideally, I’d want to do that with a human being, but I don’t always have a human here available right now to bounce something off of. It’s not a replacement for that. 

I still do that often as I can. But yeah, I mean, I can’t literally every five minutes interrupt John, hey, what do you think of this? So, just as a quick sounding board, I find it really helpful. 

Also, nice and I think you’ll find what I’m going to say now interesting, but I also want to just mention that I wouldn’t inflate what I’m about to say. It’s not a big thing, but it certainly exists. But I think you’ll find it interesting. 

As a validation tool, it can be very nice when I say, oh, here’s an idea or a structure or whatever. And it’s just saying back to me, oh, yeah, that’s smart because of this and this and this and this. It’s nice validation. 

But to be honest, my ego enjoys it. So, it’s quite motivating. So, if I’m feeling stuck and I’m unsure about something I’m doing and it says to me, oh, no, it’s great for these reasons. 

Yeah, on the one hand, it does validate like, oh, I think I’m in the right direction. But it totally motivates me like, oh, okay, I feel good about this and then I can proceed. 

[Interviewer] Okay, that’s a very interesting point you’re mentioning and you Yeah. 

[Interviewee #5] I mean, we experiment with a lot of things. So, we don’t use image generation. So, like whether it’s ChachiPT or Midjourney or any of those things. 

Just because, well, it doesn’t do the kind of stuff that we want. Any photography that we need, marketing mostly does that. But also, if we’re selling a destination, it’s really important that’s an authentic photograph of destination. 

If we do illustrations, the consistency of style isn’t strong enough that we could trust it to do it on its own. So, we don’t do any image generation. And of course, some tools that can do UX or UI generation. 

For example, Vercel v0 does pretty cool front-end stuff. It’s a remarkable tool. 

You can type in a prompt and it does the front-end for you. v0, yes. I got it. 

Yeah. Play with it. It’s insane. 

It’s kind of scary. But again, as with so many things, it’s very surface. It’s very what a junior would do on their first try. 

122

So, it’s not really useful for us, but I could see it being useful for a product owner who can’t afford a designer to get something going. But that could change maybe a year from now. I joke with my designers often that the project they’re working on now, whatever that is, they need to make it the best project they’ve ever done because it might be the last one. 

Because AI might be doing it better than us any day now. Yeah. Which I think is also part of the reason that me and my team are really on top of this stuff is, yeah, we don’t want to be left behind. 

We want to be the ones who’ve mastered it and yeah, we’ll be the last ones hopefully to lose our jobs. 

[Interviewer] Yeah. Yeah. That’s certainly an important factor. 

How do you feel as an individual or your organization about the rise of AI and the ever-increasing capabilities that it has? 

[Interviewee #5] Yeah. So, I think my team and my organization are a bit of a standout exception in our adoption of the stuff. I think a lot of the rest of the organization, particularly the old guard, I’ll call them. 

Not necessarily old people, but people who’ve been there for a long time and this is how they do it. For them, it’s maybe a bit of a novelty like, oh, that’s fun. They can help me write an email. 

They’re not really digging into it. But then there are some people in marketing, for example, and I expect you’d find this a lot with B2B businesses as well, who are like, oh yeah, let’s do something AI. What? 

I don’t know, like something. 

[The remainder of the interview was not approved for publication] 

# List of Figures 

2.1 Overview on GenAI use cases, workflows, tools, and issues from the literature 7 

3.1 Application of DSR for this study, adapted from Hevner et al. (2004) . . 19 3.2 The literature screening process and results . . . . . . . . . . . . . . . . . 21 

4.1 Overview of themes identified from the expert interviews . . . . . . . . . . 26 4.2 Overview of mapped GenAI use cases with associated design phase and tools 30 

123

List of Figures 

4.3 Screens of the UX prototype generated with Figma AI . . . . . . . . . . . 31 4.4 Insights regarding pain points generated with Dovetail . . . . . . . . . . . 34 4.5 Insights regarding personal goals generated with Dovetail . . . . . . . . . 34 4.6 Insights regarding motivational factors generated with Dovetail . . . . . . 35 4.7 Overview of tested GenAI tools with associated implications in the design 

phase Emphasize . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 4.8 First user persona generated with ChatGPT (only textual output) . . . . 39 4.9 Second user persona generated with ChatGPT (only textual output) . . . 40 4.10 Problem statement generated with ChatGPT (only textual output) . . . . 41 4.11 Overview of tested GenAI tools with associated implications in the design 

phase Define . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 4.12 A basic sitemap for the UX prototype generated with relume.io . . . . . . 44 4.13 Basic wireframes for the UX prototype generated with relume.io . . . . . 45 4.14 Basic color scheme for the UX prototype generated with relume.io . . . . 45 4.15 Manually defined high-level user flow for the UX prototype . . . . . . . . 47 4.16 General design variations generated with Stable Diffusion 3 . . . . . . . . 48 4.17 Dashboard design variations generated with Stable Diffusion 3 . . . . . . 48 4.18 Design variations generated with FLUX.1 . . . . . . . . . . . . . . . . . . 49 4.19 Overview of tested GenAI tools with associated implications in the design 

phase Ideate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 4.20 Wireframes generated with the Figma plugin Wireframe Builder . . . . . 53 4.21 Wireframes and design alternatives generated with Uizard . . . . . . . . . 55 4.22 Paper mockups and resulting digital wireframes . . . . . . . . . . . . . . . 56 4.23 Wireframes generated with UX Pilot . . . . . . . . . . . . . . . . . . . . . 58 4.24 Wireframes generated with Figma AI, the two on the left for the use case of 

healthy habits, the right one for food delivery as comparison . . . . . . . 59 4.25 Wireframes generated with the new prompt with Figma AI . . . . . . . . 60 4.26 Vector graphics and logo ideas generated with Recraft . . . . . . . . . . . 61 4.27 Descriptive UX prototype text generated with ChatGPT (only textual output) 62 4.28 Descriptive UX prototype text generated with ChatGPT (only textual output) 62 4.29 Descriptive UX prototype text generated with ChatGPT (only textual output) 63 4.30 Descriptive UX prototype text generated with ChatGPT (only textual output) 63 4.31 Overview of tested GenAI tools with associated implications in the design 

phase Prototype . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66 4.32 Wireframes before and after adjustments for accessibility with Stark . . . 68 4.33 Overview of tested GenAI tools with associated implications in the design 

phase Test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69 4.34 Mapping of recommendations to best practice guidelines . . . . . . . . . . 70 

A.1 Landing Page and UX writing generated with Blaze . . . . . . . . . . . . 93 

124

# List of Tables 

2.1 GenAI use cases for the design phase Emphasize . . . . . . . . . . . . . . 8 2.2 GenAI use cases for the design phase Define . . . . . . . . . . . . . . . . . 9 2.3 GenAI use cases for the design phase Ideate . . . . . . . . . . . . . . . . . 10 2.4 GenAI use cases for the design phase Prototype . . . . . . . . . . . . . . . 11 2.5 GenAI use cases for the design phase Test . . . . . . . . . . . . . . . . . . 12 2.6 GenAI use cases across design phases . . . . . . . . . . . . . . . . . . . . . 13 2.7 Challenges and concerns about GenAI usage across design phases . . . . . 17 

3.1 Demographic overview of interviewed UX experts . . . . . . . . . . . . . . 21 

A.1 Semi-structured questionnaire for the expert interviews . . . . . . . . . . 81 A.2 Results from the expert interviews . . . . . . . . . . . . . . . . . . . . . . 85 A.3 Derived GenAI use cases from the expert interviews . . . . . . . . . . . . 86 A.4 Research plan generated with ChatGPT . . . . . . . . . . . . . . . . . . . 88 A.5 Research plan extension generated with ChatGPT . . . . . . . . . . . . . 88 A.6 Market analysis of existing habit-tracking solutions generated with ChatGPT 90 A.7 Interview questionnaire generated with ChatGPT . . . . . . . . . . . . . . 91 

125

# Acronyms 

AI Artificial Intelligence. 3 

DSR Design Science Research. 3 

GANs Generative Adversarial Networks. 6 

GenAI Generative Artificial Intelligence. xi 

LLMs Large Language Models. 6 

UX User Experience. xi 

VAEs Variational Autoencoders. 6 

127

# Bibliography 

[1] Sisira Adikari, Craig McDonald, and John Campbell. Reframed contexts: Design thinking for agile user experience design. In Aaron Marcus, editor, Design, User Experience, and Usability. Design Philosophy, Methods, and Tools, pages 3–12, Berlin, Heidelberg, 2013. Springer Berlin Heidelberg. 

[2] Pedro Alvarez, Jorge García de Quirós, and Sandra Baldassarri. Riada: A machine-learning based infrastructure for recognising the emotions of spotify songs. Inter-national Journal of Interactive Multimedia and Artificial Intelligence, InPress:1, 01 2022. 

[3] Ainhoa Apraiz Iriarte, Ganix Lasa, and Maitane Mazmela. Evaluating user experience with physiological monitoring: A systematic literature review. Dyna (Bilbao), 8:21, 03 2021. 

[4] Alexander Bogner, Beate Littig, and Wolfgang Menz. Introduction: Expert Interviews — An Introduction to a New Methodological Debate, pages 1–13. Palgrave Macmillan UK, London, 2009. 

[5] CareerFoundry. How to write a problem statement in ux design, 2023. Accessed: 2025-03-06. 

[6] Mourad Chouki, Brigitte Borja de Mozota, Andreas Kallmuenzer, Sascha Kraus, and Marina Dabic. Design thinking and agility in digital production: The key role of user experience design. IEEE Transactions on Engineering Management, 70(12):4207–4221, 2023. 

[7] Allan Feldman, Patricia Paugh, and Geoff Mills. Self-Study Through Action Research, pages 943–977. Springer Netherlands, Dordrecht, 2004. 

[8] Mahsa Fischer and Carsten Lanquillon. Evaluation of generative ai-assisted software design and engineering: A user-centered approach. Lecture Notes in Computer Science, 14734:31–47, 06 2024. 

[9] Francisco García-Peñalvo and Andrea Vázquez-Ingelmo. What do we mean by genai? a systematic mapping of the evolution, trends, and techniques involved in generative ai. International Journal of Interactive Multimedia and Artificial Intelligence, 8(4):7–16, December 2023. 

129

Bibliography 

[10] Global Growth Insights. Habit tracking app market growth report 2024-2032, 2024. Accessed: 2025-02-27. 

[11] Nielsen Norman Group. How to write a problem statement, 2020. Accessed: 2025-03-06. 

[12] Nielsen Norman Group. How ai works: An introduction for designers. Nielsen Norman Group, July 2023. 

[13] Anne Hess, Thomas Immich, Jill Tamanini, Mario Biedenbach, and Matthias Koch. Opportunities and limitations of ai in human-centered design a research preview. In Daniel Mendez and Ana Moreira, editors, Requirements Engineering: Foundation for Software Quality, pages 149–158, Cham, 2024. Springer Nature Switzerland. 

[14] Alan Hevner, Alan R, Salvatore March, Salvatore T, Park, Jinsoo Park, Ram, and Sudha. Design science in information systems research. Management Information Systems Quarterly, 28:75–, 03 2004. 

[15] Manuel Goyanes Homero Gil de Zúñiga and Timilehin Durotoye. A scholarly definition of artificial intelligence (ai): Advancing ai as a conceptual framework in communication research. Political Communication, 41(2):317–334, 2024. 

[16] Yutan Huang, Tanjila Kanij, Anuradha Madugalla, Shruti Mahajan, Chetan Arora, and John Grundy. Unlocking adaptive user experience with generative ai. Department of Software Systems and Cybersecurity, Monash University, 2024. 

[17] Rowan T. Hughes, Liming Zhu, and Tomasz Bednarz. Generative adversarial networks–enabled human–artificial intelligence collaborative applications for cre-ative and design industries: A systematic review of current approaches and trends. Frontiers in Artificial Intelligence, 4, April 2021. 

[18] Nusrat Jahan, Sadiq Naveed, Muhammad Zeshan, and Muhammad A Tahir. How to conduct a systematic review: a narrative literature review. Cureus, 8(11), 2016. 

[19] Hassan Khosravi, Simon Buckingham Shum, Guanliang Chen, Cristina Conati, Dragan Gasevic, Judy Kay, Simon Knight, Roberto Martinez-Maldonado, Shazia Sadiq, and Yi-Shan Tsai. Explainable artificial intelligence in education. Computers and Education: Artificial Intelligence, 3:100074, 05 2022. 

[20] Yu-Ren Lai, Hsi-Jen Chen, and Chia-Han Yang. Exploring the impact of generative artificial intelligence on the design process: Opportunities, challenges, and insights. In Artificial Intelligence, Social Computing and Wearable Technologies, volume 113, pages 49–59, Tainan, Taiwan, 2023. National Cheng Kung University. 

[21] A. Lentez and G. Mager. Exploring the potential of chatgpt in enhancing user expe-rience (ux) writing. In Tareq Ahram and Redha Taiar, editors, Human Interaction & Emerging Technologies (IHIET 2023): Artificial Intelligence & Future Applications, 

130

Bibliography 

volume 111 of AHFE Open Access. AHFE International, USA, 2023. AHFE (2023) International Conference. 

[22] Jie Li, Hancheng Cao, Laura Lin, Youyang Hou, Ruihao Zhu, and Abdallah El Ali. User experience design professionals’ perceptions of generative artificial intelligence. In Proceedings of the CHI Conference on Human Factors in Computing Systems, CHI ’24, New York, NY, USA, 2024. Association for Computing Machinery. 

[23] Zhaohui Liang, Xiaoyu Zhang, Kevin Ma, Zhao Liu, Xipei Ren, Kosa Goucher-Lambert, and Can Liu. Storydiffusion: How to support ux storyboarding with generative-ai, 2024. 

[24] David Lozie, Robina Omosa, Sara Hesami, Shenjuti Zaman, Mahsa Kajbaf, and Amina Malik. Examining the impact of generative artificial intelligence on work dynamics. Human Resources Management and Services, 6:3420, 02 2024. 

[25] Ggaliwango Marvin, Nakayiza Hellen, Daudi Jjingo, and Joyce Nakatumba-Nabende. Prompt engineering in large language models. In I. Jeena Jacob, Selwyn Pira-muthu, and Przemyslaw Falkowski-Gilski, editors, Data Intelligence and Cognitive Informatics, pages 387–402, Singapore, 2024. Springer Nature Singapore. 

[26] Atif Mashkoor, Tim Menzies, Alexander Egyed, and Rudolf Ramler. Artificial intelligence and software engineering: Are we ready? Computer, 55:24–28, 03 2022. 

[27] Maze. How to create a ux research plan: A step-by-step guide, 2025. Accessed: 2025-03-03. 

[28] Patrick Mikalef, Najmul Islam, Vinit Parida, Harkamaljit Singh, and Najwa Altwaijry. Artificial intelligence (ai) competencies for organizational performance: A b2b marketing capabilities perspective. Journal of Business Research, 164:113998, 05 2023. 

[29] Abdallah Namoun, Ahmed Alrehaili, Un Nisa, Hani Almoamari, and Ali Tufail. Predicting the usability of mobile applications using ai tools: the rise of large user interface models, opportunities, and challenges. Procedia Computer Science, 05 2024. 

[30] Winda Suci Lestari Nasution and Patriot Nusa. Ui/ux design web-based learning application using design thinking method. ARRUS Journal of Engineering and Technology, 1(1):18–27, Aug. 2021. 

[31] Prasadini Padmasiri, Pramukthika Kalutharage, Nethma Jayawardhane, and Chaminda Wickramaratne. Ai-driven user experience design: Exploring innovations and challenges in delivering tailored user experiences. In International Conference on Information Technology Research (ICITR), 12 2023. 

[32] Ken Peffers, Tuure Tuunanen, Marcus Rothenberger, and S. Chatterjee. A design sci-ence research methodology for information systems research. Journal of Management Information Systems, 24:45–77, 01 2007. 

131

Bibliography 

[33] PwC Market Research. Experience is everything: Here’s how to get it right, 2018. Accessed: 2025-03-11. 

[34] DV Rodriguez, K Lawrence, J Gonzalez, B Brandfield-Harvey, L Xu, S Tasneem, DL Levine, and D Mann. Leveraging generative ai tools to support the development of digital solutions in health care research: Case study. JMIR Hum Factors, 11:e52885, Mar 2024. 

[35] Yvonne Rogers, Helen Sharp, and Jenny Preece. Interaction Design: Beyond Human-Computer Interaction. John Wiley & Sons, Chichester, UK, 3rd edition, 2011. 

[36] Ana M. Roldán-Ruiz, María de los Ángeles Merino-Godoy, Antonio Peregrín-Rubio, Carmen Yot-Domínguez, and Emília I. M. Teixeira da Costa. An app about healthy habits as an educational resource during the pandemic. Healthcare, 10(1):148, 2022. 

[37] Jana I. Saadi and Maria C. Yang. Generative design: Reframing the role of the designer in early-stage design process. Journal of Mechanical Design, 145(4):041411, 02 2023. 

[38] Pranab Sahoo, Ayush Singh, Sriparna Saha, Vinija Jain, Samrat Mondal, and Aman Chadha. A systematic survey of prompt engineering in large language models: Techniques and applications, 02 2024. 

[39] Albrecht Schmidt, Passant Elagroudy, Fiona Draxler, Frauke Kreuter, and Robin Welsch. Simulating the human in hcd with chatgpt: Redesigning interaction design with ai. Interactions, 31(1):24–31, jan 2024. 

[40] Haroon Sheikh, Corien Prins, and Erik Schrijvers. Artificial Intelligence: Definition and Background, pages 15–41. Springer International Publishing, Cham, 2023. 

[41] Herbert A. Simon. The Sciences of the Artificial. MIT Press, Cambridge, MA, 1969. 

[42] Zineb Sordo. A review on generative ai for text-to-image and image-to-image generation and implications to scientific images. arXiv, February 2023. 

[43] Mouna Squalli Houssaini, Ahmed Aboutajeddine, Imane Toughrai, and Adil Ibrahimi. Development of a design course for medical curriculum: Using design thinking as an instructional design method empowered by constructive alignment and generative ai. Thinking Skills and Creativity, 52:101491, 2024. 

[44] Åsne Stige, Efpraxia D. Zamani, Patrick Mikalef, and Yuzhen Zhu. Artificial intelligence (ai) for user experience (ux) design: a systematic literature review and future research agenda. Information Technology & People, ahead-of-print, 2023. 

[45] Marco Stojanovic, Axel Grund, and Stefan Fries. App-based habit building reduces motivational impairments during studying – an event sampling study. Frontiers in Psychology, 11:167, 2020. 

132

Bibliography 

[46] Macy Takaffoli, Sijia Li, and Ville Mäkelä. Generative ai in user experience design and research: How do ux practitioners, teams, and companies use genai in industry? In Proceedings of the 2024 ACM Designing Interactive Systems Conference, DIS ’24, page 1579–1593, New York, NY, USA, 2024. Association for Computing Machinery. 

[47] Ars Technica. A jargon-free explanation of how ai large language models work. Ars Technica, July 2023. 

[48] Severi Uusitalo, Antti Salovaara, Tero Jokela, and Marja Salmimaa. "clay to play with": Generative ai tools in ux and industrial design practice. In Proceedings of the Conference on Human-Centered Computing, Espoo and Tampere, Finland, 2024. Aalto University & Nokia Bell Labs. 

[49] UXtweak. User research plan template, 2025. Accessed: 2025-03-03. 

[50] Ipke Wachsmuth. The Concept of Intelligence in AI, pages 43–55. Springer Nether-lands, Dordrecht, 2000. 

[51] Samangi Wadinambiarachchi, Ryan M. Kelly, Saumya Pareek, Qiushi Zhou, and Eduardo Velloso. The effects of generative ai on design fixation and divergent thinking. In Proceedings of the CHI Conference on Human Factors in Computing Systems, CHI ’24, New York, NY, USA, 2024. Association for Computing Machinery. 

[52] Lukas Waidelich, Alexander Richter, Bernhard Kölmel, and Rebecca Bulander. Design thinking process model review. In 2018 IEEE International Conference on Engineering, Technology and Innovation (ICE/ITMC), pages 1–9, 2018. 

[53] Wavestone. Data and ai executive leadership survey 2024, 2023. Accessed: 2025-02-21. 

[54] Radosław Wolniak. The design thinking method and its stages. Systemy Wspoma-gania w Inżynierii Produkcji, 6(6):247–255, 2017. 

[55] L. E. Wood and J. M. Ford. Structuring interviews with experts during knowledge elicitation. International Journal of Intelligent Systems, 8(1):71–90, 1993. 

[56] Kenneth Zeichner and S. Noffke. Practitioner Research, pages 298–332. 01 2001. 

[57] Jiaming Zhou, Tengyue Li, Simon Fong, Nilanjan Dey, and Ruben Gonzalez Crespo. Exploring chatgpt’s potential for consultation, recommendations and report diagnosis: Gastric cancer and gastroscopy reports’ case. International Journal of Interactive Multimedia and Artificial Intelligence, 8:1–7, 06 2023. 

133