import PropTypes from 'prop-types';
import {
  FriendImg,
  FriendItem,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export function FriendsListItem({ avatar, name, status }) {
  return (
    <FriendItem>
      <FriendStatus status={status}></FriendStatus>
      <FriendImg src={avatar} alt={name} width="45px" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
