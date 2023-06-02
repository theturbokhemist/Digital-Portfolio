import React, { useState, useEffect} from 'react';
import { color, motion } from 'framer-motion';
import './modals.scss' 
import { images } from "../../constants"

const about_ml = () => {

      return (
      
            <div className="modal-about-main">

                <div className="modal-about-main-title">
                    <h1> Machine Learning</h1>
                </div>
  
                <div className="modal-about-main-description">
                    <p>My journey into the field of AI started in the summer of 2020 after exploring OpenAI's recently launched large language model, GPT-3. I immediately recognized the vast potential of this technology across many industries and was inspired to make a career transition into this exciting field. 
                        Below is a summary of my experiences in various applications of AI as both a student and freelancer. </p>
                    <br></br>
                    <p><strong>Deep Learning:</strong> Strong knowledge of deep learning methodologies including convolutional neural 
                        networks (CNNs), recurrent neural networks (RNNs), generative adversarial networks (GANs), and transformers.
                        Proficient in frameworks like PyTorch and TensorFlow for building and training deep learning models.</p>
                    <br></br>
                    <p><strong>Natural Language processing (NLP):</strong> Experience with NLP techniques such as tokenization, sentiment analysis, named entity recognition, machine translation, text classification, topic modeling,
                    and language modeling as well as NLP tools like NLTK, spaCy, and Gensim</p>
                    <br></br>
                    <p><strong>Computer Vision: </strong> Expertise in computer vision tasks such as image classification, object detection, semantic segmentation, and image generation. 
                    Experienced with a number of computer vision frameworks like OpenCV, TensorFlow Object Detection API, and PyTorch Vision
                     as well as many computer vision architectures including YOLO, UNet, ResNet, VGGNet, Faster R-CNN, and MobileNet.</p>
                     <br></br>
                    <p><strong>Reinforcement Learning: </strong> Strong understanding of reinforcement learning (RL) algorithms and 
                    concepts including Markov Decision Processes (MDPs), Q-learning, policy gradients, and deep RL such as Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO).
                     I've implemented many of these RL algorithms using frameworks such as OpenAI Gym, TensorFlow Agents, and Stable Baselines.</p>
                     <br></br>
                    <p><strong>Robotics: </strong> Familiarity with applying machine learning techniques in in robot perception, control, and navigation using frameworks like Robot Operating System (ROS) and Gazebo.</p>
                </div>
            </div>
      )
  }


  const about_research = () => {

    return (
    
          <div className="modal-about-main">

            <div className="modal-about-main-title">
                    <h1> Research</h1>
            </div>

            <div className="modal-about-main-description">
                <p>Over the past five years, my focus has been deeply rooted in academic research, specifically in the fields of genomics, bioinformatics, and computational biology.
                    Throughout this period, I have actively engaged with many labs and projects, gaining valuable experience and contributing to advancements in these disciplines. The following summary outlines my involvement in various research endeavors during this period.</p>
                <br></br>
                <h2 className="modal-about-main-description-h2"> The Jackson Laboratory</h2>
                <p>
                During my time as a postbaccalaureate intern at The Jackson Laboratory (JAX) in Bar Harbor, Maine, I had the privilege of being mentored by two exceptional PIs, Dr. Greg Cox and Dr. Mingyang Lu. 
                Under the supervision of Dr. Cox, I focused on characterizing novel mouse models for two specific neuromuscular disorders, Spinal Muscular Atrophy with Respiratory Distress (SMARD) and Charcot-Marie-Tooth Disease Type 2S (CMT2S). 
                More specifically, we engineered humanized mice by using CRISPR/Cas9 technology to introduce mutations of Ighmbp2, inspired by deleterious patient alleles of variable clinical severity into C57BL/6J mice. 
                Notably, I successfully demonstrated that the introduction of a neuronspecific enolase transgene (TgNSE) effectively rescued the neuropathy observed in both the SMARD and CMT2S models.
                Overall, my time with Dr. Cox not only contributed to my development into a well-rounded scientist, but helped me discover my  affinity for the more computational aspects of my work. 
                </p>
                <br></br>
                <p>
                I followed-up on this new-found interest by spending my second year at JAX in a computational systems biology lab.
                My research with Dr. Lu focused primarily on building and testing tools that construct, simulate, visualize, and analyze gene regulatory networks (GRN).
                Some of my contributions included helping build an an interactive Shiny web-app called GeneEx, which employed an ODE-based mathematical modeling approach to simulating GRNs as well as
                a novel transcription factor (TF) network construction algorithm that inferred TF activity from the expression of their targets.
                </p>
                <br></br>
                <h2 className="modal-about-main-description-h2" >Northeastern University</h2>

                <p>I eventually transitioned into a full-time research technician position in the Department of Bioengineering at Northeastern University after Dr. Lu accepted a faculty position with The Center for Theoretical Biological Physics, an NSF-funded Physics Frontier Center that had opened a satellite location at the university. 
                My work has remained focused on systems biology approaches to modeling gene regulatory dynamics and my current projects include using deep learning to classify regulation types and logic in GRNs.
                </p>
            </div>

          </div>
    )
}

const about_ds = () => {

    return (
    
          <div className="modal-about-main">

            <div className="modal-about-main-title">
                <h1> Data Science </h1>
            </div>

            <div className="modal-about-main-description">
                    <p> I always strive to take a data-driven approach to guide both my scientific research and to how I draw conclusions about the natural world.
                        I believe this approach is crucial for for advancing our collective knowledge, solving difficult problems, and making informed decisions in both professional and personal life.
                        Below is an evaluation of my experience in various applications of data science as both a student and freelancer.   
                    </p>
                    <br></br>
                    <p><strong>Data Visualization:</strong> Strong ability to present complex data and insights in a clear and visually appealing story. 
                    Proficient in popular data visualization libraries such as Matplotlib, Seaborn, Plotly, and Bokeh as well as dashboarding tools like Tableau. </p>
                    <br></br>
                    <p><strong>Data Preprocessing/Feature Engineering:</strong> Skilled in data preprocessing techniques, 
                    including data cleaning, normalization, and handling missing values. Proficient in feature extraction 
                    methods (such as PCA and t-SNE), feature scaling techniques (Min-Max scaling, Standardization), and time series feature engineering, including lagged variables, rolling averages, and Fourier transforms.
                    Experienced in handling structured data formats like CSV, Excel, and SQL databases, as well as unstructured data formats like text documents and JSON.
                    </p>
                    <br></br>
                    <p><strong>Data Analysis:</strong> Proficient in working with APIs and web scraping for data extraction/integration as well as data cleaning techniques such as outlier detection and deduplication.
                    Skilled in handling large datasets efficiently using techniques like chunking, parallel processing, and memory optimization.
                    Familiarity with data transformation methods like pivoting, melting, and reshaping for data restructuring and aggregation.
                    Experienced in data anonymization/pseudonymization techniques to ensure data privacy and compliance with regulations.
                    </p>
                    <br></br>
                    <p><strong>Model Evaluation/Validation: </strong>Proficient in evaluating machine learning models using appropriate performance metrics such as accuracy, precision, recall, F1 score, ROC/PR curves, AUC, mAP, and confusion matrices.
                    Experienced in applying cross-validation techniques to assess model generalization and mitigate overfitting as well as in applying statistical significance tests, (t-test, chi-squared, etc), to assess the significance of model improvements/compare different models.
                    Skilled in hyperparameter tuning using techniques like grid search, random search, and Bayesian optimization to optimize model performance as well as techniques like stratified sampling/oversampling to handle class imbalance during model evaluation.
                    Familiarity with techniques for assessing model fairness, transparency, and explainability, such as bias detection, feature importance analysis, and SHAP values.
                     </p>

                </div>

          </div>
    )
}

const about_steward = () => {

    return (
    
          <div className="modal-about-main">

                <div className="modal-about-main-title">
                    <h1> Stewardship</h1>
                </div>

                <blockquote className='test'>A society grows great when old men plant trees in whose shade they shall never sit.</blockquote>


                <div className="modal-about-main-description">
                    <p>Over the past few years, I have become increasingly involved in a variety of volunteering and leadership opportunities in my local community. Below is a summary of many of these experiences that have cultivated a profound appreciation for the transformative power of service and stewardship. </p>
                    <br></br>
                    <h3>Leadership:</h3>
  <ul>
    <li>Developed a comprehensive workshop on systems biology for the 2019 Jackson Laboratory High School Open House.</li>
    <li>General and VIP tour guide at The Jackson Laborator helping visitors learn about the labs groundbreaking research and history.</li>
    <li>E-board for the Khoury Master's Student Council (KMSC) where I helped facilitate educational initiatives like career panels and various workshops.</li>
    <li>Teaching Assistant for CS5100-Foundations of AI</li>
  </ul>
  <br></br>
  <h3>Volunteerism:</h3>
  <ul>
    <li> Volunteer judge for the CS categories of the Maine State Science Fair </li>
    <li>Volunteer with the Heal Clinical Education Network. I was a member of the data analytics team as well as the introductory presenter for the HEAL 101 Clinical Shadowing sessions.</li>
    <li>Volunteer at the MDI Food Access Project which aims to alleviate food insecurity within the MDI community.</li>
    <li>Greeter and scheduler at the Bar Harbor Vaccine Clinic helping ensure an efficient vaccination process during the COVID-19 pandemic.</li>
    <li>Collaborated with the MDI Hospital Integrative Care Team as a volunteer presenter on health and nutrition topics.</li>
    <li>Volunteer instructor at Microsoft TEALS helping underrepresented students access a computer science education.</li>
  </ul>
                </div>

          </div>
    )
}


const about_education = () => {

    return (
    
          <div className="modal-about-main">

                <div className="modal-about-main-title">
                    <h1> Education</h1>
                </div>

            <div className="modal-about-main-description">
                <div className="modal-about-main-description-education">

                    <div className="degree">
                        <h2>BS in Chemistry</h2>
                        <ul>
                        <li><strong>University:</strong> University of Massachusetts, Amherst</li>
                        <li><strong>Year: </strong> 2017</li>
                        <li><strong>Specialization:</strong> Organic Chemistry</li>
                        <li> <strong>sGPA:</strong> 3.7</li>
                        </ul>
                    </div>

                    <div className="degree">
                        <h2>MS in AI</h2>
                        <ul>
                        <li><strong>University:</strong> Northeastern University</li>
                        <li><strong>Year:</strong> 2023</li>
                        <li><strong>Specialization:</strong> Machine Learning</li>
                        <li><strong>GPA:</strong> 4.0</li>
                        <li><strong>Honors:</strong> Summa Cum Laude</li>
                        </ul>
                    </div>
                </div>
            </div>

                <div className="modal-about-main-image">
                    <img src={images.graduation1} />
                </div>
          </div>
    )
}


const abouts = [

  { title: 'Machine Learning', imgUrl: images.about_ml1, modal: about_ml},
  { title: 'Research', imgUrl: images.about_research1, modal: about_research},
  { title: 'Data Science', imgUrl: images.about_ds1, modal: about_ds},
  { title: 'Stewardship', imgUrl: images.about_stewardship1, modal: about_steward},
  { title: 'Education', imgUrl: images.education, modal: about_education}

];

export default abouts;