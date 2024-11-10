<script setup lang="js">
/* TODO: TS was ignored as PrimeVue has problems with TS support:
 * https://github.com/primefaces/primevue/issues/6723.
 * After they fix it change lang in script back to TS.
 */
import Card from 'primevue/card';
import { Form } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import { reactive } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = reactive({
  username: ''
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.username) {
    errors.username = [{ message: 'Username is required.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid }) => {
  if (valid) {
    console.log('here666');
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000
    });
  }
};
</script>

<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <Toast />

      <Form
        v-slot="$form"
        :initialValues
        :resolver
        @submit="onFormSubmit"
        class="flex w-full flex-col gap-4 sm:w-56"
      >
        <div class="flex flex-col gap-1">
          <InputText name="username" type="text" placeholder="Username" fluid />
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
            $form.username.error?.message
          }}</Message>
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
      </Form>
    </template>
  </Card>
</template>

<style scoped></style>
