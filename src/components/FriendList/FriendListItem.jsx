import css from './friendList.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.item}>
      <span className={`${isOnline ? css.online : css.offline}`} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
