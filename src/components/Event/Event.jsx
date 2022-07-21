import PropTypes from "prop-types"
import css from './Event.module.css'
import { FaMapMarkerAlt,FaUserAlt,FaCalendarAlt,FaClock } from 'react-icons/fa';
import {formatEventStart,formatEventDuration} from 'utils'  
import { iconSize } from '../../constants/iconSize'

console.log(iconSize)

export const Event = ({name, location, speaker, type, start, end}) => {
  const formatedStartTime = formatEventStart(start)
  const duration = formatEventDuration(start, end)

  console.log(css[type])
  console.log(css)

    return <div className={css.event}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.info}>
      <i className="icon"></i>
      <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
      {location}
    </p>
    <p className={css.info}>
      <i className="icon"></i>
      <FaUserAlt className={css.icon} size={iconSize.sm}/>
      {speaker}
    </p>
    <p className={css.info}>
      <i className="icon"></i>
      <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
      
      {formatedStartTime}
    </p>
    <p className={css.info}>
      <i className="icon"></i>
      <FaClock className={css.icon} size={iconSize.sm}/>
      {duration}
    </p>
    <span className={`${css.chip} ${css[type]}`}>{type}</span>
  </div>
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
       type: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
         end: PropTypes.string.isRequired,
    }

