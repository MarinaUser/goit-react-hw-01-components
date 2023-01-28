import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.on : css.off}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};