import React from 'react';

import './LatestNews.scss';

import news1 from '../../img/news1.svg';
import news2 from '../../img/news2.svg';
import news3 from '../../img/news3.svg';

const LatestNews: React.FC = () => {
  return (
    <section className="latest-news">
        <h2>Latest news</h2>
        <div className="news">
            <div className="news-link">
                <img src={news1} alt="news1" className="news1" />
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="news-link">
                <img src={news2} alt="news2" className="news2" />
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="news-link">
                <img src={news3} alt="news3" className="news3" />
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestNews;