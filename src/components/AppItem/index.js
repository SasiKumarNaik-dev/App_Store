// Write your code here

import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item

  return (
    <li className="list">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
