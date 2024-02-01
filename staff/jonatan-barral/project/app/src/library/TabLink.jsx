import { useEffect, useState } from 'react'

const [activeTab, setActiveTab] = useState(1)

const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
}

function TabLink(props) {
    return <a href="" role="tab" className={`tab-link ${activeTab === 1 ? 'active-tab' : ''}`} onClick={props.onClick}>{props.children}</a>
}

export default TabLink