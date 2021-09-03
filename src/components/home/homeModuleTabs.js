import React from 'react';
import './homemoduletabs.scss';

const TABS = {
    PROPERIES: 'PROPERTIES',
    CONTENT: 'CONTENT',
}

export default function HomeModuleTabs({changeTab, currentTab}){
    
    const selectTab = (name) => {
        changeTab(name);
    }
    
    return (
        <section className="homemoduletabs homemoduletabs--size">
            <article className="homemoduletabs__header">
                <div 
                    onClick={() => selectTab(TABS.PROPERIES)}
                    className={`homemoduletabs__item ${currentTab === TABS.PROPERIES? "homemoduletabs__item--active": null}`}>
                    <h3 className="homemoduletabs__item-title">Properties</h3>
                </div>
                <div
                    onClick={() => selectTab(TABS.CONTENT)} 
                    className={`homemoduletabs__item ${currentTab === TABS.CONTENT? "homemoduletabs__item--active": null}`}>
                    <h3 className="homemoduletabs__item-title">Content Order</h3>
                </div>
            </article>
        </section>
    )
}