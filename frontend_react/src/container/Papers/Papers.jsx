import React from 'react'
import './Papers.scss' 
import { AppWrap } from '../../wrapper'
import { images, documents } from "../../constants"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faNewspaper } from '@fortawesome/free-solid-svg-icons'
const elementDownload = <FontAwesomeIcon icon={faDownload} />
const element1 = <FontAwesomeIcon icon={faNewspaper} />


const publications = [
    {
        title: "NetAct: a computational platform to construct core transcription factor regulatory networks using gene activity",
        reference: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02835-3",
        authors: [
        "Su, K., Kohar, V., Katebi, A., ",
        <strong key="gordin">Gordin, D.</strong>,
        ", Karuturi, K., Li, Sheng., Lu, M. (2022)"
        ],
        comment: <a className="publication-main-comment" href="https://github.com/lusystemsbio/NetAct">Click here for instructions on how to download the R package!</a>,
        download:  <div className="publication-main-info">
        <a href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02835-3"><em>Genome Biology</em> </a>
        <p> &nbsp; | &nbsp; </p>
        <a href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02835-3"> Download {elementDownload} </a>
                   </div>
    },

    {
        title: "Gene Circuit Explorer (GeneEx): an interactive web-app for visualizing, simulating and analyzing gene regulatory circuits",
        reference: "https://academic.oup.com/bioinformatics/article/37/9/1327/5906505?login=false",
        authors: [
            "Kohar, V., ",
            <strong key="gordin">Gordin, D.</strong>,
            ", Katebi, A., Levine, H., Onuchic, J. N., Lu, M. (2020)"
        ],
        comment: <a className="publication-main-comment" href="https://geneex.jax.org/">Check out the RShiny App here!</a>,
        download:  <div className="publication-main-info">
        <a href="https://academic.oup.com/bioinformatics/article/37/9/1327/5906505?login=false"><em>Bioinformatics</em> </a>
        <p> &nbsp; | &nbsp; </p>
        <a href="https://academic.oup.com/bioinformatics/article/37/9/1327/5906505?login=false"> Download {elementDownload}</a>
                   </div>
    },

    {
        title: "Classifying Gene Regulatory Logic with Deep Learning",
        reference: "",
        authors: [
            <strong key="gordin">Gordin, D.</strong>,
            ", Lu, M (2023)"
        ],
        comment: "(Manuscript Pending)",
        download: ""
    }
  ];

const mastersPapers = [
    {
        title: "A Multimodal Analysis of Facemask Detection Leveraging Multiple Datasets",
        info: <div className="papers-main-info">
        <a href="https://github.com/theturbokhemist/FaceMaskDetection">Github </a>
        <p> &nbsp; | &nbsp; </p>
        <a href={documents.maskPDF} download="Facemask_Detection"> Download {elementDownload}</a>
              </div>

    },
    {
        title: "Music Lyrics Classification & Generation using RNNs",
        info: <div className="papers-main-info">
        <a href="https://github.com/theturbokhemist/Lyric-Genre-Classification-and-Generation">Github </a>
        <p> &nbsp; | &nbsp; </p>
        <a href={documents.nlpPDF} download="Music_Genre_Classification"> Download {elementDownload}</a>
              </div>

    },
    {
        title: "Navigating Reward Structures: A Comparison of Deep Q-Learning and Genetic Algorithms in Diverse Reward Environments",
        info: <div className="papers-main-info">
        <a href="https://github.com/theturbokhemist/DeepQLearning-with-Sparse-Rewards">Github </a>
        <p> &nbsp; | &nbsp; </p>
        <a href={documents.dqnPDF} download="DQN_vs_GA_Sparse"> Download {elementDownload}</a>
              </div>

    },
    {
        title: "Deep Learning in Brain Tumor Classification-A Comparative Analysis",
        info: <div className="papers-main-info">
        <a href="https://github.com/theturbokhemist/BrainTumorClassificationDL">Github </a>
        <p> &nbsp; | &nbsp; </p>
        <a href={documents.tumorPDF} download="Brain_Tumor_Classification"> Download {elementDownload}</a>
              </div>

    }

  ];

  
const Papers = () => {
return (
    <div className="papers-main">
        <div className="papers-title">
            <h2>
            Publications and Papers {element1}
            </h2>
            <p>
            A collection of publications and academic papers I contributed to during my studies.
            </p>
            <p className="ood-message">
            (This section is slightly out of date. Very busy these days, but will update soon!)
            </p>
        </div>
        <div className="papers-body">
            <div className="papers-body-publications">
                <h2> Research Publications </h2>
                {publications.map((publication, index) => (
                    <div
                    className={`publication-main ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={publication.title + index}
                    >
                        <a className="publication-main-title"href={publication.reference}>{publication.title}</a>
                        <p className="publication-main-authors">{publication.authors}</p>
                        {publication.download}
                        {publication.comment}
                    </div>
                ))}
            </div>
            <div className="papers-body-masters">
                <h2>Master's Papers</h2>
                {mastersPapers.map((paper, index) => (
                    <div
                    className={`masters-main ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={paper.title + index}
                    >

                        <h3 >{paper.title}</h3>
                        {paper.info}
                        {/* <div className="paper-links">
                            <a>{paper.github}</a>
                            <span>|</span>
                            <a>{paper.download}</a>
                        </div> */}

                    </div>
                ))}
            </div>
        </div>
    </div>
);
};
  
export default AppWrap(Papers, 'papers');
  