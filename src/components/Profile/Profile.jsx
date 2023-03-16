import PropTypes from 'prop-types';
import {
  UserName,
  UserProfile,
  UserDescription,
  UserImg,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsItem,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <UserProfile>
      <UserDescription>
        <UserImg src={avatar} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserStatsItem>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </UserStatsItem>
      </UserStats>
    </UserProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
