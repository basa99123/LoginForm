// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn
    ? 'Hello User,Welcome to my App'
    : 'I am Bhanuprasad,Please Login in my app'

  return <h1 className="message">{message}</h1>
}

export default Message
