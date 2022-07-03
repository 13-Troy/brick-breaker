import React, { FC , useState, useEffect} from 'react';

import Modal from '../Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { useSelector } from 'react-redux';

interface ModalProps {
  isShown?: boolean;
  toggleVisible?: () => void;
  headerText?: string;
  handleEdit?: () => void;
  handleChange?: any;
}

const ChangePostModal: FC<ModalProps> = ({
  isShown,
  toggleVisible,
  headerText,
  handleEdit,
  handleChange,
}) => {
  if (!isShown) {
    return null;
  }


  const [state, setState] = useState ()
  const {topic } = useSelector((state: any) => state.forum)

  useEffect(() => {
    if (topic) { 
      setState({ ...topic })
    }
  }, [topic])


  return (
    <Modal isShown={isShown} hide={toggleVisible} headerText={headerText}>
      <Input
        name={'topic_name'}
        type={'text'}
        onChange={handleChange}
        value={topic.topicName ? topic.topicName : ''}
      />  
      <Textarea
        name={'content'}
        onChange={handleChange}
        value={topic.topicText ? topic.topicName : ''}
      />
      <Button onClick={handleEdit}>сохранить</Button>
    </Modal>
  );
};
export default ChangePostModal;
