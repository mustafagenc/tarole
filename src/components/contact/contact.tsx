import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

export const ContactDialog = () => {
  const t = useTranslations();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white-950 content-center rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-blue-950/50">
          {t('Navigation.Contact')}
        </button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>
        <Flex gap="3" direction="column">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              placeholder="Enter your full name"
              size="3"
              radius="medium"
              variant="classic"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              placeholder="Enter your email"
              size="3"
              radius="medium"
              variant="classic"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Konu
            </Text>
            <TextField.Root
              placeholder="Enter your email"
              size="3"
              radius="medium"
              variant="classic"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Mesaj
            </Text>
            <TextArea
              placeholder="Reply to comment…"
              size="3"
              radius="medium"
              variant="classic"
              resize="none"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
