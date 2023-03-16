import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          status={isOnline}
        ></FriendsListItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
