# FULLTEXT01.pdf

# AI GENERATED CODE DOCUMENTATION 

### A Study on Large Language Model Utilization for Code 

### Documentation using Limited Training Data 

Miran Salih In collaboration with Jaycom. 

Supervisor Ole Norberg 

External Supervisor Ivan Lyxzén 

Examiner Thomas Mejtoft 

Master thesis, 30 credits Master of Science in Interaction Technology, 300 credits 

Department of Applied Physics and Electronics Ume̊a University, Sweden 

Fall term 2024

# Abstract 

Large language models (LLMs) are a class of computational models that have the ability to understand and generate human language. This study aims to investigate and evaluate the performance of large language models in generating code documentation using limited training data, by compar-ing different techniques such as Retrieval Augmented Generation (RAG) and fine-tuning, to determine the effectiveness in enhancing the LLM per-formance with specific data. The evaluation uses a limited dataset of PHP code, using a number of different large language models. The models that are used for the testing are a quantized version of the Gemma 2 model with 9 billion parameters and a quantized version of the Codellama model with 7 billion parameters. Snippets of code unseen documents were pro-vided as input for the models to generate corresponding documentation. The documentation were then evaluated and scored by developers. The results show that utilizing prompt engineering combined with fine-tuning gives the best result out of the tested models and strategies. The fine-tuned Gemma 2 models final score was 8.59 out of 10, which was the highest, while the Gemma 2 with RAG scored 6.41 out of 10, this being the lowest. 

Keywords Artificial Intelligence , Large Language Model, Retrieval Augmented Genera-tion, Fine-tuning

# Sammanfattning 

Stora språkmodeller (LLM) en en klass av bräkningsmodeller som har förågan att förstå och generara det vi kalla männskligt språk. Förmångan att förstå och generera mänskligt språk har väckt stor uppmärksamhet. Denna studie siktar på att undersöka och utvärdera prestandan hos dessa modeller när det gäller att skapa koddokumentation med begränsat träningsdata. Studien jämför olika tekniker, såsom Retreval Augmented Gereration (RAG) och finjustering, för att bestämma deras effektivitet i att förbättra mod-ellernas prestanda med specifik och begränsad data. Test utfördes med ett begränsat dataset av PHP-kod och olika modeller. Modellerna som testas inkluderar en kvantifierad version av Gemma 2-modellen med 9 miljarder parametrar och en kvantifierad version av Codellama-modellen med 7 mil-jarder parametrar. Resultaten visar att en kombination av finjustering och prompt engineering ger bästa resulatet blande de testad modellerna och stratefierna. Gemma 2 models som använder finjustering fick slutresul-tatet 8.59 av 10, detta var den model som presterade bäst, Gemma 2 som använde RAG fick slutresultatet 6.41 av 10, detta var det lägsta resultatet. 

Nyckelord artificiell intelligens , Stora språkmodeller, Retrieval Augmented Generation, Finjustering

# Contents 

1 Introduction 1 

1.1 Partner . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 1.2 Problem Description . . . . . . . . . . . . . . . . . . . . . . 3 1.3 Objective . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 

2 Theory 4 2.1 Large Language Models . . . . . . . . . . . . . . . . . . . . 4 

2.1.1 Transformers . . . . . . . . . . . . . . . . . . . . . . 4 2.1.2 Hallucination . . . . . . . . . . . . . . . . . . . . . . 6 

2.2 Prompt engineering . . . . . . . . . . . . . . . . . . . . . . 7 2.3 Fine-tuning . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 2.4 Retrieval augmented Generation . . . . . . . . . . . . . . . 9 2.5 Code documentation . . . . . . . . . . . . . . . . . . . . . . 10 

3 Method 11 3.1 Preparatory work . . . . . . . . . . . . . . . . . . . . . . . . 11 

3.1.1 Data preparation . . . . . . . . . . . . . . . . . . . . 11 3.1.2 Model selection . . . . . . . . . . . . . . . . . . . . . 12 3.1.3 Retrieval Augmented Generation . . . . . . . . . . . 12 3.1.4 Fine tuning . . . . . . . . . . . . . . . . . . . . . . . 15 

3.2 Workflow . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.2.1 RAG . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.2.2 Fine-tuning . . . . . . . . . . . . . . . . . . . . . . . 16 

3.3 User Test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.3.1 Participants . . . . . . . . . . . . . . . . . . . . . . . 16 3.3.2 Test Structure . . . . . . . . . . . . . . . . . . . . . . 17 3.3.3 Test and evaluation . . . . . . . . . . . . . . . . . . . 17 3.3.4 Prompt Templates . . . . . . . . . . . . . . . . . . . 18 

4 Results 21 4.1 User Test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21 

4.1.1 Model 1 (Gemma 2 with fine-tuing) . . . . . . . . . 21 4.1.2 Model 2 (Gemma 2 with RAG) . . . . . . . . . . . . 22 4.1.3 Model 3 (Codellama with fine-tuning and RAG) . . . 23

5 Discussion 26 5.1 Limitation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 

6 Conclusion 31 

7 Future Work 32

# 1 Introduction 

Language models (LMs) are a class of computational models that have the ability to understand and generate human language. The most common LMs have the ability to predict the likelihood of word sequences based on the previous context. This also comes with challenges when encountering words rarely used words that are not often featured in the corpus (collec-tion of text organized into a dataset)[1]. 

Large language models (LLMs) are not something completely new, but rather an evolution of the existing artificial intelligence research that have compounded into what are Large Language Models. Zhao et al. [2] men-tions that the application and research of artificial intelligence leading up to LLMs can be divided into four different stages, see fig 1. 

First, there are the language models developed in the early 1990s called statistical language models (SLM). SLM are based on statistical learning, and the idea is to build word predicting models that predicts the next word based on the most recent context. N-gram model is SLM with a fixed length n, thus the name n-gram. SLMs and LMs fundamentally suffer from the ”curse of dimensionality”, they use words that are frequently together in the training corpus and ”glue” the sequences of words together, usually be-ing 2-3 words. The higher-order language models require an exponential number of transition probabilities to be estimated for accurate results. 

The second stage is Neural language models (NLMs), which uses neural networks to predict characteristics of word sequences for sentence gener-ation. The use of a neural network makes the language model perform better compared to SLMs with smoothing. Smoothing is a strategy used to tackle the problem of the data sparsity. This is done by redistributing part of probability ”mass” for a sequence that has been previously observed, allowing for allocation of a sequence that has not been observed[3][4]. 

The third stage is Pre-trained language models (PLMs) which are language models that uses pre-trained bidirectional language models such as BERT (Bidirectional Encoder Representations from Transformers) [5], bidirec-tional meaning it uses the context from both directions, left and right con-text. 

1

The forth stage is large language models and researcher found that scaling the model and data size of PLMs often leads to enhanced model capacity on downstream tasks. The PLMs are scaled mainly on the model size and shows different behaviors compared to the smaller PLMs, which showed abilities to solve more complex task compared to the smaller PLMs. An example of these abilities is that models like GPT-3 can solve few-shot task (tasks where an example is given to the model) by using in-context learning, while GPT-2 cannot, this has lead to the term large language models to be coined by artificial intelligence researchers. 

Code documentation serves a critical part of software development. It al-lows developers to communicate the functionality and purpose of the code to others or their future selves. Bad and inadequate code documentation can lead to confusion and extra time debugging down the line if the code needs to be updated or re-implemented[6]. 

Incorporating advanced technology, specifically large language models, within the code documentation workflow may provide significant benefits such as enhancing developer productivity and documentation accuracy of the code. Using the large language models capability of producing human like text can streamline the documentation processes and in turn enable developers to allocate more time to other tasks. 

Figure 1: Showing the evolution process of language models, the time period and dates are according to publications, recreated based on [2, p, 2] 

. 

The evolution of language models has led to a substantial broadening in 

2

the scope of tasks that can be effectively solved using language models, this is combined with an enhanced task performance by the language models. 

1.1 Partner This study was conducted in collaboration with Jaycom, a software-as-a-service company based in Sweden. Jaycom offers consumer relationship management (CRM) system for different insurance companies in Sweden. 

1.2 Problem Description Jaycoms clients uses their API to make calls from their own systems, often their customer-facing web portals. The clients want to display this data outside of Jaycoms systems. To do so, they can call Jaycoms API to ac-cess the necessary data. As they are continuously developing their API, adding new and improving existing features. They would like to explore the option of using AI to automate the documentation of the API function. 

While extensive documentation exists for current API functionalities, the challenge lies in using the existing limited set of data to train an AI system that can automatically generate accurate documentation for new API func-tions. This thesis focuses on exploring methods to develop a tool, capable of producing accurate and useful documentation despite the constraints of a small dataset. 

1.3 Objective This study aims to evaluate the performance of large language models in generating code documentation using limited training data, by imple-menting and comparing different techniques such as Retrieval Augmented Generation (RAG) and fine-tuning together with prompt engineering, to determine the effectiveness in enhancing the LLM performance with spe-cific data. 

 How do different methods and techniques perform when constricted with limited data? 

This study also aims to document effective strategies to increase perfor-mance of LLM when working with small and limited amount of data. 

3

# 2 Theory 

This section establishes the theoretical foundation for this study, exploring relevant concepts and relationships between proper code documentation and automated code documentation. Furthermore, this section delves into the theoretical methodologies employed in this study, exploring the ca-pabilities and limitations of large language models while also dissecting the theoretical framework of Retrieval Augmented Generation (RAG) and fine-tuning. 

2.1 Large Language Models Large language models is a form of artificial intelligence that uses deep learning in combination with large data sets to solve tasks, unlike other types of language models that focus mainly on understanding and generat-ing human language using sequencing techniques, large language models can solve a wide array of complex tasks[2]. 

2.1.1 Transformers 

The term LLMs or large language models often refers to transformer lan-guage models, that contain large amounts of parameters, and are trained on large dateset of text. Transformer models show a great capacity for solving NLP tasks. Transformer models have revolutionized the field of NLP in the way they handle sequential data, allowing for parallelization and also capturing long-range dependencies. Traditional sequential mod-els which rely on recurrent neural networks (RNNs) would have a problem with such task. For longer paragraphs of text models using RNN would ”forget” the context in the start of the paragraph by the time the it reached the end [7][1][8]. To understand Transformers better, this section will give an explanation on the different parts for the transformer architecture (see Figure 2). 

The Transformer consist of two key components, the encoder and the de-coder, both of these components are stacks of identical layers with each layer containing sub-layers. The encoder contains two sub-layers the first sub-layer is a multi-head self-attention mechanism, while the second layer 

4

Figure 2: Showing the transformer model architecture, modified based on [7, p, 3] 

is a position wise fully connected feed forward network. The encoder tok-enizes the text and processes the token by applying a self-attention mech-anism on several layers, which generates hidden states that represents the text on different levels of abstraction. 

The input is the query that the user provides, usually in the form of text, and the input embedding is the query transformed into a numerical format, the models do not understand word the same way humans do. The input embeddings represents each word of the query as numbers so that the model can process them. 

The positional encoding component, focuses on understanding the order of 

5

words in a sentence. When it comes to NLP the sequence of the words in a sentence is crucial for understanding the meaning. However traditional models do not inherently have the capability to understand the order of text inputs. Positional encoding can be used to address this problem by encoding each position of the words in an input as a set of numbers. The positional encoding can together with the input embeddings then be fed into the transformer model so that it can understand the order of the words in an input sentence and generate grammatically correct and meaningful outputs. 

The decoder implements a third sub-layer in addition to the two sub-layers found in the encoder, totaling three sub-layers. During training, the de-coder looks at the previous words to learn to predict the next word, this is done by offsetting the decoder by one position to the right, this is to ensure that the decoder only uses previous words when making the pre-dictions. Output embeddings share similarities with input embeddings, the output embeddings go through positional encoding so that the model can understand the word order of a sentence. A loss function is used, to im-prove model accuracy by reducing differences between the target and pre-dictions. Both the positionally encoded output embeddings together with positionally encoded input representation go through the decoder. The decoder generates outputs based on the input and context learned by the encoder. The last step is to transform the output embeddings in to the orig-inal input space, this is done by linear layer which maps the embeddings to a higher-dimension space. Lastly softmax function is used to generate output tokens with probabilities. 

2.1.2 Hallucination 

While the performance and capability of language models for NLP have improved significantly with LLMs, they sometimes provide factually incor-rect information that can seem correct at first glance if the user is not knowledgeable on topic. This phenomenon is called hallucination, and is not something new when it come to NLP. This however seems to have expanded with the versatility of LLMs. Zhang et al. [9] categorizes hallu-cinations in LLMs in the three different categories. 

 Input-conflicting hallucination - The generated output of the LLM 

6

deviates form what the user provided input. 

 Context-conflicting hallucination - The generated output of the LLM conflicts with content that have been previously generated by itself. 

 Fact-conflicting hallucination - The generated output of the LLM is not factually correct. 

Input-conflicting hallucination occurs when the output that the LLM gen-erates does not match the input of the user, for instance a task where the user asks the model to summarize a paragraph of text and then pro-vides the paragraph. If the output does not match the task, this typically indicates a misunderstanding of the users intentions. In contrast, if the generated output is contradicting the user input, the hallucination may be caused by a problem of machine translation or summarization, and is a natural language generation problem (NLG). 

Context-conflicting hallucination may occur when the model generates multiple multiple back and forth responses between the user and the model or lengthy responses and exhibits self-contradictions. The model fails to maintain consistency throughout the conversation or loses track of the context. This could be due to model limitations, that it fails to identify the context or limitations with the models long-term memory. 

Fact-conflicting hallucination occurs when the model generates outputs and response that is not factually correct given already established knowl-edge. The source of this of type hallucination may have many causes and can be introduced at different stages of the LLM life cycle due to the mas-sive amounts of data the model is pre-trained on. This type of hallucination can mislead users that are less knowledgeable. 

2.2 Prompt engineering Prompting is an intuitive interface for humans to interact with LLMs, due to the flexibility of prompting it has been a widely adopted method for NLP tasks. Sometimes plain prompts do not produce the desired results, and the users are required to try different prompts and strategies [10]. Prompt engineering is the practice of crafting and manipulating the input to gen-

7

erate a desired response from an LLM. It uses the abilities of the LLMs to understand and generate human language to craft inputs and reformulate tasks and manipulate inputs to improve the results of the generated results without extensive re-training of the model [11][12]. 

There are different methods of prompt engineering that can be used to achieve desired results [13]. Prompt template engineering is the process of creating a prompt template for tasks with placeholder instructions and in-puts that can be changed, which results in efficient performance on down-stream tasks. Manual prompting is when the prompt is created by humans and uses human intuition to create templates for better results. Automated Prompt engineering (APE) uses 

OpenAi documents a set of tactics that has improved results on their GPT models [14]. The documents provides 6 strategies for improving results, each strategy contains instructions that generates better results. The strate-gies that the documentation provides are: 

 Write clear instructions 

 Provide reference text 

 Split complex tasks into simpler sub tasks 

 Give the model time to ”think” 

 Use external tools 

 Test changes systematically 

2.3 Fine-tuning Fine-tuning is the process of adapting pre-trained models to a more specific task or to operate within specific domains. It retains the knowledge from the pre-trained model and adds upon the existing knowledge, allowing the model to perform better at specific tasks without the need to retrain the entire model. 

The fine-tuning process has some key steps; the first step is data pre-processing. Finding a dataset that fits the task specifically or domain spe-cific data as well as ensuring that the quality of the data is good, ”garbage 

8

in, garbage out”[15]. 

The process of fine-tuning takes the pre-trained model and updates the pa-rameters of the model with data from the training datasets. Additionally, tuning hyperparameters such as learning rate, batch size, and number of epochs can give better results. Choosing the wrong values for these pa-rameters can either lead to overfitting, where the model preforms well on the training data but has a hard time generalizing, or underfitting, where the model does not learn the task correctly [16]. 

2.4 Retrieval augmented Generation One way to address the problem of hallucination is the use of retrieval augmented generation (RAG), especially for tasks that are knowledge in-tensive or within a specialized domain. When it comes to tackling the problem of hallucination, scaling the model and making it large won’t ad-dress the fundamental problem. RAG represents a transformative frame-work for addressing the limitations inherent in large language models by incorporating external knowledge sources to enhance accuracy, relevance, and domain specificity [17]. 

RAG operates on the principle of combining the LLMs’ inherent generative capabilities and pre-trained data with dynamic information retrieval from external databases. The RAG framework involves three stages: retrieval, generation, and augmentation. The retrieval stage identifies relevant data from an external database based on the user queries provided. The genera-tion stage leverages the retrieved data to produce coherent answers based on the query and the retrieved data. The augmentation step optimizes the integration of the external data and the pre-trained data to enhance the results [18][19]. 

The versatility of RAG comes from the ability to extend across different domains and complete domain-specific task without requiring retraining or fine-tuning of the base model. Thus saving time and resources while demonstrating significant improvements in addressing the specific tasks [20]. 

9

2.5 Code documentation As mentioned in the introduction (section 1), code documentation is an important part of software development. Source code documentation is a technical document which is embedded with in the source code of the pro-gram. Developers write the documentation at various levels of abstraction [21]. The source code documentation allows the developers to understand the written code during maintenance. Through the source code documen-tation, the developers communicate the functionality and purpose of the code to other developers (or themselves in the future) as it is easy to forget the specifics of code after having not worked on it for a while. 

10

# 3 Method 

This section aims to give a clear picture of how the study was conducted and provide necessary preparatory work that was required for the study along with the approach through which the study was conducted. 

3.1 Preparatory work This section mentions the preparatory work that was carried out before the study was conducted, the topics of this section will contain data prepa-ration, fine-tuning, setting up embeddings for RAG. 

3.1.1 Data preparation 

The first step of the data preparations was collecting the data. For this study, Jaycom provided code for their API which is used by their clients. 

The next step of the data preparations was the data preprocessing. The different code documents were analyzed for viable code snippets (doc-umented API code) that contained complete documentation of the code, and these were used to create a dataset for the fine-tuning and RAG frame-work. 

The code snippets (being functions within classes) found within the pro-vided documents, were collected and then divided into three different parts, instruction, input, and output. The specific format used for the data to follow the structure of prompt template used when fine-tuning. 

1 { 

2 "instruction": "Instructions", 

3 "input": "Code", 

4 "output": "Documentation" 

5 } 

Listing 1: Templete for the divide code snippets 

The instruction part of the snippet contained documentation about the purpose and functionality of the code. The input part was the code that would serve as an input to the model, this would be everything contained 

11

inside a function. The output was defined as the documentation, the de-sired output of the model. The data were collected and converted to a jsonl-file, allowing it to be used for fine-tuning. Jsonl is used to store structured data and allows for processing of individual records. 

3.1.2 Model selection 

When selecting a model, it is important to select one that can accom-plish the goal that is trying to be reached. For this study, it is to discover how well large language models can be used to produce API documenta-tion,based on limited amount of data. 

For this study, there were a few different models that were tested, some of the models were pre-trained, general-purpose models like Meta’s LLaMA (large language model meta ai) specifically the llama 3 model [22] and Google’s Gemma 2 model [23]. 

The selection of these models was done to test how well general text gen-eration models performed on specific tasks using different customization techniques, like prompt engineering and RAG. 

The Codellama model was also used, it has the same foundation as the llama model but is fine-tuned for code related tasks [24]. The Codellama model is based on the Llama 2 model and trained on coding related tasks. 

All the models were downloaded and run locally on a computer using Ollama. The models used were 4-bit quantized versions of the model. The quantized models are less accurate than the original models, reducing the size it takes up when downloaded, as the data is compressed to a smaller size. 

3.1.3 Retrieval Augmented Generation 

For the retrieval augmented generation approach, the first step was to use the code documents to create embeddings using an embedding model; for this study two different embedding models were used, the mxbai-embed-large model and the nomic-embed-text model. Chroma was used to create a vector store for the embeddings created by the embedding models. 

The retrieval system was done with Python. The first step was to accesses 

12

the code documents containing the files used for the retrieval, by providing the file path for the documents (See listing 2). 

1 file_paths = ["codefiles_path.txt"] 

2 

3 all_documents = [] 

4 

5 for path in file_paths: 

6 try: 

7 loader = TextLoader(path , encoding="utf -8") 

8 documents = loader.load() 

9 all_documents.extend(documents) 

10 except Exception as e: 

11 raise RuntimeError(f"Error loading {path}") from 

e 

Listing 2: Loading the code files 

The provided documents were added to the file paths to then be loaded using a text loader from langchain (a framework that simplifies AI app development with LLMs). This was done in a try-catch in order to catch potential errors. The loaded documents were then added to the main list so that they could be used to create embeddings, by splitting the content of the documents into chunks and using the embedding model to create embeddings. The embeddings were then stored in a local vector store (See listing 3). 

1 embeddings = OllamaEmbeddings(model="embedding_model") 

2 

3 text_spliter = RecursiveCharacterTextSplitter( 

4 chunk_size=chunk_size , 

5 chunk_overlap=overlap , 

6 separators =["\n\n", "\n", " ", ""] 

7 ) 

8 doc_splits = text_spliter.split_documents(all_documents) 

9 

10 vectorstore = Chroma.from_documents( 

11 documents=doc_splits , 

12 embedding=embeddings , 

13 persist_directory="vectorstore" 

14 ) 

Listing 3: Creating and storing the embeddings 

13

To retrieve the embeddings for the vector store, a retriever was used. The embeddings then used similarity search to find similarities to the input and retrieved a specified number of similar embeddings to use for the response. This was then chained together with a template, model and input (See listing 4). 

1 retriever = db.as_retriever( 

2 search_type="similarity", 

3 search_kwargs= {"k": n} 

4 ) 

5 

6 local_llm = ’model ’ 

7 

8 llm = ChatOllama(model=local_llm , 

9 keep_alive=time , # How long the model will 

stay loaded into memory 

10 num_predict=num , # Maximum number of tokens 

to predict when generating text 

11 temperature =0, # Increasing the temperature 

will make the model answer more creatively 

12 seed=randomSeed # Sets the random number 

seed to use for generation 

13 ) 

14 

15 prompt = ChatPromptTemplate.from_template(template) 

16 

17 rag_chain = ( 

18 {"context": retriever , "question": RunnablePassthrough ()} 

19 | prompt 

20 | llm 

21 ) 

Listing 4: Retrieving embeddings 

A specific seed (specific number used in a random number generator) was used to generate the same response for the same prompt, this was done for reproducibility and a fair comparison. The temperature (value between 0 and 1 that sets the creativity of the model) was kept at 0 as the model should be precise in the response and not add anything but the code doc-umentation. 

14

3.1.4 Fine tuning 

For the fine-tuning approach Unsloth [25] was used. Unsloth is a python framework that accelerates and streamlines the fine-tuning processes of LLMs. 

The first step was downloading all the necessary libraries to then be able to install Unsloth. The second step was loading the pre-trained model that would be used for fine-tuning along with the corresponding tokenizer (tool that converts text to a numerical representation). This can be done by using either the FastLanguageModel from Unsloth or getting the model from Hugging Face (a open-source platform that provides tools for AI). 

After loading the model, LoRA (Low-Rank Adaptation) adapters are ap-plied to the model, making it so that only 1-10% of the parameters need to be updated. This reduces the time it takes to fine-tune the model by taking a smaller section of the data the the model has and updating the 

The prepared data was formatted together with a prompt template. The template included the same parameters and shared the format with the processed data, instruction for instructions, input a segment of code to be documented, and output which would be generated by the model. 

1 """ Below is an instruction that describes a task , paired with 

an input that provides further context. Write a response 

that appropriately completes the request. 

2 

3 ### Instruction: 

4 {} 

5 

6 ### Input: 

7 {} 

8 

9 ### Response: 

10 {}""" 

Listing 5: Prompt template for fine tuning 

Once the data is formatted it can be used to train the model on the new data. The training step includes different parameters such as the learning rate, batch size, number of epochs (the number of times the training goes over the training data), optimization strategies, and weight decay. After 

15

the parameters had been set, the model was ready for fine-tuning. After the fine-tuning was completed a quantized version of the model was ready to be downloaded to Ollama. 

3.2 Workflow An iterative approach was used while experimenting and analyzing the di-versity of the models, testing various customization techniques and para-metric adjustments. 

3.2.1 RAG 

Evaluation of the retrieval augmented generation (RAG) approach was conducted through the use of different embedding models, as well as para-metric adjustments within the established framework. The influence of the different embedding models were tested during this phase along with parametric adjustments to optimize chunk size and overlap for generating embeddings. Multiple seeds for generation were utilized to investigate the impact of the seed variability on the RAG models performance. 

3.2.2 Fine-tuning 

Evaluation for the fine-tuning approach was conducted through paramet-ric adjustments during the training of the model. Distinct models were compared while using varying sizes of datasets to investigate the impact of these factors. The key parameters investigated included batch size, learn-ing rate, number of epochs, and weight decay. The evaluation aimed to determine optimal parameter values and configurations for fine-tuning to identify effective strategies for training with limited data. 

3.3 User Test This section describes how the user tests were conducted. 

3.3.1 Participants 

Evaluation of the model performance in the user tests was conducted by developers at Jaycom. The participants consisted of three developers and 

16

this was done because they possessed technical expertise to assess the gen-erated documentation and provide nuanced feedback. 

3.3.2 Test Structure 

For the test, the models were presented with previously unseen code. The models would then receive snippets of code as an input and respond with the corresponding documentations. The inputs received by the model was PHP code. This was subsequently added to the test file for the developers to review. The developers did not know which documentation was gen-erated by which model, this was done to reduce potential bias, and the models were instead called model 1, 2, and 3. 

3.3.3 Test and evaluation 

The models were scored on a scale of 1 to 10, with 1 representing the lowest and 10 the highest, across four categories: correctness, structure, language, and completeness. 

 Correctness - This category was assessed based on how well it re-flected the input. 

 Structure - The model was evaluated based on how well it would adhere to the predefined code documentation format. 

 Language - The textual quality was assessed in this category, which included clarity, conciseness, and grammar. 

 Completeness - A metric to determine if the response had excluded any essential parts of the code that would have been needed in the documentation. 

The test used 5 different documents (code documentes), which contained a different number of functions varying in length. 

The models used during testing was a fine-tuned version of Gemma 2, a pre-trained gemma 2 model, and a fine tuned version of the codellama model. All the models used were 4-bit quantized versions of the model. 

After providing the models with a code snippet, the anticipated response would conform to the structure found in listing 6: 

17

Test Model Model Parameter Size Method Dataset size Model 1 Gemma 2 9 billion Fine-tuning 47 Model 2 Gemma 2 9 billion RAG Model 3 Codellama 7 billion Fine-tuning, RAG 47 

Table 1: The models used in the user test 

1 /** 

2 *@param (datatype) (parameter name) (parameter is optional or 

not), (paramter description) 

3 *@return (datatype) (description) 

4 */ 

Listing 6: Expected response from the models in the form of a template. This template uses placeholders for the response 

3.3.4 Prompt Templates 

Testing before the user evaluations revealed that distinct prompts were necessary for the different models. A uniform application of the same template would sometimes yield suboptimal results. For the fine-tuned Gemma 2 model, the following template was used: 

1 """ Below is an instruction that describes a code 

documentation task , paired with an input that provides 

further context. Write a response that appropriately 

completes the request. 

2 

3 ### Instruction: 

4 Generate clear and concise code documentation in the form of 

comments directly above each function. Begin each comment 

with a brief description of the function ’s overall purpose 

. For functions that accept parameters , list each 

parameter name followed by its data type and a short 

explanation of its role within the function. If a function 

returns a value , specify the return type and provide a 

concise description of what the returned value represents. 

Only document existing parameters and return values. 

Avoid adding or inventing information about non -existent 

elements. Keep comments brief and to the point. 

5 

6 ### Input: 

18

7 {} 

8 

9 ### Response: 

10 {}""" 

Listing 7: Prompt template for Gemma 2 with fine tuning model 

The following prompt was used for the Gemma 2 model using RAG: 1 """You are a code documentations assistant you are tasked 

with generate clear and concise code documentation in the 

form of comments directly above each function. Begin each 

comment with a brief description of the function ’s overall 

purpose. For functions that accept parameters , list each 

parameter name followed by its data type and a short 

explanation of its role within the function. If a function 

returns a value , specify the return type and provide a 

concise description of what the returned value represents. 

Only document existing parameters and return values. 

Avoid adding or inventing information about non -existent 

elements. Keep comments brief and to the point. Use the 

provided context to generate the documentation based on 

the input and limit the use of pre -existing knowledge 

2 {context} 

3 

4 {input} 

5 

6 """ 

Listing 8: Prompt template for Gemma 2 with RAG model 

The following prompt was used for the fine-tuned Codellama model using RAG: 

1 """ Below is an instruction that describes a code 

documentation task , paired with an input that provides 

further context. Write a response that appropriately 

completes the request. 

2 

3 ### Instruction: 

4 Context information is below. 

5 ---------------------

6 {context} 

7 ---------------------

8 Generate clear and concise code documentation in the form of 

comments directly above each function. Begin each comment 

19

with a brief description of the function ’s overall purpose 

. For functions that accept parameters , list each 

parameter name followed by its data type and a short 

explanation of its role within the function. If a function 

returns a value , specify the return type and provide a 

concise description of what the returned value represents. 

Only document existing parameters and return values. 

Avoid adding or inventing information about non -existent 

elements. Keep comments brief and to the point. Use the 

provided context to generate the documentation. 

9 

10 

11 ### Input: 

12 {} 

13 

14 ### Response: 

15 {}""" 

Listing 9: Prompt template for Codellama model with fine tuning and RAG 

The templates required some modification for each model, but efforts were made to maintain similarity across all of the templates. 

20

# 4 Results 

This section contains the results and findings from the user test and other testing conducted during the testing phase, presenting the findings of the large language model behavior. 

4.1 User Test The tests was conducted with Jaycom developers as participants. The par-ticipants evaluated the large language model generated responsed and as-sessed the model performance. The developers included comments along with the scoring for better transparency regarding the rationale of the model evaluation. 

4.1.1 Model 1 (Gemma 2 with fine-tuing) 

Table 2 shows the average score received the Gemma 2 model (with fine-tuning) received on each document, based on category and the total aver-age. From the results it shows that the Gemma 2 model with fine-tuning performed best on the C1 file and performed the worst on the C3 file. 

Table 2: Gemma 2 with fine-tuning Performance Metrics. 

Document Correct Structure Language Completeness Average C1 8.75 10 9.75 10 9.62 C2 8 9.5 9 10 9.13 C3 5.75 7.25 6.25 6 6.31 C4 7.5 10 7.5 10 8.75 C5 9.33 10 8 9.33 9.17 

Fine-tuned Gemma 2 comments The model would in several instances generate fabricated returns for functions lacking a defined return state-ment and incorrectly designate mandatory fields as optional. Furthermore, the model would at times generate inaccurate datatypes for parameters, as well as use inaccurate parameter specifications. The responses varied from file to file, some files had documentation partially or entirely lacking. The 

21

model would at times introduce false constraints on parameters and incor-rect parameter description. Certain parts of the documentation exhibited unconventional wording. 

Figure 3: Displays a graphical representation of the scores based on the table 2 

4.1.2 Model 2 (Gemma 2 with RAG) 

Table 3 Shows the results of the Gemma 2 model with RAG, similarly to the Gemma 2 model with fine-tuning this model also has the worst docu-mentation on the C3 file. The model performed best on the C2 file. 

Table 3: Gemma 2 with RAG Performance metrics for API documentation. Evaluation scores (0-10) across five documents (C1-C5), measuring cor-rectness, structure, language, and completeness. 

Document Correct Structure Language Completeness Average C1 8.25 6 8.5 9 7.94 C2 8.5 6 8.5 9.5 8.13 C3 3.5 1.5 3.75 3.5 3.06 C4 6.5 5.5 6.5 8.5 6.75 C5 6.67 3 8 7 6.17 

22

Developer comments for Gemma 2 model using RAG Multiple in-stances showed the model failing to utilize the required @param marker for parameter specification. The model would be inconsistent in identify-ing if a parameter was mandatory or optional. The model frequently used misleading language or provided inaccurate parameter description. The model would at times generate partially or entirely incomplete documen-tation. 

Figure 4: Shows the average scores received on each document file for Gemma 2 with RAG 

4.1.3 Model 3 (Codellama with fine-tuning and RAG) 

Table 4 shows the results from the Codellama model using both fine-tuning and RAG. Like the other two models this one also performed worst on the C3 file. 

Developer comments for fine-tuned Codellama using RAG Observa-tions were made where the standards for the parameter would be fabri-cated. The model would, for certain functions, provide inaccurate descrip-tions of the parameter based on assumptions. Occasionally, the model would assign incorrect datatypes for return values and parameters. In-stances of the model using incorrect and misleading language were found. The model demonstrated difficulties generating documentation for certain functions. 

23

Table 4: Codellama with fine-tuning and RAG Performance Metrics. 

Document Correct Structure Language Completeness Average C1 8.75 10 9.25 10 9.5 C2 4.5 7.5 8 10 7.5 C3 3.75 5.25 6.25 3.75 4.75 C4 7 10 8 10 8.75 C5 8.33 10 9 10 9.33 

Figure 5: Shows the average scores received on each document file for the codellama model with fine-tuning and rag 

. 

24

Table 5: The average score on each category across the five different code documents. 

Model Correct Structure Language Completeness Gemma 2 With Fine Tuning 7.87 9.35 8.1 9.07 Gemma 2 with RAG 6.68 4.4 7.05 7.5 Codellama 6.47 8.55 8.1 8.75 

Figure 6: Shows the average score on each category across the five differ-ent code documents. Showing that Gemma 2 with fine tuning produces the better documentation on average. 

. 

25

Table 6: Compounded the average scores of each of the user test models into one number for a comparison, by taking the average score across the categorizes an drawing an average score from that. 

Model Score Gemma 2 with fine-tuning 8.59 Gemma 2 with RAG 6.41 Codellama with fine-tuning and RAG 7.97 

Figure 7: Final score of each of the models based on table 6 

# 5 Discussion 

This study investigated the performance of large language models in code documentation tasks under the constraints of limited training data and domain-specific code. A variety of methods was used to test the perfor-mance. There is no guarantee that a human would be able to get a perfect 10 out of 10 score, as such the focus lies on the critical mistakes. Since the models were supposed to generate code for an API, making mistakes or generating incomplete documentation would be unusable. The evaluation was mainly focused on the mistakes but also on how well it compared to the established documentation. 

Looking at the results there is a test file that is an outlier. All models 

26

seemed to have a problem with the C3 file. The reason for this is that the file contained longer functions, one of the functions containing 211 rows of code, and the models struggled to generate comprehensive sentences or keep the established structure for this function, resulting in the documen-tation receiving the lowest possible score. This indicates that the models have a hard time generating documentation when the input is longer. This was further proven with scoring poorly on the other longer functions in the same file. 

The results shows that the fine tuned Gemma 2 model performed the best on the user test. It performed the best on all the tested categories. The model had an advantage when it came to the parameters size as the model used 9 billion parameters compared to the Codellama model that used 7 billion. This may be the reason as to why it performed better than the Codellama model even though the Codellama is trained on coding tasks. The Codellama model and the Gemma model were fined-tuned on the same dataset with the same training parameters. The possibility that the result from the user test may have been effected by the interference of suboptimal usage of RAG for code documentation can not be ruled out. 

The Gemma 2 model using RAG performed worst on the user tests, not being able to generate documentation that follow the standard documen-tation format. As the Gemma 2 model is a general purpose model that has not been specifically trained on coding task, this could explain why it had trouble identifying the format that should be used. This may be an indicator that the method of using RAG is not the best suited for code doc-umentation tasks or that the specific RAG techniques used in this study was not suited for code documentation tasks. Testing with a Codellama model which was not fine-tuned showed similarities in the inability to follow the desired documentation format. This may be because the RAG method alone has a hard time replicating the desired documentation format. 

1 

2 Codellama using RAG documenation: 

3 /** 

4 * @param int $kund Customer ’s ID. 

5 * @param int $poang Points to be saved. 

6 * @param int|null $kategori Category number (if available). 

7 * @param string|null $kategoriNamn Name of the category (if 

available). 

27

8 * @param string|null $notering A note about the points (if 

available). 

9 * @param string|null $objekt The object the points apply to 

(if available). 

10 */ 

11 

12 Gemma 2 using RAG 

13 /** 

14 * 

15 * @param array $o An array with the following keys: 

16 * - kund: Customer ’s ID as an integer. 

17 * - poang: The number of points to save as an integer. 

18 * - kategori: The category for the points as an integer ( 

optional). 

19 * - kategoriNamn: The name of the category as a string ( 

optional). 

20 * - notering: An optional note as a string. 

21 * - objekt: An optional object as a string. 

22 */ 

Listing 10: Generated documentation comparison between Codellama using RAG and Gemma 2 using RAG 

Listing 10 shows that the Codellama using only RAG follows the struc-ture better than Gemma 2 using only RAG. This indicates that the model selection has a big impact on the result. 

Internal testing before the user tests showed that both the prompt and the seed chosen for the generation had a large impact on the result and quality of the generated documentation. Taking this to account there may have been better seeds to use for the user test but, testing each seed to find the optimal is time consuming. The prompts that were used for the user tests were intended to be as similar as possible, as the prompts may not have been fully optimized for the best performance for each model when per-forming the user test. Using identical prompts without the variation would not work as the models using RAG used the context form the embeddings as an input for the prompt. 

The results and the developer comments show clear signs of hallucinations in the generated code documentation from all the models. For instance, the models would at times add their own returns or miss labeling the re-turn type. This varied from model to model.The reasons for the hallucina-

28

tions is unclear but there are several factor that could have an impact on this. For the fine-tuned models the reason could be due to over fitting to the training data. Another reason which could be true for all the models is that the model was lacking context or data required to perform the task to its fullest potential. 

The user test were conducted to evaluate how well the models performed in the eyes of the developers. As such the base model with no customiza-tion method was not include as that would only add test for the developers to conduct, and the base model had already been tested and performed worse than the models utilizing customization techniques. 

RAG was used to try and reduce the hallucinations of the model. The instructions were mainly based on repeated testing, where the goal was to find common mistakes and address them by adding instructions to the prompt to combat the mistakes. 

5.1 Limitation The main limitations of this study was that in order to maintain the pro-vided data in a controlled environment the operations with the large lan-guage models were all done locally, meaning that the fine-tuning and test-ing sessions were done locally on a computer. This limitations meant that larger and more advanced models could not be used for the study. The reason being the available storage space for each models. 

Other limitations included the time required to fine-tune each model. A session of fine-tuning took anywhere between 1-2 hours and each time a parameter was changed and tested again the model needed to be fine-tuned. 

Due to the limitation of time the testing of the Codellama model was not separated into two different models. The Gemma 2 model was also sup-posed to have a combined version to test what could be ”the optimal” solution, but due to some complications with getting that version of the model to work as well as limitations of time the model was not used for testing. 

Having more participants could have given a more accurate result as the 

29

results was based on what the participant thought was good code docu-mentation. This could be seen when going over the results and adding them to get an average score. 

30

# 6 Conclusion 

When working with limited data for a specific task it can be hard to achieve desired results and it is important to do every small thing that can improve results. While this focuses on LLM’s performance on limited data, one way to improve results would be to try and gather more data. 

Given the results and evaluations of the model, none of them would, in their current state be used without human supervision. If they are to be used, they could be used mostly to produce a starting template for the documentation which could save some time when documenting the code, but would require oversight from experienced developers. When halluci-nations occurs they often seem confident, like answers provided could be correct, which could lead newer developers or developers that are unfa-miliar with the code to think the documentation is correct. 

The study showed that the fine-tuning approach provided the best results but still lacked in certain areas. Although providing the best results on the user test, the method is still lacking as anything less than a perfect score would be considered undesirable. The RAG scores received form the user test shows underwhelming performance, further development of the RAG framework used would be needed. Although pairing RAG with a model more suited for coding tasks showed improvement compared to using general purpose models. 

31

# 7 Future Work 

Although this study cover different strategies and approaches to using large language models when working with limited data, the study was limited and did not go in-depth on each method used or different strate-gies. For future work on the topic, developing a better RAG framework using more appropriate embedding models and retrieval strategies could be something that can improve accuracy of the large language models. Further testing with prompt engineering could provide better understand-ing on how to create more accurate results, as this study only manages to scratch the surface of the different methods used. Focusing on improving the RAG method could provide a better use in the long run as new and better models are developed the RAG approach is less time and resource consuming compared to fine-tuning. Using a better metric for the results could also help to give insight on how the models perform. 

32

# Acknowledgments 

I would like to thank the people around me who have supported me during my journey. 

I would also like to give special thanks to my supervisors Ole Norberg and Ivan Lyxzén, for the guidance and help during the writing of this thesis. I would also like to thank my peer review group consisting of Malin Rantala, Samuel Sandlund, and Selim Hjorthall for reviewing my thesis during peer reviews and giving great advise. 

Lastly I would like to thank my family and friends for having my back and supporting me through tough times. 

33

# References 

[1] Y. Chang, X. Wang, J. Wang, Y. Wu, L. Yang, K. Zhu, H. Chen, X. Yi, 

C. Wang, Y. Wang, W. Ye, Y. Zhang, Y. Chang, P. S. Yu, Q. Yang, and X. Xie, “A survey on evaluation of large language models,” ACM Trans. Intell. Syst. Technol., vol. 15, Mar. 2024. 

[2] W. X. Zhao, K. Zhou, J. Li, T. Tang, X. Wang, Y. Hou, Y. Min, B. Zhang, J. Zhang, Z. Dong, Y. Du, C. Yang, Y. Chen, Z. Chen, J. Jiang, R. Ren, Y. Li, X. Tang, Z. Liu, P. Liu, J.-Y. Nie, and J.-R. Wen, “A survey of large language models,” 2024. 

[3] B. Allison, D. Guthrie, and L. Guthrie, “Another look at the data spar-sity problem,” in Text, Speech and Dialogue: 9th International Confer-ence, TSD 2006, Brno, Czech Republic, September 11-15, 2006. Pro-ceedings 9, pp. 327–334, Springer, 2006. 

[4] Y. Bengio, R. Ducharme, and P. Vincent, “A neural probabilistic lan-guage model,” Advances in neural information processing systems, vol. 13, 2000. 

[5] J. D. M.-W. C. Kenton and L. K. Toutanova, “Bert: Pre-training of deep bidirectional transformers for language understanding,” in Pro-ceedings of naacL-HLT, vol. 1, p. 2, Minneapolis, Minnesota, 2019. 

[6] D. Spinellis, “Code documentation,” IEEE Software, vol. 27, no. 4, pp. 18–19, 2010. 

[7] A. Vaswani, “Attention is all you need,” Advances in Neural Informa-tion Processing Systems, 2017. 

[8] P. Menon, “Introduction to large language models and the trans-former architecture,” 2023. https://rpradeepmenon.medium.com/ introduction-to-large-language-models-and-the-transformer-architecture-534408ed7e61, [Accessed, 2024-12-15]. 

[9] Y. Zhang, Y. Li, L. Cui, D. Cai, L. Liu, T. Fu, X. Huang, E. Zhao, Y. Zhang, Y. Chen, et al., “Siren’s song in the ai ocean: a sur-vey on hallucination in large language models,” arXiv preprint arXiv:2309.01219, 2023. 

34

[10] Y. Zhou, A. I. Muresanu, Z. Han, K. Paster, S. Pitis, H. Chan, and J. Ba, “Large language models are human-level prompt engineers,” arXiv preprint arXiv:2211.01910, 2022. 

[11] V. Sanh, A. Webson, C. Raffel, S. H. Bach, L. Sutawika, Z. Alyafeai, A. Chaffin, A. Stiegler, T. L. Scao, A. Raja, et al., “Multitask prompted training enables zero-shot task generalization,” arXiv preprint arXiv:2110.08207, 2021. 

[12] P. Liu, W. Yuan, J. Fu, Z. Jiang, H. Hayashi, and G. Neubig, “Pre-train, prompt, and predict: A systematic survey of prompting methods in natural language processing,” ACM Computing Surveys, vol. 55, no. 9, pp. 1–35, 2023. 

[13] “Prompt engineering guide.” Prompt Engineering Guide — prompt-ingguide.ai. https://www.promptingguide.ai. 

[14] “Prompt engineering.” OpenAI platform - https:// platform.openai.com/docs/guides/prompt-engineering/ six-strategies-for-getting-better-results [Accessed, 2024-12-17]. 

[15] J. Ferrer, “Fine-tuning llms: A guide with examples.” Fine-Tuning LLMs: A Guide With Examples - Learn how fine-tuning large language models (LLMs) improves their perfor-mance in tasks like language translation, sentiment analy-sis, and text generation. https://www.datacamp.com/tutorial/ fine-tuning-large-language-models [Accessed, 2024-12-23]. 

[16] J. Howard and S. Ruder, “Universal language model fine-tuning for text classification,” arXiv preprint arXiv:1801.06146, 2018. 

[17] X. Wang, Z. Wang, X. Gao, F. Zhang, Y. Wu, Z. Xu, T. Shi, Z. Wang, S. Li, Q. Qian, et al., “Searching for best practices in retrieval-augmented generation,” in Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pp. 17716–17736, 2024. 

[18] Z. Jiang, F. F. Xu, L. Gao, Z. Sun, Q. Liu, J. Dwivedi-Yu, Y. Yang, J. Callan, and G. Neubig, “Active retrieval augmented generation,” 2023. 

35

[19] F. Liu, Z. Kang, and X. Han, “Optimizing rag techniques for automo-tive industry pdf chatbots: A case study with locally deployed ollama models,” arXiv preprint arXiv:2408.05933, 2024. 

[20] “Retrieval augmented generation (rag).” Prompt Engineering Guide - Retrieval Augmented Generation (RAG) - promptingguide.ai. https: //www.promptingguide.ai. 

[21] S. Rai, R. C. Belwal, and A. Gupta, “A review on source code docu-mentation,” ACM Trans. Intell. Syst. Technol., vol. 13, June 2022. 

[22] H. Touvron, T. Lavril, G. Izacard, X. Martinet, M.-A. Lachaux, T. Lacroix, B. Rozière, N. Goyal, E. Hambro, F. Azhar, et al., “Llama: Open and efficient foundation language models,” arXiv preprint arXiv:2302.13971, 2023. 

[23] G. Team, M. Riviere, S. Pathak, P. G. Sessa, C. Hardin, S. Bhupatiraju, L. Hussenot, T. Mesnard, B. Shahriari, A. Ramé, et al., “Gemma 2: Improving open language models at a practical size,” arXiv preprint arXiv:2408.00118, 2024. 

[24] B. Roziere, J. Gehring, F. Gloeckle, S. Sootla, I. Gat, X. E. Tan, Y. Adi, J. Liu, R. Sauvestre, T. Remez, et al., “Code llama: Open foundation models for code,” arXiv preprint arXiv:2308.12950, 2023. 

[25] M. H. Daniel Han and U. team, “Unsloth,” 2023. http://github.com/ unslothai/unsloth, [Accessed, 2024-11-12]. 

36