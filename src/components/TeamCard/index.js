// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamIamgeURL} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamIamgeURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
