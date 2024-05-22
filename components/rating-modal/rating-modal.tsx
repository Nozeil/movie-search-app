import { FocusTrap, Group, Modal, type ModalProps, Rating, Stack, Title } from '@mantine/core';
import { useState } from 'react';

import { PrimaryButton } from '../primary-button/primary-button';
import { TextButton } from '../text-button/text-button';
import styles from './rating-modal.module.css';

type RatingModalProps = {
  title: string;
  onSave: (rating: number) => void;
  onRemove: () => void;
  ratingDefaultValue?: number;
} & ModalProps;

export const RatingModal = ({
  title,
  ratingDefaultValue,
  onSave,
  onRemove,
  ...props
}: RatingModalProps) => {
  const [rating, setRating] = useState(ratingDefaultValue ?? 0);

  const handleSave = () => onSave(rating);
  const handleRemove = () => {
    setRating(0);
    onRemove();
  };

  return (
    <Modal
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
        body: styles.body,
      }}
      title="Your rating"
      centered={true}
      size="sm"
      radius="md"
      overlayProps={{ backgroundOpacity: 0.2 }}
      closeButtonProps={{ size: 'sm' }}
      {...props}
    >
      <FocusTrap.InitialFocus />

      <Stack>
        <Title order={5}>{title}</Title>

        <Rating
          className={styles.ratingRoot}
          count={10}
          size="lg"
          value={rating}
          onChange={setRating}
        />

        <Group>
          <PrimaryButton size="md" variant="primary" radius="md" onClick={handleSave}>
            Save
          </PrimaryButton>
          <TextButton onClick={handleRemove}>Remove rating</TextButton>
        </Group>
      </Stack>
    </Modal>
  );
};
