import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};