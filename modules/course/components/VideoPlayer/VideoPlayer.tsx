import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_VIDEO_COMPLETED } from '../../actions';
import { isCompletedSelector } from '../../selectors';
import styles from './VideoPlayer.module.scss';

type Props = {
  url: string;
  id: string;
};

const VideoPlayer: React.FC<Props> = ({ url, id }) => {
  const dispatch = useDispatch();
  const completed = useSelector((state) => isCompletedSelector(state, id));

  const handleEnded = () => {
    if (!completed) {
      dispatch({ type: TOGGLE_VIDEO_COMPLETED, payload: { id } });
    }
  };

  return (
    <div className={styles['video-player']}>
      <ReactPlayer url={url} controls width='100%' height='100%' onEnded={handleEnded} />
      {completed && <div className={styles.completedBadge}>✓ Completed</div>}
    </div>
  );
};

export default VideoPlayer;
