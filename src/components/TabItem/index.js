import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActiveTab} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''
  const onClickTabId = () => {
    updateTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabId}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
