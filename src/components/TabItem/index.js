// Write your code here
import './index.css'

const TabItem = props => {
  const {item, changeState, selectedTab} = props
  const {tabId, displayText} = item

  const callFun = () => {
    changeState(tabId)
  }
  const isSelected = selectedTab === tabId
  const applyStyle = isSelected ? 'selected' : ''

  return (
    <li className="list-style">
      <button type="button" className={`btn ${applyStyle}`} onClick={callFun}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
